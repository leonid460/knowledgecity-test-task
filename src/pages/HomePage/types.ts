export interface ListItemProps {
  email: string;
  firstName: string;
  lastName: string;
  groupTitle: string;
  onTitleClick?: () => void;
}

export interface ViewUserInfoModalProps {
  userId: string;
  closeModal: () => void;
}
