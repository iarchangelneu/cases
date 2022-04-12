<template>
    <section class="shop">
        <div class="container-fluid shop-container">
            <div class="row">
                <div class="col-md-12 col-12">
                    <div class="d-flex justify-content-between align-items-end catalog__topfilters">
                        <div class="d-flex align-items-center reloadsort">
                            <img src="@/assets/img/reloadCatalog.png" class="catalog__reloadImg" alt="" @click="reloadCatalog">
                            <img src="@/assets/img/catalogLine.png" class="catalog__lineImg" alt="">
                            <div class="dropdown">
                                <button 
                                class="btn dropdown-toggle dropdown__catalog" 
                                type="button" 
                                id="dropdownMenuButton" 
                                data-toggle="dropdown" 
                                aria-haspopup="true" 
                                aria-expanded="false">
                                    {{sort}}
                                    <img src="@/assets/img/catalogArrow.png" class="catalog__ArrowImg" alt="">
                                </button>
                                <div class="dropdown-menu catalog__dropmenu" aria-labelledby="dropdownMenuButton">
                                    <a class="dropdown-item catalog__dropitem" href="#" @click="this.sort='По умолчанию'">По умолчанию</a>
                                    <a class="dropdown-item catalog__dropitem" style="border-top: 1px solid white; border-bottom: 1px solid white;" href="#" @click="this.sort='По цене (Max)'">По цене (Max)</a>
                                    <a class="dropdown-item catalog__dropitem" href="#" @click="this.sort='По цене (Min)'">По цене (Min)</a>
                                </div>
                            </div>
                        </div>
                        
                            <div class="prices__container">
                                <span class="filters__spans">Цена</span>
                                <div class="filter__prices">
                                    <input type="text" class="price__min" placeholder="0.00" v-model.trim="lowprice">
                                    <span class="ml-2 mr-2">&mdash;</span>
                                    <input type="text" class="price__max" placeholder="0.00" v-model.trim="highprice">
                                </div>
                            </div>


                            <div class="filtcontm">
                                <span class="filters__spans">Редкость</span>
                                <div class="dropdown">
                                    <button class="btn dropdown-toggle dropdown__filters" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        {{rarityList[rareSelect].rare}}
                                        <img src="@/assets/img/catalogArrow.png" class="catalog__ArrowImg" alt="">
                                    </button>
                                    <div class="dropdown-menu catalog__dropmenu " aria-labelledby="dropdownMenuButton">
                                        <a  
                                        href="#"
                                        v-for="rarity in rarityList" 
                                        :key="rarity.id"
                                        :class="['dropdown-item', 'catalog__dropitem', {'catalog__dropitemBorder': rarity.id !=5}]"
                                        @click="this.rareSelect = rarity.id"
                                        >
                                        {{rarity.rare}}
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div class="filtcontm">
                                <span class="filters__spans">Состояние</span>
                                <div class="dropdown">
                                    <button class="btn dropdown-toggle dropdown__filters" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        {{conditionList[conditionSelect].cond}}
                                        <img src="@/assets/img/catalogArrow.png" class="catalog__ArrowImg" alt="">
                                    </button>
                                    <div class="dropdown-menu catalog__dropmenu" aria-labelledby="dropdownMenuButton">
                                        <a 
                                        class="dropdown-item catalog__dropitem" 
                                        v-for="condition in conditionList" 
                                        :key="condition.id"
                                        @click="this.conditionSelect = condition.id"
                                        :class="['dropdown-item', 'catalog__dropitem', {'catalog__dropitemBorder': condition.id !=5}]"
                                        >
                                        {{condition.cond}}
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <button class="btn filter__button">
                                Применить
                            </button>
                            
                        
                        <input type="text" class="catalog__search" placeholder="Поиск..." v-model.trim="search">
                    </div>    
                </div>
            </div>
            <div class="row filtersAndCatalog">
                <div class="col-12 col-md-12 catalog">
                    <!-- <div class="row"> -->
                        <!-- <div class="col-2" > -->
                            <div class="item" v-for="item in filteredWeapons" :key="item.id" @click="openModal(item._id['$oid'])">
                                <div class="item__top">
                                    <div class="d-flex flex-column">
                                        <div class="item__rare">
                                            {{item.rarity}}
                                        </div>
                                        <span class="item__price">
                                            {{Math.floor(item.cost)}} ₸
                                        </span>
                                    </div>
                                    <div>{{item.quality}}</div>
                                </div>
                                <img :src="'/data/'+item.item_model_id" class="item__img" alt="">
                                <div class="item__bottom">
                                    <span class="item__name">
                                        {{item.full_type}}
                                    </span>
                                </div>
                                <div class="item__more">
                                    Подробнее
                                </div>
                            </div>
                        <!-- </div> -->
                    <!-- </div> -->
                </div>
            </div>
        </div>
    </section>   
    <product-modal
    :product="modal.modalProductName"
    ></product-modal> 
</template>

<script>
import ProductModal from '@/components/ProductModal.vue';
export default {
    data(){
        return {
            pokemons: [],
            modal: {
                modalProductName: {},
            },
            sort: 'По умолчанию',
            rarityList:[
                {id: 0, rare: 'Любое'},
                {id: 1, rare: 'Армейское качество'},
                {id: 2, rare: 'Запрещённое'},
                {id: 3, rare: 'Засекреченное'},
                {id: 4, rare: 'Тайное'},
                {id: 5, rare: 'Экстра'},
            ],
            conditionList:[
                {id: 0, cond: 'Любое', short: 'All'},
                {id: 1, cond: 'Factory New', short: 'FN', float: 0},
                {id: 2, cond: 'Minimal Wear', short: 'MW', float: 0.2},
                {id: 3, cond: 'Field-Tested', short: 'FT', float: 0.4},
                {id: 4, cond: 'Well-Worn', short: 'WW', float: 0.6},
                {id: 5, cond: 'Battle-Scarred', short: 'BS', float: 0.8},
            ],
            weapons: [],
            // weapons: [
            //     {
            //         id: 0,
            //         img: require('../assets/img/cataloitem_1.png'),
            //         rarity: 'Армейское',
            //         name: 'Karambit',
            //         pattern: 908,
            //         price: 1000,
            //         float: 0.5,
            //         collection: 'Red',
            //     },
            //     {
            //         id: 1,
            //         img: require('../assets/img/tacti__cart.png'),
            //         rarity: 'Запрещенное',
            //         name: 'AK-47',
            //         pattern: 908,
            //         price: 2500,
            //         float: 0.3,
            //         collection: 'Red-Line',
            //     },
            //     {
            //         id: 2,
            //         img: require('../assets/img/voi__cart.png'),
            //         rarity: 'Засекреченное',
            //         name: 'USP',
            //         pattern: 908,
            //         price: 7000,
            //         float: 0.7,
            //         collection: 'Dark',
            //     },
            //     {
            //         id: 3,
            //         img: require('../assets/img/cataloitem_1.png'),
            //         rarity: 'Тайное',
            //         name: 'AWP',
            //         pattern: 908,
            //         price: 25000,
            //         float: 0.79,
            //         collection: 'Dragon Lore',
            //     },
            //     {
            //         id: 4,
            //         img: require('../assets/img/cataloitem_1.png'),
            //         rarity: 'Армейское',
            //         name: 'Karambit',
            //         pattern: 908,
            //         price: 55000,
            //         float: 0.1,
            //         collection: 'Red',
            //     },
            //     {
            //         id: 5,
            //         img: require('../assets/img/cataloitem_1.png'),
            //         rarity: 'Запрещенное',
            //         name: 'AK-47',
            //         pattern: 908,
            //         price: 35000,
            //         float: 0.2,
            //         collection: 'Red-Line',
            //     },
            //     {
            //         id: 6,
            //         img: require('../assets/img/cataloitem_1.png'),
            //         rarity: 'Засекреченное',
            //         name: 'USP',
            //         pattern: 908,
            //         price: 255000,
            //         float: 0.45,
            //         collection: 'Dark',
            //     },
            //     {
            //         id: 7,
            //         img: require('../assets/img/cataloitem_1.png'),
            //         rarity: 'Тайное',
            //         name: 'AWP',
            //         pattern: 908,
            //         price: 152487,
            //         float: 0.14,
            //         collection: 'Dragon Lore',
            //     },
            //     {
            //         id: 8,
            //         img: require('../assets/img/cataloitem_1.png'),
            //         rarity: 'Тайное',
            //         name: 'AWP',
            //         pattern: 908,
            //         price: 16000,
            //         float: 0.34,
            //         collection: 'Dragon Lore',

            //     },
                
                
            // ],
            search: '',
            lowprice: '',
            highprice: '',
            rareSelect: 0,
            conditionSelect: 0,
        }
    },
    
    methods:{
        getData(){
            const path = 'https://realcases.kz/api/shop';
            axios.get(path)
                .then((res) => {
                    this.weapons = res.data;
                console.log(res.data[0]);
                })
                .catch((error) => {
                // eslint-выключение следующей строки
                console.error(error);
                });
        },
        openModal(id){
            // console.log(this.weapons.filter(item => item.id == id)[0].name)
            this.modal.modalProductName = this.weapons.filter(item => item._id['$oid'] == id)[0];
            $('#ProductModal').modal('show')
        },
        reloadCatalog(){
            this.search = '';
            this.lowprice = '';
            this.highprice = ''
            this.rareSelect = 0;
            this.conditionSelect = 0;
            this.sort = 'По умолчанию';
        },
        addRarity(id){
            this.rareSelect.push(id)
        },
        removeRarity(id){
            this.rareSelect.splice(this.rareSelect.indexOf(id),1)
            console.log(this.rareSelect) 
        }
    },
    computed:{
        filteredWeapons(){
            let searched = this.weapons.filter((product) => {
                if(this.lowprice === ''){
                    return product.full_type.toLowerCase().indexOf(this.search.toLowerCase()) !== -1
                }
                else{
                    return product.full_type.toLowerCase().indexOf(this.search.toLowerCase()) !== -1 && product.cost>this.lowprice;
                }
            });
            if(this.highprice !== ''){
                searched = searched.filter((product) => {
                    return product.cost <= Number(this.highprice)    
                })
            };
            if(this.rareSelect != 0){
                searched = searched.filter(product => {
                    return product.rarity.toLowerCase() == (this.rarityList[this.rareSelect].rare.toLowerCase())    
                })
            }
            if(this.conditionSelect != 0){
                searched = searched.filter(product => {
                    return product.quality == (this.conditionList[this.conditionSelect].short)    
                })    
            }
            if(this.sort==='По цене (Min)'){
                searched.sort((a,b)=>{
                    return a.cost - b.cost
                })    
            }
            if(this.sort==='По цене (Max)')
            {
                searched.sort((a,b)=>{
                    return b.cost - a.cost
                })    
            }
            return searched
            
        }
    },
    mounted(){
        this.getData();
    },
    components:{ProductModal}
}
</script>

<style scoped>
    .shop{
        padding-top: 160px;
    }
    .shop-container{
        background-color: #281F27;
        width: 96vw;
        padding-top: 30px;
        border-radius: 15px;
        /* margin-left: 30px; */
        /* margin-right: 30px; */
    }


    .catalog__reloadImg{
        width: 40px;  
        height: 40px;  
        cursor: pointer;
    }
    .catalog__lineImg{
        margin-left: 0.563vw;
        margin-right: 0.563vw;
    }
    .dropdown__catalog{
        color: white;
        font-weight: 500;
        font-size: 1.250vw;
        background-color: unset;
    }
    .dropdown__filters{
        margin-top: 15px;
        color: white;
        font-weight: 500;
        font-size: 1.250vw;
        background-color: #171717;
    }
    .dropdown__catalog::after{
        display: none;
    }
    .dropdown__filters::after{
        display: none;
    }
    .dropdown__filters:focus{
        box-shadow: 0 0 0 0.2rem #C62C44;
    }
    .catalog__ArrowImg{
        width: 30px;
    }
    .dropdown__catalog:focus{
        box-shadow: 0 0 0 0.2rem #C62C44;
    }
    .catalog__dropmenu{
        background-color: #171717; 
        box-shadow: 0px 8px 16px 0px rgb(86 31 140 / 20%);
        color: white;   
    }
    .catalog__dropitem{
        color: white;
        font-size: 20px;
    }
    .catalog__dropitemBorder{
        border-bottom: 1px solid white;
    }
    .catalog__dropmenu .active{
        background-color: #2d2d32;
        color: #C62C44;
        /* border: 1px solid #753ef9; */
    }
    .catalog__dropitem:hover{
        color: white;
        font-size: 20px;
        background-color: #C62C44;
    }
    .catalog__search{
        background-color: #171717;    
        background: url(@/assets/img/loopCatalog.png) no-repeat 10px center #171717;
        background-size: 30px;
        color: white;
        padding-left: 45px;
        width: 20vw;
        height: 2.865vw;
        font-size: 24px;
        font-weight: 500;
        border-color: rgba(54,	53,	60, 0);
        border-radius: 5px;
    }
    .catalog__search::placeholder{
        color: white; 
        font-size: 24px;
        font-weight: 500;
    }


    /* FILTERS */
    .filtersAndCatalog{
        margin-top: 30px;
        padding-bottom: 2.6vw;    
    }
    
    .filters{
        color: white;
        font-weight: 600;
        font-size: 24px;
    }
    .filter__prices{
        color: white;
        margin-top: 15px;
        display: flex;
        align-items: center;
    }
    .price__min{
        width: 6.250vw;
        height: 43px;
        font-weight: 500;
        font-size: 1.458vw;
        background-color: #171717;
        border-color: rgba(54,	53,	60, 0);
        border-radius: 5px;
        background: url(@/assets/img/tenge.png) no-repeat right 10px center #171717;
        padding-right: 30px;
        color: white;

    }
    .price__max{
        width: 6.250vw;
        height: 43px;
        font-weight: 500;
        font-size: 1.458vw;
        background-color: #171717;
        border-color: rgba(54,	53,	60, 0);
        border-radius: 5px;
        background: url(@/assets/img/tenge.png) no-repeat right 10px center #171717;
        padding-right: 30px;
        color: white;
    }

    .filters__spans{
        color: white;
        font-weight: 600;
        font-size: 24px;
    }

    
    
    /* RARITY */
    
    .rarity{
        display: flex;
        flex-direction: column;
        margin-top: 20px;
    }
    .rarity__btn{
        color: white;
        padding: 0 0;
        display: flex;
        justify-content: space-between;
        font-weight: 600;
        font-size: 24px;
        
    }
    .rarity__btn:focus{
        box-shadow: 0 0 0 0.2rem rgb(0 123 255 / 0%);
    }
    .rarity .card{
        background-color: unset;
        padding: 0;
        border: 0;
    }

    .cheks__label{
        display: flex;
        align-items: center;
    }
    .customCheckbox {
        float: left;
        position: relative;  
        width: 24px;
        height: 24px;
        background-color: unset;
        border-radius: 2px;
        border: 1px solid white;
        border-radius: 5px;
        box-shadow: inset 0px 1px 0px rgba(0, 0, 0, 0.1);
        /*margin-right: 5px;*/
        margin-right: 0.26vw;
        overflow: hidden;
    }
    .customCheckbox.customCheckboxChecked {
    background: #753ef9;
    border: 1px solid white;
    }
    .customCheckbox input {
    opacity: 0;
    cursor: pointer;
    z-index: 5;
    width: 100%;
    height: 100%;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    }
    .customCheckbox span {
    display: none;
    text-align: center;
    line-height: 20px;
    font-size: 90%;
    color: #222;
    }
    .customCheckbox.customCheckboxChecked span {
    display: block;
    }
    .cheks__span{
        font-weight: 500;
        font-size: 24px;
        margin-left: 15px;    
    }

    .filter__button{
        color: white;
        background: linear-gradient(to right top, #C62C44, #FF0027);
        border-radius: 10px;
    }

/* CATALOG */
    .catalog{
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        grid-column-gap: 25px;
        grid-row-gap: 25px;
        max-height: 600px;
        overflow-y: auto;
        scrollbar-width: thin;
    }

    .catalog::-webkit-scrollbar-track {
    background-color: #181820;
}
    .catalog::-webkit-scrollbar {
        width: 10px;
    }
    .catalog::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 20px #FF0027;
    }
    
    .item{
        cursor: pointer;
        display: flex;
        flex-direction: column;
        color: white;
        background-color: #36353C;
        border-radius: 5px;
        height: fit-content;
        box-shadow: 2px 4px 10px #00000040;
        height: auto;
    }
    .item__top{
        /* position: relative; */
        display: flex;
        justify-content: space-between;
        padding-right: 10px;
        padding-left: 10px;
        background-color: rgb(23, 23, 23, 0.5);
    }
    .item__rare{
        /* position: absolute; */
        top: 0;
        /* margin-right: 5px; */
        /* text-align: right; */
    }
    .item__name{
        /* position: absolute; */
        bottom: 0;
        margin-left: 5px;
        font-size: 20px;
        font-weight: 500;
    }
    .item__img{
        width: 100%;
        height: 9vw;
    }
    .item__bottom{
        padding: 0 5px;
        display: flex;
        justify-content: space-between;
    }
    .item__price{
        font-weight: 600;
        font-size: 18px;
    }
    .item__more{
        background: linear-gradient(to right top, #C62C44, #FF0027);
        color: white;
        font-weight: 600;
        font-size: 18px;
        text-align: center;
        line-height: 24px;
        opacity: 0;
    }
    .item:hover .item__more{
        opacity: 1;
    }
    .item:hover{
        background-color: #504E5B;    
    }
    
    @media screen and (max-width:480px){
        .catalog{
            grid-template-columns: repeat(2, 1fr);
            margin-top: 20px;
            grid-column-gap: 5px;
        }
        .reloadsort{
            width: 100%;
        }
        .dropdown__catalog{
            font-size: 4.25vw;
        }
        .prices__container{
            width: 100%;
        }
        .price__min{
            width: 30vw;
            font-size: 5.458vw;
        }
        .price__max{
            width: 30vw;
            font-size: 5.458vw;
        }
        .filtcontm{
            width: 100%;
        }
        .dropdown__filters{
            font-size: 6.25vw;
        }
        .filter__button{
            margin-top: 15px;
            margin-bottom: 15px;
        }
        .item__img{
            height: 38vw;
        }
        .catalog__topfilters{
            flex-wrap: wrap;
        }
        .catalog__search{
            width: 90vw;
            height: 15vw;
        }
        .shop{
            padding-top:70px;
        }
        .catalog__search::placeholder{
        color: white; 
        font-size: 24px !important;
        font-weight: 500;
        }
        .price__min::placeholder{
            font-size: 24px !important;
        }
        .price__max::placeholder{
            font-size: 24px !important;
        }
    }
    
</style>