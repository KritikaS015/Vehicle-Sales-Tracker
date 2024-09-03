import _ from 'lodash';
import { interpolateRgb } from 'd3-interpolate';

export function getSum(data, brand){
    let sum = _(data)
                      .groupBy('brand')
                      .map((objs, key) => {
                        if(!brand) return _.sumBy(objs, 'units');
                        return {
                            'brand': key,
                            'sum' : _.sumBy(objs, 'units')
                        }
                      })
                      .value()
    return sum;
}

export function getLabels(data, brand){
    let amountSum = getSum(data, brand);
    let Total = _.sum(getSum(data));

    let  percent = _(amountSum)
                            .map(objs => _.assign(objs, { percent : (100 * objs.sum)  / Total}))
                            .value()

    return percent;
}

export function chart_Data(cars){
    if (cars.length === 0) {
        return { data: { labels: [], datasets: [] }, options: {} };
      }
    
      const generateRandomColor = () => {
        const colorScale = interpolateRgb('#ff0000', '#0000ff');
        const t = Math.random();
        return colorScale(t).toString();
      };
    
      const generateRandomColors = (count) => {
        const colors = Array.from({ length: count }, () => generateRandomColor());
        return colors;
      };
    
      let dataValue = getSum(cars);
      let colors = generateRandomColors(dataValue.length); // Use dataValue.length instead of cars.length
    
      let bg = dataValue.map((car, index) => ({
        ...car,
        color: colors[index],
      }));
      let labels = _.uniq(cars.map(car => car.brand))
      const config = {
        data: {
          labels: labels,
          datasets: [{
            data: dataValue,
            backgroundColor: bg.map(car => car.color),
            hoverOffset: 4,
            borderRadius: 30,
            spacing: 10,
          }]
        },
        options: {
          cutout: 115
        }
      };
      return config;
}

export function getTotal(cars){
    return _.sum(getSum(cars));
}