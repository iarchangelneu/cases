<template>
    <section class="shop">
        <div class="container-fluid shop-container">
            <div class="row">
                <div class="col-0 col-md-3">

                </div>
                <div class="col-md-9 col-12">
                    <div class="d-flex justify-content-between align-items-center catalog__topfilters">
                        <div class="d-flex align-items-center">
                            <img src="@/assets/img/reloadCatalog.png" class="catalog__reloadImg" alt="" @click="reloadCatalog">
                            <img src="@/assets/img/catalogLine.png" class="catalog__lineImg" alt="">
                            <div class="dropdown">
                                <button class="btn dropdown-toggle dropdown__catalog" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    По умолчанию
                                    <img src="@/assets/img/catalogArrow.png" class="catalog__ArrowImg" alt="">
                                </button>
                                <div class="dropdown-menu catalog__dropmenu" aria-labelledby="dropdownMenuButton">
                                    <a class="dropdown-item catalog__dropitem active" href="#">По умолчанию</a>
                                    <a class="dropdown-item catalog__dropitem" href="#">По цене (Max)</a>
                                    <a class="dropdown-item catalog__dropitem" href="#">По цене (Min)</a>
                                </div>
                            </div>
                            <!-- <div class="form-group mb-0">
                                <select class="form-control dropdown__catalog" id="exampleFormControlSelect1">
                                    <option class="catalog__dropitem">По умолчанию</option>
                                    <option class="catalog__dropitem">По цене (Max)</option>
                                    <option class="catalog__dropitem">По цене (Min)</option>
                                </select>
                            </div> -->
                        </div>
                        <input type="text" class="catalog__search" placeholder="Поиск..." v-model.trim="search">
                    </div>    
                </div>
            </div>
            <div class="row filtersAndCatalog">
                <div class="col-md-3 col-12 filters">
                    Цена
                    <div class="filter__prices">
                        <input type="text" class="price__min" placeholder="0.00" v-model.trim="lowprice">
                        <span class="ml-2 mr-2">&mdash;</span>
                        <input type="text" class="price__max" placeholder="0.00" v-model.trim="highprice">
                    </div>
               
             <div class="rarity">
                        <button 
                        class="btn rarity__btn" 
                        type="button" 
                        data-toggle="collapse" 
                        data-target="#collapseRare" aria-expanded="false" aria-controls="collapseRare">
                            <span>
                                Редкость
                            </span>
                            <span>+</span>
                        </button>
                        <div class="collapse" id="collapseRare">
                            <div class="card card-body">
                                    <label class="cheks__label" 
                                    v-for="rarity in rarityList" 
                                    :key="rarity.id">
                                        <div class="customCheckbox"><span><img src="../assets/img/Vector3.svg"></span><input type="checkbox" :id="rarity.id"></div>
                                        <span class="cheks__span">{{rarity.rare}}</span>
                                    </label>
                                    <!-- <label class="cheks__label">
                                        <div class="customCheckbox"><span><img src="../assets/img/Vector3.svg"></span><input type="checkbox"></div>
                                        <span class="cheks__span">Запрещенное</span>
                                    </label>
                                    <label class="cheks__label">
                                        <div class="customCheckbox"><span><img src="../assets/img/Vector3.svg"></span><input type="checkbox"></div>
                                        <span class="cheks__span">Засекреченное</span>
                                    </label>
                                    <label class="cheks__label">
                                        <div class="customCheckbox"><span><img src="../assets/img/Vector3.svg"></span><input type="checkbox"></div>
                                        <span class="cheks__span">Тайное</span>
                                    </label>
                                    <label class="cheks__label">
                                        <div class="customCheckbox"><span><img src="../assets/img/Vector3.svg"></span><input type="checkbox"></div>
                                        <span class="cheks__span">Экстра</span>
                                    </label> -->
                            </div>
                        </div>
                    </div>

                    <!-- CONDITION -->
                    <div class="rarity">
                        <button 
                        class="btn rarity__btn" 
                        type="button" 
                        data-toggle="collapse" 
                        data-target="#collapseCondition" aria-expanded="false" aria-controls="collapseCondition">
                            <span>
                                Состояние
                            </span>
                            <span>+</span>
                        </button>
                        <div class="collapse" id="collapseCondition">
                            <div class="card card-body">
                                    <label class="cheks__label">
                                        <div class="customCheckbox"><span><img src="../assets/img/Vector3.svg"></span><input type="checkbox"></div>
                                        <span class="cheks__span">Прямо из завода (FN)</span>
                                    </label>
                                    <label class="cheks__label">
                                        <div class="customCheckbox"><span><img src="../assets/img/Vector3.svg"></span><input type="checkbox"></div>
                                        <span class="cheks__span">Немного поношенное (MW)</span>
                                    </label>
                                    <label class="cheks__label">
                                        <div class="customCheckbox"><span><img src="../assets/img/Vector3.svg"></span><input type="checkbox"></div>
                                        <span class="cheks__span">После полевых испытаний (FT)</span>
                                    </label>
                                    <label class="cheks__label">
                                        <div class="customCheckbox"><span><img src="../assets/img/Vector3.svg"></span><input type="checkbox"></div>
                                        <span class="cheks__span">Поношенное (WW)</span>
                                    </label>
                                    <label class="cheks__label">
                                        <div class="customCheckbox"><span><img src="../assets/img/Vector3.svg"></span><input type="checkbox"></div>
                                        <span class="cheks__span">Закаленное в боях (BS)</span>
                                    </label>
                            </div>
                        </div>
                    </div>

                    <button class="btn filter__button">
                        Применить фильтры
                    </button>

                </div>
                <div class="col-12 col-md-9 catalog">
                    <!-- <div class="row"> -->
                        <!-- <div class="col-2" > -->
                            <div class="item" v-for="item in filteredWeapons" :key="item.id" @click="openModal(item.id)">
                                <div class="item__top">
                                    <div class="item__rare">
                                        {{item.rarity}}
                                    </div>
                                    <img :src="item.img" class="item__img" alt="">
                                    <span class="item__name">
                                        {{item.name}}
                                    </span>
                                </div>
                                <div class="item__bottom">
                                    <span class="item__price">
                                        {{item.price}} ₸
                                    </span>
                                    <span class="item__condition">
                                        FN
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
            rarityList:[
                {id: 0, rare: 'Армейское'},
                {id: 1, rare: 'Запрещенное'},
                {id: 2, rare: 'Засекреченное'},
                {id: 3, rare: 'Тайное'},
                {id: 4, rare: 'Экстра'},
            ],
            weapons: [
                {
                    id: 0,
                    img: require('../assets/img/cataloitem_1.png'),
                    rarity: 'Армейское',
                    name: 'Karambit',
                    pattern: 908,
                    price: 255000,
                    float: 0.5,
                    collection: 'Red',
                },
                {
                    id: 1,
                    img: require('../assets/img/tacti__cart.png'),
                    rarity: 'Запрещенное',
                    name: 'AK-47',
                    pattern: 908,
                    price: 255000,
                    float: 0.5,
                    collection: 'Red-Line',
                },
                {
                    id: 2,
                    img: require('../assets/img/voi__cart.png'),
                    rarity: 'Засекреченное',
                    name: 'USP',
                    pattern: 908,
                    price: 255000,
                    float: 0.5,
                    collection: 'Dark',
                },
                {
                    id: 3,
                    img: require('../assets/img/cataloitem_1.png'),
                    rarity: 'Тайное',
                    name: 'AWP',
                    pattern: 908,
                    price: 255000,
                    float: 0.5,
                    collection: 'Dragon Lore',
                },
                {
                    id: 4,
                    img: require('../assets/img/cataloitem_1.png'),
                    rarity: 'Армейское',
                    name: 'Karambit',
                    pattern: 908,
                    price: 255000,
                    float: 0.5,
                    collection: 'Red',
                },
                {
                    id: 5,
                    img: require('../assets/img/cataloitem_1.png'),
                    rarity: 'Запрещенное',
                    name: 'AK-47',
                    pattern: 908,
                    price: 255000,
                    float: 0.5,
                    collection: 'Red-Line',
                },
                {
                    id: 6,
                    img: require('../assets/img/cataloitem_1.png'),
                    rarity: 'Засекреченное',
                    name: 'USP',
                    pattern: 908,
                    price: 255000,
                    float: 0.5,
                    collection: 'Dark',
                },
                {
                    id: 7,
                    img: require('../assets/img/cataloitem_1.png'),
                    rarity: 'Тайное',
                    name: 'AWP',
                    pattern: 908,
                    price: 255000,
                    float: 0.5,
                    collection: 'Dragon Lore',
                },
                {
                    id: 8,
                    img: require('../assets/img/cataloitem_1.png'),
                    rarity: 'Тайное',
                    name: 'AWP',
                    pattern: 908,
                    price: 255000,
                    float: 0.5,
                    collection: 'Dragon Lore',

                },
                
                
            ],
            search: '',
            lowprice: '',
            highprice: '',
            rareSelect: [],
        }
    },
    
    methods:{
        getData(){
            fetch('https://pokeapi.co/api/v2/pokemon/?limit=100&offset=10').then(response => response.json()).then(result => {this.pokemons = result.results
            console.log(result)
            });
        },
        openModal(id){
            console.log(this.weapons.filter(item => item.id == id)[0].name)
            this.modal.modalProductName = this.weapons.filter(item => item.id == id)[0];
            $('#ProductModal').modal('show')
        },
        reloadCatalog(){
            this.search = '';
            this.lowprice = '';
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
                    return product.name.toLowerCase().indexOf(this.search.toLowerCase()) !== -1
                }
                else{
                    return product.name.toLowerCase().indexOf(this.search.toLowerCase()) !== -1 && product.price>this.lowprice;
                }
            });
            if(this.rareSelect.length != 0){
                let resultedArr = []
                this.rareSelect.forEach((item)=>{
                    console.log(this.rarityList[item].rare);
                
                resultedArr = resultedArr.concat(searched.filter(product => {
                    return product.rarity.toLowerCase() == (this.rarityList[item].rare.toLowerCase())    
                })
                )
                console.log(resultedArr)
            })
            return resultedArr
            }
            return searched
            
        }
    },
    mounted(){
        let addrar = this.addRarity;
        let remrar = this.removeRarity;
        var checkboxs = $('input[type=checkbox]');
        checkboxs.change(function(){
        if($(this).is(':checked')){
            // console.log($(this))
        $(this).parent().addClass('customCheckboxChecked');
        addrar($(this)[0].id)
        } else {
        $(this).parent().removeClass('customCheckboxChecked');
        remrar($(this)[0].id)
        }
        });

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
        background-color: #252331;
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
        margin-left: 1.563vw;
        margin-right: 1.563vw;
    }
    .dropdown__catalog{
        color: white;
        font-weight: 500;
        font-size: 24px;
        background-color: unset;
    }
    .dropdown__catalog::after{
        display: none;
    }
    .catalog__ArrowImg{
        width: 30px;
    }
    .dropdown__catalog:focus{
        box-shadow: 0 0 0 0.2rem #753ef9;
    }
    .catalog__dropmenu{
        background-color: #202025; 
        box-shadow: 0px 8px 16px 0px rgb(86 31 140 / 20%);
        color: white;   
    }
    .catalog__dropitem{
        color: white;
        font-size: 20px;
    }
    .catalog__dropmenu .active{
        background-color: #2d2d32;
        color: #753ef9;
        /* border: 1px solid #753ef9; */
    }
    .catalog__dropitem:hover{
        color: white;
        font-size: 20px;
        background-color: #753ef9;
    }
    .catalog__search{
        background-color: #44434B;    
        background: url(@/assets/img/loopCatalog.png) no-repeat 10px center #44434B;
        background-size: 30px;
        color: white;
        padding-left: 45px;
        width: 33.229vw;
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
    }
    .price__min{
        width: 120px;
        height: 43px;
        font-weight: 500;
        font-size: 28px;
        background-color: #36353C;
        border-color: rgba(54,	53,	60, 0);
        border-radius: 5px;
        background: url(@/assets/img/tenge.png) no-repeat right 10px center #44434B;
        padding-right: 30px;
        color: white;

    }
    .price__max{
        width: 120px;
        height: 43px;
        font-weight: 500;
        font-size: 28px;
        background-color: #36353C;
        border-color: rgba(54,	53,	60, 0);
        border-radius: 5px;
        background: url(@/assets/img/tenge.png) no-repeat right 10px center #44434B;
        padding-right: 30px;
        color: white;
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
        background-color: #7B5ACB;
        border-radius: 10px;
        margin-top: 30px;
    }

/* CATALOG */
    .catalog{
        display: grid;
        grid-template-columns: repeat(8, 1fr);
        grid-column-gap: 10px;
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
    box-shadow: inset 0 0 20px #483E83;
    }
    
    .item{
        cursor: pointer;
        display: flex;
        flex-direction: column;
        color: white;
        background-color: #36353C;
        border-radius: 5px;
        height: fit-content;
    }
    .item__top{
        position: relative;
    }
    .item__rare{
        /* position: absolute; */
        top: 0;
        margin-right: 5px;
        text-align: right;
    }
    .item__name{
        /* position: absolute; */
        bottom: 0;
        margin-left: 5px;
    }
    .item__img{
        width: 100%;
        height: 6.406vw;
    }
    .item__bottom{
        padding: 0 5px;
        display: flex;
        justify-content: space-between;
    }
    .item__more{
        background: linear-gradient(to right top, #753EF9, #9D75FF);
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
            grid-template-columns: repeat(3, 1fr);
            margin-top: 20px;
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