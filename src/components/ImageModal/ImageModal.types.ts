export interface ImageModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  currentImage: string | null;
}
