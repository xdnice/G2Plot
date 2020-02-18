import { Rose } from '@antv/g2plot';

const data = [
  {
    type: '分类一',
    value: 27,
  },
  {
    type: '分类二',
    value: 25,
  },
  {
    type: '分类三',
    value: 18,
  },
  {
    type: '分类四',
    value: 15,
  },
  {
    type: '分类五',
    value: 10,
  },
  {
    type: '其它',
    value: 5,
  },
];

const rosePlot = new Rose(document.getElementById('container'), {
  forceFit: true,
  title: {
    visible: true,
    text: '多色玫瑰图',
  },
  description: {
    visible: true,
    text:
      '指定颜色映射字段(colorField)，饼图切片将根据该字段数据显示为不同的颜色。指定颜色需要将color配置为一个数组。\n当把饼图label的类型设置为inner时，标签会显示在切片内部。设置offset控制标签的偏移值。',
  },
  radius: 0.8,
  data,
  radiusField: 'value',
  categoryField: 'type',
  colorField: 'type',
  label: {
    visible: true,
    type: 'outer',
    formatter: (text) => text,
  },
  events: {
    onRoseMouseenter: (ev) => {
      const target = ev.target;
      if (target.cfg.name === 'interval') {
        target.attr('fillOpacity', 0.8);
      }
      ev.view.getCanvas().draw();
    },
    onRoseMouseleave: (ev) => {
      const target = ev.target;
      if (target.cfg.name === 'interval') {
        target.attr('fillOpacity', 1);
      }
      ev.view.getCanvas().draw();
    },
  },
});

rosePlot.render();
