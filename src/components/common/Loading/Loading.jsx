import loadingGif from './gif/seed_loader1.gif';
import './Loading.css';

const Loading = ({
  description,
  datatestid,
  className = '',
  fontClass = 'H3',
  isSmall = false,
  replaceSizeDefaultClass = false,
  spinnerWidth,
}) => {
  const spinnerSize = !isSmall ? 200 : window.innerWidth < 768 ? 78 : 120;
  const spinnerNumberSize = spinnerWidth || spinnerSize;

  return (
    <div
      data-testid={datatestid || 'page-loading-mask'}
      className={`page-loading-mask ${
        replaceSizeDefaultClass ? 'replace-size-default' : ''
      } ${className}`}
    >
      <div className="inner-box">
        <div className="animation-wrapper" style={{ width: spinnerNumberSize }}>
          <img style={{ maxWidth: spinnerNumberSize }} alt="loading" src={loadingGif} />
        </div>
        {description && (
          <div className="loading-description text-center">
            <span className={`loading-text ${fontClass}`}>{description}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Loading;
