import classNames from 'classnames/bind';
import styles from './Search.module.scss';
const cx = classNames.bind(styles);

function Search({ onInput }) {
    return (
        <div className={cx('wrapper')}>
            <input
                className={cx('search-input')}
                placeholder="Search your Pokemon"
                onChange={(e) => {
                    onInput(e.target.value);
                }}
            />
            <button className={cx('search-btn')}>Search</button>
        </div>
    );
}

export default Search;
