<template>
    <div class="modal fade" id="ProductModal" tabindex="-1" aria-labelledby="ProductModal" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-md-12 col-12">
                        <div class="productModal__name">
                                {{product.name}} | Gamma Doppler Emerald
                        </div> 
                    </div>
                    <div class="col-md-12 col-12">
                        <img src="@/assets/img/cataloitem_1.png" alt="" class="productModal__img">    
                    </div>
                    <div class="col-md-12 col-12">

                        <div class="productModal__card">
                            
                            <div class="productModal__table">
                                <div class="productModal__row">
                                    <span>
                                        Float
                                    </span>
                                    <span>
                                        0.07673785
                                    </span>
                                </div>
                                <div class="productModal__row productModal__tableCenter">
                                    <span>
                                        Редкость
                                    </span>
                                    <span>
                                        Тайное
                                    </span>
                                </div>
                                <div class="productModal__row">
                                    <span>
                                        Паттерн
                                    </span>
                                    <span>
                                        908
                                    </span>
                                </div>
                            </div>

                            <div class="d-flex justify-content-between" style="margin-top:2.083vw;">
                                <button class="productModal__btn" @click="AddToCart(product)">
                                    ДОБАВИТЬ В КОРЗИНУ
                                </button>
                                <button class="productModal__btnM">
                                    В КОРЗИНУ
                                </button>
                                <span class="productModal__price">
                                    25237.27 ₸
                                </span>
                            </div>
                        </div>    
                    </div>
                </div>
            </div>
            <!-- <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Закрыть</button>
                <button type="button" class="btn btn-primary">Сохранить изменения</button>
            </div> -->
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    props: {
        product: Object,
    },
    methods: {
        ...mapActions([
            'AddToCart'
        ]),    
        closeProduct(){
            $('#ProductModal').modal('hide')
        }
    }
}
</script>

<style scoped>
.modal-dialog{
    min-width: 29.32vw;    
}
#ProductModal{
    color: white;
}
#ProductModal .modal-header .close{
    padding: 1.5rem 2rem 1rem 1rem;   
    color: white; 
}
#ProductModal .modal-content{
    color: white;
    background-color: #281F27;
}
.productModal__card{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* background-color: #252331; */
    padding: 1.042vw 1.563vw 2.083vw 1.563vw;
    border-radius: 10px;
}
.productModal__img{
    width: 70%;
    margin-left: 15%;
    margin-right: 15%;
}
.productModal__name{
    font-weight: 700;
    font-size: 1.354vw;
    text-align: center;
}
.productModal__table{
    margin-top: 1.823vw;  
    background-color: #3C3537;
    border-radius: 10px;  
}
.productModal__row{
    padding: 1.042vw;
    font-weight: 500;
    font-size: 1.146vw;
    display: flex;
    justify-content: space-between;
}
.productModal__tableCenter{
    border-top: 1px solid #F6F6F6CC;
    border-bottom: 1px solid #F6F6F6CC;
}
.productModal__btn{
    background: linear-gradient(to right top, #C62C44, #FF0027);
    border-color: #FF0027;
    border-radius: 5px;
    color: white;
    font-weight: 700;
    font-size: 1.146vw;
}
.productModal__btnM{
    background: linear-gradient(to right top, #FF0027, #FF0027);
    border-color: #FF0027;
    border-radius: 5px;
    color: white;
    font-weight: 700;
    font-size: 1.146vw;
}
.productModal__price{
    font-weight: 600;
    font-size: 1.354vw;
}
@media screen and (min-width:481px){
    .productModal__btnM{
        display: none;
    }
}
@media screen and (max-width:480px){
    .productModal__name{
        font-size: 14px;
    }
    .productModal__table{
        border-radius: 5px;
    }
    .productModal__row{
        font-size: 12px;
    }
    .productModal__btnM{
        font-size: 8px;
    }
    .productModal__price{
        font-size: 14px;
    }
    .productModal__btn{
        display: none;
    }
    .productModal__card{
        padding: 3.042vw 1.563vw 4.083vw 1.563vw;
    }
}
</style>