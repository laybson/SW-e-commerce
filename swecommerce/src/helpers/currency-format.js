const currencyFormat = {  
    getMoney(str) {
        return parseInt( str.replace(/[\D]+/g,'') );
    },

    formatReal(int) {
        let format = int+'';
        format = format.replace(/([0-9]{2})$/g, ",$1");
        if( format.length > 6 )
            format = format.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");
        return 'R$ '+format;       
    },
}
  
export default currencyFormat;