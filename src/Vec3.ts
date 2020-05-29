
export default class Vec3 {
    static subtract(a: Float32Array, b: Float32Array) {
        const out = new Float32Array(3);
        out[0] = a[0] - b[0];
        out[1] = a[1] - b[1];
        out[2] = a[2] - b[2];

        return out;
    }

    static normalize(a: Float32Array) {
        const x = a[0];
        const y = a[1];
        const z = a[2];

        let len = x * x + y * y + z * z;

        if (len > 0) {
            len = 1 / Math.sqrt(len);
            a[0] = a[0] * len;
            a[1] = a[1] * len;
            a[2] = a[2] * len;
        }

        return a;
    }

    // ×乘
    static cross(a: Float32Array, b: Float32Array) {
        const out = new Float32Array(3);
        out[0] = a[1] * b[2] - a[2] * b[1];
        out[1] = a[2] * b[0] - a[0] * b[2];
        out[2] = a[0] * b[1] - a[1] * b[0];

        return out;
    }

    // ·乘
    static dot(a: Float32Array, b: Float32Array) {
        return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
    }
}
