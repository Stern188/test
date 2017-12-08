export class CommonComponent {
    updateFilter(event, temp, self) {
        const val = event.target.value.toLowerCase();
        if (val !== '') {
            temp = temp.filter(function (d) {
                let filterflag;
                for (let key in d) {
                    if (key != 'nofilter' && $.inArray(key, d.nofilter) == -1) {
                        filterflag = filterflag || String(d[key]) == val;
                    }
                }
                return filterflag;
            });
        }
        self.rows = temp;
    }
}
