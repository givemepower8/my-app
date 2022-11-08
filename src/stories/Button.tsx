import Button from '@mui/material/Button';

// https://mui.com/material-ui/api/button/
interface ButtonProps { 
  disabled?: boolean;
  size?: 'small' | 'medium' | 'large';
  variant?: 'text' | 'contained' | 'outlined';
  color?: 'primary' | 'secondary' | 'success' | 'error';
  label: string;
  
  onClick?: () => void;
}

export const MuiButton = ({
  disabled = false,
  size = 'medium',
  variant = 'text',
  label,
  ...props
}: ButtonProps) => {
  return (
    <Button
      disabled={disabled}
      variant = {variant}
      size = {size}
      {...props}>
      {label}
    </Button>
  );
};
