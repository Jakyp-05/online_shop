import React from 'react'
                                                          

const Basket:React.FC = () => {
  return (
    <>
    <section className='basket-page'>

    <div className='basket-container container'>
      
      <div className='box-left'>

        <h3>Basket</h3>

        <p>1 product</p>

        <div className='box1'>

        <div className='inbox'>

          <img className='img-product' src="https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp" alt="product" />

          <div className='detile'>
          <h5>product name</h5>
          <span>25-october</span>

          <div className='icons'>
          <img src="https://static-00.iconduck.com/assets.00/wishlist-icon-2048x1952-13b2gake.png"       alt="icon" />
          <img src="https://cdn-icons-png.flaticon.com/512/1345/1345874.png" alt="icon" />
          </div>

          </div>

        </div>

        <div className='box2'>

          <button>-</button>
          <span>1</span>
          <button>+</button>
        </div>

        <span className='price'>1000$</span>

        </div>

        
      </div>

          <div className='box-right'>

        <h6>select delivery address</h6>

        <div className='info'>
          <p>Товары 1шт.</p>
          <span>1000$</span>
          </div>

        <div className='info-2'>
          <h3>Total</h3>
          <span>1000$</span>
          </div>

        <button>Order</button>

      </div>


    </div>

    <div className='optioins container'>

    <div className='optioin '>
      <strong>Способ оплаты</strong>
      <p>Войти или зарегистрироваться, чтобы выбрать способ оплаты</p>
    </div>

    <div className='optioin '>
      <strong>Мои данные</strong>
      <p>Войти или зарегистрироваться, чтобы оформить заказ</p>
    </div>

    </div>  
    </section>
    </>
  )
}

export default Basket
