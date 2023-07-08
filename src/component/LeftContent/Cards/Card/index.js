import classNames from 'classnames/bind';
import style from './card.module.scss';
const cx = classNames.bind(style);

function Card({data, getPokeInfo}) {
    return (
        <div className={cx('wrapper')} onClick={() => getPokeInfo(data)}>
            <img
                className={cx('image')}
                src={data.sprites.front_default}
                alt=""
            />

            <p className={cx('id')}>No {data.id}</p>

            <h3 className={cx('name')}>{data.name}</h3>

            <div className={cx('pokemon-types')}>
                {data.types.map(type => <div className={cx('type')} key={type.slot}>{type.type.name}</div>)}
                
            </div>
        </div>
    );
}

export default Card;
