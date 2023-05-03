import useWindowSize from '../../hooks/useWindowSize';
import style from './style.module.css';

function ProductCard() {
    let { width } = useWindowSize();
    console.log(width);

    return (
        <div className={style.card}>
            <h2>Product Card</h2>
        </div>
    );
}
export default ProductCard;