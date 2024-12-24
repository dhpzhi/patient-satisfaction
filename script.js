// 初始化图表
document.addEventListener('DOMContentLoaded', function() {
    // 月度趋势图表
    const monthlyTrendChart = echarts.init(document.getElementById('monthlyTrendChart'));
    const monthlyTrendOption = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            data: ['总体评级', '有效回访', '无效回访'],
            bottom: 0
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '10%',
            top: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
        },
        yAxis: {
            type: 'value',
            max: 100
        },
        series: [
            {
                name: '总体评级',
                type: 'bar',
                data: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
                itemStyle: {
                    color: '#50C878'
                }
            },
            {
                name: '有效回访',
                type: 'bar',
                data: [80, 65, 60, 50, 60, 75, 65, 70, 55, 60, 50, 60],
                itemStyle: {
                    color: '#4B7BE5'
                }
            },
            {
                name: '无效回访',
                type: 'bar',
                data: [20, 20, 15, 20, 20, 20, 15, 20, 15, 15, 20, 20],
                itemStyle: {
                    color: '#FFB347'
                }
            }
        ]
    };
    monthlyTrendChart.setOption(monthlyTrendOption);

    // 住院患者满意度饼图
    const inpatientPieChart = echarts.init(document.getElementById('inpatientPieChart'));
    const inpatientPieOption = {
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
            orient: 'vertical',
            right: 10,
            top: 'center',
            data: ['非常满意', '比较满意', '一般', '不满意']
        },
        series: [
            {
                name: '满意度分布',
                type: 'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: '16',
                        fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: false
                },
                data: [
                    {value: 81.84, name: '非常满意', itemStyle: {color: '#4B7BE5'}},
                    {value: 15.74, name: '比较满意', itemStyle: {color: '#50C878'}},
                    {value: 1.62, name: '一般', itemStyle: {color: '#FFB347'}},
                    {value: 0.8, name: '不满意', itemStyle: {color: '#FF6B6B'}}
                ]
            }
        ]
    };
    inpatientPieChart.setOption(inpatientPieOption);

    // 门诊患者满意度饼图
    const outpatientPieChart = echarts.init(document.getElementById('outpatientPieChart'));
    const outpatientPieOption = {
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
            orient: 'vertical',
            right: 10,
            top: 'center',
            data: ['非常满意', '比较满意', '一般', '不满意']
        },
        series: [
            {
                name: '满意度分布',
                type: 'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: '16',
                        fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: false
                },
                data: [
                    {value: 81.84, name: '非常满意', itemStyle: {color: '#4B7BE5'}},
                    {value: 15.74, name: '比较满意', itemStyle: {color: '#50C878'}},
                    {value: 1.62, name: '一般', itemStyle: {color: '#FFB347'}},
                    {value: 0.8, name: '不满意', itemStyle: {color: '#FF6B6B'}}
                ]
            }
        ]
    };
    outpatientPieChart.setOption(outpatientPieOption);

    // 响应式调整
    window.addEventListener('resize', function() {
        monthlyTrendChart.resize();
        inpatientPieChart.resize();
        outpatientPieChart.resize();
    });
}); 