
/**
 * 获取一维高斯模糊核
 * @param radius 取样区域半径, 正数, 可选, 默认为 3 应为 大于等于3的奇数
 * @param sigma 标准方差, 可选, 默认取值为 1 / 3
 * @returns 得到 radius * radios 大小的高斯核
 */
export const getGaussBlurKernel = (radius: number = 3, sigma: number = 0.33) => {

    // 符合对称分布的x起始坐标
    const startX = -radius;

    let guassMatrix: number[] = [];
    let gaussSum = 0;

    // gauss公式
    // 以u为0的原点对称高斯函数
    const fx = (x) => {
        const u = 0;
        const a = 1 / (Math.sqrt(2 * Math.PI) * sigma);
        const b = -((x - u) ** 2) / (2 * (sigma ** 2));
        const y = a * Math.exp(b);
        return y;
    };

    // 因为高斯分布是对称，所以求解一半就行了
    // 求到0处即可
    for (let i = startX; i < 0; i += 1) {
        const y = fx(i);
        guassMatrix.push(y);
        gaussSum += y;
    }

    // 计算0的高斯正太值
    const oPointValue = fx(0);
    // 最后补充0右边高斯值
    guassMatrix = [...guassMatrix, oPointValue, ...guassMatrix.reverse()];

    // 得到高斯值总value
    gaussSum = gaussSum * 2 + oPointValue;

    // 归一化高斯值
    guassMatrix = guassMatrix.map(c => c / gaussSum);

    return guassMatrix;
}
