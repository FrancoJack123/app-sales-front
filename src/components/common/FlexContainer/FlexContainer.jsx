import classNames from 'classnames';

const FlexContainer = ({
  className,
  style,
  children,
  row,
  column,
  justifyBetween,
  justifyCenter,
  justifyEnd,
  alignItemsCenter,
  alignItemsStart,
  alignItemsEnd,
  alignItemsBaseline,
  alignItemsStretch,
  noWrap,
  wrap,
  gap,
  ...props
}) => {
  const tempClass = classNames({
    'd-flex': true,
    'flex-row': row,
    'flex-column': column,
    'justify-content-between': justifyBetween,
    'justify-content-center': justifyCenter,
    'justify-content-end': justifyEnd,
    'align-items-center': alignItemsCenter,
    'align-items-start': alignItemsStart,
    'align-items-end': alignItemsEnd,
    'align-baseline': alignItemsBaseline,
    'align-items-stretch': alignItemsStretch,
    'flex-nowrap': noWrap,
    'flex-wrap': wrap,
    [`gap-${gap}`]: typeof gap === 'number' ? `gap-${gap}` : '',
  });

  const flexContainerClassName = classNames(tempClass, className);

  return (
    <div className={flexContainerClassName} style={style} {...props}>
      {children}
    </div>
  );
};

export default FlexContainer;
