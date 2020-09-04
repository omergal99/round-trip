import React from "react";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '0 0.75rem',
  },
  headerStyle: {
    color: 'var(--lightblue)',
    textAlign: 'var(--direction-name)',
    padding: '1rem 0',
  },
}));

export default function ProductList({ children, products, productsLength }) {
  console.log('ProductList');
  const classes = useStyles();

  const list = products.map(item => {
    return <React.Fragment key={item.id}>
      {React.cloneElement(children, item)}
    </React.Fragment>
  })
  return (
    <div className={`product-list ${classes.root}`}>
      <h3 className={classes.headerStyle}>
        <span>סה"כ נמצאו&nbsp;</span>
        <span>{productsLength}</span>
        <span>&nbsp;תוצאות</span>
      </h3>
      {list}
    </div>
  )
}