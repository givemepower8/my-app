import Button from '@mui/material/Button';

// https://mui.com/material-ui/api/button/
interface ButtonProps { 
  disabled?: boolean;
  size?: 'small' | 'medium' | 'large';
  variant?: 'text' | 'contained' | 'outlined';
  label: string;
  
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const MyButton = ({
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
