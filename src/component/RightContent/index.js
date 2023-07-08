import styles from './RightContent.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function RightContent({ data }) {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('image')} src={data.sprites.versions['generation-v']['black-white'].animated.front_default} alt="" />

            <p className={cx('id')}>{data.id}</p>

            <h3 className={cx('name')}>{data.name}</h3>

            <div className={cx('pokemon-types')}>
                {data.types.map((type) => (
                    <div className={cx('type')} key={type.slot}>
                        {type.type.name}
                    </div>
                ))}
            </div>

            <h4 className={cx('pokedex-entry')}>Pokedex Entry</h4>

            <div className={cx('pokemon-sizes')}>
                <div className={cx('size')}>
                    <h4>Height</h4>
                    <p>{data.height}</p>
                </div>
                <div className={cx('size')}>
                    <h4>Weight</h4>
                    <p>{data.weight}</p>
                </div>
            </div>

            <div className={cx('pokemon-abilities')}>
                <h3>Abilities</h3>
                <div className={cx('abilities')}>
                    {data.abilities.map((ability, index) => (
                        <p key={index} className={cx('ability')}>
                            {ability.ability.name}
                        </p>
                    ))}
                </div>
            </div>

            <div className={cx('pokemon-stats')}>
                <h3>Stats</h3>
                <div className={cx('stats')}>
                    <div className={cx('stat')}>
                        <p>HP</p>
                        <p>{data.stats[0].base_stat}</p>
                    </div>

                    <div className={cx('stat')}>
                        <p>ATK</p>
                        <p>{data.stats[1].base_stat}</p>
                    </div>

                    <div className={cx('stat')}>
                        <p>DEF</p>
                        <p>{data.stats[2].base_stat}</p>
                    </div>

                    <div className={cx('stat')}>
                        <p>SpA</p>
                        <p>{data.stats[3].base_stat}</p>
                    </div>

                    <div className={cx('stat')}>
                        <p>SpD</p>
                        <p>{data.stats[4].base_stat}</p>
                    </div>

                    <div className={cx('stat')}>
                        <p>SPD</p>
                        <p>{data.stats[5].base_stat}</p>
                    </div>
                </div>
            </div>

            {/* <div className={cx('evolution')}>
                <h3>Evolution</h3>
                <img
                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
                    alt=""
                />
                <img
                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"
                    alt=""
                />
                <img
                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"
                    alt=""
                />
            </div> */}
        </div>
    );
}

export default RightContent;
