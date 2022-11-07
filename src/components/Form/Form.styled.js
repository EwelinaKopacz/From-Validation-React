import styled from 'styled-components';

const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    width: 400px;
    border: 1px solid white;

`;

const FormContainer = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    padding:20px 0px;
    gap:2.8rem;

`;

export { FormWrapper, FormContainer };