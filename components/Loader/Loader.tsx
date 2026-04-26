import { TailSpin } from 'react-loader-spinner';
import css from './Loader.module.css';

function Loader() {
  return (
    <div className={css['box-loader']}>
      <TailSpin
        height="75"
        width="75"
        color="var(--color-grey-green)"
        ariaLabel="tail-spin-loading"
        visible={true}
      />
    </div>
  );
}

export default Loader;
