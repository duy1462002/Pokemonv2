import Cards from './Cards';
import Search from './Search';
import styles from './LeftContent.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function LeftContent({ data, getPokeInfo, nextPage, previousPage, onInput, input }) {
    return (
        <div className={cx('wrapper')}>
            <Search onInput = {onInput}/>
            <Cards data={data} getPokeInfo={getPokeInfo} />
            {input ? '' : <div className={cx('button-group')}>
                <button onClick={previousPage}>Previous</button>
                <button onClick={nextPage}>Next</button>
            </div>}
        </div>
    );
}

export default LeftContent;
