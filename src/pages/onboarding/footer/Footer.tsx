import { Button } from '@/components';
import { Pagination } from '@/components/pagination/Pagination';

export const Footer = () => {
  return (
    <footer>
      <Button text="Next" fullWidth={true} buttonVariant="primary" />
      <Pagination />
    </footer>
  );
};
