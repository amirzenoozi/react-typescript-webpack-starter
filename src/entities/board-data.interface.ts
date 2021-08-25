export interface CameraInfoProps {
  id: string;
  fps: number;
  name: string;
  boardId: string;
  quality: number;
  network: string;
  heatMap?: { image: string; heatArea: string };
}

export interface BoardDataInterface {
  id: number;
  count: number;
  boardId: string;
  network: string;
  lastActivity: string;
  boardService: string;
}
