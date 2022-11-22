import styled from "styled-components";

export const Container = styled.div `
    width: 100%;

    display: flex;
    align-items: center;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    margin-bottom: 8px;
    border-radius: 10px;

    > input {
        height: 46px;
        width: 100%;

        font-size: 14px;

        padding: 12px;

        color: ${({ theme }) => theme.COLORS.WHITE};
        background: transparent;
        border: none;

        &:placeholder {
            background-color: ${({ theme }) => theme.COLORS.GRAY_300};
        }
    }

    > svg {
        margin-left: 16px;
    }
`;