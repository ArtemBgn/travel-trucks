import { TailSpin } from 'react-loader-spinner';

function loader() {
  return (
    <div className='box-loader'>
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

export default loader;
