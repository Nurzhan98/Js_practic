function isEmpty(Obj) {
    for (var key in obj) {
        return false;
    }
    return true;
}