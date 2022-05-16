import styled from 'styled-components';
import { ReactComponent as OriginalLogo } from 'assets/logo.svg';
import { Checkbox as OriginalCheckbox } from 'components/Checkbox';
import { IconContainer } from 'components/IconContainer';
import { InputWithIcon } from 'components/InputWithIcon';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 469px;
`;

export const Logo = styled(OriginalLogo)`
  margin-bottom: 51px;
`;

export const WelcomeText = styled.span`
  font-family: Roboto, sans-serif;
  font-size: 19.5px;
`;

export const Caption = styled.span`
  margin-bottom: 43px;
  font-family: Roboto, sans-serif;
  font-size: 13px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0 21px;
`;

export const LoginFormInput = styled(InputWithIcon)`
  margin-bottom: 16px;
`;

export const Checkbox = styled(OriginalCheckbox)`
  margin-left: 9px;
  margin-bottom: 52px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  border: none;
  border-radius: 25px;
  background: #ec8d3d;
  font-weight: 600;
  font-size: 17px;
  color: white;
  cursor: pointer;
  box-shadow: 0 5px 15px 0 rgba(0,0,0,0.2);
  
  &:hover {
    background: #f3750b;
  }
`;

export const ArrowContainer = styled(IconContainer)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 28px;
  width: 28px;
  border-radius: 50%;
  border: 1px solid white;
`;
