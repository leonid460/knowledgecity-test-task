export interface ListItemProps {
  email: string;
  firstName: string;
  lastName: string;
  groupTitle: string;
  onTitleClick?: () => void;
  onEditButtonClick?: () => void;
}

export interface ViewUserInfoModalProps {
  userId: string;
  closeModal: () => void;
}

export interface EditUserInfoModalProps {
  userId: string;
  closeModal: () => void;
}
