import { FC, useMemo } from 'react';
import {
  Container,
  DirectionButton,
  PageNumber
} from './styled';
import { PageSelectorProps } from './types';
import { generatePageNums } from './utils';

export const PageSelector: FC<PageSelectorProps> = ({ currentPage, lastPage, goToPage }) => {
  const pageNums = useMemo(() => {
    return generatePageNums(currentPage, lastPage);
  }, [currentPage, lastPage]);
  const shouldShowPrevButton = currentPage > 1;
  const shouldShowNextButton = currentPage < lastPage;

  const goToPrev = () => goToPage(currentPage - 1);
  const goToNext = () => goToPage(currentPage + 1);

  return (
    <Container>
      {shouldShowPrevButton && (
        <DirectionButton onClick={goToPrev}>Prev</DirectionButton>
      )}
      {pageNums.map(num => (
        <PageNumber
          key={num}
          $isCurrent={num === currentPage}
          onClick={() => goToPage(num)}
        >
          {num}
        </PageNumber>
      ))}
      {shouldShowNextButton && (
        <DirectionButton onClick={goToNext}>Next</DirectionButton>
      )}
    </Container>
  );
};
