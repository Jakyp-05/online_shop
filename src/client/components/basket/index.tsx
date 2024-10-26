import React from 'react'
import  "../../sass/media/_basket.scss"                                                                  

function index() {
  return (
    <>
    <div className='basket-page container'>
      
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
          <div className='number'>1</div>
          <button>+</button>
        </div>

        <div className='box3'>1000$</div>

        </div>

        
      </div>

      <div className='box-right'>

        <h6>select delivery address</h6>

        <div className='info'>
          <p>Товары 1шт.</p>
          <p>1000$</p>
        </div>

        <div className='info-2'>
          <h3>Total</h3>
          <h3>1000$</h3>
        </div>

        <button>Order</button>

        <div className='info-3'>
          <input type="checkbox" />
        <p>I agree with the rules for using the trading platform and returning</p>             
        </div>


      </div>

    </div>

    <div className='categoris container'>

    <div className='sposoby '>
      <h1>Способ доставки</h1>
      <h5>выбрать адрес доставки</h5>
    </div>

    <div className='sposoby '>
      <h1>Способ оплаты</h1>
      <h5>Войти или зарегистрироваться, чтобы выбрать способ оплаты</h5>
    </div>

    <div className='sposoby '>
      <h1>Мои данные</h1>
      <h5>Войти или зарегистрироваться, чтобы оформить заказ</h5>
    </div>

    </div>
    </>
  )
}

export default index
