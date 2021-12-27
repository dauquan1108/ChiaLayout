const ConvertVietnamese = (str) => {
    str = str.toLowerCase();
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    // Some system encode vietnamese combining accent as individual utf-8 characters
    str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // Huyền sắc hỏi ngã nặng
    str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // Â, Ê, Ă, Ơ, Ư
    return str;
}

const CreatePathUrl = (title, otherId, path = 'thread', params) => {
    // Xử lý text: title, name, other
    // => Loại bỏ toàn bộ những ký tự đặc biệt và giữ lại text
    let _title = '';
    if (title) {
        // convert title to friendly title
        _title = ConvertVietnamese(title);
        _title = title.toString()                                 // Convert to string
            .normalize('NFD')                                // Change diacritics
            .replace(/[\u0300-\u036f]/g,'') // Remove illegal characters
            .replace(/\s+/g,'-')            // Change whitespace to dashes
            .toLowerCase()                                         // Change to lowercase
            .replace(/&/g,'-')              // Change ampersand
            .replace(/[^a-z0-9\-]/g,'')     // Remove anything that is not a letter, number or dash
            .replace(/-+/g,'-')             // Remove duplicate dashes
            .replace(/^-*/,'')              // Remove starting dashes
            .replace(/-*$/,'');             // Remove trailing dashes
    }

    let _path;
    if (params && typeof params === 'object') {
        let flag = 0;
        let _param = '';
        const keyParamArray = Object.keys(params);
        keyParamArray.map((item) => {
            flag += 1;
            _param += `${item}=${params[item]}`;
            if (flag < keyParamArray.length) {
                _param += '&';
            }
        });
        _path = `/${path}/${_title}.${otherId}?${_param}`;
    } else {
        _path = `/${path}/${_title}.${otherId}`;
    }
    return _path;
};
export default CreatePathUrl;
