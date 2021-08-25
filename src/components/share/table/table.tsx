import {
  Box, CircularProgress, Collapse, Hidden, HiddenProps, IconButton, Table as MuiTable, TableBody,
  TableCell, TableContainer, TableHead, TableRow, Typography, useMediaQuery, useTheme,
} from '@material-ui/core';
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SpriteIcon } from 'src/components/share/sprite-icon';
import { useStyle } from './table.style';

export interface IColumnsProp<T> {
  key?: keyof T;
  width?: string,
  title: string;
  render?: (record: T) => any;
  hidden?: HiddenProps;
}

interface IProps {
  columns: IColumnsProp<any>[];
  data: any[];
  loading?: boolean;
  collapsableSize?: Breakpoint;
  tableAlignment?: 'rtl' | 'ltr' | 'center',
  renderCollapseRow?: (record: any) => any;
}

const Table: React.FC<IProps> = ({
  columns,
  data,
  loading,
  collapsableSize,
  renderCollapseRow,
  tableAlignment,
}) => {
  const theme = useTheme();
  const classes = useStyle();
  const { t } = useTranslation();
  const xsDown = useMediaQuery(theme.breakpoints.down('xs'));
  const isCollapsableSize = useMediaQuery(
      theme.breakpoints.down(collapsableSize)
  );

  // ------------------------Table Head------------------------------------
  const GenerateTableHead = () => {
    return (
      <TableHead>
        <TableRow>
          {isCollapsableSize && <TableCell />}

          {columns.map((cell, index) => {
            return !cell.hidden ? (
              <TableCell width={cell.width} key={index}>{t(cell.title)}</TableCell>
            ) : (
              <Hidden {...cell.hidden} key={index}>
                <TableCell width={cell.width}>{t(cell.title)}</TableCell>
              </Hidden>
            );
          })}
        </TableRow>
      </TableHead>
    );
  };

  // -----------------------------Table Collapse Row----------------------------------------------
  const GenerateCollapseRow = (props: { record: any; open: boolean }) => {
    return (
      <TableRow>
        <TableCell
          style={{ paddingBottom: 0, paddingTop: 0 }}
          colSpan={columns.length}
        >
          <Collapse in={props.open} timeout="auto" unmountOnExit>
            {renderCollapseRow(props.record)}
          </Collapse>
        </TableCell>
      </TableRow>
    );
  };

  // ----------------------------Table Collapse Icon-----------------------------------------
  const GenerateCollapseIcon = (props: { onClick: () => void; isOpen: boolean; }) => {
    return (
      <TableCell>
        <IconButton onClick={props.onClick} size="small">
          {props.isOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </IconButton>
      </TableCell>
    );
  };

  // ---------------------------Table Row--------------------------------------------
  const GenerateTableRow = (props: { record: any }) => {
    const { record } = props;
    const [ openCollapse, setOpenCollapse ] = useState(false);

    return (
      <React.Fragment>
        <TableRow>
          {isCollapsableSize && (
            <GenerateCollapseIcon
              isOpen={openCollapse}
              onClick={() => setOpenCollapse((pre) => !pre)}
            />
          )}

          {columns.map(({ key: itemKey, render, hidden }, index) => {
            return !hidden ? (
              <TableCell key={index}>
                {render ? render(record) : record[itemKey]}
              </TableCell>
            ) : (
              <Hidden {...hidden} key={index}>
                <TableCell>
                  {render ? render(record) : record[itemKey]}
                </TableCell>
              </Hidden>
            );
          })}
        </TableRow>

        {isCollapsableSize && !!renderCollapseRow && (
          <GenerateCollapseRow record={record} open={openCollapse} />
        )}
      </React.Fragment>
    );
  };

  // ------------------------------Table Body----------------------------------------
  const GenerateTableBody = () => {
    return (
      <TableBody>
        {data.map((record, index) => (
          <GenerateTableRow key={index} record={record} />
        ))}
      </TableBody>
    );
  };

  // ----------------------------Table Loading---------------------------------------
  const GenerateTableLoading = () => {
    return (
      <TableBody>
        <TableRow>
          <TableCell colSpan={columns.length}>
            <Box className={classes.tableBox}>
              <CircularProgress size="1.75rem" />
            </Box>
          </TableCell>
        </TableRow>
      </TableBody>
    );
  };

  // ---------------------------Table Empty Data---------------------------------------
  const GenerateEmptyTable = () => {
    return (
      <TableBody>
        <TableRow>
          <TableCell colSpan={columns.length}>
            <Box className={classes.emptyTable}>
              <SpriteIcon iconName={'ghost'} type={'color'} width={'48px'} height={'48px'} className={classes.ghostIcon} />
              <Typography>{t('table.noData')}</Typography>
            </Box>
          </TableCell>
        </TableRow>
      </TableBody>
    );
  };

  return (
    <TableContainer className={clsx(classes.tableContainer, {
      [classes.ltrTable]: tableAlignment === 'ltr',
      [classes.rtlTable]: tableAlignment === 'rtl',
    })}>
      <MuiTable size={xsDown ? 'small' : 'medium'}>
        <GenerateTableHead />

        {!loading && !!data.length && <GenerateTableBody />}
        {!loading && !data.length && <GenerateEmptyTable />}
        {loading && <GenerateTableLoading />}
      </MuiTable>
    </TableContainer>
  );
};

export { Table };
