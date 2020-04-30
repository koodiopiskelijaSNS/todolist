import React from 'react';

import './buttons.css';

const classNames = classnames => classnames.join(" ");
                                                                            /*lisäysnapin konffausta */
const Button = ({ className = "", primary, secondary, ...props}) => {       /*kolme pistettä tarkoittaa rest-operaattoria, joka tarkoitta sitä, */
 return (                                                                    /*että mitä ei ole listattu classNames:a sijoittaa props-muuttujaan*/
    <button 
      type="button" 
      className={classNames([                                                 
          "button",
          className,
          primary ? "button--primary" : "",                         /*ensisijainen buttonin tyylimäärite*/
          secondary ? "button--secondary" : ""                      /*toissjainen buttonin tyylimäärite*/ 
      ])}
      {...props} />
 );

}
/*kelluva ominaisuus napille, floatingButtonilla kolme luokkaa tyylimääritettä, rivit 14 ja 15 sekä 25*/
const FloatingButton = ({className = "", ...props}) => {
return (
    <Button 
     className={classNames(["button--floating", className])}
    {...props} />
);

}

export { Button as default, Button, FloatingButton }