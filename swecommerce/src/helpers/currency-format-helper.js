const currencyFormat = {  
    getMoney(str) {
        str = str+'';
        return parseInt( str.replace(/[\D]+/g,'') );
    },

    formatReal(int) {
        let format = int.toString();
        if( format.length === 1 )
            return format = 'R$ 0,0'+format
        if( format.length === 2 )
            return format = 'R$ 0,'+format
        let pre = format.substring(0,format.length-2);
        let pos = ','+format.substring(format.length-2);
        pre = 'R$ ' + pre.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
        return pre+pos;    
    },
}
  
export default currencyFormat;