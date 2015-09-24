/**
 * Created by tianfeihan on 15/9/16.
 */
var myChart = echarts.init(document.getElementById('aaa'));

var option = {

    title: {
        x: 'center',
        text: 'approve count of every member',
        //subtext: 'Rainbow bar example',
        //link: 'http://echarts.baidu.com/doc/example.html'
    },
    tooltip: {
        trigger: 'item'
    },
    toolbox: {
        show: true,
        feature: {
            dataView: {show: true, readOnly: false},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    calculable: true,
    grid: {
        borderWidth: 0,
        y: 80,
        y2: 60
    },
    xAxis: [
        {
            type: 'category',
            show: false,
            data: ['夏天成', '曹航', '陈利飞', '田斐菡', '朱礼源', '陈宽', '邢铭哲']
        }
    ],
    yAxis: [
        {
            type: 'value',
            show: false
        }
    ],
    series: [
        {
            name: 'ECharts例子个数统计',
            type: 'bar',
            itemStyle: {
                normal: {
                    color: function(params) {
                        // build a color map as your need.
                        var colorList = [
                            '#F0805A','#26C0C0','#FCCE10','#E87C25','#27727B',
                            '#FE8463','#9BCA63'
                        ];
                        return colorList[params.dataIndex]
                    },
                    label: {
                        show: true,
                        position: 'top',
                        formatter: '{b}\n{c}'
                    }
                }
            },
            data: [12,21,10,4,12,5,6],
            markPoint: {
                tooltip: {
                    trigger: 'item',
                    backgroundColor: 'rgba(0,0,0,0)',
                    formatter: function(params){
                        return '<img src="'
                            + params.data.symbol.replace('image://', '')
                            + '"/>';
                    }
                },
                data: [
                    {xAxis:0, y: 350, name:'夏天成', symbolSize:20, symbol: 'image://../asset/ico/折线图.png'},
                    {xAxis:1, y: 350, name:'曹航', symbolSize:20, symbol: 'image://../asset/ico/柱状图.png'},
                    {xAxis:2, y: 350, name:'陈利飞', symbolSize:20, symbol: 'image://../asset/ico/散点图.png'},
                    {xAxis:3, y: 350, name:'田斐菡', symbolSize:20, symbol: 'image://../asset/ico/K线图.png'},
                    {xAxis:4, y: 350, name:'朱礼源', symbolSize:20, symbol: 'image://../asset/ico/饼状图.png'},
                    {xAxis:5, y: 350, name:'陈宽', symbolSize:20, symbol: 'image://../asset/ico/雷达图.png'},
                    {xAxis:6, y: 350, name:'邢铭哲', symbolSize:20, symbol: 'image://../asset/ico/和弦图.png'},
                ]
            }
        }
    ]
};
// 为echarts对象加载数据
myChart.setOption(option);