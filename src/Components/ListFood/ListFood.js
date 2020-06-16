import React, { useEffect, useState } from 'react';
import Text from './ListFoodTexts';
import ListSingleFood from './ListSingleFood/ListSingleFood';
import {connect} from 'react-redux';
import * as actionTypes from '../../store/actions'


function ListFood(props) {
    const [data, setData] = useState([])
    const [items, setItems] = useState([]);
    const [isLoaded, setIsLoaded] = useState([]);


    useEffect( ()=> {
        const query = props.input
        fetch(Text[props.dot][0].api + `&query=${query}`)
        .then(response => response.json())
        .then((result) => {
                setIsLoaded(true);
                if (result.recipes) {
                    setItems(result.recipes);
                    setData(result.recipes);
                }
                else if (result.results) {
                    setItems(result.results);
                    setData(result.results)
                    console.log(result.results)
                    props.onSendResetInfo(result.results, setItems)
                }
            }, 
        )
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(()=> {
        if (props.sentCook || props.sentDiets || props.sentPrice !== null) {
            let newItems = data;
            if (props.sentCook !== ''){newItems = newItems.filter(item => item['readyInMinutes'] <= props.sentCook) }
            if (props.sentPrice) {newItems = newItems.filter((item)=> item['pricePerServing'] <= props.sentPrice)}
            if (props.sentDiets === 'vegan') newItems = newItems.filter((item)=> item.vegan)
            else if(props.sentDiets === 'vegetarian')newItems = newItems.filter((item)=> item.vegetarian === true)
            else if(props.sentDiets === 'dairy-free')newItems = newItems.filter((item)=> item.dairyFree === true)

            setItems(newItems)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[props.sentDiets, props.sentPrice, props.sentCook])

    useEffect(()=> {
        let list = [...items]
        if (props.sentSort === 'healthScore') {
            list.sort((a,b) => {
                return a.healthScore-b.healthScore
            })
        }
        else if (props.sentSort === 'spoonacularScore') {
            console.log(list)
            list.sort((a,b)=> {
                return a.spoonacularScore - b.spoonacularScore
            })
        }
        else if (props.sentSort === 'readyInMinutes') {
            list.sort((a,b)=> {
                return a.readyInMinutes - b.readyInMinutes
        })
        }
        setItems(list)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[props.sentSort])

    if (!isLoaded) {
        return <div> Loading... </div>
    }
    else {
        return (
            <div className='listFood'>
                <div className='listFood__textarea'>
                    <h1 className='listFood__textarea--header'>{Text[props.dot][0].header}</h1>
                    <p className='listFood__textarea--paragraph'>{Text[props.dot][0].paragraph}</p>
                </div>
                <div className='listFood__list'>
                    {items.map((item, index) => {
                        return (
                            <ListSingleFood item={item} key={index} index={index}/>
                            )   
                        })}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        input:state.inp.input,
        sentCook:state.fvalues.cookingTime,
        sentPrice:state.fvalues.price,
        sentDiets:state.fvalues.diets,
        infData:state.inf.data,
        infSetItems:state.inf.setItems,
        sentSort:state.svs.sort
    }
}
const mapDispatchToProps= dispatch => {
    return {
        onSendResetInfo:(data, setItems) => dispatch ({
            type:actionTypes.SEND_INFO,
            data:data,
            setItems:setItems
        }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListFood)