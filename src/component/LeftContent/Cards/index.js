import classNames from "classnames/bind";
import style from './Cards.module.scss'
import Card from "./Card";
const cx = classNames.bind(style)

function Cards({data, getPokeInfo}) {
    return (
        <div className={cx('wrapper')}>
            {data.map(pokemon => 
            <Card
                key={pokemon.id}
                data = {pokemon}
                getPokeInfo = {getPokeInfo}
            />)}
            
            
        </div>
    );
}

export default Cards;
