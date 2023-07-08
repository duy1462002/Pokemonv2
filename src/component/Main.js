import LeftContent from './LeftContent';
import RightContent from './RightContent';
import styles from './Main.module.scss';
import classNames from 'classnames/bind';
import axios from 'axios';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function Main() {
    const [pokeData, setPokeData] = useState([]);
    const [pokeInfo, setPokeInfo] = useState();
    const [pokeShow, setPokeShow] = useState([]);
    const [pokeCount, setPokeCount] = useState(0);
    const [input, setInput] = useState('');

    const pokeFunc = async () => {
        const res = await axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1000');
        getPokemon(res.data.results);
    };

    const getPokemon = async (pokemons) => {
        pokemons.map(async (pokemon) => {
            const result = await axios.get(pokemon.url);
            setPokeData((state) => {
                state = [...state, result.data];
                state.sort((a, b) => (a.id > b.id ? 1 : -1));
                return state;
            });
        });
    };

    const nextPage = () => {
        setPokeCount((prev) => prev + 10);
    };

    const previousPage = () => {
        if(pokeCount !== 0) setPokeCount((prev) => prev - 10);

    };


    useEffect(() => {
        if (input) {
            const newArr = pokeData.filter((pokemon) => {
                return pokemon && pokemon.name.includes(input);
            });
            setPokeShow(newArr);
        } else if (input === ''){
            setPokeShow(pokeData.slice(pokeCount, pokeCount + 10));
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [input]);

    useEffect(() => {
        pokeFunc();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        setPokeShow(pokeData.slice(0, 10));
        // console.log(pokeData);
    }, [pokeData]);

    useEffect(() => {
        setPokeShow([]);
        setPokeShow((state) => {
            let newPokeArr = pokeData.slice(pokeCount, pokeCount + 10);
            state = [...state, ...newPokeArr];
            return state;
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pokeCount]);

    return (
        <div className={cx('main')}>
            <LeftContent
                data={pokeShow}
                getPokeInfo={(poke) => {
                    setPokeInfo(poke);
                }}
                nextPage={nextPage}
                previousPage = {previousPage}
                onInput={(value) => {
                    setInput(value);
                }}
                input = {input}
            />
            {pokeInfo ? <RightContent data={pokeInfo} /> : ''}
        </div>
    );
}

export default Main;
