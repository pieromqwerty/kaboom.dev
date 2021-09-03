var kaboom = (() => {
    var lt = Object.defineProperty,
        hn = Object.defineProperties;
    var fn = Object.getOwnPropertyDescriptors;
    var ht = Object.getOwnPropertySymbols;
    var mn = Object.prototype.hasOwnProperty,
        pn = Object.prototype.propertyIsEnumerable;
    var ft = (t, e, i) => (e in t ? lt(t, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : (t[e] = i)),
        pe = (t, e) => {
            for (var i in e || (e = {})) mn.call(e, i) && ft(t, i, e[i]);
            if (ht) for (var i of ht(e)) pn.call(e, i) && ft(t, i, e[i]);
            return t;
        },
        Te = (t, e) => hn(t, fn(e));
    var s = (t, e) => lt(t, "name", { value: e, configurable: !0 });
    var ae = (t, e) => () => (t && (e = t((t = 0))), e),
        Un = (t, e) => () => (e || t((e = { exports: {} }).exports, e), e.exports);
    var mt = (() => {
        for (var t = new Uint8Array(128), e = 0; e < 64; e++) t[e < 26 ? e + 65 : e < 52 ? e + 71 : e < 62 ? e - 4 : e * 4 - 205] = e;
        return (i) => {
            for (var a = i.length, U = new Uint8Array((((a - (i[a - 1] == "=") - (i[a - 2] == "=")) * 3) / 4) | 0), P = 0, A = 0; P < a; ) {
                var k = t[i.charCodeAt(P++)],
                    I = t[i.charCodeAt(P++)],
                    x = t[i.charCodeAt(P++)],
                    M = t[i.charCodeAt(P++)];
                (U[A++] = (k << 2) | (I >> 4)), (U[A++] = (I << 4) | (x >> 2)), (U[A++] = (x << 6) | M);
            }
            return U;
        };
    })();
    function pt(t) {
        return (t * Math.PI) / 180;
    }
    function Ut(t) {
        return (t * 180) / Math.PI;
    }
    function ce(t, e, i) {
        return e > i ? ce(t, i, e) : Math.min(Math.max(t, e), i);
    }
    function Oe(t, e, i) {
        return t + (e - t) * i;
    }
    function Pe(t, e, i, a, U) {
        return a + ((t - e) / (i - e)) * (U - a);
    }
    function bt(t, e, i, a, U) {
        return ce(Pe(t, e, i, a, U), a, U);
    }
    function l(...t) {
        if (t.length === 0) return l(0, 0);
        if (t.length === 1) {
            if (typeof t[0] == "number") return l(t[0], t[0]);
            if (_e(t[0])) return l(t[0].x, t[0].y);
            if (Array.isArray(t[0]) && t[0].length === 2) return l.apply(null, t[0]);
        }
        return {
            x: t[0],
            y: t[1],
            clone() {
                return l(this.x, this.y);
            },
            add(...e) {
                let i = l(...e);
                return l(this.x + i.x, this.y + i.y);
            },
            sub(...e) {
                let i = l(...e);
                return l(this.x - i.x, this.y - i.y);
            },
            scale(...e) {
                let i = l(...e);
                return l(this.x * i.x, this.y * i.y);
            },
            dist(...e) {
                let i = l(...e);
                return Math.sqrt((this.x - i.x) * (this.x - i.x) + (this.y - i.y) * (this.y - i.y));
            },
            len() {
                return this.dist(l(0, 0));
            },
            unit() {
                return this.scale(1 / this.len());
            },
            normal() {
                return l(this.y, -this.x);
            },
            dot(e) {
                return this.x * e.x + this.y + e.y;
            },
            angle(...e) {
                let i = l(...e);
                return Math.atan2(this.y - i.y, this.x - i.x);
            },
            lerp(e, i) {
                return l(Oe(this.x, e.x, i), Oe(this.y, e.y, i));
            },
            toFixed(e) {
                return l(this.x.toFixed(e), this.y.toFixed(e));
            },
            eq(e) {
                return this.x === e.x && this.y === e.y;
            },
            str() {
                return `(${this.x}, ${this.y})`;
            },
        };
    }
    function yt(t) {
        return l(Math.cos(t), Math.sin(t));
    }
    function Ue(t, e, i) {
        return {
            x: t,
            y: e,
            z: i,
            xy() {
                return l(this.x, this.y);
            },
        };
    }
    function _e(t) {
        return t !== void 0 && t.x !== void 0 && t.y !== void 0;
    }
    function gt(t) {
        return t !== void 0 && t.x !== void 0 && t.y !== void 0 && t.z !== void 0;
    }
    function Ce(t) {
        return t !== void 0 && t.r !== void 0 && t.g !== void 0 && t.b !== void 0 && t.a !== void 0;
    }
    function xt(t) {
        if (t !== void 0 && Array.isArray(t.m) && t.m.length === 16) return t;
    }
    function Ae(...t) {
        if (t.length === 0) return z();
        if (t.length === 1) {
            if (Ce(t[0])) return z(t[0]);
            if (Array.isArray(t[0]) && t[0].length === 3) return Ae.apply(null, t[0]);
        }
        return z(t[0], t[1], t[2], 1);
    }
    function z(...t) {
        var e;
        if (t.length === 0) return z(1, 1, 1, 1);
        if (t.length === 1) {
            if (Ce(t[0])) return z(t[0].r, t[0].g, t[0].b, t[0].a);
            if (Array.isArray(t[0]) && t[0].length === 4) return z.apply(null, t[0]);
        }
        return {
            r: t[0],
            g: t[1],
            b: t[2],
            a: (e = t[3]) != null ? e : 1,
            clone() {
                return z(this.r, this.g, this.b, this.a);
            },
            lighten(i) {
                return z(this.r + i, this.g + i, this.b + i, this.a);
            },
            darken(i) {
                return this.lighten(-i);
            },
            invert() {
                return z(1 - this.r, 1 - this.g, 1 - this.b, this.a);
            },
            isDark(i = 0.5) {
                return this.r + this.g + this.b < 3 * i;
            },
            isLight(i = 0.5) {
                return this.r + this.g + this.b > 3 * i;
            },
            eq(i) {
                return this.r === i.r && this.g === i.g && this.b === i.g && this.a === i.a;
            },
        };
    }
    function re(t, e, i, a) {
        return {
            x: t,
            y: e,
            w: i,
            h: a,
            scale(U) {
                return re(this.x + this.w * U.x, this.y + this.h * U.y, this.w * U.w, this.h * U.h);
            },
            clone() {
                return re(this.x, this.y, this.w, this.h);
            },
            eq(U) {
                return this.x === U.x && this.y === U.y && this.w === U.w && this.h === U.h;
            },
        };
    }
    function te(t) {
        return {
            m: t ? [...t] : [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
            clone() {
                return te(this.m);
            },
            mult(e) {
                let i = [];
                for (let a = 0; a < 4; a++) for (let U = 0; U < 4; U++) i[a * 4 + U] = this.m[0 * 4 + U] * e.m[a * 4 + 0] + this.m[1 * 4 + U] * e.m[a * 4 + 1] + this.m[2 * 4 + U] * e.m[a * 4 + 2] + this.m[3 * 4 + U] * e.m[a * 4 + 3];
                return te(i);
            },
            multVec4(e) {
                return {
                    x: e.x * this.m[0] + e.y * this.m[4] + e.z * this.m[8] + e.w * this.m[12],
                    y: e.x * this.m[1] + e.y * this.m[5] + e.z * this.m[9] + e.w * this.m[13],
                    z: e.x * this.m[2] + e.y * this.m[6] + e.z * this.m[10] + e.w * this.m[14],
                    w: e.x * this.m[3] + e.y * this.m[7] + e.z * this.m[11] + e.w * this.m[15],
                };
            },
            multVec3(e) {
                let i = this.multVec4({ x: e.x, y: e.y, z: e.z, w: 1 });
                return Ue(i.x, i.y, i.z);
            },
            multVec2(e) {
                return l(e.x * this.m[0] + e.y * this.m[4] + 0 * this.m[8] + 1 * this.m[12], e.x * this.m[1] + e.y * this.m[5] + 0 * this.m[9] + 1 * this.m[13]);
            },
            translate(e) {
                return this.mult(te([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, e.x, e.y, 0, 1]));
            },
            scale(e) {
                return this.mult(te([e.x, 0, 0, 0, 0, e.y, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]));
            },
            rotateX(e) {
                return this.mult(te([1, 0, 0, 0, 0, Math.cos(e), -Math.sin(e), 0, 0, Math.sin(e), Math.cos(e), 0, 0, 0, 0, 1]));
            },
            rotateY(e) {
                return this.mult(te([Math.cos(e), 0, -Math.sin(e), 0, 0, 1, 0, 0, Math.sin(e), 0, Math.cos(e), 0, 0, 0, 0, 1]));
            },
            rotateZ(e) {
                return this.mult(te([Math.cos(e), -Math.sin(e), 0, 0, Math.sin(e), Math.cos(e), 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]));
            },
            invert() {
                let e = [],
                    i = this.m[10] * this.m[15] - this.m[14] * this.m[11],
                    a = this.m[9] * this.m[15] - this.m[13] * this.m[11],
                    U = this.m[9] * this.m[14] - this.m[13] * this.m[10],
                    P = this.m[8] * this.m[15] - this.m[12] * this.m[11],
                    A = this.m[8] * this.m[14] - this.m[12] * this.m[10],
                    k = this.m[8] * this.m[13] - this.m[12] * this.m[9],
                    I = this.m[6] * this.m[15] - this.m[14] * this.m[7],
                    x = this.m[5] * this.m[15] - this.m[13] * this.m[7],
                    M = this.m[5] * this.m[14] - this.m[13] * this.m[6],
                    B = this.m[4] * this.m[15] - this.m[12] * this.m[7],
                    D = this.m[4] * this.m[14] - this.m[12] * this.m[6],
                    C = this.m[5] * this.m[15] - this.m[13] * this.m[7],
                    R = this.m[4] * this.m[13] - this.m[12] * this.m[5],
                    H = this.m[6] * this.m[11] - this.m[10] * this.m[7],
                    F = this.m[5] * this.m[11] - this.m[9] * this.m[7],
                    q = this.m[5] * this.m[10] - this.m[9] * this.m[6],
                    O = this.m[4] * this.m[11] - this.m[8] * this.m[7],
                    c = this.m[4] * this.m[10] - this.m[8] * this.m[6],
                    $ = this.m[4] * this.m[9] - this.m[8] * this.m[5];
                (e[0] = this.m[5] * i - this.m[6] * a + this.m[7] * U),
                    (e[4] = -(this.m[4] * i - this.m[6] * P + this.m[7] * A)),
                    (e[8] = this.m[4] * a - this.m[5] * P + this.m[7] * k),
                    (e[12] = -(this.m[4] * U - this.m[5] * A + this.m[6] * k)),
                    (e[1] = -(this.m[1] * i - this.m[2] * a + this.m[3] * U)),
                    (e[5] = this.m[0] * i - this.m[2] * P + this.m[3] * A),
                    (e[9] = -(this.m[0] * a - this.m[1] * P + this.m[3] * k)),
                    (e[13] = this.m[0] * U - this.m[1] * A + this.m[2] * k),
                    (e[2] = this.m[1] * I - this.m[2] * x + this.m[3] * M),
                    (e[6] = -(this.m[0] * I - this.m[2] * B + this.m[3] * D)),
                    (e[10] = this.m[0] * C - this.m[1] * B + this.m[3] * R),
                    (e[14] = -(this.m[0] * M - this.m[1] * D + this.m[2] * R)),
                    (e[3] = -(this.m[1] * H - this.m[2] * F + this.m[3] * q)),
                    (e[7] = this.m[0] * H - this.m[2] * O + this.m[3] * c),
                    (e[11] = -(this.m[0] * F - this.m[1] * O + this.m[3] * $)),
                    (e[15] = this.m[0] * q - this.m[1] * c + this.m[2] * $);
                let j = this.m[0] * e[0] + this.m[1] * e[4] + this.m[2] * e[8] + this.m[3] * e[12];
                for (let N = 0; N < 4; N++) for (let se = 0; se < 4; se++) e[N * 4 + se] *= 1 / j;
                return te(e);
            },
        };
    }
    function wt(t, e, i) {
        return t + ((Math.sin(i) + 1) / 2) * (e - t);
    }
    function et(t) {
        return {
            seed: t,
            gen(...e) {
                if (e.length === 0) return (this.seed = (bn * this.seed + yn) % vt), this.seed / vt;
                if (e.length === 1) {
                    if (typeof e[0] == "number") return this.gen(0, e[0]);
                    if (_e(e[0])) return this.gen(l(0, 0), e[0]);
                    if (Ce(e[0])) return this.gen(z(0, 0, 0, 0), e[0]);
                } else if (e.length === 2) {
                    if (typeof e[0] == "number" && typeof e[1] == "number") return this.gen() * (e[1] - e[0]) + e[0];
                    if (_e(e[0]) && _e(e[1])) return l(this.gen(e[0].x, e[1].x), this.gen(e[0].y, e[1].y));
                    if (Ce(e[0]) && Ce(e[1])) return z(this.gen(e[0].r, e[1].r), this.gen(e[0].g, e[1].g), this.gen(e[0].b, e[1].b), this.gen(e[0].a, e[1].a));
                }
            },
        };
    }
    function Et(t) {
        return t != null && (Ke.seed = t), Ke.seed;
    }
    function Be(...t) {
        return Ke.gen(...t);
    }
    function Tt(t) {
        return Be() <= t;
    }
    function Ct(t) {
        return t[Math.floor(Be(t.length))];
    }
    function tt(t, e) {
        return t.p2.x >= e.p1.x && t.p1.x <= e.p2.x && t.p2.y >= e.p1.y && t.p1.y <= e.p2.y;
    }
    function At(t, e) {
        return t.p2.x > e.p1.x && t.p1.x < e.p2.x && t.p2.y > e.p1.y && t.p1.y < e.p2.y;
    }
    function Rt(t, e) {
        return e.x >= t.p1.x && e.x <= t.p2.x && e.y >= t.p1.y && e.y < t.p2.y;
    }
    var bn,
        yn,
        vt,
        Ke,
        Re = ae(() => {
            s(pt, "deg2rad");
            s(Ut, "rad2deg");
            s(ce, "clamp");
            s(Oe, "lerp");
            s(Pe, "map");
            s(bt, "mapc");
            s(l, "vec2");
            s(yt, "vec2FromAngle");
            s(Ue, "vec3");
            s(_e, "isVec2");
            s(gt, "isVec3");
            s(Ce, "isColor");
            s(xt, "isMat4");
            s(Ae, "rgb");
            s(z, "rgba");
            s(re, "quad");
            s(te, "mat4");
            s(wt, "wave");
            (bn = 1103515245), (yn = 12345), (vt = 2147483648), (Ke = et(Date.now()));
            s(et, "makeRng");
            s(Et, "randSeed");
            s(Be, "rand");
            s(Tt, "chance");
            s(Ct, "choose");
            s(tt, "colRectRect");
            s(At, "overlapRectRect");
            s(Rt, "colRectPt");
        });
    function nt(t, e) {
        let i = typeof t,
            a = typeof e;
        if (i !== a) return !1;
        if (i === "object" && a === "object") {
            let U = Object.keys(t),
                P = Object.keys(e);
            if (U.length !== P.length) return !1;
            for (let A of U) {
                let k = t[A],
                    I = e[A];
                if (!(typeof k == "function" && typeof I == "function") && !nt(k, I)) return !1;
            }
            return !0;
        }
        return t === e;
    }
    var St = ae(() => {
        s(nt, "deepEq");
    });
    function Le(t) {
        switch (t) {
            case "topleft":
                return l(-1, -1);
            case "top":
                return l(0, -1);
            case "topright":
                return l(1, -1);
            case "left":
                return l(-1, 0);
            case "center":
                return l(0, 0);
            case "right":
                return l(1, 0);
            case "botleft":
                return l(-1, 1);
            case "bot":
                return l(0, 1);
            case "botright":
                return l(1, 1);
            default:
                return t;
        }
    }
    function Pt(t, e) {
        let i = (() => {
                switch (e.texFilter) {
                    case "linear":
                        return t.LINEAR;
                    case "nearest":
                        return t.NEAREST;
                    default:
                        return t.NEAREST;
                }
            })(),
            a = (() => {
                var X;
                let m = A(rt, st),
                    p = P(new ImageData(new Uint8ClampedArray([255, 255, 255, 255]), 1, 1)),
                    y = (X = e.clearColor) != null ? X : z(0, 0, 0, 1);
                t.clearColor(y.r, y.g, y.b, y.a), t.enable(t.BLEND), t.blendFuncSeparate(t.SRC_ALPHA, t.ONE_MINUS_SRC_ALPHA, t.ONE, t.ONE_MINUS_SRC_ALPHA);
                let v = t.createBuffer();
                t.bindBuffer(t.ARRAY_BUFFER, v), t.bufferData(t.ARRAY_BUFFER, We * 4, t.DYNAMIC_DRAW), t.bindBuffer(t.ARRAY_BUFFER, null);
                let L = t.createBuffer();
                t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, L), t.bufferData(t.ELEMENT_ARRAY_BUFFER, We * 2, t.DYNAMIC_DRAW), t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, null);
                let _ = P(new ImageData(new Uint8ClampedArray([128, 128, 128, 255, 190, 190, 190, 255, 190, 190, 190, 255, 128, 128, 128, 255]), 2, 2));
                return { drawCalls: 0, lastDrawCalls: 0, defProg: m, curProg: m, defTex: p, curTex: p, curUniform: {}, vbuf: v, ibuf: L, vqueue: [], iqueue: [], transform: te(), transformStack: [], clearColor: y, bgTex: _ };
            })();
        M(), B();
        function U(m) {
            return (Math.log(m) / Math.log(2)) % 1 == 0;
        }
        s(U, "powerOfTwo");
        function P(m) {
            let p = t.createTexture();
            t.bindTexture(t.TEXTURE_2D, p), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, t.RGBA, t.UNSIGNED_BYTE, m), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, i), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, i);
            let y = (() => (U(m.width) && U(m.height) ? t.REPEAT : t.CLAMP_TO_EDGE))();
            return (
                t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, y),
                t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, y),
                t.bindTexture(t.TEXTURE_2D, null),
                {
                    width: m.width,
                    height: m.height,
                    bind() {
                        t.bindTexture(t.TEXTURE_2D, p);
                    },
                    unbind() {
                        t.bindTexture(t.TEXTURE_2D, null);
                    },
                }
            );
        }
        s(P, "makeTex");
        function A(m = rt, p = st) {
            let y,
                v = gn.replace("{{user}}", m != null ? m : rt),
                L = xn.replace("{{user}}", p != null ? p : st),
                _ = t.createShader(t.VERTEX_SHADER),
                X = t.createShader(t.FRAGMENT_SHADER);
            if ((t.shaderSource(_, v), t.shaderSource(X, L), t.compileShader(_), t.compileShader(X), (y = t.getShaderInfoLog(_)))) throw new Error(y);
            if ((y = t.getShaderInfoLog(X))) throw new Error(y);
            let S = t.createProgram();
            if (
                (t.attachShader(S, _),
                t.attachShader(S, X),
                t.bindAttribLocation(S, 0, "a_pos"),
                t.bindAttribLocation(S, 1, "a_uv"),
                t.bindAttribLocation(S, 2, "a_color"),
                t.linkProgram(S),
                (y = t.getProgramInfoLog(S)) &&
                    y !==
                        `
`)
            )
                throw new Error(y);
            return {
                bind() {
                    t.useProgram(S);
                },
                unbind() {
                    t.useProgram(null);
                },
                bindAttribs() {
                    t.vertexAttribPointer(0, 3, t.FLOAT, !1, qe * 4, 0),
                        t.enableVertexAttribArray(0),
                        t.vertexAttribPointer(1, 2, t.FLOAT, !1, qe * 4, 12),
                        t.enableVertexAttribArray(1),
                        t.vertexAttribPointer(2, 4, t.FLOAT, !1, qe * 4, 20),
                        t.enableVertexAttribArray(2);
                },
                send(T) {
                    this.bind();
                    for (let J in T) {
                        let G = T[J],
                            W = t.getUniformLocation(S, J);
                        typeof G == "number"
                            ? t.uniform1f(W, G)
                            : xt(G)
                            ? t.uniformMatrix4fv(W, !1, new Float32Array(G.m))
                            : Ce(G)
                            ? t.uniform4f(W, G.r, G.g, G.b, G.a)
                            : gt(G)
                            ? t.uniform3f(W, G.x, G.y, G.z)
                            : _e(G) && t.uniform2f(W, G.x, G.y);
                    }
                    this.unbind();
                },
            };
        }
        s(A, "makeProgram");
        function k(m, p, y, v) {
            let L = m.width / p,
                _ = m.height / y,
                X = 1 / L,
                S = 1 / _,
                T = {},
                J = v.split("").entries();
            for (let [G, W] of J) T[W] = l((G % L) * X, Math.floor(G / L) * S);
            return { tex: m, map: T, qw: X, qh: S };
        }
        s(k, "makeFont");
        function I(m, p, y = a.defTex, v = a.defProg, L = {}) {
            (y = y != null ? y : a.defTex),
                (v = v != null ? v : a.defProg),
                (y !== a.curTex || v !== a.curProg || !nt(a.curUniform, L) || a.vqueue.length + m.length * qe > We || a.iqueue.length + p.length > We) && x(),
                (a.curTex = y),
                (a.curProg = v),
                (a.curUniform = L);
            let _ = p.map((S) => S + a.vqueue.length / qe),
                X = m
                    .map((S) => {
                        let T = C(a.transform.multVec2(S.pos.xy()));
                        return [T.x, T.y, S.pos.z, S.uv.x, S.uv.y, S.color.r, S.color.g, S.color.b, S.color.a];
                    })
                    .flat();
            _.forEach((S) => a.iqueue.push(S)), X.forEach((S) => a.vqueue.push(S));
        }
        s(I, "drawRaw");
        function x() {
            !a.curTex ||
                !a.curProg ||
                a.vqueue.length === 0 ||
                a.iqueue.length === 0 ||
                (a.curProg.send(a.curUniform),
                t.bindBuffer(t.ARRAY_BUFFER, a.vbuf),
                t.bufferSubData(t.ARRAY_BUFFER, 0, new Float32Array(a.vqueue)),
                t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, a.ibuf),
                t.bufferSubData(t.ELEMENT_ARRAY_BUFFER, 0, new Uint16Array(a.iqueue)),
                a.curProg.bind(),
                a.curProg.bindAttribs(),
                a.curTex.bind(),
                t.drawElements(t.TRIANGLES, a.iqueue.length, t.UNSIGNED_SHORT, 0),
                a.curTex.unbind(),
                a.curProg.unbind(),
                t.bindBuffer(t.ARRAY_BUFFER, null),
                t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, null),
                (a.iqueue = []),
                (a.vqueue = []),
                a.drawCalls++);
        }
        s(x, "flush");
        function M() {
            t.clear(t.COLOR_BUFFER_BIT), e.clearColor || N({ width: oe(), height: ye(), quad: re(0, 0, (oe() * ve()) / Dt, (ye() * ve()) / Dt), tex: a.bgTex }), (a.drawCalls = 0), (a.transformStack = []), (a.transform = te());
        }
        s(M, "frameStart");
        function B() {
            x(), (a.lastDrawCalls = a.drawCalls);
        }
        s(B, "frameEnd");
        function D() {
            return a.lastDrawCalls;
        }
        s(D, "drawCalls");
        function C(m) {
            return l((m.x / oe()) * 2 - 1, (-m.y / ye()) * 2 + 1);
        }
        s(C, "toNDC");
        function R(m) {
            a.transform = m.clone();
        }
        s(R, "pushMatrix");
        function H(m) {
            !m || (m.x === 0 && m.y === 0) || (a.transform = a.transform.translate(m));
        }
        s(H, "pushTranslate");
        function F(m) {
            !m || (m.x === 1 && m.y === 1) || (a.transform = a.transform.scale(m));
        }
        s(F, "pushScale");
        function q(m) {
            !m || (a.transform = a.transform.rotateX(m));
        }
        s(q, "pushRotateX");
        function O(m) {
            !m || (a.transform = a.transform.rotateY(m));
        }
        s(O, "pushRotateY");
        function c(m) {
            !m || (a.transform = a.transform.rotateZ(m));
        }
        s(c, "pushRotateZ");
        function $() {
            a.transformStack.push(a.transform.clone());
        }
        s($, "pushTransform");
        function j() {
            a.transformStack.length > 0 && (a.transform = a.transformStack.pop());
        }
        s(j, "popTransform");
        function N(m = {}) {
            var W, ee;
            let p = m.width || 0,
                y = m.height || 0,
                v = m.pos || l(0, 0),
                _ = Le(m.origin || $e).scale(l(p, y).scale(-0.5)),
                X = l((W = m.scale) != null ? W : 1),
                S = m.rot || 0,
                T = m.quad || re(0, 0, 1, 1),
                J = 1 - ((ee = m.z) != null ? ee : 0),
                G = m.color || z(1, 1, 1, 1);
            $(),
                H(v),
                c(S),
                F(X),
                H(_),
                I(
                    [
                        { pos: Ue(-p / 2, y / 2, J), uv: l(m.flipX ? T.x + T.w : T.x, m.flipY ? T.y : T.y + T.h), color: G },
                        { pos: Ue(-p / 2, -y / 2, J), uv: l(m.flipX ? T.x + T.w : T.x, m.flipY ? T.y + T.h : T.y), color: G },
                        { pos: Ue(p / 2, -y / 2, J), uv: l(m.flipX ? T.x : T.x + T.w, m.flipY ? T.y + T.h : T.y), color: G },
                        { pos: Ue(p / 2, y / 2, J), uv: l(m.flipX ? T.x : T.x + T.w, m.flipY ? T.y : T.y + T.h), color: G },
                    ],
                    [0, 1, 3, 1, 2, 3],
                    m.tex,
                    m.prog,
                    m.uniform
                ),
                j();
        }
        s(N, "drawQuad");
        function se(m, p = {}) {
            var X;
            let y = (X = p.quad) != null ? X : re(0, 0, 1, 1),
                v = m.width * y.w,
                L = m.height * y.h,
                _ = l(1);
            if (p.tiled) {
                let S = Math.ceil((p.width || v) / v),
                    T = Math.ceil((p.height || L) / L),
                    G = Le(p.origin || $e)
                        .add(l(1, 1))
                        .scale(0.5)
                        .scale(S * v, T * L);
                for (let W = 0; W < S; W++) for (let ee = 0; ee < T; ee++) N(Te(pe({}, p), { pos: (p.pos || l(0)).add(l(v * W, L * ee)).sub(G), scale: _.scale(p.scale || l(1)), tex: m, quad: y, width: v, height: L, origin: "topleft" }));
            } else
                p.width && p.height ? ((_.x = p.width / v), (_.y = p.height / L)) : p.width ? ((_.x = p.width / v), (_.y = _.x)) : p.height && ((_.y = p.height / L), (_.x = _.y)),
                    N(Te(pe({}, p), { scale: _.scale(p.scale || l(1)), tex: m, quad: y, width: v, height: L }));
        }
        s(se, "drawTexture");
        function de(m, p, y, v = {}) {
            N(Te(pe({}, v), { pos: m, width: p, height: y }));
        }
        s(de, "drawRect");
        function le(m, p, y, v = {}) {
            let L = Le(v.origin || $e)
                    .scale(l(p, y))
                    .scale(0.5),
                _ = m.add(l(-p / 2, -y / 2)).sub(L),
                X = m.add(l(-p / 2, y / 2)).sub(L),
                S = m.add(l(p / 2, y / 2)).sub(L),
                T = m.add(l(p / 2, -y / 2)).sub(L);
            w(_, X, v), w(X, S, v), w(S, T, v), w(T, _, v);
        }
        s(le, "drawRectStroke");
        function w(m, p, y = {}) {
            let v = y.width || 1,
                L = m.dist(p),
                _ = Math.PI / 2 - m.angle(p);
            N(Te(pe({}, y), { pos: m.add(p).scale(0.5), width: v, height: L, rot: _, origin: "center" }));
        }
        s(w, "drawLine");
        function V(m, p, y, v = {}) {
            let L = v.z,
                _ = v.color || Ae(1, 1, 1);
            I(
                [
                    { pos: Ue(m.x, m.y, L), uv: l(0, 0), color: _ },
                    { pos: Ue(p.x, p.y, L), uv: l(0, 0), color: _ },
                    { pos: Ue(y.x, y.y, L), uv: l(0, 0), color: _ },
                ],
                [0, 1, 2],
                a.defTex,
                v.prog,
                v.uniform
            );
        }
        s(V, "drawTri");
        function ue(m, p, y = {}) {
            let v = (m + "").split(""),
                L = p.qw * p.tex.width,
                _ = p.qh * p.tex.height,
                X = y.size || _,
                S = l(X / _).scale(l(y.scale || 1)),
                T = S.x * L,
                J = S.y * _,
                G = 0,
                W = J,
                ee = 0,
                Se = [],
                K = [],
                ne = null,
                fe = 0;
            for (; fe < v.length; ) {
                let ie = v[fe];
                ie ===
                `
`
                    ? ((W += J), (G = 0), (ne = null), Se.push(K), (K = []))
                    : (y.width ? G + T > y.width : !1) && ((W += J), (G = 0), ne != null && ((fe -= K.length - ne), (ie = v[fe]), (K = K.slice(0, ne))), (ne = null), Se.push(K), (K = [])),
                    ie !==
                        `
` && (K.push(ie), (G += T), ie === " " && (ne = K.length)),
                    (ee = Math.max(ee, G)),
                    fe++;
            }
            Se.push(K), y.width && (ee = y.width);
            let me = [],
                je = l(y.pos || 0),
                ge = Le(y.origin || $e).scale(0.5),
                Ne = -ge.x * T - (ge.x + 0.5) * (ee - T),
                Qe = -ge.y * J - (ge.y + 0.5) * (W - J);
            return (
                Se.forEach((ie, Fe) => {
                    let Ye = (ee - ie.length * T) * (ge.x + 0.5);
                    ie.forEach((Me, Ee) => {
                        let xe = p.map[Me],
                            Ie = Ee * T,
                            De = Fe * J;
                        xe && me.push({ tex: p.tex, quad: re(xe.x, xe.y, p.qw, p.qh), ch: Me, pos: l(je.x + Ie + Ne + Ye, je.y + De + Qe), color: y.color, origin: y.origin, scale: S, z: y.z });
                    });
                }),
                { width: ee, height: W, chars: me }
            );
        }
        s(ue, "fmtText");
        function be(m, p, y = {}) {
            he(ue(m, p, y));
        }
        s(be, "drawText");
        function he(m) {
            for (let p of m.chars) N({ tex: p.tex, width: p.tex.width * p.quad.w, height: p.tex.height * p.quad.h, pos: p.pos, scale: p.scale, color: p.color, quad: p.quad, origin: "center", z: p.z });
        }
        s(he, "drawFmtText");
        function oe() {
            return t.drawingBufferWidth / ve();
        }
        s(oe, "width");
        function ye() {
            return t.drawingBufferHeight / ve();
        }
        s(ye, "height");
        function ve() {
            var m;
            return (m = e.scale) != null ? m : 1;
        }
        s(ve, "scale");
        function Je() {
            return a.clearColor.clone();
        }
        return (
            s(Je, "clearColor"),
            {
                width: oe,
                height: ye,
                scale: ve,
                makeTex: P,
                makeProgram: A,
                makeFont: k,
                drawTexture: se,
                drawText: be,
                drawFmtText: he,
                drawRect: de,
                drawRectStroke: le,
                drawLine: w,
                drawTri: V,
                fmtText: ue,
                frameStart: M,
                frameEnd: B,
                pushTransform: $,
                popTransform: j,
                pushMatrix: R,
                drawCalls: D,
                clearColor: Je,
            }
        );
    }
    var $e,
        qe,
        We,
        Dt,
        gn,
        xn,
        rt,
        st,
        _t = ae(() => {
            Re();
            St();
            ($e = "topleft"),
                (qe = 9),
                (We = 65536),
                (Dt = 64),
                (gn = `
attribute vec3 a_pos;
attribute vec2 a_uv;
attribute vec4 a_color;

varying vec3 v_pos;
varying vec2 v_uv;
varying vec4 v_color;

vec4 def_vert() {
	return vec4(a_pos, 1.0);
}

{{user}}

void main() {
	vec4 pos = vert(a_pos, a_uv, a_color);
	v_pos = a_pos;
	v_uv = a_uv;
	v_color = a_color;
	gl_Position = pos;
}
`),
                (xn = `
precision mediump float;

varying vec3 v_pos;
varying vec2 v_uv;
varying vec4 v_color;

uniform sampler2D u_tex;

vec4 def_frag() {
	return v_color * texture2D(u_tex, v_uv);
}

{{user}}

void main() {
	gl_FragColor = frag(v_pos, v_uv, v_color, u_tex);
	if (gl_FragColor.a == 0.0) {
		discard;
	}
}
`),
                (rt = `
vec4 vert(vec3 pos, vec2 uv, vec4 color) {
	return def_vert();
}
`),
                (st = `
vec4 frag(vec3 pos, vec2 uv, vec4 color, sampler2D tex) {
	return def_frag();
}
`);
            s(Le, "originPt");
            s(Pt, "gfxInit");
        });
    function Lt(t) {
        return t === "pressed" || t === "rpressed" ? "down" : t === "released" ? "up" : t;
    }
    function kt(t = {}) {
        var de, le;
        let e = {
                canvas:
                    (de = t.canvas) != null
                        ? de
                        : (() => {
                              var V;
                              let w = document.createElement("canvas");
                              return ((V = t.root) != null ? V : document.body).appendChild(w), w;
                          })(),
                keyStates: {},
                charInputted: [],
                mouseMoved: !1,
                mouseState: "up",
                mousePos: l(0, 0),
                mouseDeltaPos: l(0, 0),
                time: 0,
                realTime: 0,
                skipTime: !1,
                dt: 0,
                scale: (le = t.scale) != null ? le : 1,
                isTouch: !1,
                loopID: null,
                stopped: !1,
                fps: 0,
                fpsBuf: [],
                fpsTimer: 0,
            },
            i = { ArrowLeft: "left", ArrowRight: "right", ArrowUp: "up", ArrowDown: "down", " ": "space" },
            a = ["space", "left", "right", "up", "down", "tab", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "f10", "f11"];
        t.fullscreen ? ((e.canvas.width = window.innerWidth), (e.canvas.height = window.innerHeight)) : ((e.canvas.width = (t.width || 640) * e.scale), (e.canvas.height = (t.height || 480) * e.scale));
        let U = ["outline: none", "cursor: default"];
        t.crisp && (U.push("image-rendering: pixelated"), U.push("image-rendering: crisp-edges")), (e.canvas.style = U.join(";")), e.canvas.setAttribute("tabindex", "0");
        let P = e.canvas.getContext("webgl", { antialias: !0, depth: !0, stencil: !0, alpha: !0, preserveDrawingBuffer: !0 });
        (e.isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0),
            e.canvas.addEventListener("mousemove", (w) => {
                (e.mousePos = l(w.offsetX, w.offsetY).scale(1 / e.scale)), (e.mouseDeltaPos = l(w.movementX, w.movementY).scale(1 / e.scale)), (e.mouseMoved = !0);
            }),
            e.canvas.addEventListener("mousedown", () => {
                e.mouseState = "pressed";
            }),
            e.canvas.addEventListener("mouseup", () => {
                e.mouseState = "released";
            }),
            e.canvas.addEventListener("keydown", (w) => {
                let V = i[w.key] || w.key.toLowerCase();
                a.includes(V) && w.preventDefault(), V.length === 1 && e.charInputted.push(V), V === "space" && e.charInputted.push(" "), w.repeat ? (e.keyStates[V] = "rpressed") : (e.keyStates[V] = "pressed");
            }),
            e.canvas.addEventListener("keyup", (w) => {
                let V = i[w.key] || w.key.toLowerCase();
                e.keyStates[V] = "released";
            }),
            e.canvas.addEventListener("touchstart", (w) => {
                if (!t.touchToMouse) return;
                w.preventDefault();
                let V = w.touches[0];
                (e.mousePos = l(V.clientX, V.clientY).scale(1 / e.scale)), (e.mouseState = "pressed");
            }),
            e.canvas.addEventListener("touchmove", (w) => {
                if (!t.touchToMouse) return;
                w.preventDefault();
                let V = w.touches[0];
                (e.mousePos = l(V.clientX, V.clientY).scale(1 / e.scale)), (e.mouseMoved = !0);
            }),
            e.canvas.addEventListener("touchend", (w) => {
                !t.touchToMouse || (e.mouseState = "released");
            }),
            e.canvas.addEventListener("touchcancel", (w) => {
                !t.touchToMouse || (e.mouseState = "released");
            }),
            document.addEventListener("visibilitychange", () => {
                switch (document.visibilityState) {
                    case "visible":
                        e.skipTime = !0;
                        break;
                    case "hidden":
                        break;
                }
            });
        function A() {
            return e.mousePos.clone();
        }
        s(A, "mousePos");
        function k() {
            return e.mouseDeltaPos.clone();
        }
        s(k, "mouseDeltaPos");
        function I() {
            return e.mouseState === "pressed";
        }
        s(I, "mouseClicked");
        function x() {
            return e.mouseState === "pressed" || e.mouseState === "down";
        }
        s(x, "mouseDown");
        function M() {
            return e.mouseState === "released";
        }
        s(M, "mouseReleased");
        function B() {
            return e.mouseMoved;
        }
        s(B, "mouseMoved");
        function D(w) {
            return e.keyStates[w] === "pressed";
        }
        s(D, "keyPressed");
        function C(w) {
            return e.keyStates[w] === "pressed" || e.keyStates[w] === "rpressed";
        }
        s(C, "keyPressedRep");
        function R(w) {
            return e.keyStates[w] === "pressed" || e.keyStates[w] === "rpressed" || e.keyStates[w] === "down";
        }
        s(R, "keyDown");
        function H(w) {
            return e.keyStates[w] === "released";
        }
        s(H, "keyReleased");
        function F() {
            return [...e.charInputted];
        }
        s(F, "charInputted");
        function q() {
            return e.dt;
        }
        s(q, "dt");
        function O() {
            return e.time;
        }
        s(O, "time");
        function c() {
            return e.fps;
        }
        s(c, "fps");
        function $() {
            return e.canvas.toDataURL();
        }
        s($, "screenshot");
        function j(w) {
            return w && (e.canvas.style.cursor = w != null ? w : "default"), e.canvas.style.cursor;
        }
        s(j, "cursor");
        function N(w) {
            let V = s((ue) => {
                let be = ue / 1e3,
                    he = be - e.realTime;
                (e.realTime = be),
                    e.skipTime ||
                        ((e.dt = he), (e.time += e.dt), e.fpsBuf.push(1 / e.dt), (e.fpsTimer += e.dt), e.fpsTimer >= 1 && ((e.fpsTimer = 0), (e.fps = Math.round(e.fpsBuf.reduce((oe, ye) => oe + ye) / e.fpsBuf.length)), (e.fpsBuf = []))),
                    (e.skipTime = !1),
                    w();
                for (let oe in e.keyStates) e.keyStates[oe] = Lt(e.keyStates[oe]);
                (e.mouseState = Lt(e.mouseState)), (e.charInputted = []), (e.mouseMoved = !1), e.stopped || (e.loopID = requestAnimationFrame(V));
            }, "frame");
            e.loopID = requestAnimationFrame(V);
        }
        s(N, "run");
        function se() {
            cancelAnimationFrame(e.loopID), (e.stopped = !0);
        }
        return (
            s(se, "quit"),
            {
                gl: P,
                mousePos: A,
                mouseDeltaPos: k,
                keyDown: R,
                keyPressed: D,
                keyPressedRep: C,
                keyReleased: H,
                mouseDown: x,
                mouseClicked: I,
                mouseReleased: M,
                mouseMoved: B,
                charInputted: F,
                cursor: j,
                dt: q,
                time: O,
                fps: c,
                screenshot: $,
                run: N,
                quit: se,
                focused: () => document.activeElement === e.canvas,
                focus: () => e.canvas.focus(),
                canvas: e.canvas,
                isTouch: e.isTouch,
                scale: e.scale,
            }
        );
    }
    var Ft = ae(() => {
        Re();
        s(Lt, "processBtnState");
        s(kt, "appInit");
    });
    var It,
        Mt = ae(() => {
            It = mt(
                "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L5QNSqT5iiySS9Ja2SV//5ME0ak//+4KgAAABgQBAADAMDgYCAEgCteQ0fZH6+ICXA357+MPfhR/+ywRf/U///LVTEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+5JknQAFoWhGLm5gBClBmT3GiAAAAAGkHAAAIAAANIOAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV"
            );
        });
    function Ot() {
        let t = (() => {
                let A = new (window.AudioContext || window.webkitAudioContext)(),
                    k = A.createGain(),
                    I = k;
                return I.connect(A.destination), { ctx: A, gainNode: k, masterNode: I };
            })(),
            e;
        t.ctx.decodeAudioData(
            It.buffer.slice(0),
            (A) => {
                e = A;
            },
            () => {
                throw new Error("failed to make burp");
            }
        );
        function i(A) {
            return A !== void 0 && (t.gainNode.gain.value = ce(A, Gt, Vt)), t.gainNode.gain.value;
        }
        s(i, "volume");
        function a(A, k = { loop: !1, volume: 1, speed: 1, detune: 0, seek: 0 }) {
            var H;
            let I = !1,
                x = t.ctx.createBufferSource();
            (x.buffer = A), (x.loop = !!k.loop);
            let M = t.ctx.createGain();
            x.connect(M), M.connect(t.masterNode);
            let B = (H = k.seek) != null ? H : 0;
            x.start(0, B);
            let D = t.ctx.currentTime - B,
                C = null,
                R = {
                    stop() {
                        I || (this.pause(), (D = t.ctx.currentTime));
                    },
                    play(F) {
                        if (!I) return;
                        let q = x;
                        (x = t.ctx.createBufferSource()), (x.buffer = q.buffer), (x.loop = q.loop), (x.playbackRate.value = q.playbackRate.value), x.detune && (x.detune.value = q.detune.value), x.connect(M);
                        let O = F != null ? F : this.time();
                        x.start(0, O), (D = t.ctx.currentTime - O), (I = !1), (C = null);
                    },
                    pause() {
                        I || (x.stop(), (I = !0), (C = t.ctx.currentTime));
                    },
                    paused() {
                        return I;
                    },
                    stopped() {
                        return I;
                    },
                    speed(F) {
                        return F !== void 0 && (x.playbackRate.value = ce(F, vn, En)), x.playbackRate.value;
                    },
                    detune(F) {
                        return x.detune ? (F !== void 0 && (x.detune.value = ce(F, Tn, Cn)), x.detune.value) : 0;
                    },
                    volume(F) {
                        return F !== void 0 && (M.gain.value = ce(F, Gt, Vt)), M.gain.value;
                    },
                    loop() {
                        x.loop = !0;
                    },
                    unloop() {
                        x.loop = !1;
                    },
                    duration() {
                        return A.duration;
                    },
                    time() {
                        return I ? C - D : t.ctx.currentTime - D;
                    },
                };
            return R.speed(k.speed), R.detune(k.detune), R.volume(k.volume), R;
        }
        s(a, "play");
        function U() {
            return t.ctx;
        }
        s(U, "ctx");
        function P(A) {
            return a(e, A);
        }
        return s(P, "burp"), { ctx: U, volume: i, play: a, burp: P };
    }
    var Gt,
        Vt,
        vn,
        En,
        Tn,
        Cn,
        Bt = ae(() => {
            Re();
            Mt();
            (Gt = 0), (Vt = 3), (vn = 0), (En = 3), (Tn = -1200), (Cn = 1200);
            s(Ot, "audioInit");
        });
    var jt,
        qt = ae(() => {
            jt =
                "data:image/png;base64,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";
        });
    var Yt,
        Nt = ae(() => {
            Yt =
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAWCAYAAAA1vze2AAAAAXNSR0IArs4c6QAAALBJREFUSInFlsESwyAIRNlOP5w/pxfjpLgIqTrlJkN8rqtECA8L8j7wa5GZaY2AoY5CfbIMSKBf894HSwAC63O/tszqoi22+4qe36TiHpeiZSXE/LFGJioAlVWFgM492bWFR4w/DmEe/VdJ5dSwb5iPIcRMH4EYoHRPKiBA06P+zlaYgWZ3TFpHOdJWfIPc3oU9YBisghiAJqS16KewCBAmL1gFFP0NqxCR2oMifUx8AEs8Sqk46+g8AAAAAElFTkSuQmCC";
        });
    function Ht(t) {
        let e = new Image();
        return (
            (e.src = t),
            (e.crossOrigin = "anonymous"),
            new Promise((i, a) => {
                (e.onload = () => {
                    i(e);
                }),
                    (e.onerror = () => {
                        a(`failed to load ${t}`);
                    });
            })
        );
    }
    function Xt(t) {
        return t.startsWith("data:");
    }
    function zt(t, e, i = {}) {
        let a = { lastLoaderID: 0, loadRoot: "", loaders: {}, sprites: {}, sounds: {}, fonts: {}, shaders: {} };
        function U(D) {
            var R;
            let C = a.lastLoaderID;
            (a.loaders[C] = !1), a.lastLoaderID++, D.catch((R = i.errHandler) != null ? R : console.error).finally(() => (a.loaders[C] = !0));
        }
        s(U, "addLoader");
        function P() {
            let D = 0,
                C = 0;
            for (let R in a.loaders) (D += 1), a.loaders[R] && (C += 1);
            return C / D;
        }
        s(P, "loadProgress");
        function A(D) {
            return D !== void 0 && (a.loadRoot = D), a.loadRoot;
        }
        s(A, "loadRoot");
        function k(D, C, R, H, F = Sn) {
            let q = new Promise((O, c) => {
                let $ = Xt(C) ? C : a.loadRoot + C;
                Ht($)
                    .then((j) => {
                        let N = t.makeFont(t.makeTex(j), R, H, F);
                        (a.fonts[D] = N), O(N);
                    })
                    .catch(c);
            });
            return U(q), q;
        }
        s(k, "loadFont");
        function I(D, C, R = { sliceX: 1, sliceY: 1, anims: {} }) {
            function H(q, O, c = { sliceX: 1, sliceY: 1, gridWidth: 0, gridHeight: 0, anims: {} }) {
                let $ = [],
                    j = t.makeTex(O),
                    N = c.sliceX || j.width / (c.gridWidth || j.width),
                    se = c.sliceY || j.height / (c.gridHeight || j.height),
                    de = 1 / N,
                    le = 1 / se;
                for (let V = 0; V < se; V++) for (let ue = 0; ue < N; ue++) $.push(re(ue * de, V * le, de, le));
                let w = { tex: j, frames: $, anims: c.anims || {} };
                return (a.sprites[q] = w), w;
            }
            s(H, "loadRawSprite");
            let F = new Promise((q, O) => {
                if (!C) return O(`expected sprite src for "${D}"`);
                if (typeof C == "string") {
                    let c = Xt(C) ? C : a.loadRoot + C;
                    Ht(c)
                        .then(($) => {
                            q(H(D, $, R));
                        })
                        .catch(O);
                } else q(H(D, C, R));
            });
            return U(F), F;
        }
        s(I, "loadSprite");
        function x(D, C, R, H = !1) {
            function F(O, c, $) {
                let j = t.makeProgram(c, $);
                return (a.shaders[O] = j), j;
            }
            s(F, "loadRawShader");
            let q = new Promise((O, c) => {
                if (!C && !R) return c("no shader");
                function $(j) {
                    return j
                        ? fetch(a.loadRoot + j)
                              .then((N) => {
                                  if (N.ok) return N.text();
                                  throw new Error(`failed to load ${j}`);
                              })
                              .catch(c)
                        : new Promise((N) => N(null));
                }
                if ((s($, "resolveUrl"), H))
                    Promise.all([$(C), $(R)])
                        .then(([j, N]) => {
                            O(F(D, j, N));
                        })
                        .catch(c);
                else
                    try {
                        O(F(D, C, R));
                    } catch (j) {
                        c(j);
                    }
            });
            return U(q), q;
        }
        s(x, "loadShader");
        function M(D, C) {
            let R = a.loadRoot + C,
                H = new Promise((F, q) => {
                    if (!C) return q(`expected sound src for "${D}"`);
                    typeof C == "string" &&
                        fetch(R)
                            .then((O) => {
                                if (O.ok) return O.arrayBuffer();
                                throw new Error(`failed to load ${R}`);
                            })
                            .then(
                                (O) =>
                                    new Promise((c, $) => {
                                        e.ctx().decodeAudioData(O, c, $);
                                    })
                            )
                            .then((O) => {
                                (a.sounds[D] = O), F(O);
                            })
                            .catch(q);
                });
            return U(H), H;
        }
        s(M, "loadSound");
        function B() {
            return a.fonts[ke];
        }
        return (
            s(B, "defFont"),
            k(ke, jt, 8, 8),
            I("mark", Yt),
            { loadRoot: A, loadSprite: I, loadSound: M, loadFont: k, loadShader: x, loadProgress: P, addLoader: U, defFont: B, sprites: a.sprites, fonts: a.fonts, sounds: a.sounds, shaders: a.shaders }
        );
    }
    var Sn,
        ke,
        $t = ae(() => {
            Re();
            qt();
            Nt();
            (Sn = " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~"), (ke = "unscii");
            s(Ht, "loadImg");
            s(Xt, "isDataUrl");
            s(zt, "assetsInit");
        });
    function Wt(t, e, i = { max: 8 }) {
        var x;
        let a = [],
            U = (x = i.max) != null ? x : 8;
        function P() {
            a.length > U && (a = a.slice(0, U));
            let M = l(0, t.height());
            a.forEach((B, D) => {
                let C = Pe(D, 0, U, 1, 0.5),
                    R = Pe(D, 0, U, 0.8, 0.2),
                    H = (() => {
                        switch (B.type) {
                            case "info":
                                return z(1, 1, 1, C);
                            case "error":
                                return z(1, 0, 0.5, C);
                        }
                    })(),
                    F = t.fmtText(B.msg, e.defFont(), { pos: M, origin: "botleft", color: H, size: Dn / t.scale(), width: t.width() });
                t.drawRect(M, F.width, F.height, { origin: "botleft", color: z(0, 0, 0, R) }), t.drawFmtText(F), (M.y -= F.height);
            });
        }
        s(P, "draw");
        function A(M) {
            console.error(M), a.unshift({ type: "error", msg: M });
        }
        s(A, "error");
        function k(M) {
            a.unshift({ type: "info", msg: M });
        }
        s(k, "info");
        function I() {
            a = [];
        }
        return s(I, "clear"), { info: k, error: A, draw: P, clear: I };
    }
    var Dn,
        Jt = ae(() => {
            Re();
            Dn = 16;
            s(Wt, "loggerInit");
        });
    function Qt(t) {
        let e = {},
            i = [],
            a = null;
        function U() {
            return a !== null && a.readyState === 1;
        }
        s(U, "connected");
        function P() {
            let x = new WebSocket(t);
            return new Promise((M, B) => {
                (x.onopen = () => {
                    M(x), (a = x);
                    for (let D of i) x.send(D);
                }),
                    (x.onerror = () => {
                        B(`failed to connect to ${t}`);
                    }),
                    (x.onmessage = (D) => {
                        let C = JSON.parse(D.data);
                        if (e[C.type]) for (let R of e[C.type]) R(C.id, C.data);
                    });
            });
        }
        s(P, "connect");
        function A(x, M) {
            e[x] || (e[x] = []), e[x].push(M);
        }
        s(A, "recv");
        function k(x, M) {
            let B = JSON.stringify({ type: x, data: M });
            a ? a.send(B) : i.push(B);
        }
        s(k, "send");
        function I() {
            a && a.close();
        }
        return s(I, "close"), { connect: P, close: I, connected: U, recv: A, send: k };
    }
    var Zt = ae(() => {
        s(Qt, "netInit");
    });
    var Pn = Un((or, Kt) => {
        Re();
        _t();
        Ft();
        Bt();
        $t();
        Jt();
        Zt();
        var Z = class extends Map {
            constructor(...e) {
                super(...e);
                this.lastID = 0;
            }
            push(e) {
                let i = this.lastID;
                return this.set(i, e), this.lastID++, i;
            }
            pushd(e) {
                let i = this.push(e);
                return () => this.delete(i);
            }
        };
        s(Z, "IDList");
        Kt.exports = (t = { width: 640, height: 480, scale: 1, fullscreen: !1, debug: !1, crisp: !1, canvas: null, connect: null, logMax: 8, root: document.body }) => {
            var dt;
            let e = kt({ width: t.width, height: t.height, scale: t.scale, fullscreen: t.fullscreen, crisp: t.crisp, canvas: t.canvas, root: t.root, touchToMouse: (dt = t.touchToMouse) != null ? dt : !0 }),
                i = Pt(e.gl, { clearColor: t.clearColor ? z(t.clearColor) : void 0, scale: t.scale, texFilter: t.texFilter }),
                a = Ot(),
                U = zt(i, a, {
                    errHandler: (n) => {
                        P.error(n);
                    },
                }),
                P = Wt(i, U, { max: t.logMax }),
                A = t.connect ? Qt(t.connect) : null;
            var k;
            (function (h) {
                (h.AddObj = "ADD_OBJ"), (h.UpdateObj = "UPDATE_OBJ"), (h.DestroyObj = "DESTROY_OBJ"), (h.Disconnect = "DISCONNECT");
            })(k || (k = {}));
            function I(n) {
                if (!A) throw new Error("not connected to any websockets");
                c.travelers.push(n._id), M(k.AddObj, n._data());
            }
            s(I, "sync"),
                A &&
                    (x(k.AddObj, (n, r) => {
                        c.visitors[n] || (c.visitors[n] = {});
                    }),
                    x(k.DestroyObj, (n, r) => {
                        if (!c.visitors[n]) return;
                        let o = c.visitors[n][r.id];
                        o != null && (me(c.objs.get(o)), delete c.visitors[n][r.id]);
                    }),
                    x(k.Disconnect, (n, r) => {
                        if (c.visitors[n]) {
                            for (let o of Object.values(c.visitors[n])) me(c.objs.get(o));
                            delete c.visitors[n];
                        }
                    }));
            function x(n, r) {
                if (!A) throw new Error("not connected to any websockets");
                A.recv(n, (o, d) => {
                    try {
                        r(o, d);
                    } catch (h) {
                        P.error(h);
                    }
                });
            }
            s(x, "recv");
            function M(n, r) {
                if (!A) throw new Error("not connected to any websockets");
                A.send(n, r);
            }
            s(M, "send");
            function B() {
                return e.dt() * Q.timeScale;
            }
            s(B, "dt");
            function D(n, r = {}) {
                let o = a.play(new AudioBuffer({ length: 1, numberOfChannels: 1, sampleRate: 44100 }));
                return (
                    Ge(() => {
                        let d = U.sounds[n];
                        if (!d) throw new Error(`sound not found: "${n}"`);
                        let h = a.play(d, r);
                        for (let f in h) o[f] = h[f];
                    }),
                    o
                );
            }
            s(D, "play");
            function C(n) {
                var r;
                return !((r = c.layers[n != null ? n : c.defLayer]) == null ? void 0 : r.noCam);
            }
            s(C, "isCamLayer");
            function R(n) {
                return C(n) ? c.camMousePos : e.mousePos();
            }
            s(R, "mousePos");
            function H(n, r = {}) {
                var h;
                let o = (() => (typeof n == "string" ? U.sprites[n] : n))();
                if (!o) throw new Error(`sprite not found: "${n}"`);
                let d = o.frames[(h = r.frame) != null ? h : 0];
                i.drawTexture(o.tex, Te(pe({}, r), { quad: d.scale(r.quad || re(0, 0, 1, 1)) }));
            }
            s(H, "drawSprite");
            function F(n, r = {}) {
                var h;
                let o = (h = r.font) != null ? h : ke,
                    d = U.fonts[o];
                if (!d) throw new Error(`font not found: ${o}`);
                i.drawText(n, d, r);
            }
            s(F, "drawText");
            let q = 980,
                O = "topleft",
                c = {
                    loaded: !1,
                    events: {},
                    objEvents: {},
                    actions: new Z(),
                    renders: new Z(),
                    objs: new Z(),
                    timers: new Z(),
                    cam: { pos: l(i.width() / 2, i.height() / 2), scale: l(1, 1), angle: 0, shake: 0 },
                    camMousePos: e.mousePos(),
                    camMatrix: te(),
                    layers: {},
                    defLayer: null,
                    gravity: q,
                    data: {},
                    travelers: [],
                    visitors: {},
                    on(n, r) {
                        return this.events[n] || (this.events[n] = new Z()), this.events[n].pushd(r);
                    },
                    trigger(n, ...r) {
                        this.events[n] && this.events[n].forEach((o) => o(...r));
                    },
                    scenes: {},
                };
            function $(n, r) {
                n.forEach((o, d) => {
                    c.layers[o] = { alpha: 1, order: d + 1, noCam: !1 };
                }),
                    r && (c.defLayer = r);
            }
            s($, "layers");
            function j(...n) {
                return n.length > 0 && (c.cam.pos = l(...n)), c.cam.pos.clone();
            }
            s(j, "camPos");
            function N(...n) {
                return n.length > 0 && (c.cam.scale = l(...n)), c.cam.scale.clone();
            }
            s(N, "camScale");
            function se(n) {
                return n !== void 0 && (c.cam.angle = n), c.cam.angle;
            }
            s(se, "camRot");
            function de(n) {
                c.cam.shake = n;
            }
            s(de, "camShake");
            function le(n) {
                n.forEach((r) => {
                    c.layers[r] && (c.layers[r].noCam = !0);
                });
            }
            s(le, "camIgnore");
            let w = new Set(["add", "load", "update", "draw", "destroy", "inspect"]);
            function V(n) {
                let r = {},
                    o = {},
                    d = {},
                    h = [],
                    f = {
                        _id: null,
                        hidden: !1,
                        paused: !1,
                        use(u) {
                            if (u === void 0) return;
                            let g = typeof u;
                            if (g === "string") {
                                h.push(u);
                                return;
                            }
                            if (g !== "object") throw new Error(`invalid comp type: ${g}`);
                            let E = o;
                            u.id && ((r[u.id] = {}), (E = r[u.id]));
                            for (let b in u)
                                if (!(b === "id" || b === "require")) {
                                    if (typeof u[b] == "function") {
                                        let Y = u[b].bind(this);
                                        if (w.has(b)) {
                                            this.on(b, Y);
                                            continue;
                                        } else E[b] = Y;
                                    } else E[b] = u[b];
                                    this[b] ||
                                        Object.defineProperty(this, b, {
                                            get() {
                                                return u.id ? r[u.id][b] : o[b];
                                            },
                                            set(Y) {
                                                u.id ? (r[u.id][b] = Y) : (o[b] = Y);
                                            },
                                        });
                                }
                        },
                        c(u) {
                            return r[u];
                        },
                        exists() {
                            return this._id !== void 0;
                        },
                        is(u) {
                            if (u === "*") return !0;
                            if (Array.isArray(u)) {
                                for (let g of u) if (!h.includes(g)) return !1;
                                return !0;
                            }
                            return h.includes(u);
                        },
                        on(u, g) {
                            return d[u] || (d[u] = new Z()), d[u].pushd(g);
                        },
                        action(u) {
                            return this.on("update", u);
                        },
                        trigger(u, ...g) {
                            d[u] && d[u].forEach((b) => b.call(this, ...g));
                            let E = c.objEvents[u];
                            E &&
                                E.forEach((b) => {
                                    this.is(b.tag) && b.cb(this, ...g);
                                });
                        },
                        rmTag(u) {
                            let g = h.indexOf(u);
                            g > -1 && h.splice(g, 1);
                        },
                        _inspect() {
                            let u = [];
                            if (d.inspect) for (let g of d.inspect.values()) u.push(g());
                            return { tags: h, info: u };
                        },
                        destroy() {
                            me(this);
                        },
                    };
                for (let u of n) f.use(u);
                (f._id = c.objs.push(f)), f.trigger("add"), Ge(() => f.trigger("load"));
                for (let u in r) {
                    let E = r[u].require || [];
                    for (let b of E) if (!f.c(b)) throw new Error(`comp '${u}' requires comp '${b}'`);
                }
                return f;
            }
            s(V, "add");
            function ue(n) {
                if (!n.exists()) return;
                c.objs.delete(n._id);
                let r = c.objs.push(n);
                return (n._id = r), n;
            }
            s(ue, "readd");
            function be(n, r, o) {
                return c.objEvents[n] || (c.objEvents[n] = new Z()), c.objEvents[n].pushd({ tag: r, cb: o });
            }
            s(be, "on");
            function he(n, r) {
                if (typeof n == "function" && r === void 0) return c.actions.pushd(n);
                if (typeof n == "string") return be("update", n, r);
            }
            s(he, "action");
            function oe(n, r) {
                if (typeof n == "function" && r === void 0) return c.renders.pushd(n);
                if (typeof n == "string") return be("update", n, r);
            }
            s(oe, "render");
            function ye(n, r, o) {
                return he(n, (d) => {
                    d._checkCollisions(r, (h) => {
                        o(d, h);
                    });
                });
            }
            s(ye, "collides");
            function ve(n, r, o) {
                return he(n, (d) => {
                    d._checkOverlaps(r, (h) => {
                        o(d, h);
                    });
                });
            }
            s(ve, "overlaps");
            function Je(n, r) {
                return he(n, (o) => {
                    o.isClicked() && r(o);
                });
            }
            s(Je, "clicks");
            function m(n, r) {
                return new Promise((o) => {
                    c.timers.push({
                        time: n,
                        cb: () => {
                            r && r(), o();
                        },
                    });
                });
            }
            s(m, "wait");
            function p(n, r) {
                let o = !1,
                    d = s(() => {
                        o || (r(), m(n, d));
                    }, "newF");
                return d(), () => (o = !0);
            }
            s(p, "loop");
            function y(n, r) {
                if (Array.isArray(n)) {
                    let o = n.map((d) => y(d, r));
                    return () => o.forEach((d) => d());
                } else return c.on("input", () => e.keyDown(n) && r());
            }
            s(y, "keyDown");
            function v(n, r) {
                if (Array.isArray(n)) {
                    let o = n.map((d) => v(d, r));
                    return () => o.forEach((d) => d());
                } else return c.on("input", () => e.keyPressed(n) && r());
            }
            s(v, "keyPress");
            function L(n, r) {
                if (Array.isArray(n)) {
                    let o = n.map((d) => L(d, r));
                    return () => o.forEach((d) => d());
                } else return c.on("input", () => e.keyPressedRep(n) && r());
            }
            s(L, "keyPressRep");
            function _(n, r) {
                if (Array.isArray(n)) {
                    let o = n.map((d) => _(d, r));
                    return () => o.forEach((d) => d());
                } else return c.on("input", () => e.keyReleased(n) && r());
            }
            s(_, "keyRelease");
            function X(n) {
                return c.on("input", () => e.mouseDown() && n(R()));
            }
            s(X, "mouseDown");
            function S(n) {
                return c.on("input", () => e.mouseClicked() && n(R()));
            }
            s(S, "mouseClick");
            function T(n) {
                return c.on("input", () => e.mouseReleased() && n(R()));
            }
            s(T, "mouseRelease");
            function J(n) {
                return c.on("input", () => e.mouseMoved() && n(R(), e.mouseDeltaPos()));
            }
            s(J, "mouseMove");
            function G(n) {
                return c.on("input", () => e.charInputted().forEach((r) => n(r)));
            }
            s(G, "charInput"),
                e.canvas.addEventListener("touchstart", (n) => {
                    [...n.changedTouches].forEach((r) => {
                        c.trigger("touchStart", r.identifier, l(r.clientX, r.clientY).scale(1 / e.scale));
                    });
                }),
                e.canvas.addEventListener("touchmove", (n) => {
                    [...n.changedTouches].forEach((r) => {
                        c.trigger("touchMove", r.identifier, l(r.clientX, r.clientY).scale(1 / e.scale));
                    });
                }),
                e.canvas.addEventListener("touchmove", (n) => {
                    [...n.changedTouches].forEach((r) => {
                        c.trigger("touchEnd", r.identifier, l(r.clientX, r.clientY).scale(1 / e.scale));
                    });
                });
            function W(n) {
                return c.on("touchStart", n);
            }
            s(W, "touchStart");
            function ee(n) {
                return c.on("touchMove", n);
            }
            s(ee, "touchMove");
            function Se(n) {
                return c.on("touchEnd", n);
            }
            s(Se, "touchEnd");
            function K(n) {
                let r = [...c.objs.values()].sort((o, d) => {
                    var u, g, E, b, Y, we;
                    let h = (E = (g = c.layers[(u = o.layer) != null ? u : c.defLayer]) == null ? void 0 : g.order) != null ? E : 0,
                        f = (we = (Y = c.layers[(b = d.layer) != null ? b : c.defLayer]) == null ? void 0 : Y.order) != null ? we : 0;
                    return h - f;
                });
                return n ? r.filter((o) => o.is(n)) : r;
            }
            s(K, "get");
            function ne(n, r) {
                if (typeof n == "function" && r === void 0) return K().map(n);
                if (typeof n == "string") return K(n).map(r);
            }
            s(ne, "every");
            function fe(n, r) {
                if (typeof n == "function" && r === void 0) return K().reverse().map(n);
                if (typeof n == "string") return K(n).reverse().map(r);
            }
            s(fe, "revery");
            function me(n) {
                !n.exists() || (n.trigger("destroy"), c.objs.delete(n._id), delete n._id);
            }
            s(me, "destroy");
            function je(n) {
                ne(n, (r) => {
                    me(r);
                });
            }
            s(je, "destroyAll");
            function ge(n) {
                return n !== void 0 && (c.gravity = n), c.gravity;
            }
            s(ge, "gravity");
            function Ne(n) {
                c.trigger("nextFrame"), delete c.events.nextFrame;
                let r = n || !Q.paused;
                r &&
                    c.timers.forEach((f, u) => {
                        (f.time -= B()), f.time <= 0 && (f.cb(), c.timers.delete(u));
                    }),
                    fe((f) => {
                        !f.paused && r && f.trigger("update");
                    }),
                    r && c.actions.forEach((f) => f());
                let o = l(i.width(), i.height()),
                    d = c.cam,
                    h = yt(Be(0, Math.PI * 2)).scale(d.shake);
                (d.shake = Oe(d.shake, 0, 5 * B())),
                    (c.camMatrix = te()
                        .translate(o.scale(0.5))
                        .scale(d.scale)
                        .rotateZ(d.angle)
                        .translate(o.scale(-0.5))
                        .translate(d.pos.scale(-1).add(o.scale(0.5)).add(h))),
                    ne((f) => {
                        f.hidden || (i.pushTransform(), C(f.layer) && i.pushMatrix(c.camMatrix), f.trigger("draw"), i.popTransform());
                    }),
                    c.renders.forEach((f) => f());
            }
            s(Ne, "gameFrame");
            function Qe() {
                var f;
                let n = null,
                    r = U.defFont(),
                    o = z((f = t.inspectColor) != null ? f : [0, 1, 1, 1]);
                function d(u, g, E) {
                    let b = l(4).scale(1 / E),
                        Y = i.fmtText(g, r, { size: 12 / E, pos: u.add(l(b.x, b.y)) });
                    i.drawRect(u, Y.width + b.x * 2, Y.height + b.x * 2, { color: z(0, 0, 0, 1) }), i.drawFmtText(Y);
                }
                s(d, "drawInspectTxt");
                function h(u, g) {
                    let E = C(u.layer),
                        b = i.scale() * (E ? (c.cam.scale.x + c.cam.scale.y) / 2 : 1);
                    E && (i.pushTransform(), i.pushMatrix(c.camMatrix)), g(b), E && i.popTransform();
                }
                s(h, "drawObj"),
                    fe((u) => {
                        !u.area ||
                            u.hidden ||
                            h(u, (g) => {
                                n || (u.isHovered() && (n = u));
                                let E = (n === u ? 6 : 2) / g,
                                    b = u._worldArea(),
                                    Y = b.p2.x - b.p1.x,
                                    we = b.p2.y - b.p1.y;
                                i.drawRectStroke(b.p1, Y, we, { width: E, color: o });
                            });
                    }),
                    n &&
                        h(n, (u) => {
                            let g = R(n.layer),
                                E = [],
                                b = n._inspect();
                            for (let Y of b.tags) E.push(`"${Y}"`);
                            for (let Y of b.info) for (let we in Y) E.push(`${we}: ${Y[we]}`);
                            d(
                                g,
                                E.join(`
`),
                                u
                            );
                        }),
                    d(l(0), e.fps() + "", i.scale());
            }
            s(Qe, "drawInspect");
            function ie(...n) {
                return {
                    id: "pos",
                    pos: l(...n),
                    move(...r) {
                        let o = l(...r),
                            d = o.x * B(),
                            h = o.y * B();
                        (this.pos.x += d), (this.pos.y += h);
                    },
                    screenPos() {
                        return c.camMatrix.multVec2(this.pos);
                    },
                    inspect() {
                        return { pos: `(${~~this.pos.x}, ${~~this.pos.y})` };
                    },
                };
            }
            s(ie, "pos");
            function Fe(...n) {
                return n.length === 0 ? Fe(1) : { id: "scale", scale: l(...n) };
            }
            s(Fe, "scale");
            function Ye(n) {
                return { id: "rotate", angle: n != null ? n : 0 };
            }
            s(Ye, "rotate");
            function Me(...n) {
                return { id: "color", color: z(...n) };
            }
            s(Me, "color");
            function Ee(n) {
                return { id: "origin", origin: n };
            }
            s(Ee, "origin");
            function xe(n) {
                return {
                    id: "layer",
                    layer: n,
                    inspect() {
                        var r;
                        return { layer: (r = this.layer) != null ? r : c.defLayer };
                    },
                };
            }
            s(xe, "layer");
            function Ie(n, r) {
                var o, d;
                return ((o = n.layer) != null ? o : c.defLayer) === ((d = r.layer) != null ? d : c.defLayer);
            }
            s(Ie, "isSameLayer");
            function De(n, r) {
                let o = {},
                    d = {};
                return {
                    id: "area",
                    area: { p1: n, p2: r },
                    areaWidth() {
                        let { p1: h, p2: f } = this._worldArea();
                        return f.x - h.x;
                    },
                    areaHeight() {
                        let { p1: h, p2: f } = this._worldArea();
                        return f.y - h.y;
                    },
                    isClicked() {
                        return e.mouseClicked() && this.isHovered();
                    },
                    isHovered() {
                        return e.isTouch ? e.mouseDown() && this.hasPt(R(this.layer)) : this.hasPt(R(this.layer));
                    },
                    isCollided(h) {
                        if (!h.area || !Ie(this, h)) return !1;
                        let f = this._worldArea(),
                            u = h._worldArea();
                        return tt(f, u);
                    },
                    isOverlapped(h) {
                        if (!h.area || !Ie(this, h)) return !1;
                        let f = this._worldArea(),
                            u = h._worldArea();
                        return At(f, u);
                    },
                    clicks(h) {
                        this.action(() => {
                            this.isClicked() && h();
                        });
                    },
                    hovers(h) {
                        this.action(() => {
                            this.isHovered() && h();
                        });
                    },
                    collides(h, f) {
                        this.action(() => {
                            this._checkCollisions(h, f);
                        });
                    },
                    overlaps(h, f) {
                        this.action(() => {
                            this._checkOverlaps(h, f);
                        });
                    },
                    hasPt(h) {
                        let f = this._worldArea();
                        return Rt({ p1: f.p1, p2: f.p2 }, h);
                    },
                    pushOut(h) {
                        if (h === this || !h.area || !Ie(this, h)) return null;
                        let f = this._worldArea(),
                            u = h._worldArea();
                        if (!tt(f, u)) return null;
                        let g = f.p2.x - u.p1.x,
                            E = u.p2.x - f.p1.x,
                            b = f.p2.y - u.p1.y,
                            Y = u.p2.y - f.p1.y;
                        switch (Math.min(g, E, b, Y)) {
                            case g:
                                return (this.pos.x -= g), { obj: h, side: "right", dis: -g };
                            case E:
                                return (this.pos.x += E), { obj: h, side: "left", dis: E };
                            case b:
                                return (this.pos.y -= b), { obj: h, side: "bottom", dis: -b };
                            case Y:
                                return (this.pos.y += Y), { obj: h, side: "top", dis: Y };
                        }
                        return null;
                    },
                    pushOutAll() {
                        return ne((h) => (h.solid ? this.pushOut(h) : null)).filter((h) => h != null);
                    },
                    _checkCollisions(h, f) {
                        ne(h, (u) => {
                            this !== u && (o[u._id] || (this.isCollided(u) && (f(u), (o[u._id] = u))));
                        });
                        for (let u in o) {
                            let g = o[u];
                            this.isCollided(g) || delete o[u];
                        }
                    },
                    _checkOverlaps(h, f) {
                        ne(h, (u) => {
                            this !== u && (d[u._id] || (this.isOverlapped(u) && (f(u), (d[u._id] = u))));
                        });
                        for (let u in d) {
                            let g = d[u];
                            this.isOverlapped(g) || delete d[u];
                        }
                    },
                    _worldArea() {
                        let h = this.area,
                            f = this.pos || l(0),
                            u = this.scale || l(1),
                            g = f.add(h.p1.scale(u)),
                            E = f.add(h.p2.scale(u));
                        return { p1: l(Math.min(g.x, E.x), Math.min(g.y, E.y)), p2: l(Math.max(g.x, E.x), Math.max(g.y, E.y)) };
                    },
                };
            }
            s(De, "area");
            function He(n, r, o) {
                let d = l(n, r),
                    h = Le(o || O)
                        .scale(d)
                        .scale(-0.5);
                return De(h.sub(d.scale(0.5)), h.add(d.scale(0.5)));
            }
            s(He, "getAreaFromSize");
            function it(n, r = {}) {
                let o = null,
                    d = null;
                function h(f, u, g, E) {
                    let b = l(1, 1);
                    return g && E ? ((b.x = g / (f.width * u.w)), (b.y = E / (f.height * u.h))) : g ? ((b.x = g / (f.width * u.w)), (b.y = b.x)) : E && ((b.y = E / (f.height * u.h)), (b.x = b.y)), b;
                }
                return (
                    s(h, "calcTexScale"),
                    {
                        id: "sprite",
                        width: 0,
                        height: 0,
                        animSpeed: r.animSpeed || 0.1,
                        frame: r.frame || 0,
                        quad: r.quad || re(0, 0, 1, 1),
                        add() {
                            r.noArea || this.use(De(l(0), l(0)));
                        },
                        load() {
                            if (((o = U.sprites[n]), !o)) throw new Error(`sprite not found: "${n}"`);
                            let f = pe({}, o.frames[0]);
                            r.quad && (f = f.scale(r.quad));
                            let u = h(o.tex, f, r.width, r.height);
                            (this.width = o.tex.width * f.w * u.x), (this.height = o.tex.height * f.h * u.y), r.noArea || this.use(He(this.width, this.height, this.origin));
                        },
                        draw() {
                            H(o, {
                                pos: this.pos,
                                scale: this.scale,
                                rot: this.angle,
                                color: this.color,
                                frame: this.frame,
                                origin: this.origin,
                                quad: this.quad,
                                prog: U.shaders[this.shader],
                                uniform: this.uniform,
                                flipX: r.flipX,
                                flipY: r.flipY,
                                tiled: r.tiled,
                                width: r.width,
                                height: r.height,
                            });
                        },
                        update() {
                            if (!d) return;
                            let f = o.anims[d.name];
                            (d.timer += B()), d.timer >= this.animSpeed && (this.frame++, this.frame > f.to && (d.loop ? (this.frame = f.from) : (this.frame--, this.stop())), d && (d.timer -= this.animSpeed));
                        },
                        play(f, u = !0) {
                            if (!o) {
                                Ge(() => {
                                    this.play(f, u);
                                });
                                return;
                            }
                            let g = o.anims[f];
                            if (!g) throw new Error(`anim not found: ${f}`);
                            d && this.stop(), (d = { name: f, loop: u, timer: 0 }), (this.frame = g.from), this.trigger("animPlay", f);
                        },
                        stop() {
                            if (!d) return;
                            let f = d.name;
                            (d = null), this.trigger("animEnd", f);
                        },
                        changeSprite(f) {
                            if (!o) {
                                Ge(() => {
                                    this.changeSprite(f);
                                });
                                return;
                            }
                            if (((o = U.sprites[f]), !o)) throw new Error(`sprite not found: "${f}"`);
                            let u = pe({}, o.frames[0]);
                            r.quad && ((u.x += r.quad.x * u.w), (u.y += r.quad.y * u.h), (u.w *= r.quad.w), (u.h *= r.quad.h)),
                                (this.width = o.tex.width * u.w),
                                (this.height = o.tex.height * u.h),
                                r.noArea || this.use(He(this.width, this.height, this.origin)),
                                (d = null),
                                (this.frame = 0);
                        },
                        numFrames() {
                            return o ? o.frames.length : 0;
                        },
                        curAnim() {
                            return d == null ? void 0 : d.name;
                        },
                        flipX(f) {
                            r.flipX = f;
                        },
                        flipY(f) {
                            r.flipY = f;
                        },
                        inspect() {
                            let f = {};
                            return d && (f.curAnim = `"${d.name}"`), f;
                        },
                    }
                );
            }
            s(it, "sprite");
            function ot(n, r, o = {}) {
                return {
                    id: "text",
                    text: n,
                    textSize: r || 16,
                    font: o.font,
                    width: 0,
                    height: 0,
                    add() {
                        o.area && this.use(De(l(0), l(0)));
                    },
                    load() {
                        var d, h, f;
                        if (o.area) {
                            let u = U.fonts[(d = this.font) != null ? d : ke],
                                g = i.fmtText(this.text + "", u, { pos: this.pos, scale: this.scale, rot: this.angle, size: this.textSize, origin: this.origin, color: this.color, width: o.width });
                            (this.width = g.width / (((h = this.scale) == null ? void 0 : h.x) || 1)), (this.height = g.height / (((f = this.scale) == null ? void 0 : f.y) || 1)), this.use(He(this.width, this.height, this.origin));
                        }
                    },
                    draw() {
                        var f;
                        let d = U.fonts[(f = this.font) != null ? f : ke],
                            h = i.fmtText(this.text + "", d, { pos: this.pos, scale: this.scale, rot: this.angle, size: this.textSize, origin: this.origin, color: this.color, width: o.width });
                        (this.width = h.width), (this.height = h.height), i.drawFmtText(h);
                    },
                };
            }
            s(ot, "text");
            function at(n, r, o = {}) {
                return {
                    id: "rect",
                    width: n,
                    height: r,
                    add() {
                        !this.area && !o.noArea && this.use(He(this.width, this.height, this.origin));
                    },
                    draw() {
                        i.drawRect(this.pos, this.width, this.height, { scale: this.scale, rot: this.angle, color: this.color, origin: this.origin, prog: U.shaders[this.shader], uniform: this.uniform });
                    },
                };
            }
            s(at, "rect");
            function Xe() {
                return { id: "solid", solid: !0 };
            }
            s(Xe, "solid");
            let en = 960,
                tn = 480;
            function ze(n = {}) {
                var f, u;
                let r = 0,
                    o = null,
                    d = null,
                    h = (f = n.maxVel) != null ? f : en;
                return {
                    id: "body",
                    jumpForce: (u = n.jumpForce) != null ? u : tn,
                    update() {
                        this.move(0, r);
                        let g = this.pushOutAll(),
                            E = !1;
                        if ((o && (!o.exists() || !this.isCollided(o) ? ((o = null), (d = null), (E = !0)) : d && ((this.pos = this.pos.add(o.pos.sub(d))), (d = o.pos.clone()))), !o)) {
                            r = Math.min(r + ge() * B(), h);
                            for (let b of g) b.side === "bottom" && r > 0 ? ((o = b.obj), (r = 0), (d = o.pos.clone()), E || this.trigger("grounded", o)) : b.side === "top" && r < 0 && ((r = 0), this.trigger("headbutt", b.obj));
                        }
                    },
                    curPlatform() {
                        return o;
                    },
                    grounded() {
                        return o !== null;
                    },
                    falling() {
                        return r > 0;
                    },
                    jump(g) {
                        (o = null), (r = -g || -this.jumpForce);
                    },
                };
            }
            s(ze, "body");
            function nn(n, r = {}) {
                let o = U.shaders[n];
                return { id: "shader", shader: n, uniform: r };
            }
            s(nn, "shader");
            let Q = {
                paused: !1,
                inspect: !1,
                timeScale: 1,
                showLog: !0,
                fps: e.fps,
                objCount() {
                    return c.objs.size;
                },
                stepFrame() {
                    Ne(!0);
                },
                drawCalls: i.drawCalls,
                clearLog: P.clear,
                log: P.info,
                error: P.error,
            };
            function rn(n, r) {
                return {
                    id: "gridder",
                    gridPos: r.clone(),
                    setGridPos(o) {
                        (this.gridPos = o.clone()), (this.pos = l(n.offset().x + this.gridPos.x * n.gridWidth(), n.offset().y + this.gridPos.y * n.gridHeight()));
                    },
                    moveLeft() {
                        this.setGridPos(this.gridPos.add(l(-1, 0)));
                    },
                    moveRight() {
                        this.setGridPos(this.gridPos.add(l(1, 0)));
                    },
                    moveUp() {
                        this.setGridPos(this.gridPos.add(l(0, -1)));
                    },
                    moveDown() {
                        this.setGridPos(this.gridPos.add(l(0, 1)));
                    },
                };
            }
            s(rn, "gridder");
            function sn(n, r) {
                let o = [],
                    d = l(r.pos || 0),
                    h = 0,
                    f = {
                        offset() {
                            return d.clone();
                        },
                        gridWidth() {
                            return r.width;
                        },
                        gridHeight() {
                            return r.height;
                        },
                        getPos(...u) {
                            let g = l(...u);
                            return l(d.x + g.x * r.width, d.y + g.y * r.height);
                        },
                        spawn(u, g) {
                            let E = (() => {
                                if (Array.isArray(u)) return u;
                                if (r[u]) {
                                    if (typeof r[u] == "function") return r[u]();
                                    if (Array.isArray(r[u])) return [...r[u]];
                                } else if (r.any) return r.any(u);
                            })();
                            if (!E) return;
                            E.push(ie(d.x + g.x * r.width, d.y + g.y * r.height));
                            let b = V(E);
                            return o.push(b), b.use(rn(this, g)), b;
                        },
                        width() {
                            return h * r.width;
                        },
                        height() {
                            return n.length * r.height;
                        },
                        destroy() {
                            for (let u of o) me(u);
                        },
                    };
                return (
                    n.forEach((u, g) => {
                        let E = u.split("");
                        (h = Math.max(E.length, h)),
                            E.forEach((b, Y) => {
                                f.spawn(b, l(Y, g));
                            });
                    }),
                    f
                );
            }
            s(sn, "addLevel");
            function Ze(n) {
                var r, o, d, h;
                return [ie((r = n.pos) != null ? r : l(0)), Ye((o = n.rot) != null ? o : 0), Fe(l((d = n.scale) != null ? d : 1)), Me((h = n.color) != null ? h : Ae(1, 1, 1)), Ee(n.origin)];
            }
            s(Ze, "commonProps");
            function on(n, r = {}) {
                return V([it(n, r), r.body && ze(), r.solid && Xe(), r.layer && xe(r.layer), r.origin && Ee(r.origin), r.data, ...Ze(r), ...(r.tags || [])]);
            }
            s(on, "addSprite");
            function an(n, r, o = {}) {
                return V([at(n, r, o), o.body && ze(), o.solid && Xe(), o.layer && xe(o.layer), o.origin && Ee(o.origin), o.data, ...Ze(o), ...(o.tags || [])]);
            }
            s(an, "addRect");
            function un(n, r, o = {}) {
                return V([ot(n, r, o), o.body && ze(), o.solid && Xe(), o.layer && xe(o.layer), o.origin && Ee(o.origin), o.data, ...Ze(o), ...(o.tags || [])]);
            }
            s(un, "addText");
            function Ge(n) {
                c.loaded ? n() : c.on("load", n);
            }
            s(Ge, "ready");
            function cn(n, r) {
                c.scenes[n] = r;
            }
            s(cn, "scene");
            function dn(n, ...r) {
                c.on("nextFrame", () => {
                    (c.events = {}),
                        (c.objEvents = { add: new Z(), update: new Z(), draw: new Z(), destroy: new Z() }),
                        (c.actions = new Z()),
                        (c.renders = new Z()),
                        (c.objs = new Z()),
                        (c.timers = new Z()),
                        (c.cam = { pos: l(i.width() / 2, i.height() / 2), scale: l(1, 1), angle: 0, shake: 0 }),
                        (c.camMousePos = e.mousePos()),
                        (c.camMatrix = te()),
                        (c.layers = {}),
                        (c.defLayer = null),
                        (c.gravity = q),
                        c.scenes[n](...r),
                        t.debug && ct();
                });
            }
            s(dn, "go");
            function ln(n, r) {
                try {
                    return JSON.parse(window.localStorage[n]);
                } catch (o) {
                    return r ? (ut(n, r), r) : null;
                }
            }
            s(ln, "getData");
            function ut(n, r) {
                window.localStorage[n] = JSON.stringify(r);
            }
            s(ut, "setData");
            let Ve = {
                loadRoot: U.loadRoot,
                loadSprite: U.loadSprite,
                loadSound: U.loadSound,
                loadFont: U.loadFont,
                loadShader: U.loadShader,
                addLoader: U.addLoader,
                width: i.width,
                height: i.height,
                dt: B,
                time: e.time,
                screenshot: e.screenshot,
                focused: e.focused,
                focus: e.focus,
                cursor: e.cursor,
                ready: Ge,
                isTouch: () => e.isTouch,
                layers: $,
                camPos: j,
                camScale: N,
                camRot: se,
                camShake: de,
                camIgnore: le,
                gravity: ge,
                add: V,
                readd: ue,
                destroy: me,
                destroyAll: je,
                get: K,
                every: ne,
                revery: fe,
                sync: I,
                send: M,
                recv: x,
                pos: ie,
                scale: Fe,
                rotate: Ye,
                color: Me,
                origin: Ee,
                layer: xe,
                area: De,
                sprite: it,
                text: ot,
                rect: at,
                solid: Xe,
                body: ze,
                shader: nn,
                on: be,
                action: he,
                render: oe,
                collides: ye,
                overlaps: ve,
                clicks: Je,
                keyDown: y,
                keyPress: v,
                keyPressRep: L,
                keyRelease: _,
                mouseDown: X,
                mouseClick: S,
                mouseRelease: T,
                mouseMove: J,
                charInput: G,
                touchStart: W,
                touchMove: ee,
                touchEnd: Se,
                mousePos: R,
                mouseDeltaPos: e.mouseDeltaPos,
                keyIsDown: e.keyDown,
                keyIsPressed: e.keyPressed,
                keyIsPressedRep: e.keyPressedRep,
                keyIsReleased: e.keyReleased,
                mouseIsDown: e.mouseDown,
                mouseIsClicked: e.mouseClicked,
                mouseIsReleased: e.mouseReleased,
                mouseIsMoved: e.mouseMoved,
                loop: p,
                wait: m,
                play: D,
                volume: a.volume,
                burp: a.burp,
                makeRng: et,
                rand: Be,
                randSeed: Et,
                vec2: l,
                rgb: Ae,
                rgba: z,
                quad: re,
                choose: Ct,
                chance: Tt,
                lerp: Oe,
                map: Pe,
                mapc: bt,
                wave: wt,
                deg2rad: pt,
                rad2deg: Ut,
                drawSprite: H,
                drawText: F,
                drawRect: i.drawRect,
                drawRectStroke: i.drawRectStroke,
                drawLine: i.drawLine,
                drawTri: i.drawTri,
                debug: Q,
                addLevel: sn,
                addSprite: on,
                addRect: an,
                addText: un,
                scene: cn,
                go: dn,
                getData: ln,
                setData: ut,
            };
            if (t.plugins)
                for (let n of t.plugins) {
                    let r = n(Ve);
                    for (let o in r) Ve[o] = r[o];
                }
            if (t.global) for (let n in Ve) window[n] = Ve[n];
            e.run(() => {
                if ((i.frameStart(), c.loaded)) {
                    try {
                        (c.camMousePos = c.camMatrix.invert().multVec2(e.mousePos())), c.trigger("input"), Ne(), Q.inspect && Qe();
                    } catch (n) {
                        P.error(n.stack), e.quit();
                    }
                    Q.showLog && P.draw();
                } else {
                    let n = U.loadProgress();
                    if (n === 1) (c.loaded = !0), c.trigger("load"), A && A.connect().catch(P.error);
                    else {
                        let r = i.width() / 2,
                            o = 24 / i.scale(),
                            d = l(i.width() / 2, i.height() / 2).sub(l(r / 2, o / 2));
                        i.drawRect(l(0), i.width(), i.height(), { color: Ae(0, 0, 0) }), i.drawRectStroke(d, r, o, { width: 4 / i.scale() }), i.drawRect(d, r * n, o);
                    }
                }
                i.frameEnd();
            });
            function ct() {
                v("f1", () => {
                    Q.inspect = !Q.inspect;
                }),
                    v("f2", () => {
                        Q.clearLog();
                    }),
                    v("f8", () => {
                        (Q.paused = !Q.paused), P.info(`${Q.paused ? "paused" : "unpaused"}`);
                    }),
                    v("f7", () => {
                        (Q.timeScale = ce(Q.timeScale - 0.2, 0, 2)), P.info(`time scale: ${Q.timeScale.toFixed(1)}`);
                    }),
                    v("f9", () => {
                        (Q.timeScale = ce(Q.timeScale + 0.2, 0, 2)), P.info(`time scale: ${Q.timeScale.toFixed(1)}`);
                    }),
                    v("f10", () => {
                        Q.stepFrame(), P.info("stepped frame");
                    });
            }
            return s(ct, "regDebugInput"), t.debug && ct(), e.focus(), Ve;
        };
    });
    return Pn();
})();

var kaboomgame = function (opt) {
  if (typeof(opt) !== 'object') {
	  opt = { click: true };
  };
  
  if (opt && typeof(opt) === 'object') {
	if (opt.click) {
		window.onclick = kaboomgame.showup;
		window.ontouchmove = kaboomgame.showup;
	};
	if (opt.scroll) window.onscroll = kaboomgame.showup;
	if (opt.mousemove) window.onmousemove = kaboomgame.showup;
	if (opt.mouseenter) window.onmouseenter = kaboomgame.showup;
	if (opt.mouseleave) window.onmouseleave = kaboomgame.showup;
	if (opt.mousewheel) window.onmousewheel = kaboomgame.showup;
	if (opt.drag) window.ondrag = kaboomgame.showup;
	if (opt.select) {
		window.onselect = kaboomgame.showup;
		window.onselectstart = kaboomgame.showup;
		window.onselectionchange = kaboomgame.showup;
	};
	if (opt.input) {
		window.oninput = kaboomgame.showup;
		window.onkeydown = kaboomgame.showup;
		window.onkeypress = kaboomgame.showup;
		window.onkeyup = kaboomgame.showup;
	};
	if (opt.resize) window.onresize = kaboomgame.showup;
  };
  
  return true;
};
