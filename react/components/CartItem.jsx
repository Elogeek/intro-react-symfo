import styled from "styled-components";

export const CartItem = function ({cartItem}) {
    const altTrash = "Amazing trash !";

    async function deleteOneCartClick() {
        console.log(cartItem.id);
    }

    return (
        <ContainerCartItem id={cartItem.product.id}>
            <CenterCartItem>
                    <img  onClick={deleteOneCartClick} src='./../../../uploads/trash.svg' className="trash" alt={altTrash}/>
            </CenterCartItem>
            <CartItemRight>
                <div>
                    <p>{cartItem.product.name}</p>
                    <span>({cartItem.quantity})</span>
                </div>
                <LineHorizontal />
            </CartItemRight>
        </ContainerCartItem>
    );
}

// Design
const ContainerCartItem = styled.div `
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

const CenterCartItem = styled.div `
  width: 20%;
  text-align: center;
  
  & >img {
    color: #1E64DD;
    margin-right: 10px;
    padding-bottom: 15px;
    font-size: 20px;
    
    &:hover {
      color: grey;
    }
  }
`;

const CartItemRight = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 0 0 15px;

  & > div {
    display: flex;
    flex-direction: row;
    align-items: center;

    & > p {
      font-size: 20px;
    }

    & > span {
      font-size: 20px;
      position: absolute;
      left: 26%;
    }
  }
`;

const LineHorizontal = styled.div`
    border-bottom: 1px solid #BBC0C9;
    width: 100%;
`;