var vl = Object.defineProperty;
var xl = (i, e, t) => e in i ? vl(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t;
var mt = (i, e, t) => xl(i, typeof e != "symbol" ? e + "" : e, t);
const Ml = "1.0.2", Sl = {
  version: Ml
};
function El(i, e) {
  e === void 0 && (e = {}), e.insertAt;
}
var yl = "";
El(yl);
/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
const Qs = "183", Tl = 0, ya = 1, bl = 2, lr = 1, Al = 2, yi = 3, An = 0, wt = 1, Ft = 2, hn = 0, ri = 1, Ta = 2, ba = 3, Aa = 4, wl = 5, Fn = 100, Rl = 101, Cl = 102, Pl = 103, Ll = 104, Dl = 200, Il = 201, Ul = 202, Nl = 203, os = 204, ls = 205, Fl = 206, Ol = 207, Bl = 208, zl = 209, Vl = 210, Gl = 211, Hl = 212, kl = 213, Wl = 214, cs = 0, us = 1, hs = 2, ai = 3, fs = 4, ds = 5, ps = 6, ms = 7, Ao = 0, Xl = 1, Yl = 2, Kt = 0, wo = 1, Ro = 2, Co = 3, Po = 4, Lo = 5, Do = 6, Io = 7, Uo = 300, Vn = 301, oi = 302, Tr = 303, br = 304, xr = 306, _s = 1e3, un = 1001, gs = 1002, vt = 1003, ql = 1004, Oi = 1005, Et = 1006, Ar = 1007, Bn = 1008, Lt = 1009, No = 1010, Fo = 1011, wi = 1012, ea = 1013, Qt = 1014, Zt = 1015, dn = 1016, ta = 1017, na = 1018, Ri = 1020, Oo = 35902, Bo = 35899, zo = 1021, Vo = 1022, Ht = 1023, pn = 1026, zn = 1027, Go = 1028, ia = 1029, li = 1030, ra = 1031, sa = 1033, cr = 33776, ur = 33777, hr = 33778, fr = 33779, vs = 35840, xs = 35841, Ms = 35842, Ss = 35843, Es = 36196, ys = 37492, Ts = 37496, bs = 37488, As = 37489, ws = 37490, Rs = 37491, Cs = 37808, Ps = 37809, Ls = 37810, Ds = 37811, Is = 37812, Us = 37813, Ns = 37814, Fs = 37815, Os = 37816, Bs = 37817, zs = 37818, Vs = 37819, Gs = 37820, Hs = 37821, ks = 36492, Ws = 36494, Xs = 36495, Ys = 36283, qs = 36284, Zs = 36285, Js = 36286, Zl = 3200, Ho = 0, Jl = 1, Tn = "", Ut = "srgb", ci = "srgb-linear", pr = "linear", Ze = "srgb", kn = 7680, wa = 519, Kl = 512, $l = 513, jl = 514, aa = 515, Ql = 516, ec = 517, oa = 518, tc = 519, Ra = 35044, Ca = "300 es", Jt = 2e3, Ci = 2001;
function nc(i) {
  for (let e = i.length - 1; e >= 0; --e)
    if (i[e] >= 65535) return !0;
  return !1;
}
function mr(i) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", i);
}
function ic() {
  const i = mr("canvas");
  return i.style.display = "block", i;
}
const Pa = {};
function La(...i) {
  const e = "THREE." + i.shift();
  console.log(e, ...i);
}
function ko(i) {
  const e = i[0];
  if (typeof e == "string" && e.startsWith("TSL:")) {
    const t = i[1];
    t && t.isStackTrace ? i[0] += " " + t.getLocation() : i[1] = 'Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.';
  }
  return i;
}
function Ce(...i) {
  i = ko(i);
  const e = "THREE." + i.shift();
  {
    const t = i[0];
    t && t.isStackTrace ? console.warn(t.getError(e)) : console.warn(e, ...i);
  }
}
function We(...i) {
  i = ko(i);
  const e = "THREE." + i.shift();
  {
    const t = i[0];
    t && t.isStackTrace ? console.error(t.getError(e)) : console.error(e, ...i);
  }
}
function _r(...i) {
  const e = i.join(" ");
  e in Pa || (Pa[e] = !0, Ce(...i));
}
function rc(i, e, t) {
  return new Promise(function(n, r) {
    function s() {
      switch (i.clientWaitSync(e, i.SYNC_FLUSH_COMMANDS_BIT, 0)) {
        case i.WAIT_FAILED:
          r();
          break;
        case i.TIMEOUT_EXPIRED:
          setTimeout(s, t);
          break;
        default:
          n();
      }
    }
    setTimeout(s, t);
  });
}
const sc = {
  [cs]: us,
  [hs]: ps,
  [fs]: ms,
  [ai]: ds,
  [us]: cs,
  [ps]: hs,
  [ms]: fs,
  [ds]: ai
};
class fi {
  /**
   * Adds the given event listener to the given event type.
   *
   * @param {string} type - The type of event to listen to.
   * @param {Function} listener - The function that gets called when the event is fired.
   */
  addEventListener(e, t) {
    this._listeners === void 0 && (this._listeners = {});
    const n = this._listeners;
    n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t);
  }
  /**
   * Returns `true` if the given event listener has been added to the given event type.
   *
   * @param {string} type - The type of event.
   * @param {Function} listener - The listener to check.
   * @return {boolean} Whether the given event listener has been added to the given event type.
   */
  hasEventListener(e, t) {
    const n = this._listeners;
    return n === void 0 ? !1 : n[e] !== void 0 && n[e].indexOf(t) !== -1;
  }
  /**
   * Removes the given event listener from the given event type.
   *
   * @param {string} type - The type of event.
   * @param {Function} listener - The listener to remove.
   */
  removeEventListener(e, t) {
    const n = this._listeners;
    if (n === void 0) return;
    const r = n[e];
    if (r !== void 0) {
      const s = r.indexOf(t);
      s !== -1 && r.splice(s, 1);
    }
  }
  /**
   * Dispatches an event object.
   *
   * @param {Object} event - The event that gets fired.
   */
  dispatchEvent(e) {
    const t = this._listeners;
    if (t === void 0) return;
    const n = t[e.type];
    if (n !== void 0) {
      e.target = this;
      const r = n.slice(0);
      for (let s = 0, a = r.length; s < a; s++)
        r[s].call(this, e);
      e.target = null;
    }
  }
}
const Mt = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"], wr = Math.PI / 180, Ks = 180 / Math.PI;
function Li() {
  const i = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0;
  return (Mt[i & 255] + Mt[i >> 8 & 255] + Mt[i >> 16 & 255] + Mt[i >> 24 & 255] + "-" + Mt[e & 255] + Mt[e >> 8 & 255] + "-" + Mt[e >> 16 & 15 | 64] + Mt[e >> 24 & 255] + "-" + Mt[t & 63 | 128] + Mt[t >> 8 & 255] + "-" + Mt[t >> 16 & 255] + Mt[t >> 24 & 255] + Mt[n & 255] + Mt[n >> 8 & 255] + Mt[n >> 16 & 255] + Mt[n >> 24 & 255]).toLowerCase();
}
function ze(i, e, t) {
  return Math.max(e, Math.min(t, i));
}
function ac(i, e) {
  return (i % e + e) % e;
}
function Rr(i, e, t) {
  return (1 - t) * i + t * e;
}
function _i(i, e) {
  switch (e.constructor) {
    case Float32Array:
      return i;
    case Uint32Array:
      return i / 4294967295;
    case Uint16Array:
      return i / 65535;
    case Uint8Array:
      return i / 255;
    case Int32Array:
      return Math.max(i / 2147483647, -1);
    case Int16Array:
      return Math.max(i / 32767, -1);
    case Int8Array:
      return Math.max(i / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function At(i, e) {
  switch (e.constructor) {
    case Float32Array:
      return i;
    case Uint32Array:
      return Math.round(i * 4294967295);
    case Uint16Array:
      return Math.round(i * 65535);
    case Uint8Array:
      return Math.round(i * 255);
    case Int32Array:
      return Math.round(i * 2147483647);
    case Int16Array:
      return Math.round(i * 32767);
    case Int8Array:
      return Math.round(i * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
class be {
  /**
   * Constructs a new 2D vector.
   *
   * @param {number} [x=0] - The x value of this vector.
   * @param {number} [y=0] - The y value of this vector.
   */
  constructor(e = 0, t = 0) {
    be.prototype.isVector2 = !0, this.x = e, this.y = t;
  }
  /**
   * Alias for {@link Vector2#x}.
   *
   * @type {number}
   */
  get width() {
    return this.x;
  }
  set width(e) {
    this.x = e;
  }
  /**
   * Alias for {@link Vector2#y}.
   *
   * @type {number}
   */
  get height() {
    return this.y;
  }
  set height(e) {
    this.y = e;
  }
  /**
   * Sets the vector components.
   *
   * @param {number} x - The value of the x component.
   * @param {number} y - The value of the y component.
   * @return {Vector2} A reference to this vector.
   */
  set(e, t) {
    return this.x = e, this.y = t, this;
  }
  /**
   * Sets the vector components to the same value.
   *
   * @param {number} scalar - The value to set for all vector components.
   * @return {Vector2} A reference to this vector.
   */
  setScalar(e) {
    return this.x = e, this.y = e, this;
  }
  /**
   * Sets the vector's x component to the given value
   *
   * @param {number} x - The value to set.
   * @return {Vector2} A reference to this vector.
   */
  setX(e) {
    return this.x = e, this;
  }
  /**
   * Sets the vector's y component to the given value
   *
   * @param {number} y - The value to set.
   * @return {Vector2} A reference to this vector.
   */
  setY(e) {
    return this.y = e, this;
  }
  /**
   * Allows to set a vector component with an index.
   *
   * @param {number} index - The component index. `0` equals to x, `1` equals to y.
   * @param {number} value - The value to set.
   * @return {Vector2} A reference to this vector.
   */
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  /**
   * Returns the value of the vector component which matches the given index.
   *
   * @param {number} index - The component index. `0` equals to x, `1` equals to y.
   * @return {number} A vector component value.
   */
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  /**
   * Returns a new vector with copied values from this instance.
   *
   * @return {Vector2} A clone of this instance.
   */
  clone() {
    return new this.constructor(this.x, this.y);
  }
  /**
   * Copies the values of the given vector to this instance.
   *
   * @param {Vector2} v - The vector to copy.
   * @return {Vector2} A reference to this vector.
   */
  copy(e) {
    return this.x = e.x, this.y = e.y, this;
  }
  /**
   * Adds the given vector to this instance.
   *
   * @param {Vector2} v - The vector to add.
   * @return {Vector2} A reference to this vector.
   */
  add(e) {
    return this.x += e.x, this.y += e.y, this;
  }
  /**
   * Adds the given scalar value to all components of this instance.
   *
   * @param {number} s - The scalar to add.
   * @return {Vector2} A reference to this vector.
   */
  addScalar(e) {
    return this.x += e, this.y += e, this;
  }
  /**
   * Adds the given vectors and stores the result in this instance.
   *
   * @param {Vector2} a - The first vector.
   * @param {Vector2} b - The second vector.
   * @return {Vector2} A reference to this vector.
   */
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this;
  }
  /**
   * Adds the given vector scaled by the given factor to this instance.
   *
   * @param {Vector2} v - The vector.
   * @param {number} s - The factor that scales `v`.
   * @return {Vector2} A reference to this vector.
   */
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this;
  }
  /**
   * Subtracts the given vector from this instance.
   *
   * @param {Vector2} v - The vector to subtract.
   * @return {Vector2} A reference to this vector.
   */
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this;
  }
  /**
   * Subtracts the given scalar value from all components of this instance.
   *
   * @param {number} s - The scalar to subtract.
   * @return {Vector2} A reference to this vector.
   */
  subScalar(e) {
    return this.x -= e, this.y -= e, this;
  }
  /**
   * Subtracts the given vectors and stores the result in this instance.
   *
   * @param {Vector2} a - The first vector.
   * @param {Vector2} b - The second vector.
   * @return {Vector2} A reference to this vector.
   */
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this;
  }
  /**
   * Multiplies the given vector with this instance.
   *
   * @param {Vector2} v - The vector to multiply.
   * @return {Vector2} A reference to this vector.
   */
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this;
  }
  /**
   * Multiplies the given scalar value with all components of this instance.
   *
   * @param {number} scalar - The scalar to multiply.
   * @return {Vector2} A reference to this vector.
   */
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this;
  }
  /**
   * Divides this instance by the given vector.
   *
   * @param {Vector2} v - The vector to divide.
   * @return {Vector2} A reference to this vector.
   */
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this;
  }
  /**
   * Divides this vector by the given scalar.
   *
   * @param {number} scalar - The scalar to divide.
   * @return {Vector2} A reference to this vector.
   */
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  /**
   * Multiplies this vector (with an implicit 1 as the 3rd component) by
   * the given 3x3 matrix.
   *
   * @param {Matrix3} m - The matrix to apply.
   * @return {Vector2} A reference to this vector.
   */
  applyMatrix3(e) {
    const t = this.x, n = this.y, r = e.elements;
    return this.x = r[0] * t + r[3] * n + r[6], this.y = r[1] * t + r[4] * n + r[7], this;
  }
  /**
   * If this vector's x or y value is greater than the given vector's x or y
   * value, replace that value with the corresponding min value.
   *
   * @param {Vector2} v - The vector.
   * @return {Vector2} A reference to this vector.
   */
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this;
  }
  /**
   * If this vector's x or y value is less than the given vector's x or y
   * value, replace that value with the corresponding max value.
   *
   * @param {Vector2} v - The vector.
   * @return {Vector2} A reference to this vector.
   */
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this;
  }
  /**
   * If this vector's x or y value is greater than the max vector's x or y
   * value, it is replaced by the corresponding value.
   * If this vector's x or y value is less than the min vector's x or y value,
   * it is replaced by the corresponding value.
   *
   * @param {Vector2} min - The minimum x and y values.
   * @param {Vector2} max - The maximum x and y values in the desired range.
   * @return {Vector2} A reference to this vector.
   */
  clamp(e, t) {
    return this.x = ze(this.x, e.x, t.x), this.y = ze(this.y, e.y, t.y), this;
  }
  /**
   * If this vector's x or y values are greater than the max value, they are
   * replaced by the max value.
   * If this vector's x or y values are less than the min value, they are
   * replaced by the min value.
   *
   * @param {number} minVal - The minimum value the components will be clamped to.
   * @param {number} maxVal - The maximum value the components will be clamped to.
   * @return {Vector2} A reference to this vector.
   */
  clampScalar(e, t) {
    return this.x = ze(this.x, e, t), this.y = ze(this.y, e, t), this;
  }
  /**
   * If this vector's length is greater than the max value, it is replaced by
   * the max value.
   * If this vector's length is less than the min value, it is replaced by the
   * min value.
   *
   * @param {number} min - The minimum value the vector length will be clamped to.
   * @param {number} max - The maximum value the vector length will be clamped to.
   * @return {Vector2} A reference to this vector.
   */
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(ze(n, e, t));
  }
  /**
   * The components of this vector are rounded down to the nearest integer value.
   *
   * @return {Vector2} A reference to this vector.
   */
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
  }
  /**
   * The components of this vector are rounded up to the nearest integer value.
   *
   * @return {Vector2} A reference to this vector.
   */
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
  }
  /**
   * The components of this vector are rounded to the nearest integer value
   *
   * @return {Vector2} A reference to this vector.
   */
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
  }
  /**
   * The components of this vector are rounded towards zero (up if negative,
   * down if positive) to an integer value.
   *
   * @return {Vector2} A reference to this vector.
   */
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this;
  }
  /**
   * Inverts this vector - i.e. sets x = -x and y = -y.
   *
   * @return {Vector2} A reference to this vector.
   */
  negate() {
    return this.x = -this.x, this.y = -this.y, this;
  }
  /**
   * Calculates the dot product of the given vector with this instance.
   *
   * @param {Vector2} v - The vector to compute the dot product with.
   * @return {number} The result of the dot product.
   */
  dot(e) {
    return this.x * e.x + this.y * e.y;
  }
  /**
   * Calculates the cross product of the given vector with this instance.
   *
   * @param {Vector2} v - The vector to compute the cross product with.
   * @return {number} The result of the cross product.
   */
  cross(e) {
    return this.x * e.y - this.y * e.x;
  }
  /**
   * Computes the square of the Euclidean length (straight-line length) from
   * (0, 0) to (x, y). If you are comparing the lengths of vectors, you should
   * compare the length squared instead as it is slightly more efficient to calculate.
   *
   * @return {number} The square length of this vector.
   */
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  /**
   * Computes the  Euclidean length (straight-line length) from (0, 0) to (x, y).
   *
   * @return {number} The length of this vector.
   */
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  /**
   * Computes the Manhattan length of this vector.
   *
   * @return {number} The length of this vector.
   */
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  /**
   * Converts this vector to a unit vector - that is, sets it equal to a vector
   * with the same direction as this one, but with a vector length of `1`.
   *
   * @return {Vector2} A reference to this vector.
   */
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  /**
   * Computes the angle in radians of this vector with respect to the positive x-axis.
   *
   * @return {number} The angle in radians.
   */
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  /**
   * Returns the angle between the given vector and this instance in radians.
   *
   * @param {Vector2} v - The vector to compute the angle with.
   * @return {number} The angle in radians.
   */
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(ze(n, -1, 1));
  }
  /**
   * Computes the distance from the given vector to this instance.
   *
   * @param {Vector2} v - The vector to compute the distance to.
   * @return {number} The distance.
   */
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  /**
   * Computes the squared distance from the given vector to this instance.
   * If you are just comparing the distance with another distance, you should compare
   * the distance squared instead as it is slightly more efficient to calculate.
   *
   * @param {Vector2} v - The vector to compute the squared distance to.
   * @return {number} The squared distance.
   */
  distanceToSquared(e) {
    const t = this.x - e.x, n = this.y - e.y;
    return t * t + n * n;
  }
  /**
   * Computes the Manhattan distance from the given vector to this instance.
   *
   * @param {Vector2} v - The vector to compute the Manhattan distance to.
   * @return {number} The Manhattan distance.
   */
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
  }
  /**
   * Sets this vector to a vector with the same direction as this one, but
   * with the specified length.
   *
   * @param {number} length - The new length of this vector.
   * @return {Vector2} A reference to this vector.
   */
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  /**
   * Linearly interpolates between the given vector and this instance, where
   * alpha is the percent distance along the line - alpha = 0 will be this
   * vector, and alpha = 1 will be the given one.
   *
   * @param {Vector2} v - The vector to interpolate towards.
   * @param {number} alpha - The interpolation factor, typically in the closed interval `[0, 1]`.
   * @return {Vector2} A reference to this vector.
   */
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this;
  }
  /**
   * Linearly interpolates between the given vectors, where alpha is the percent
   * distance along the line - alpha = 0 will be first vector, and alpha = 1 will
   * be the second one. The result is stored in this instance.
   *
   * @param {Vector2} v1 - The first vector.
   * @param {Vector2} v2 - The second vector.
   * @param {number} alpha - The interpolation factor, typically in the closed interval `[0, 1]`.
   * @return {Vector2} A reference to this vector.
   */
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this;
  }
  /**
   * Returns `true` if this vector is equal with the given one.
   *
   * @param {Vector2} v - The vector to test for equality.
   * @return {boolean} Whether this vector is equal with the given one.
   */
  equals(e) {
    return e.x === this.x && e.y === this.y;
  }
  /**
   * Sets this vector's x value to be `array[ offset ]` and y
   * value to be `array[ offset + 1 ]`.
   *
   * @param {Array<number>} array - An array holding the vector component values.
   * @param {number} [offset=0] - The offset into the array.
   * @return {Vector2} A reference to this vector.
   */
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this;
  }
  /**
   * Writes the components of this vector to the given array. If no array is provided,
   * the method returns a new instance.
   *
   * @param {Array<number>} [array=[]] - The target array holding the vector components.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Array<number>} The vector components.
   */
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e;
  }
  /**
   * Sets the components of this vector from the given buffer attribute.
   *
   * @param {BufferAttribute} attribute - The buffer attribute holding vector data.
   * @param {number} index - The index into the attribute.
   * @return {Vector2} A reference to this vector.
   */
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this;
  }
  /**
   * Rotates this vector around the given center by the given angle.
   *
   * @param {Vector2} center - The point around which to rotate.
   * @param {number} angle - The angle to rotate, in radians.
   * @return {Vector2} A reference to this vector.
   */
  rotateAround(e, t) {
    const n = Math.cos(t), r = Math.sin(t), s = this.x - e.x, a = this.y - e.y;
    return this.x = s * n - a * r + e.x, this.y = s * r + a * n + e.y, this;
  }
  /**
   * Sets each component of this vector to a pseudo-random value between `0` and
   * `1`, excluding `1`.
   *
   * @return {Vector2} A reference to this vector.
   */
  random() {
    return this.x = Math.random(), this.y = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class di {
  /**
   * Constructs a new quaternion.
   *
   * @param {number} [x=0] - The x value of this quaternion.
   * @param {number} [y=0] - The y value of this quaternion.
   * @param {number} [z=0] - The z value of this quaternion.
   * @param {number} [w=1] - The w value of this quaternion.
   */
  constructor(e = 0, t = 0, n = 0, r = 1) {
    this.isQuaternion = !0, this._x = e, this._y = t, this._z = n, this._w = r;
  }
  /**
   * Interpolates between two quaternions via SLERP. This implementation assumes the
   * quaternion data are managed in flat arrays.
   *
   * @param {Array<number>} dst - The destination array.
   * @param {number} dstOffset - An offset into the destination array.
   * @param {Array<number>} src0 - The source array of the first quaternion.
   * @param {number} srcOffset0 - An offset into the first source array.
   * @param {Array<number>} src1 -  The source array of the second quaternion.
   * @param {number} srcOffset1 - An offset into the second source array.
   * @param {number} t - The interpolation factor. A value in the range `[0,1]` will interpolate. A value outside the range `[0,1]` will extrapolate.
   * @see {@link Quaternion#slerp}
   */
  static slerpFlat(e, t, n, r, s, a, o) {
    let c = n[r + 0], l = n[r + 1], h = n[r + 2], m = n[r + 3], u = s[a + 0], d = s[a + 1], _ = s[a + 2], M = s[a + 3];
    if (m !== M || c !== u || l !== d || h !== _) {
      let p = c * u + l * d + h * _ + m * M;
      p < 0 && (u = -u, d = -d, _ = -_, M = -M, p = -p);
      let f = 1 - o;
      if (p < 0.9995) {
        const S = Math.acos(p), b = Math.sin(S);
        f = Math.sin(f * S) / b, o = Math.sin(o * S) / b, c = c * f + u * o, l = l * f + d * o, h = h * f + _ * o, m = m * f + M * o;
      } else {
        c = c * f + u * o, l = l * f + d * o, h = h * f + _ * o, m = m * f + M * o;
        const S = 1 / Math.sqrt(c * c + l * l + h * h + m * m);
        c *= S, l *= S, h *= S, m *= S;
      }
    }
    e[t] = c, e[t + 1] = l, e[t + 2] = h, e[t + 3] = m;
  }
  /**
   * Multiplies two quaternions. This implementation assumes the quaternion data are managed
   * in flat arrays.
   *
   * @param {Array<number>} dst - The destination array.
   * @param {number} dstOffset - An offset into the destination array.
   * @param {Array<number>} src0 - The source array of the first quaternion.
   * @param {number} srcOffset0 - An offset into the first source array.
   * @param {Array<number>} src1 -  The source array of the second quaternion.
   * @param {number} srcOffset1 - An offset into the second source array.
   * @return {Array<number>} The destination array.
   * @see {@link Quaternion#multiplyQuaternions}.
   */
  static multiplyQuaternionsFlat(e, t, n, r, s, a) {
    const o = n[r], c = n[r + 1], l = n[r + 2], h = n[r + 3], m = s[a], u = s[a + 1], d = s[a + 2], _ = s[a + 3];
    return e[t] = o * _ + h * m + c * d - l * u, e[t + 1] = c * _ + h * u + l * m - o * d, e[t + 2] = l * _ + h * d + o * u - c * m, e[t + 3] = h * _ - o * m - c * u - l * d, e;
  }
  /**
   * The x value of this quaternion.
   *
   * @type {number}
   * @default 0
   */
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e, this._onChangeCallback();
  }
  /**
   * The y value of this quaternion.
   *
   * @type {number}
   * @default 0
   */
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e, this._onChangeCallback();
  }
  /**
   * The z value of this quaternion.
   *
   * @type {number}
   * @default 0
   */
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e, this._onChangeCallback();
  }
  /**
   * The w value of this quaternion.
   *
   * @type {number}
   * @default 1
   */
  get w() {
    return this._w;
  }
  set w(e) {
    this._w = e, this._onChangeCallback();
  }
  /**
   * Sets the quaternion components.
   *
   * @param {number} x - The x value of this quaternion.
   * @param {number} y - The y value of this quaternion.
   * @param {number} z - The z value of this quaternion.
   * @param {number} w - The w value of this quaternion.
   * @return {Quaternion} A reference to this quaternion.
   */
  set(e, t, n, r) {
    return this._x = e, this._y = t, this._z = n, this._w = r, this._onChangeCallback(), this;
  }
  /**
   * Returns a new quaternion with copied values from this instance.
   *
   * @return {Quaternion} A clone of this instance.
   */
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  /**
   * Copies the values of the given quaternion to this instance.
   *
   * @param {Quaternion} quaternion - The quaternion to copy.
   * @return {Quaternion} A reference to this quaternion.
   */
  copy(e) {
    return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this._onChangeCallback(), this;
  }
  /**
   * Sets this quaternion from the rotation specified by the given
   * Euler angles.
   *
   * @param {Euler} euler - The Euler angles.
   * @param {boolean} [update=true] - Whether the internal `onChange` callback should be executed or not.
   * @return {Quaternion} A reference to this quaternion.
   */
  setFromEuler(e, t = !0) {
    const n = e._x, r = e._y, s = e._z, a = e._order, o = Math.cos, c = Math.sin, l = o(n / 2), h = o(r / 2), m = o(s / 2), u = c(n / 2), d = c(r / 2), _ = c(s / 2);
    switch (a) {
      case "XYZ":
        this._x = u * h * m + l * d * _, this._y = l * d * m - u * h * _, this._z = l * h * _ + u * d * m, this._w = l * h * m - u * d * _;
        break;
      case "YXZ":
        this._x = u * h * m + l * d * _, this._y = l * d * m - u * h * _, this._z = l * h * _ - u * d * m, this._w = l * h * m + u * d * _;
        break;
      case "ZXY":
        this._x = u * h * m - l * d * _, this._y = l * d * m + u * h * _, this._z = l * h * _ + u * d * m, this._w = l * h * m - u * d * _;
        break;
      case "ZYX":
        this._x = u * h * m - l * d * _, this._y = l * d * m + u * h * _, this._z = l * h * _ - u * d * m, this._w = l * h * m + u * d * _;
        break;
      case "YZX":
        this._x = u * h * m + l * d * _, this._y = l * d * m + u * h * _, this._z = l * h * _ - u * d * m, this._w = l * h * m - u * d * _;
        break;
      case "XZY":
        this._x = u * h * m - l * d * _, this._y = l * d * m - u * h * _, this._z = l * h * _ + u * d * m, this._w = l * h * m + u * d * _;
        break;
      default:
        Ce("Quaternion: .setFromEuler() encountered an unknown order: " + a);
    }
    return t === !0 && this._onChangeCallback(), this;
  }
  /**
   * Sets this quaternion from the given axis and angle.
   *
   * @param {Vector3} axis - The normalized axis.
   * @param {number} angle - The angle in radians.
   * @return {Quaternion} A reference to this quaternion.
   */
  setFromAxisAngle(e, t) {
    const n = t / 2, r = Math.sin(n);
    return this._x = e.x * r, this._y = e.y * r, this._z = e.z * r, this._w = Math.cos(n), this._onChangeCallback(), this;
  }
  /**
   * Sets this quaternion from the given rotation matrix.
   *
   * @param {Matrix4} m - A 4x4 matrix of which the upper 3x3 of matrix is a pure rotation matrix (i.e. unscaled).
   * @return {Quaternion} A reference to this quaternion.
   */
  setFromRotationMatrix(e) {
    const t = e.elements, n = t[0], r = t[4], s = t[8], a = t[1], o = t[5], c = t[9], l = t[2], h = t[6], m = t[10], u = n + o + m;
    if (u > 0) {
      const d = 0.5 / Math.sqrt(u + 1);
      this._w = 0.25 / d, this._x = (h - c) * d, this._y = (s - l) * d, this._z = (a - r) * d;
    } else if (n > o && n > m) {
      const d = 2 * Math.sqrt(1 + n - o - m);
      this._w = (h - c) / d, this._x = 0.25 * d, this._y = (r + a) / d, this._z = (s + l) / d;
    } else if (o > m) {
      const d = 2 * Math.sqrt(1 + o - n - m);
      this._w = (s - l) / d, this._x = (r + a) / d, this._y = 0.25 * d, this._z = (c + h) / d;
    } else {
      const d = 2 * Math.sqrt(1 + m - n - o);
      this._w = (a - r) / d, this._x = (s + l) / d, this._y = (c + h) / d, this._z = 0.25 * d;
    }
    return this._onChangeCallback(), this;
  }
  /**
   * Sets this quaternion to the rotation required to rotate the direction vector
   * `vFrom` to the direction vector `vTo`.
   *
   * @param {Vector3} vFrom - The first (normalized) direction vector.
   * @param {Vector3} vTo - The second (normalized) direction vector.
   * @return {Quaternion} A reference to this quaternion.
   */
  setFromUnitVectors(e, t) {
    let n = e.dot(t) + 1;
    return n < 1e-8 ? (n = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = n)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x, this._w = n), this.normalize();
  }
  /**
   * Returns the angle between this quaternion and the given one in radians.
   *
   * @param {Quaternion} q - The quaternion to compute the angle with.
   * @return {number} The angle in radians.
   */
  angleTo(e) {
    return 2 * Math.acos(Math.abs(ze(this.dot(e), -1, 1)));
  }
  /**
   * Rotates this quaternion by a given angular step to the given quaternion.
   * The method ensures that the final quaternion will not overshoot `q`.
   *
   * @param {Quaternion} q - The target quaternion.
   * @param {number} step - The angular step in radians.
   * @return {Quaternion} A reference to this quaternion.
   */
  rotateTowards(e, t) {
    const n = this.angleTo(e);
    if (n === 0) return this;
    const r = Math.min(1, t / n);
    return this.slerp(e, r), this;
  }
  /**
   * Sets this quaternion to the identity quaternion; that is, to the
   * quaternion that represents "no rotation".
   *
   * @return {Quaternion} A reference to this quaternion.
   */
  identity() {
    return this.set(0, 0, 0, 1);
  }
  /**
   * Inverts this quaternion via {@link Quaternion#conjugate}. The
   * quaternion is assumed to have unit length.
   *
   * @return {Quaternion} A reference to this quaternion.
   */
  invert() {
    return this.conjugate();
  }
  /**
   * Returns the rotational conjugate of this quaternion. The conjugate of a
   * quaternion represents the same rotation in the opposite direction about
   * the rotational axis.
   *
   * @return {Quaternion} A reference to this quaternion.
   */
  conjugate() {
    return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
  }
  /**
   * Calculates the dot product of this quaternion and the given one.
   *
   * @param {Quaternion} v - The quaternion to compute the dot product with.
   * @return {number} The result of the dot product.
   */
  dot(e) {
    return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
  }
  /**
   * Computes the squared Euclidean length (straight-line length) of this quaternion,
   * considered as a 4 dimensional vector. This can be useful if you are comparing the
   * lengths of two quaternions, as this is a slightly more efficient calculation than
   * {@link Quaternion#length}.
   *
   * @return {number} The squared Euclidean length.
   */
  lengthSq() {
    return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
  }
  /**
   * Computes the Euclidean length (straight-line length) of this quaternion,
   * considered as a 4 dimensional vector.
   *
   * @return {number} The Euclidean length.
   */
  length() {
    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
  }
  /**
   * Normalizes this quaternion - that is, calculated the quaternion that performs
   * the same rotation as this one, but has a length equal to `1`.
   *
   * @return {Quaternion} A reference to this quaternion.
   */
  normalize() {
    let e = this.length();
    return e === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e = 1 / e, this._x = this._x * e, this._y = this._y * e, this._z = this._z * e, this._w = this._w * e), this._onChangeCallback(), this;
  }
  /**
   * Multiplies this quaternion by the given one.
   *
   * @param {Quaternion} q - The quaternion.
   * @return {Quaternion} A reference to this quaternion.
   */
  multiply(e) {
    return this.multiplyQuaternions(this, e);
  }
  /**
   * Pre-multiplies this quaternion by the given one.
   *
   * @param {Quaternion} q - The quaternion.
   * @return {Quaternion} A reference to this quaternion.
   */
  premultiply(e) {
    return this.multiplyQuaternions(e, this);
  }
  /**
   * Multiplies the given quaternions and stores the result in this instance.
   *
   * @param {Quaternion} a - The first quaternion.
   * @param {Quaternion} b - The second quaternion.
   * @return {Quaternion} A reference to this quaternion.
   */
  multiplyQuaternions(e, t) {
    const n = e._x, r = e._y, s = e._z, a = e._w, o = t._x, c = t._y, l = t._z, h = t._w;
    return this._x = n * h + a * o + r * l - s * c, this._y = r * h + a * c + s * o - n * l, this._z = s * h + a * l + n * c - r * o, this._w = a * h - n * o - r * c - s * l, this._onChangeCallback(), this;
  }
  /**
   * Performs a spherical linear interpolation between this quaternion and the target quaternion.
   *
   * @param {Quaternion} qb - The target quaternion.
   * @param {number} t - The interpolation factor. A value in the range `[0,1]` will interpolate. A value outside the range `[0,1]` will extrapolate.
   * @return {Quaternion} A reference to this quaternion.
   */
  slerp(e, t) {
    let n = e._x, r = e._y, s = e._z, a = e._w, o = this.dot(e);
    o < 0 && (n = -n, r = -r, s = -s, a = -a, o = -o);
    let c = 1 - t;
    if (o < 0.9995) {
      const l = Math.acos(o), h = Math.sin(l);
      c = Math.sin(c * l) / h, t = Math.sin(t * l) / h, this._x = this._x * c + n * t, this._y = this._y * c + r * t, this._z = this._z * c + s * t, this._w = this._w * c + a * t, this._onChangeCallback();
    } else
      this._x = this._x * c + n * t, this._y = this._y * c + r * t, this._z = this._z * c + s * t, this._w = this._w * c + a * t, this.normalize();
    return this;
  }
  /**
   * Performs a spherical linear interpolation between the given quaternions
   * and stores the result in this quaternion.
   *
   * @param {Quaternion} qa - The source quaternion.
   * @param {Quaternion} qb - The target quaternion.
   * @param {number} t - The interpolation factor in the closed interval `[0, 1]`.
   * @return {Quaternion} A reference to this quaternion.
   */
  slerpQuaternions(e, t, n) {
    return this.copy(e).slerp(t, n);
  }
  /**
   * Sets this quaternion to a uniformly random, normalized quaternion.
   *
   * @return {Quaternion} A reference to this quaternion.
   */
  random() {
    const e = 2 * Math.PI * Math.random(), t = 2 * Math.PI * Math.random(), n = Math.random(), r = Math.sqrt(1 - n), s = Math.sqrt(n);
    return this.set(
      r * Math.sin(e),
      r * Math.cos(e),
      s * Math.sin(t),
      s * Math.cos(t)
    );
  }
  /**
   * Returns `true` if this quaternion is equal with the given one.
   *
   * @param {Quaternion} quaternion - The quaternion to test for equality.
   * @return {boolean} Whether this quaternion is equal with the given one.
   */
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w;
  }
  /**
   * Sets this quaternion's components from the given array.
   *
   * @param {Array<number>} array - An array holding the quaternion component values.
   * @param {number} [offset=0] - The offset into the array.
   * @return {Quaternion} A reference to this quaternion.
   */
  fromArray(e, t = 0) {
    return this._x = e[t], this._y = e[t + 1], this._z = e[t + 2], this._w = e[t + 3], this._onChangeCallback(), this;
  }
  /**
   * Writes the components of this quaternion to the given array. If no array is provided,
   * the method returns a new instance.
   *
   * @param {Array<number>} [array=[]] - The target array holding the quaternion components.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Array<number>} The quaternion components.
   */
  toArray(e = [], t = 0) {
    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._w, e;
  }
  /**
   * Sets the components of this quaternion from the given buffer attribute.
   *
   * @param {BufferAttribute} attribute - The buffer attribute holding quaternion data.
   * @param {number} index - The index into the attribute.
   * @return {Quaternion} A reference to this quaternion.
   */
  fromBufferAttribute(e, t) {
    return this._x = e.getX(t), this._y = e.getY(t), this._z = e.getZ(t), this._w = e.getW(t), this._onChangeCallback(), this;
  }
  /**
   * This methods defines the serialization result of this class. Returns the
   * numerical elements of this quaternion in an array of format `[x, y, z, w]`.
   *
   * @return {Array<number>} The serialized quaternion.
   */
  toJSON() {
    return this.toArray();
  }
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
class I {
  /**
   * Constructs a new 3D vector.
   *
   * @param {number} [x=0] - The x value of this vector.
   * @param {number} [y=0] - The y value of this vector.
   * @param {number} [z=0] - The z value of this vector.
   */
  constructor(e = 0, t = 0, n = 0) {
    I.prototype.isVector3 = !0, this.x = e, this.y = t, this.z = n;
  }
  /**
   * Sets the vector components.
   *
   * @param {number} x - The value of the x component.
   * @param {number} y - The value of the y component.
   * @param {number} z - The value of the z component.
   * @return {Vector3} A reference to this vector.
   */
  set(e, t, n) {
    return n === void 0 && (n = this.z), this.x = e, this.y = t, this.z = n, this;
  }
  /**
   * Sets the vector components to the same value.
   *
   * @param {number} scalar - The value to set for all vector components.
   * @return {Vector3} A reference to this vector.
   */
  setScalar(e) {
    return this.x = e, this.y = e, this.z = e, this;
  }
  /**
   * Sets the vector's x component to the given value.
   *
   * @param {number} x - The value to set.
   * @return {Vector3} A reference to this vector.
   */
  setX(e) {
    return this.x = e, this;
  }
  /**
   * Sets the vector's y component to the given value.
   *
   * @param {number} y - The value to set.
   * @return {Vector3} A reference to this vector.
   */
  setY(e) {
    return this.y = e, this;
  }
  /**
   * Sets the vector's z component to the given value.
   *
   * @param {number} z - The value to set.
   * @return {Vector3} A reference to this vector.
   */
  setZ(e) {
    return this.z = e, this;
  }
  /**
   * Allows to set a vector component with an index.
   *
   * @param {number} index - The component index. `0` equals to x, `1` equals to y, `2` equals to z.
   * @param {number} value - The value to set.
   * @return {Vector3} A reference to this vector.
   */
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  /**
   * Returns the value of the vector component which matches the given index.
   *
   * @param {number} index - The component index. `0` equals to x, `1` equals to y, `2` equals to z.
   * @return {number} A vector component value.
   */
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  /**
   * Returns a new vector with copied values from this instance.
   *
   * @return {Vector3} A clone of this instance.
   */
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  /**
   * Copies the values of the given vector to this instance.
   *
   * @param {Vector3} v - The vector to copy.
   * @return {Vector3} A reference to this vector.
   */
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this;
  }
  /**
   * Adds the given vector to this instance.
   *
   * @param {Vector3} v - The vector to add.
   * @return {Vector3} A reference to this vector.
   */
  add(e) {
    return this.x += e.x, this.y += e.y, this.z += e.z, this;
  }
  /**
   * Adds the given scalar value to all components of this instance.
   *
   * @param {number} s - The scalar to add.
   * @return {Vector3} A reference to this vector.
   */
  addScalar(e) {
    return this.x += e, this.y += e, this.z += e, this;
  }
  /**
   * Adds the given vectors and stores the result in this instance.
   *
   * @param {Vector3} a - The first vector.
   * @param {Vector3} b - The second vector.
   * @return {Vector3} A reference to this vector.
   */
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this;
  }
  /**
   * Adds the given vector scaled by the given factor to this instance.
   *
   * @param {Vector3|Vector4} v - The vector.
   * @param {number} s - The factor that scales `v`.
   * @return {Vector3} A reference to this vector.
   */
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this;
  }
  /**
   * Subtracts the given vector from this instance.
   *
   * @param {Vector3} v - The vector to subtract.
   * @return {Vector3} A reference to this vector.
   */
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this;
  }
  /**
   * Subtracts the given scalar value from all components of this instance.
   *
   * @param {number} s - The scalar to subtract.
   * @return {Vector3} A reference to this vector.
   */
  subScalar(e) {
    return this.x -= e, this.y -= e, this.z -= e, this;
  }
  /**
   * Subtracts the given vectors and stores the result in this instance.
   *
   * @param {Vector3} a - The first vector.
   * @param {Vector3} b - The second vector.
   * @return {Vector3} A reference to this vector.
   */
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this;
  }
  /**
   * Multiplies the given vector with this instance.
   *
   * @param {Vector3} v - The vector to multiply.
   * @return {Vector3} A reference to this vector.
   */
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this;
  }
  /**
   * Multiplies the given scalar value with all components of this instance.
   *
   * @param {number} scalar - The scalar to multiply.
   * @return {Vector3} A reference to this vector.
   */
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this.z *= e, this;
  }
  /**
   * Multiplies the given vectors and stores the result in this instance.
   *
   * @param {Vector3} a - The first vector.
   * @param {Vector3} b - The second vector.
   * @return {Vector3} A reference to this vector.
   */
  multiplyVectors(e, t) {
    return this.x = e.x * t.x, this.y = e.y * t.y, this.z = e.z * t.z, this;
  }
  /**
   * Applies the given Euler rotation to this vector.
   *
   * @param {Euler} euler - The Euler angles.
   * @return {Vector3} A reference to this vector.
   */
  applyEuler(e) {
    return this.applyQuaternion(Da.setFromEuler(e));
  }
  /**
   * Applies a rotation specified by an axis and an angle to this vector.
   *
   * @param {Vector3} axis - A normalized vector representing the rotation axis.
   * @param {number} angle - The angle in radians.
   * @return {Vector3} A reference to this vector.
   */
  applyAxisAngle(e, t) {
    return this.applyQuaternion(Da.setFromAxisAngle(e, t));
  }
  /**
   * Multiplies this vector with the given 3x3 matrix.
   *
   * @param {Matrix3} m - The 3x3 matrix.
   * @return {Vector3} A reference to this vector.
   */
  applyMatrix3(e) {
    const t = this.x, n = this.y, r = this.z, s = e.elements;
    return this.x = s[0] * t + s[3] * n + s[6] * r, this.y = s[1] * t + s[4] * n + s[7] * r, this.z = s[2] * t + s[5] * n + s[8] * r, this;
  }
  /**
   * Multiplies this vector by the given normal matrix and normalizes
   * the result.
   *
   * @param {Matrix3} m - The normal matrix.
   * @return {Vector3} A reference to this vector.
   */
  applyNormalMatrix(e) {
    return this.applyMatrix3(e).normalize();
  }
  /**
   * Multiplies this vector (with an implicit 1 in the 4th dimension) by m, and
   * divides by perspective.
   *
   * @param {Matrix4} m - The matrix to apply.
   * @return {Vector3} A reference to this vector.
   */
  applyMatrix4(e) {
    const t = this.x, n = this.y, r = this.z, s = e.elements, a = 1 / (s[3] * t + s[7] * n + s[11] * r + s[15]);
    return this.x = (s[0] * t + s[4] * n + s[8] * r + s[12]) * a, this.y = (s[1] * t + s[5] * n + s[9] * r + s[13]) * a, this.z = (s[2] * t + s[6] * n + s[10] * r + s[14]) * a, this;
  }
  /**
   * Applies the given Quaternion to this vector.
   *
   * @param {Quaternion} q - The Quaternion.
   * @return {Vector3} A reference to this vector.
   */
  applyQuaternion(e) {
    const t = this.x, n = this.y, r = this.z, s = e.x, a = e.y, o = e.z, c = e.w, l = 2 * (a * r - o * n), h = 2 * (o * t - s * r), m = 2 * (s * n - a * t);
    return this.x = t + c * l + a * m - o * h, this.y = n + c * h + o * l - s * m, this.z = r + c * m + s * h - a * l, this;
  }
  /**
   * Projects this vector from world space into the camera's normalized
   * device coordinate (NDC) space.
   *
   * @param {Camera} camera - The camera.
   * @return {Vector3} A reference to this vector.
   */
  project(e) {
    return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix);
  }
  /**
   * Unprojects this vector from the camera's normalized device coordinate (NDC)
   * space into world space.
   *
   * @param {Camera} camera - The camera.
   * @return {Vector3} A reference to this vector.
   */
  unproject(e) {
    return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld);
  }
  /**
   * Transforms the direction of this vector by a matrix (the upper left 3 x 3
   * subset of the given 4x4 matrix and then normalizes the result.
   *
   * @param {Matrix4} m - The matrix.
   * @return {Vector3} A reference to this vector.
   */
  transformDirection(e) {
    const t = this.x, n = this.y, r = this.z, s = e.elements;
    return this.x = s[0] * t + s[4] * n + s[8] * r, this.y = s[1] * t + s[5] * n + s[9] * r, this.z = s[2] * t + s[6] * n + s[10] * r, this.normalize();
  }
  /**
   * Divides this instance by the given vector.
   *
   * @param {Vector3} v - The vector to divide.
   * @return {Vector3} A reference to this vector.
   */
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this.z /= e.z, this;
  }
  /**
   * Divides this vector by the given scalar.
   *
   * @param {number} scalar - The scalar to divide.
   * @return {Vector3} A reference to this vector.
   */
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  /**
   * If this vector's x, y or z value is greater than the given vector's x, y or z
   * value, replace that value with the corresponding min value.
   *
   * @param {Vector3} v - The vector.
   * @return {Vector3} A reference to this vector.
   */
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this;
  }
  /**
   * If this vector's x, y or z value is less than the given vector's x, y or z
   * value, replace that value with the corresponding max value.
   *
   * @param {Vector3} v - The vector.
   * @return {Vector3} A reference to this vector.
   */
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this;
  }
  /**
   * If this vector's x, y or z value is greater than the max vector's x, y or z
   * value, it is replaced by the corresponding value.
   * If this vector's x, y or z value is less than the min vector's x, y or z value,
   * it is replaced by the corresponding value.
   *
   * @param {Vector3} min - The minimum x, y and z values.
   * @param {Vector3} max - The maximum x, y and z values in the desired range.
   * @return {Vector3} A reference to this vector.
   */
  clamp(e, t) {
    return this.x = ze(this.x, e.x, t.x), this.y = ze(this.y, e.y, t.y), this.z = ze(this.z, e.z, t.z), this;
  }
  /**
   * If this vector's x, y or z values are greater than the max value, they are
   * replaced by the max value.
   * If this vector's x, y or z values are less than the min value, they are
   * replaced by the min value.
   *
   * @param {number} minVal - The minimum value the components will be clamped to.
   * @param {number} maxVal - The maximum value the components will be clamped to.
   * @return {Vector3} A reference to this vector.
   */
  clampScalar(e, t) {
    return this.x = ze(this.x, e, t), this.y = ze(this.y, e, t), this.z = ze(this.z, e, t), this;
  }
  /**
   * If this vector's length is greater than the max value, it is replaced by
   * the max value.
   * If this vector's length is less than the min value, it is replaced by the
   * min value.
   *
   * @param {number} min - The minimum value the vector length will be clamped to.
   * @param {number} max - The maximum value the vector length will be clamped to.
   * @return {Vector3} A reference to this vector.
   */
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(ze(n, e, t));
  }
  /**
   * The components of this vector are rounded down to the nearest integer value.
   *
   * @return {Vector3} A reference to this vector.
   */
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
  }
  /**
   * The components of this vector are rounded up to the nearest integer value.
   *
   * @return {Vector3} A reference to this vector.
   */
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
  }
  /**
   * The components of this vector are rounded to the nearest integer value
   *
   * @return {Vector3} A reference to this vector.
   */
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
  }
  /**
   * The components of this vector are rounded towards zero (up if negative,
   * down if positive) to an integer value.
   *
   * @return {Vector3} A reference to this vector.
   */
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this;
  }
  /**
   * Inverts this vector - i.e. sets x = -x, y = -y and z = -z.
   *
   * @return {Vector3} A reference to this vector.
   */
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
  }
  /**
   * Calculates the dot product of the given vector with this instance.
   *
   * @param {Vector3} v - The vector to compute the dot product with.
   * @return {number} The result of the dot product.
   */
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z;
  }
  /**
   * Computes the square of the Euclidean length (straight-line length) from
   * (0, 0, 0) to (x, y, z). If you are comparing the lengths of vectors, you should
   * compare the length squared instead as it is slightly more efficient to calculate.
   *
   * @return {number} The square length of this vector.
   */
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  /**
   * Computes the  Euclidean length (straight-line length) from (0, 0, 0) to (x, y, z).
   *
   * @return {number} The length of this vector.
   */
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  /**
   * Computes the Manhattan length of this vector.
   *
   * @return {number} The length of this vector.
   */
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  /**
   * Converts this vector to a unit vector - that is, sets it equal to a vector
   * with the same direction as this one, but with a vector length of `1`.
   *
   * @return {Vector3} A reference to this vector.
   */
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  /**
   * Sets this vector to a vector with the same direction as this one, but
   * with the specified length.
   *
   * @param {number} length - The new length of this vector.
   * @return {Vector3} A reference to this vector.
   */
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  /**
   * Linearly interpolates between the given vector and this instance, where
   * alpha is the percent distance along the line - alpha = 0 will be this
   * vector, and alpha = 1 will be the given one.
   *
   * @param {Vector3} v - The vector to interpolate towards.
   * @param {number} alpha - The interpolation factor, typically in the closed interval `[0, 1]`.
   * @return {Vector3} A reference to this vector.
   */
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this;
  }
  /**
   * Linearly interpolates between the given vectors, where alpha is the percent
   * distance along the line - alpha = 0 will be first vector, and alpha = 1 will
   * be the second one. The result is stored in this instance.
   *
   * @param {Vector3} v1 - The first vector.
   * @param {Vector3} v2 - The second vector.
   * @param {number} alpha - The interpolation factor, typically in the closed interval `[0, 1]`.
   * @return {Vector3} A reference to this vector.
   */
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this;
  }
  /**
   * Calculates the cross product of the given vector with this instance.
   *
   * @param {Vector3} v - The vector to compute the cross product with.
   * @return {Vector3} The result of the cross product.
   */
  cross(e) {
    return this.crossVectors(this, e);
  }
  /**
   * Calculates the cross product of the given vectors and stores the result
   * in this instance.
   *
   * @param {Vector3} a - The first vector.
   * @param {Vector3} b - The second vector.
   * @return {Vector3} A reference to this vector.
   */
  crossVectors(e, t) {
    const n = e.x, r = e.y, s = e.z, a = t.x, o = t.y, c = t.z;
    return this.x = r * c - s * o, this.y = s * a - n * c, this.z = n * o - r * a, this;
  }
  /**
   * Projects this vector onto the given one.
   *
   * @param {Vector3} v - The vector to project to.
   * @return {Vector3} A reference to this vector.
   */
  projectOnVector(e) {
    const t = e.lengthSq();
    if (t === 0) return this.set(0, 0, 0);
    const n = e.dot(this) / t;
    return this.copy(e).multiplyScalar(n);
  }
  /**
   * Projects this vector onto a plane by subtracting this
   * vector projected onto the plane's normal from this vector.
   *
   * @param {Vector3} planeNormal - The plane normal.
   * @return {Vector3} A reference to this vector.
   */
  projectOnPlane(e) {
    return Cr.copy(this).projectOnVector(e), this.sub(Cr);
  }
  /**
   * Reflects this vector off a plane orthogonal to the given normal vector.
   *
   * @param {Vector3} normal - The (normalized) normal vector.
   * @return {Vector3} A reference to this vector.
   */
  reflect(e) {
    return this.sub(Cr.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  /**
   * Returns the angle between the given vector and this instance in radians.
   *
   * @param {Vector3} v - The vector to compute the angle with.
   * @return {number} The angle in radians.
   */
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(ze(n, -1, 1));
  }
  /**
   * Computes the distance from the given vector to this instance.
   *
   * @param {Vector3} v - The vector to compute the distance to.
   * @return {number} The distance.
   */
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  /**
   * Computes the squared distance from the given vector to this instance.
   * If you are just comparing the distance with another distance, you should compare
   * the distance squared instead as it is slightly more efficient to calculate.
   *
   * @param {Vector3} v - The vector to compute the squared distance to.
   * @return {number} The squared distance.
   */
  distanceToSquared(e) {
    const t = this.x - e.x, n = this.y - e.y, r = this.z - e.z;
    return t * t + n * n + r * r;
  }
  /**
   * Computes the Manhattan distance from the given vector to this instance.
   *
   * @param {Vector3} v - The vector to compute the Manhattan distance to.
   * @return {number} The Manhattan distance.
   */
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z);
  }
  /**
   * Sets the vector components from the given spherical coordinates.
   *
   * @param {Spherical} s - The spherical coordinates.
   * @return {Vector3} A reference to this vector.
   */
  setFromSpherical(e) {
    return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
  }
  /**
   * Sets the vector components from the given spherical coordinates.
   *
   * @param {number} radius - The radius.
   * @param {number} phi - The phi angle in radians.
   * @param {number} theta - The theta angle in radians.
   * @return {Vector3} A reference to this vector.
   */
  setFromSphericalCoords(e, t, n) {
    const r = Math.sin(t) * e;
    return this.x = r * Math.sin(n), this.y = Math.cos(t) * e, this.z = r * Math.cos(n), this;
  }
  /**
   * Sets the vector components from the given cylindrical coordinates.
   *
   * @param {Cylindrical} c - The cylindrical coordinates.
   * @return {Vector3} A reference to this vector.
   */
  setFromCylindrical(e) {
    return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
  }
  /**
   * Sets the vector components from the given cylindrical coordinates.
   *
   * @param {number} radius - The radius.
   * @param {number} theta - The theta angle in radians.
   * @param {number} y - The y value.
   * @return {Vector3} A reference to this vector.
   */
  setFromCylindricalCoords(e, t, n) {
    return this.x = e * Math.sin(t), this.y = n, this.z = e * Math.cos(t), this;
  }
  /**
   * Sets the vector components to the position elements of the
   * given transformation matrix.
   *
   * @param {Matrix4} m - The 4x4 matrix.
   * @return {Vector3} A reference to this vector.
   */
  setFromMatrixPosition(e) {
    const t = e.elements;
    return this.x = t[12], this.y = t[13], this.z = t[14], this;
  }
  /**
   * Sets the vector components to the scale elements of the
   * given transformation matrix.
   *
   * @param {Matrix4} m - The 4x4 matrix.
   * @return {Vector3} A reference to this vector.
   */
  setFromMatrixScale(e) {
    const t = this.setFromMatrixColumn(e, 0).length(), n = this.setFromMatrixColumn(e, 1).length(), r = this.setFromMatrixColumn(e, 2).length();
    return this.x = t, this.y = n, this.z = r, this;
  }
  /**
   * Sets the vector components from the specified matrix column.
   *
   * @param {Matrix4} m - The 4x4 matrix.
   * @param {number} index - The column index.
   * @return {Vector3} A reference to this vector.
   */
  setFromMatrixColumn(e, t) {
    return this.fromArray(e.elements, t * 4);
  }
  /**
   * Sets the vector components from the specified matrix column.
   *
   * @param {Matrix3} m - The 3x3 matrix.
   * @param {number} index - The column index.
   * @return {Vector3} A reference to this vector.
   */
  setFromMatrix3Column(e, t) {
    return this.fromArray(e.elements, t * 3);
  }
  /**
   * Sets the vector components from the given Euler angles.
   *
   * @param {Euler} e - The Euler angles to set.
   * @return {Vector3} A reference to this vector.
   */
  setFromEuler(e) {
    return this.x = e._x, this.y = e._y, this.z = e._z, this;
  }
  /**
   * Sets the vector components from the RGB components of the
   * given color.
   *
   * @param {Color} c - The color to set.
   * @return {Vector3} A reference to this vector.
   */
  setFromColor(e) {
    return this.x = e.r, this.y = e.g, this.z = e.b, this;
  }
  /**
   * Returns `true` if this vector is equal with the given one.
   *
   * @param {Vector3} v - The vector to test for equality.
   * @return {boolean} Whether this vector is equal with the given one.
   */
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z;
  }
  /**
   * Sets this vector's x value to be `array[ offset ]`, y value to be `array[ offset + 1 ]`
   * and z value to be `array[ offset + 2 ]`.
   *
   * @param {Array<number>} array - An array holding the vector component values.
   * @param {number} [offset=0] - The offset into the array.
   * @return {Vector3} A reference to this vector.
   */
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this;
  }
  /**
   * Writes the components of this vector to the given array. If no array is provided,
   * the method returns a new instance.
   *
   * @param {Array<number>} [array=[]] - The target array holding the vector components.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Array<number>} The vector components.
   */
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e;
  }
  /**
   * Sets the components of this vector from the given buffer attribute.
   *
   * @param {BufferAttribute} attribute - The buffer attribute holding vector data.
   * @param {number} index - The index into the attribute.
   * @return {Vector3} A reference to this vector.
   */
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this;
  }
  /**
   * Sets each component of this vector to a pseudo-random value between `0` and
   * `1`, excluding `1`.
   *
   * @return {Vector3} A reference to this vector.
   */
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
  }
  /**
   * Sets this vector to a uniformly random point on a unit sphere.
   *
   * @return {Vector3} A reference to this vector.
   */
  randomDirection() {
    const e = Math.random() * Math.PI * 2, t = Math.random() * 2 - 1, n = Math.sqrt(1 - t * t);
    return this.x = n * Math.cos(e), this.y = t, this.z = n * Math.sin(e), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
const Cr = /* @__PURE__ */ new I(), Da = /* @__PURE__ */ new di();
class Ie {
  /**
   * Constructs a new 3x3 matrix. The arguments are supposed to be
   * in row-major order. If no arguments are provided, the constructor
   * initializes the matrix as an identity matrix.
   *
   * @param {number} [n11] - 1-1 matrix element.
   * @param {number} [n12] - 1-2 matrix element.
   * @param {number} [n13] - 1-3 matrix element.
   * @param {number} [n21] - 2-1 matrix element.
   * @param {number} [n22] - 2-2 matrix element.
   * @param {number} [n23] - 2-3 matrix element.
   * @param {number} [n31] - 3-1 matrix element.
   * @param {number} [n32] - 3-2 matrix element.
   * @param {number} [n33] - 3-3 matrix element.
   */
  constructor(e, t, n, r, s, a, o, c, l) {
    Ie.prototype.isMatrix3 = !0, this.elements = [
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ], e !== void 0 && this.set(e, t, n, r, s, a, o, c, l);
  }
  /**
   * Sets the elements of the matrix.The arguments are supposed to be
   * in row-major order.
   *
   * @param {number} [n11] - 1-1 matrix element.
   * @param {number} [n12] - 1-2 matrix element.
   * @param {number} [n13] - 1-3 matrix element.
   * @param {number} [n21] - 2-1 matrix element.
   * @param {number} [n22] - 2-2 matrix element.
   * @param {number} [n23] - 2-3 matrix element.
   * @param {number} [n31] - 3-1 matrix element.
   * @param {number} [n32] - 3-2 matrix element.
   * @param {number} [n33] - 3-3 matrix element.
   * @return {Matrix3} A reference to this matrix.
   */
  set(e, t, n, r, s, a, o, c, l) {
    const h = this.elements;
    return h[0] = e, h[1] = r, h[2] = o, h[3] = t, h[4] = s, h[5] = c, h[6] = n, h[7] = a, h[8] = l, this;
  }
  /**
   * Sets this matrix to the 3x3 identity matrix.
   *
   * @return {Matrix3} A reference to this matrix.
   */
  identity() {
    return this.set(
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Copies the values of the given matrix to this instance.
   *
   * @param {Matrix3} m - The matrix to copy.
   * @return {Matrix3} A reference to this matrix.
   */
  copy(e) {
    const t = this.elements, n = e.elements;
    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], this;
  }
  /**
   * Extracts the basis of this matrix into the three axis vectors provided.
   *
   * @param {Vector3} xAxis - The basis's x axis.
   * @param {Vector3} yAxis - The basis's y axis.
   * @param {Vector3} zAxis - The basis's z axis.
   * @return {Matrix3} A reference to this matrix.
   */
  extractBasis(e, t, n) {
    return e.setFromMatrix3Column(this, 0), t.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this;
  }
  /**
   * Set this matrix to the upper 3x3 matrix of the given 4x4 matrix.
   *
   * @param {Matrix4} m - The 4x4 matrix.
   * @return {Matrix3} A reference to this matrix.
   */
  setFromMatrix4(e) {
    const t = e.elements;
    return this.set(
      t[0],
      t[4],
      t[8],
      t[1],
      t[5],
      t[9],
      t[2],
      t[6],
      t[10]
    ), this;
  }
  /**
   * Post-multiplies this matrix by the given 3x3 matrix.
   *
   * @param {Matrix3} m - The matrix to multiply with.
   * @return {Matrix3} A reference to this matrix.
   */
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  /**
   * Pre-multiplies this matrix by the given 3x3 matrix.
   *
   * @param {Matrix3} m - The matrix to multiply with.
   * @return {Matrix3} A reference to this matrix.
   */
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  /**
   * Multiples the given 3x3 matrices and stores the result
   * in this matrix.
   *
   * @param {Matrix3} a - The first matrix.
   * @param {Matrix3} b - The second matrix.
   * @return {Matrix3} A reference to this matrix.
   */
  multiplyMatrices(e, t) {
    const n = e.elements, r = t.elements, s = this.elements, a = n[0], o = n[3], c = n[6], l = n[1], h = n[4], m = n[7], u = n[2], d = n[5], _ = n[8], M = r[0], p = r[3], f = r[6], S = r[1], b = r[4], E = r[7], R = r[2], A = r[5], L = r[8];
    return s[0] = a * M + o * S + c * R, s[3] = a * p + o * b + c * A, s[6] = a * f + o * E + c * L, s[1] = l * M + h * S + m * R, s[4] = l * p + h * b + m * A, s[7] = l * f + h * E + m * L, s[2] = u * M + d * S + _ * R, s[5] = u * p + d * b + _ * A, s[8] = u * f + d * E + _ * L, this;
  }
  /**
   * Multiplies every component of the matrix by the given scalar.
   *
   * @param {number} s - The scalar.
   * @return {Matrix3} A reference to this matrix.
   */
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this;
  }
  /**
   * Computes and returns the determinant of this matrix.
   *
   * @return {number} The determinant.
   */
  determinant() {
    const e = this.elements, t = e[0], n = e[1], r = e[2], s = e[3], a = e[4], o = e[5], c = e[6], l = e[7], h = e[8];
    return t * a * h - t * o * l - n * s * h + n * o * c + r * s * l - r * a * c;
  }
  /**
   * Inverts this matrix, using the [analytic method](https://en.wikipedia.org/wiki/Invertible_matrix#Analytic_solution).
   * You can not invert with a determinant of zero. If you attempt this, the method produces
   * a zero matrix instead.
   *
   * @return {Matrix3} A reference to this matrix.
   */
  invert() {
    const e = this.elements, t = e[0], n = e[1], r = e[2], s = e[3], a = e[4], o = e[5], c = e[6], l = e[7], h = e[8], m = h * a - o * l, u = o * c - h * s, d = l * s - a * c, _ = t * m + n * u + r * d;
    if (_ === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const M = 1 / _;
    return e[0] = m * M, e[1] = (r * l - h * n) * M, e[2] = (o * n - r * a) * M, e[3] = u * M, e[4] = (h * t - r * c) * M, e[5] = (r * s - o * t) * M, e[6] = d * M, e[7] = (n * c - l * t) * M, e[8] = (a * t - n * s) * M, this;
  }
  /**
   * Transposes this matrix in place.
   *
   * @return {Matrix3} A reference to this matrix.
   */
  transpose() {
    let e;
    const t = this.elements;
    return e = t[1], t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this;
  }
  /**
   * Computes the normal matrix which is the inverse transpose of the upper
   * left 3x3 portion of the given 4x4 matrix.
   *
   * @param {Matrix4} matrix4 - The 4x4 matrix.
   * @return {Matrix3} A reference to this matrix.
   */
  getNormalMatrix(e) {
    return this.setFromMatrix4(e).invert().transpose();
  }
  /**
   * Transposes this matrix into the supplied array, and returns itself unchanged.
   *
   * @param {Array<number>} r - An array to store the transposed matrix elements.
   * @return {Matrix3} A reference to this matrix.
   */
  transposeIntoArray(e) {
    const t = this.elements;
    return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], this;
  }
  /**
   * Sets the UV transform matrix from offset, repeat, rotation, and center.
   *
   * @param {number} tx - Offset x.
   * @param {number} ty - Offset y.
   * @param {number} sx - Repeat x.
   * @param {number} sy - Repeat y.
   * @param {number} rotation - Rotation, in radians. Positive values rotate counterclockwise.
   * @param {number} cx - Center x of rotation.
   * @param {number} cy - Center y of rotation
   * @return {Matrix3} A reference to this matrix.
   */
  setUvTransform(e, t, n, r, s, a, o) {
    const c = Math.cos(s), l = Math.sin(s);
    return this.set(
      n * c,
      n * l,
      -n * (c * a + l * o) + a + e,
      -r * l,
      r * c,
      -r * (-l * a + c * o) + o + t,
      0,
      0,
      1
    ), this;
  }
  /**
   * Scales this matrix with the given scalar values.
   *
   * @param {number} sx - The amount to scale in the X axis.
   * @param {number} sy - The amount to scale in the Y axis.
   * @return {Matrix3} A reference to this matrix.
   */
  scale(e, t) {
    return this.premultiply(Pr.makeScale(e, t)), this;
  }
  /**
   * Rotates this matrix by the given angle.
   *
   * @param {number} theta - The rotation in radians.
   * @return {Matrix3} A reference to this matrix.
   */
  rotate(e) {
    return this.premultiply(Pr.makeRotation(-e)), this;
  }
  /**
   * Translates this matrix by the given scalar values.
   *
   * @param {number} tx - The amount to translate in the X axis.
   * @param {number} ty - The amount to translate in the Y axis.
   * @return {Matrix3} A reference to this matrix.
   */
  translate(e, t) {
    return this.premultiply(Pr.makeTranslation(e, t)), this;
  }
  // for 2D Transforms
  /**
   * Sets this matrix as a 2D translation transform.
   *
   * @param {number|Vector2} x - The amount to translate in the X axis or alternatively a translation vector.
   * @param {number} y - The amount to translate in the Y axis.
   * @return {Matrix3} A reference to this matrix.
   */
  makeTranslation(e, t) {
    return e.isVector2 ? this.set(
      1,
      0,
      e.x,
      0,
      1,
      e.y,
      0,
      0,
      1
    ) : this.set(
      1,
      0,
      e,
      0,
      1,
      t,
      0,
      0,
      1
    ), this;
  }
  /**
   * Sets this matrix as a 2D rotational transformation.
   *
   * @param {number} theta - The rotation in radians.
   * @return {Matrix3} A reference to this matrix.
   */
  makeRotation(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      -n,
      0,
      n,
      t,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Sets this matrix as a 2D scale transform.
   *
   * @param {number} x - The amount to scale in the X axis.
   * @param {number} y - The amount to scale in the Y axis.
   * @return {Matrix3} A reference to this matrix.
   */
  makeScale(e, t) {
    return this.set(
      e,
      0,
      0,
      0,
      t,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Returns `true` if this matrix is equal with the given one.
   *
   * @param {Matrix3} matrix - The matrix to test for equality.
   * @return {boolean} Whether this matrix is equal with the given one.
   */
  equals(e) {
    const t = this.elements, n = e.elements;
    for (let r = 0; r < 9; r++)
      if (t[r] !== n[r]) return !1;
    return !0;
  }
  /**
   * Sets the elements of the matrix from the given array.
   *
   * @param {Array<number>} array - The matrix elements in column-major order.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Matrix3} A reference to this matrix.
   */
  fromArray(e, t = 0) {
    for (let n = 0; n < 9; n++)
      this.elements[n] = e[n + t];
    return this;
  }
  /**
   * Writes the elements of this matrix to the given array. If no array is provided,
   * the method returns a new instance.
   *
   * @param {Array<number>} [array=[]] - The target array holding the matrix elements in column-major order.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Array<number>} The matrix elements in column-major order.
   */
  toArray(e = [], t = 0) {
    const n = this.elements;
    return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e;
  }
  /**
   * Returns a matrix with copied values from this instance.
   *
   * @return {Matrix3} A clone of this instance.
   */
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
const Pr = /* @__PURE__ */ new Ie(), Ia = /* @__PURE__ */ new Ie().set(
  0.4123908,
  0.3575843,
  0.1804808,
  0.212639,
  0.7151687,
  0.0721923,
  0.0193308,
  0.1191948,
  0.9505322
), Ua = /* @__PURE__ */ new Ie().set(
  3.2409699,
  -1.5373832,
  -0.4986108,
  -0.9692436,
  1.8759675,
  0.0415551,
  0.0556301,
  -0.203977,
  1.0569715
);
function oc() {
  const i = {
    enabled: !0,
    workingColorSpace: ci,
    /**
     * Implementations of supported color spaces.
     *
     * Required:
     *	- primaries: chromaticity coordinates [ rx ry gx gy bx by ]
     *	- whitePoint: reference white [ x y ]
     *	- transfer: transfer function (pre-defined)
     *	- toXYZ: Matrix3 RGB to XYZ transform
     *	- fromXYZ: Matrix3 XYZ to RGB transform
     *	- luminanceCoefficients: RGB luminance coefficients
     *
     * Optional:
     *  - outputColorSpaceConfig: { drawingBufferColorSpace: ColorSpace, toneMappingMode: 'extended' | 'standard' }
     *  - workingColorSpaceConfig: { unpackColorSpace: ColorSpace }
     *
     * Reference:
     * - https://www.russellcottrell.com/photo/matrixCalculator.htm
     */
    spaces: {},
    convert: function(r, s, a) {
      return this.enabled === !1 || s === a || !s || !a || (this.spaces[s].transfer === Ze && (r.r = fn(r.r), r.g = fn(r.g), r.b = fn(r.b)), this.spaces[s].primaries !== this.spaces[a].primaries && (r.applyMatrix3(this.spaces[s].toXYZ), r.applyMatrix3(this.spaces[a].fromXYZ)), this.spaces[a].transfer === Ze && (r.r = si(r.r), r.g = si(r.g), r.b = si(r.b))), r;
    },
    workingToColorSpace: function(r, s) {
      return this.convert(r, this.workingColorSpace, s);
    },
    colorSpaceToWorking: function(r, s) {
      return this.convert(r, s, this.workingColorSpace);
    },
    getPrimaries: function(r) {
      return this.spaces[r].primaries;
    },
    getTransfer: function(r) {
      return r === Tn ? pr : this.spaces[r].transfer;
    },
    getToneMappingMode: function(r) {
      return this.spaces[r].outputColorSpaceConfig.toneMappingMode || "standard";
    },
    getLuminanceCoefficients: function(r, s = this.workingColorSpace) {
      return r.fromArray(this.spaces[s].luminanceCoefficients);
    },
    define: function(r) {
      Object.assign(this.spaces, r);
    },
    // Internal APIs
    _getMatrix: function(r, s, a) {
      return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ);
    },
    _getDrawingBufferColorSpace: function(r) {
      return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace;
    },
    _getUnpackColorSpace: function(r = this.workingColorSpace) {
      return this.spaces[r].workingColorSpaceConfig.unpackColorSpace;
    },
    // Deprecated
    fromWorkingColorSpace: function(r, s) {
      return _r("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."), i.workingToColorSpace(r, s);
    },
    toWorkingColorSpace: function(r, s) {
      return _r("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."), i.colorSpaceToWorking(r, s);
    }
  }, e = [0.64, 0.33, 0.3, 0.6, 0.15, 0.06], t = [0.2126, 0.7152, 0.0722], n = [0.3127, 0.329];
  return i.define({
    [ci]: {
      primaries: e,
      whitePoint: n,
      transfer: pr,
      toXYZ: Ia,
      fromXYZ: Ua,
      luminanceCoefficients: t,
      workingColorSpaceConfig: { unpackColorSpace: Ut },
      outputColorSpaceConfig: { drawingBufferColorSpace: Ut }
    },
    [Ut]: {
      primaries: e,
      whitePoint: n,
      transfer: Ze,
      toXYZ: Ia,
      fromXYZ: Ua,
      luminanceCoefficients: t,
      outputColorSpaceConfig: { drawingBufferColorSpace: Ut }
    }
  }), i;
}
const He = /* @__PURE__ */ oc();
function fn(i) {
  return i < 0.04045 ? i * 0.0773993808 : Math.pow(i * 0.9478672986 + 0.0521327014, 2.4);
}
function si(i) {
  return i < 31308e-7 ? i * 12.92 : 1.055 * Math.pow(i, 0.41666) - 0.055;
}
let Wn;
class lc {
  /**
   * Returns a data URI containing a representation of the given image.
   *
   * @param {(HTMLImageElement|HTMLCanvasElement)} image - The image object.
   * @param {string} [type='image/png'] - Indicates the image format.
   * @return {string} The data URI.
   */
  static getDataURL(e, t = "image/png") {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u")
      return e.src;
    let n;
    if (e instanceof HTMLCanvasElement)
      n = e;
    else {
      Wn === void 0 && (Wn = mr("canvas")), Wn.width = e.width, Wn.height = e.height;
      const r = Wn.getContext("2d");
      e instanceof ImageData ? r.putImageData(e, 0, 0) : r.drawImage(e, 0, 0, e.width, e.height), n = Wn;
    }
    return n.toDataURL(t);
  }
  /**
   * Converts the given sRGB image data to linear color space.
   *
   * @param {(HTMLImageElement|HTMLCanvasElement|ImageBitmap|Object)} image - The image object.
   * @return {HTMLCanvasElement|Object} The converted image.
   */
  static sRGBToLinear(e) {
    if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) {
      const t = mr("canvas");
      t.width = e.width, t.height = e.height;
      const n = t.getContext("2d");
      n.drawImage(e, 0, 0, e.width, e.height);
      const r = n.getImageData(0, 0, e.width, e.height), s = r.data;
      for (let a = 0; a < s.length; a++)
        s[a] = fn(s[a] / 255) * 255;
      return n.putImageData(r, 0, 0), t;
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let n = 0; n < t.length; n++)
        t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[n] = Math.floor(fn(t[n] / 255) * 255) : t[n] = fn(t[n]);
      return {
        data: t,
        width: e.width,
        height: e.height
      };
    } else
      return Ce("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e;
  }
}
let cc = 0;
class la {
  /**
   * Constructs a new video texture.
   *
   * @param {any} [data=null] - The data definition of a texture.
   */
  constructor(e = null) {
    this.isSource = !0, Object.defineProperty(this, "id", { value: cc++ }), this.uuid = Li(), this.data = e, this.dataReady = !0, this.version = 0;
  }
  /**
   * Returns the dimensions of the source into the given target vector.
   *
   * @param {(Vector2|Vector3)} target - The target object the result is written into.
   * @return {(Vector2|Vector3)} The dimensions of the source.
   */
  getSize(e) {
    const t = this.data;
    return typeof HTMLVideoElement < "u" && t instanceof HTMLVideoElement ? e.set(t.videoWidth, t.videoHeight, 0) : typeof VideoFrame < "u" && t instanceof VideoFrame ? e.set(t.displayHeight, t.displayWidth, 0) : t !== null ? e.set(t.width, t.height, t.depth || 0) : e.set(0, 0, 0), e;
  }
  /**
   * When the property is set to `true`, the engine allocates the memory
   * for the texture (if necessary) and triggers the actual texture upload
   * to the GPU next time the source is used.
   *
   * @type {boolean}
   * @default false
   * @param {boolean} value
   */
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  /**
   * Serializes the source into JSON.
   *
   * @param {?(Object|string)} meta - An optional value holding meta information about the serialization.
   * @return {Object} A JSON object representing the serialized source.
   * @see {@link ObjectLoader#parse}
   */
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.images[this.uuid] !== void 0)
      return e.images[this.uuid];
    const n = {
      uuid: this.uuid,
      url: ""
    }, r = this.data;
    if (r !== null) {
      let s;
      if (Array.isArray(r)) {
        s = [];
        for (let a = 0, o = r.length; a < o; a++)
          r[a].isDataTexture ? s.push(Lr(r[a].image)) : s.push(Lr(r[a]));
      } else
        s = Lr(r);
      n.url = s;
    }
    return t || (e.images[this.uuid] = n), n;
  }
}
function Lr(i) {
  return typeof HTMLImageElement < "u" && i instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && i instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && i instanceof ImageBitmap ? lc.getDataURL(i) : i.data ? {
    data: Array.from(i.data),
    width: i.width,
    height: i.height,
    type: i.data.constructor.name
  } : (Ce("Texture: Unable to serialize Texture."), {});
}
let uc = 0;
const Dr = /* @__PURE__ */ new I();
class Tt extends fi {
  /**
   * Constructs a new texture.
   *
   * @param {?Object} [image=Texture.DEFAULT_IMAGE] - The image holding the texture data.
   * @param {number} [mapping=Texture.DEFAULT_MAPPING] - The texture mapping.
   * @param {number} [wrapS=ClampToEdgeWrapping] - The wrapS value.
   * @param {number} [wrapT=ClampToEdgeWrapping] - The wrapT value.
   * @param {number} [magFilter=LinearFilter] - The mag filter value.
   * @param {number} [minFilter=LinearMipmapLinearFilter] - The min filter value.
   * @param {number} [format=RGBAFormat] - The texture format.
   * @param {number} [type=UnsignedByteType] - The texture type.
   * @param {number} [anisotropy=Texture.DEFAULT_ANISOTROPY] - The anisotropy value.
   * @param {string} [colorSpace=NoColorSpace] - The color space.
   */
  constructor(e = Tt.DEFAULT_IMAGE, t = Tt.DEFAULT_MAPPING, n = un, r = un, s = Et, a = Bn, o = Ht, c = Lt, l = Tt.DEFAULT_ANISOTROPY, h = Tn) {
    super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: uc++ }), this.uuid = Li(), this.name = "", this.source = new la(e), this.mipmaps = [], this.mapping = t, this.channel = 0, this.wrapS = n, this.wrapT = r, this.magFilter = s, this.minFilter = a, this.anisotropy = l, this.format = o, this.internalFormat = null, this.type = c, this.offset = new be(0, 0), this.repeat = new be(1, 1), this.center = new be(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new Ie(), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.colorSpace = h, this.userData = {}, this.updateRanges = [], this.version = 0, this.onUpdate = null, this.renderTarget = null, this.isRenderTargetTexture = !1, this.isArrayTexture = !!(e && e.depth && e.depth > 1), this.pmremVersion = 0;
  }
  /**
   * The width of the texture in pixels.
   */
  get width() {
    return this.source.getSize(Dr).x;
  }
  /**
   * The height of the texture in pixels.
   */
  get height() {
    return this.source.getSize(Dr).y;
  }
  /**
   * The depth of the texture in pixels.
   */
  get depth() {
    return this.source.getSize(Dr).z;
  }
  /**
   * The image object holding the texture data.
   *
   * @type {?Object}
   */
  get image() {
    return this.source.data;
  }
  set image(e = null) {
    this.source.data = e;
  }
  /**
   * Updates the texture transformation matrix from the from the properties {@link Texture#offset},
   * {@link Texture#repeat}, {@link Texture#rotation}, and {@link Texture#center}.
   */
  updateMatrix() {
    this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
  }
  /**
   * Adds a range of data in the data texture to be updated on the GPU.
   *
   * @param {number} start - Position at which to start update.
   * @param {number} count - The number of components to update.
   */
  addUpdateRange(e, t) {
    this.updateRanges.push({ start: e, count: t });
  }
  /**
   * Clears the update ranges.
   */
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  /**
   * Returns a new texture with copied values from this instance.
   *
   * @return {Texture} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
  /**
   * Copies the values of the given texture to this instance.
   *
   * @param {Texture} source - The texture to copy.
   * @return {Texture} A reference to this instance.
   */
  copy(e) {
    return this.name = e.name, this.source = e.source, this.mipmaps = e.mipmaps.slice(0), this.mapping = e.mapping, this.channel = e.channel, this.wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e.minFilter, this.anisotropy = e.anisotropy, this.format = e.format, this.internalFormat = e.internalFormat, this.type = e.type, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.center.copy(e.center), this.rotation = e.rotation, this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrix.copy(e.matrix), this.generateMipmaps = e.generateMipmaps, this.premultiplyAlpha = e.premultiplyAlpha, this.flipY = e.flipY, this.unpackAlignment = e.unpackAlignment, this.colorSpace = e.colorSpace, this.renderTarget = e.renderTarget, this.isRenderTargetTexture = e.isRenderTargetTexture, this.isArrayTexture = e.isArrayTexture, this.userData = JSON.parse(JSON.stringify(e.userData)), this.needsUpdate = !0, this;
  }
  /**
   * Sets this texture's properties based on `values`.
   * @param {Object} values - A container with texture parameters.
   */
  setValues(e) {
    for (const t in e) {
      const n = e[t];
      if (n === void 0) {
        Ce(`Texture.setValues(): parameter '${t}' has value of undefined.`);
        continue;
      }
      const r = this[t];
      if (r === void 0) {
        Ce(`Texture.setValues(): property '${t}' does not exist.`);
        continue;
      }
      r && n && r.isVector2 && n.isVector2 || r && n && r.isVector3 && n.isVector3 || r && n && r.isMatrix3 && n.isMatrix3 ? r.copy(n) : this[t] = n;
    }
  }
  /**
   * Serializes the texture into JSON.
   *
   * @param {?(Object|string)} meta - An optional value holding meta information about the serialization.
   * @return {Object} A JSON object representing the serialized texture.
   * @see {@link ObjectLoader#parse}
   */
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.textures[this.uuid] !== void 0)
      return e.textures[this.uuid];
    const n = {
      metadata: {
        version: 4.7,
        type: "Texture",
        generator: "Texture.toJSON"
      },
      uuid: this.uuid,
      name: this.name,
      image: this.source.toJSON(e).uuid,
      mapping: this.mapping,
      channel: this.channel,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      internalFormat: this.internalFormat,
      type: this.type,
      colorSpace: this.colorSpace,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      generateMipmaps: this.generateMipmaps,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment
    };
    return Object.keys(this.userData).length > 0 && (n.userData = this.userData), t || (e.textures[this.uuid] = n), n;
  }
  /**
   * Frees the GPU-related resources allocated by this instance. Call this
   * method whenever this instance is no longer used in your app.
   *
   * @fires Texture#dispose
   */
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  /**
   * Transforms the given uv vector with the textures uv transformation matrix.
   *
   * @param {Vector2} uv - The uv vector.
   * @return {Vector2} The transformed uv vector.
   */
  transformUv(e) {
    if (this.mapping !== Uo) return e;
    if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1)
      switch (this.wrapS) {
        case _s:
          e.x = e.x - Math.floor(e.x);
          break;
        case un:
          e.x = e.x < 0 ? 0 : 1;
          break;
        case gs:
          Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x);
          break;
      }
    if (e.y < 0 || e.y > 1)
      switch (this.wrapT) {
        case _s:
          e.y = e.y - Math.floor(e.y);
          break;
        case un:
          e.y = e.y < 0 ? 0 : 1;
          break;
        case gs:
          Math.abs(Math.floor(e.y) % 2) === 1 ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y);
          break;
      }
    return this.flipY && (e.y = 1 - e.y), e;
  }
  /**
   * Setting this property to `true` indicates the engine the texture
   * must be updated in the next render. This triggers a texture upload
   * to the GPU and ensures correct texture parameter configuration.
   *
   * @type {boolean}
   * @default false
   * @param {boolean} value
   */
  set needsUpdate(e) {
    e === !0 && (this.version++, this.source.needsUpdate = !0);
  }
  /**
   * Setting this property to `true` indicates the engine the PMREM
   * must be regenerated.
   *
   * @type {boolean}
   * @default false
   * @param {boolean} value
   */
  set needsPMREMUpdate(e) {
    e === !0 && this.pmremVersion++;
  }
}
Tt.DEFAULT_IMAGE = null;
Tt.DEFAULT_MAPPING = Uo;
Tt.DEFAULT_ANISOTROPY = 1;
class st {
  /**
   * Constructs a new 4D vector.
   *
   * @param {number} [x=0] - The x value of this vector.
   * @param {number} [y=0] - The y value of this vector.
   * @param {number} [z=0] - The z value of this vector.
   * @param {number} [w=1] - The w value of this vector.
   */
  constructor(e = 0, t = 0, n = 0, r = 1) {
    st.prototype.isVector4 = !0, this.x = e, this.y = t, this.z = n, this.w = r;
  }
  /**
   * Alias for {@link Vector4#z}.
   *
   * @type {number}
   */
  get width() {
    return this.z;
  }
  set width(e) {
    this.z = e;
  }
  /**
   * Alias for {@link Vector4#w}.
   *
   * @type {number}
   */
  get height() {
    return this.w;
  }
  set height(e) {
    this.w = e;
  }
  /**
   * Sets the vector components.
   *
   * @param {number} x - The value of the x component.
   * @param {number} y - The value of the y component.
   * @param {number} z - The value of the z component.
   * @param {number} w - The value of the w component.
   * @return {Vector4} A reference to this vector.
   */
  set(e, t, n, r) {
    return this.x = e, this.y = t, this.z = n, this.w = r, this;
  }
  /**
   * Sets the vector components to the same value.
   *
   * @param {number} scalar - The value to set for all vector components.
   * @return {Vector4} A reference to this vector.
   */
  setScalar(e) {
    return this.x = e, this.y = e, this.z = e, this.w = e, this;
  }
  /**
   * Sets the vector's x component to the given value
   *
   * @param {number} x - The value to set.
   * @return {Vector4} A reference to this vector.
   */
  setX(e) {
    return this.x = e, this;
  }
  /**
   * Sets the vector's y component to the given value
   *
   * @param {number} y - The value to set.
   * @return {Vector4} A reference to this vector.
   */
  setY(e) {
    return this.y = e, this;
  }
  /**
   * Sets the vector's z component to the given value
   *
   * @param {number} z - The value to set.
   * @return {Vector4} A reference to this vector.
   */
  setZ(e) {
    return this.z = e, this;
  }
  /**
   * Sets the vector's w component to the given value
   *
   * @param {number} w - The value to set.
   * @return {Vector4} A reference to this vector.
   */
  setW(e) {
    return this.w = e, this;
  }
  /**
   * Allows to set a vector component with an index.
   *
   * @param {number} index - The component index. `0` equals to x, `1` equals to y,
   * `2` equals to z, `3` equals to w.
   * @param {number} value - The value to set.
   * @return {Vector4} A reference to this vector.
   */
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      case 3:
        this.w = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  /**
   * Returns the value of the vector component which matches the given index.
   *
   * @param {number} index - The component index. `0` equals to x, `1` equals to y,
   * `2` equals to z, `3` equals to w.
   * @return {number} A vector component value.
   */
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  /**
   * Returns a new vector with copied values from this instance.
   *
   * @return {Vector4} A clone of this instance.
   */
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  /**
   * Copies the values of the given vector to this instance.
   *
   * @param {Vector3|Vector4} v - The vector to copy.
   * @return {Vector4} A reference to this vector.
   */
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this.w = e.w !== void 0 ? e.w : 1, this;
  }
  /**
   * Adds the given vector to this instance.
   *
   * @param {Vector4} v - The vector to add.
   * @return {Vector4} A reference to this vector.
   */
  add(e) {
    return this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this;
  }
  /**
   * Adds the given scalar value to all components of this instance.
   *
   * @param {number} s - The scalar to add.
   * @return {Vector4} A reference to this vector.
   */
  addScalar(e) {
    return this.x += e, this.y += e, this.z += e, this.w += e, this;
  }
  /**
   * Adds the given vectors and stores the result in this instance.
   *
   * @param {Vector4} a - The first vector.
   * @param {Vector4} b - The second vector.
   * @return {Vector4} A reference to this vector.
   */
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this.w = e.w + t.w, this;
  }
  /**
   * Adds the given vector scaled by the given factor to this instance.
   *
   * @param {Vector4} v - The vector.
   * @param {number} s - The factor that scales `v`.
   * @return {Vector4} A reference to this vector.
   */
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this.w += e.w * t, this;
  }
  /**
   * Subtracts the given vector from this instance.
   *
   * @param {Vector4} v - The vector to subtract.
   * @return {Vector4} A reference to this vector.
   */
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this;
  }
  /**
   * Subtracts the given scalar value from all components of this instance.
   *
   * @param {number} s - The scalar to subtract.
   * @return {Vector4} A reference to this vector.
   */
  subScalar(e) {
    return this.x -= e, this.y -= e, this.z -= e, this.w -= e, this;
  }
  /**
   * Subtracts the given vectors and stores the result in this instance.
   *
   * @param {Vector4} a - The first vector.
   * @param {Vector4} b - The second vector.
   * @return {Vector4} A reference to this vector.
   */
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this.w = e.w - t.w, this;
  }
  /**
   * Multiplies the given vector with this instance.
   *
   * @param {Vector4} v - The vector to multiply.
   * @return {Vector4} A reference to this vector.
   */
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this.w *= e.w, this;
  }
  /**
   * Multiplies the given scalar value with all components of this instance.
   *
   * @param {number} scalar - The scalar to multiply.
   * @return {Vector4} A reference to this vector.
   */
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this.z *= e, this.w *= e, this;
  }
  /**
   * Multiplies this vector with the given 4x4 matrix.
   *
   * @param {Matrix4} m - The 4x4 matrix.
   * @return {Vector4} A reference to this vector.
   */
  applyMatrix4(e) {
    const t = this.x, n = this.y, r = this.z, s = this.w, a = e.elements;
    return this.x = a[0] * t + a[4] * n + a[8] * r + a[12] * s, this.y = a[1] * t + a[5] * n + a[9] * r + a[13] * s, this.z = a[2] * t + a[6] * n + a[10] * r + a[14] * s, this.w = a[3] * t + a[7] * n + a[11] * r + a[15] * s, this;
  }
  /**
   * Divides this instance by the given vector.
   *
   * @param {Vector4} v - The vector to divide.
   * @return {Vector4} A reference to this vector.
   */
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this.z /= e.z, this.w /= e.w, this;
  }
  /**
   * Divides this vector by the given scalar.
   *
   * @param {number} scalar - The scalar to divide.
   * @return {Vector4} A reference to this vector.
   */
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  /**
   * Sets the x, y and z components of this
   * vector to the quaternion's axis and w to the angle.
   *
   * @param {Quaternion} q - The Quaternion to set.
   * @return {Vector4} A reference to this vector.
   */
  setAxisAngleFromQuaternion(e) {
    this.w = 2 * Math.acos(e.w);
    const t = Math.sqrt(1 - e.w * e.w);
    return t < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = e.x / t, this.y = e.y / t, this.z = e.z / t), this;
  }
  /**
   * Sets the x, y and z components of this
   * vector to the axis of rotation and w to the angle.
   *
   * @param {Matrix4} m - A 4x4 matrix of which the upper left 3x3 matrix is a pure rotation matrix.
   * @return {Vector4} A reference to this vector.
   */
  setAxisAngleFromRotationMatrix(e) {
    let t, n, r, s;
    const c = e.elements, l = c[0], h = c[4], m = c[8], u = c[1], d = c[5], _ = c[9], M = c[2], p = c[6], f = c[10];
    if (Math.abs(h - u) < 0.01 && Math.abs(m - M) < 0.01 && Math.abs(_ - p) < 0.01) {
      if (Math.abs(h + u) < 0.1 && Math.abs(m + M) < 0.1 && Math.abs(_ + p) < 0.1 && Math.abs(l + d + f - 3) < 0.1)
        return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const b = (l + 1) / 2, E = (d + 1) / 2, R = (f + 1) / 2, A = (h + u) / 4, L = (m + M) / 4, v = (_ + p) / 4;
      return b > E && b > R ? b < 0.01 ? (n = 0, r = 0.707106781, s = 0.707106781) : (n = Math.sqrt(b), r = A / n, s = L / n) : E > R ? E < 0.01 ? (n = 0.707106781, r = 0, s = 0.707106781) : (r = Math.sqrt(E), n = A / r, s = v / r) : R < 0.01 ? (n = 0.707106781, r = 0.707106781, s = 0) : (s = Math.sqrt(R), n = L / s, r = v / s), this.set(n, r, s, t), this;
    }
    let S = Math.sqrt((p - _) * (p - _) + (m - M) * (m - M) + (u - h) * (u - h));
    return Math.abs(S) < 1e-3 && (S = 1), this.x = (p - _) / S, this.y = (m - M) / S, this.z = (u - h) / S, this.w = Math.acos((l + d + f - 1) / 2), this;
  }
  /**
   * Sets the vector components to the position elements of the
   * given transformation matrix.
   *
   * @param {Matrix4} m - The 4x4 matrix.
   * @return {Vector4} A reference to this vector.
   */
  setFromMatrixPosition(e) {
    const t = e.elements;
    return this.x = t[12], this.y = t[13], this.z = t[14], this.w = t[15], this;
  }
  /**
   * If this vector's x, y, z or w value is greater than the given vector's x, y, z or w
   * value, replace that value with the corresponding min value.
   *
   * @param {Vector4} v - The vector.
   * @return {Vector4} A reference to this vector.
   */
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this.w = Math.min(this.w, e.w), this;
  }
  /**
   * If this vector's x, y, z or w value is less than the given vector's x, y, z or w
   * value, replace that value with the corresponding max value.
   *
   * @param {Vector4} v - The vector.
   * @return {Vector4} A reference to this vector.
   */
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this.w = Math.max(this.w, e.w), this;
  }
  /**
   * If this vector's x, y, z or w value is greater than the max vector's x, y, z or w
   * value, it is replaced by the corresponding value.
   * If this vector's x, y, z or w value is less than the min vector's x, y, z or w value,
   * it is replaced by the corresponding value.
   *
   * @param {Vector4} min - The minimum x, y and z values.
   * @param {Vector4} max - The maximum x, y and z values in the desired range.
   * @return {Vector4} A reference to this vector.
   */
  clamp(e, t) {
    return this.x = ze(this.x, e.x, t.x), this.y = ze(this.y, e.y, t.y), this.z = ze(this.z, e.z, t.z), this.w = ze(this.w, e.w, t.w), this;
  }
  /**
   * If this vector's x, y, z or w values are greater than the max value, they are
   * replaced by the max value.
   * If this vector's x, y, z or w values are less than the min value, they are
   * replaced by the min value.
   *
   * @param {number} minVal - The minimum value the components will be clamped to.
   * @param {number} maxVal - The maximum value the components will be clamped to.
   * @return {Vector4} A reference to this vector.
   */
  clampScalar(e, t) {
    return this.x = ze(this.x, e, t), this.y = ze(this.y, e, t), this.z = ze(this.z, e, t), this.w = ze(this.w, e, t), this;
  }
  /**
   * If this vector's length is greater than the max value, it is replaced by
   * the max value.
   * If this vector's length is less than the min value, it is replaced by the
   * min value.
   *
   * @param {number} min - The minimum value the vector length will be clamped to.
   * @param {number} max - The maximum value the vector length will be clamped to.
   * @return {Vector4} A reference to this vector.
   */
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(ze(n, e, t));
  }
  /**
   * The components of this vector are rounded down to the nearest integer value.
   *
   * @return {Vector4} A reference to this vector.
   */
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
  }
  /**
   * The components of this vector are rounded up to the nearest integer value.
   *
   * @return {Vector4} A reference to this vector.
   */
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
  }
  /**
   * The components of this vector are rounded to the nearest integer value
   *
   * @return {Vector4} A reference to this vector.
   */
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
  }
  /**
   * The components of this vector are rounded towards zero (up if negative,
   * down if positive) to an integer value.
   *
   * @return {Vector4} A reference to this vector.
   */
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this.w = Math.trunc(this.w), this;
  }
  /**
   * Inverts this vector - i.e. sets x = -x, y = -y, z = -z, w = -w.
   *
   * @return {Vector4} A reference to this vector.
   */
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
  }
  /**
   * Calculates the dot product of the given vector with this instance.
   *
   * @param {Vector4} v - The vector to compute the dot product with.
   * @return {number} The result of the dot product.
   */
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
  }
  /**
   * Computes the square of the Euclidean length (straight-line length) from
   * (0, 0, 0, 0) to (x, y, z, w). If you are comparing the lengths of vectors, you should
   * compare the length squared instead as it is slightly more efficient to calculate.
   *
   * @return {number} The square length of this vector.
   */
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
  }
  /**
   * Computes the  Euclidean length (straight-line length) from (0, 0, 0, 0) to (x, y, z, w).
   *
   * @return {number} The length of this vector.
   */
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
  }
  /**
   * Computes the Manhattan length of this vector.
   *
   * @return {number} The length of this vector.
   */
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
  }
  /**
   * Converts this vector to a unit vector - that is, sets it equal to a vector
   * with the same direction as this one, but with a vector length of `1`.
   *
   * @return {Vector4} A reference to this vector.
   */
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  /**
   * Sets this vector to a vector with the same direction as this one, but
   * with the specified length.
   *
   * @param {number} length - The new length of this vector.
   * @return {Vector4} A reference to this vector.
   */
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  /**
   * Linearly interpolates between the given vector and this instance, where
   * alpha is the percent distance along the line - alpha = 0 will be this
   * vector, and alpha = 1 will be the given one.
   *
   * @param {Vector4} v - The vector to interpolate towards.
   * @param {number} alpha - The interpolation factor, typically in the closed interval `[0, 1]`.
   * @return {Vector4} A reference to this vector.
   */
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this.w += (e.w - this.w) * t, this;
  }
  /**
   * Linearly interpolates between the given vectors, where alpha is the percent
   * distance along the line - alpha = 0 will be first vector, and alpha = 1 will
   * be the second one. The result is stored in this instance.
   *
   * @param {Vector4} v1 - The first vector.
   * @param {Vector4} v2 - The second vector.
   * @param {number} alpha - The interpolation factor, typically in the closed interval `[0, 1]`.
   * @return {Vector4} A reference to this vector.
   */
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this.w = e.w + (t.w - e.w) * n, this;
  }
  /**
   * Returns `true` if this vector is equal with the given one.
   *
   * @param {Vector4} v - The vector to test for equality.
   * @return {boolean} Whether this vector is equal with the given one.
   */
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
  }
  /**
   * Sets this vector's x value to be `array[ offset ]`, y value to be `array[ offset + 1 ]`,
   * z value to be `array[ offset + 2 ]`, w value to be `array[ offset + 3 ]`.
   *
   * @param {Array<number>} array - An array holding the vector component values.
   * @param {number} [offset=0] - The offset into the array.
   * @return {Vector4} A reference to this vector.
   */
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this.w = e[t + 3], this;
  }
  /**
   * Writes the components of this vector to the given array. If no array is provided,
   * the method returns a new instance.
   *
   * @param {Array<number>} [array=[]] - The target array holding the vector components.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Array<number>} The vector components.
   */
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e[t + 3] = this.w, e;
  }
  /**
   * Sets the components of this vector from the given buffer attribute.
   *
   * @param {BufferAttribute} attribute - The buffer attribute holding vector data.
   * @param {number} index - The index into the attribute.
   * @return {Vector4} A reference to this vector.
   */
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this.w = e.getW(t), this;
  }
  /**
   * Sets each component of this vector to a pseudo-random value between `0` and
   * `1`, excluding `1`.
   *
   * @return {Vector4} A reference to this vector.
   */
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
}
class hc extends fi {
  /**
   * Render target options.
   *
   * @typedef {Object} RenderTarget~Options
   * @property {boolean} [generateMipmaps=false] - Whether to generate mipmaps or not.
   * @property {number} [magFilter=LinearFilter] - The mag filter.
   * @property {number} [minFilter=LinearFilter] - The min filter.
   * @property {number} [format=RGBAFormat] - The texture format.
   * @property {number} [type=UnsignedByteType] - The texture type.
   * @property {?string} [internalFormat=null] - The texture's internal format.
   * @property {number} [wrapS=ClampToEdgeWrapping] - The texture's uv wrapping mode.
   * @property {number} [wrapT=ClampToEdgeWrapping] - The texture's uv wrapping mode.
   * @property {number} [anisotropy=1] - The texture's anisotropy value.
   * @property {string} [colorSpace=NoColorSpace] - The texture's color space.
   * @property {boolean} [depthBuffer=true] - Whether to allocate a depth buffer or not.
   * @property {boolean} [stencilBuffer=false] - Whether to allocate a stencil buffer or not.
   * @property {boolean} [resolveDepthBuffer=true] - Whether to resolve the depth buffer or not.
   * @property {boolean} [resolveStencilBuffer=true] - Whether  to resolve the stencil buffer or not.
   * @property {?Texture} [depthTexture=null] - Reference to a depth texture.
   * @property {number} [samples=0] - The MSAA samples count.
   * @property {number} [count=1] - Defines the number of color attachments . Must be at least `1`.
   * @property {number} [depth=1] - The texture depth.
   * @property {boolean} [multiview=false] - Whether this target is used for multiview rendering.
   */
  /**
   * Constructs a new render target.
   *
   * @param {number} [width=1] - The width of the render target.
   * @param {number} [height=1] - The height of the render target.
   * @param {RenderTarget~Options} [options] - The configuration object.
   */
  constructor(e = 1, t = 1, n = {}) {
    super(), n = Object.assign({
      generateMipmaps: !1,
      internalFormat: null,
      minFilter: Et,
      depthBuffer: !0,
      stencilBuffer: !1,
      resolveDepthBuffer: !0,
      resolveStencilBuffer: !0,
      depthTexture: null,
      samples: 0,
      count: 1,
      depth: 1,
      multiview: !1
    }, n), this.isRenderTarget = !0, this.width = e, this.height = t, this.depth = n.depth, this.scissor = new st(0, 0, e, t), this.scissorTest = !1, this.viewport = new st(0, 0, e, t), this.textures = [];
    const r = { width: e, height: t, depth: n.depth }, s = new Tt(r), a = n.count;
    for (let o = 0; o < a; o++)
      this.textures[o] = s.clone(), this.textures[o].isRenderTargetTexture = !0, this.textures[o].renderTarget = this;
    this._setTextureOptions(n), this.depthBuffer = n.depthBuffer, this.stencilBuffer = n.stencilBuffer, this.resolveDepthBuffer = n.resolveDepthBuffer, this.resolveStencilBuffer = n.resolveStencilBuffer, this._depthTexture = null, this.depthTexture = n.depthTexture, this.samples = n.samples, this.multiview = n.multiview;
  }
  _setTextureOptions(e = {}) {
    const t = {
      minFilter: Et,
      generateMipmaps: !1,
      flipY: !1,
      internalFormat: null
    };
    e.mapping !== void 0 && (t.mapping = e.mapping), e.wrapS !== void 0 && (t.wrapS = e.wrapS), e.wrapT !== void 0 && (t.wrapT = e.wrapT), e.wrapR !== void 0 && (t.wrapR = e.wrapR), e.magFilter !== void 0 && (t.magFilter = e.magFilter), e.minFilter !== void 0 && (t.minFilter = e.minFilter), e.format !== void 0 && (t.format = e.format), e.type !== void 0 && (t.type = e.type), e.anisotropy !== void 0 && (t.anisotropy = e.anisotropy), e.colorSpace !== void 0 && (t.colorSpace = e.colorSpace), e.flipY !== void 0 && (t.flipY = e.flipY), e.generateMipmaps !== void 0 && (t.generateMipmaps = e.generateMipmaps), e.internalFormat !== void 0 && (t.internalFormat = e.internalFormat);
    for (let n = 0; n < this.textures.length; n++)
      this.textures[n].setValues(t);
  }
  /**
   * The texture representing the default color attachment.
   *
   * @type {Texture}
   */
  get texture() {
    return this.textures[0];
  }
  set texture(e) {
    this.textures[0] = e;
  }
  set depthTexture(e) {
    this._depthTexture !== null && (this._depthTexture.renderTarget = null), e !== null && (e.renderTarget = this), this._depthTexture = e;
  }
  /**
   * Instead of saving the depth in a renderbuffer, a texture
   * can be used instead which is useful for further processing
   * e.g. in context of post-processing.
   *
   * @type {?DepthTexture}
   * @default null
   */
  get depthTexture() {
    return this._depthTexture;
  }
  /**
   * Sets the size of this render target.
   *
   * @param {number} width - The width.
   * @param {number} height - The height.
   * @param {number} [depth=1] - The depth.
   */
  setSize(e, t, n = 1) {
    if (this.width !== e || this.height !== t || this.depth !== n) {
      this.width = e, this.height = t, this.depth = n;
      for (let r = 0, s = this.textures.length; r < s; r++)
        this.textures[r].image.width = e, this.textures[r].image.height = t, this.textures[r].image.depth = n, this.textures[r].isData3DTexture !== !0 && (this.textures[r].isArrayTexture = this.textures[r].image.depth > 1);
      this.dispose();
    }
    this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t);
  }
  /**
   * Returns a new render target with copied values from this instance.
   *
   * @return {RenderTarget} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
  /**
   * Copies the settings of the given render target. This is a structural copy so
   * no resources are shared between render targets after the copy. That includes
   * all MRT textures and the depth texture.
   *
   * @param {RenderTarget} source - The render target to copy.
   * @return {RenderTarget} A reference to this instance.
   */
  copy(e) {
    this.width = e.width, this.height = e.height, this.depth = e.depth, this.scissor.copy(e.scissor), this.scissorTest = e.scissorTest, this.viewport.copy(e.viewport), this.textures.length = 0;
    for (let t = 0, n = e.textures.length; t < n; t++) {
      this.textures[t] = e.textures[t].clone(), this.textures[t].isRenderTargetTexture = !0, this.textures[t].renderTarget = this;
      const r = Object.assign({}, e.textures[t].image);
      this.textures[t].source = new la(r);
    }
    return this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, this.resolveDepthBuffer = e.resolveDepthBuffer, this.resolveStencilBuffer = e.resolveStencilBuffer, e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()), this.samples = e.samples, this;
  }
  /**
   * Frees the GPU-related resources allocated by this instance. Call this
   * method whenever this instance is no longer used in your app.
   *
   * @fires RenderTarget#dispose
   */
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class $t extends hc {
  /**
   * Constructs a new 3D render target.
   *
   * @param {number} [width=1] - The width of the render target.
   * @param {number} [height=1] - The height of the render target.
   * @param {RenderTarget~Options} [options] - The configuration object.
   */
  constructor(e = 1, t = 1, n = {}) {
    super(e, t, n), this.isWebGLRenderTarget = !0;
  }
}
class Wo extends Tt {
  /**
   * Constructs a new data array texture.
   *
   * @param {?TypedArray} [data=null] - The buffer data.
   * @param {number} [width=1] - The width of the texture.
   * @param {number} [height=1] - The height of the texture.
   * @param {number} [depth=1] - The depth of the texture.
   */
  constructor(e = null, t = 1, n = 1, r = 1) {
    super(null), this.isDataArrayTexture = !0, this.image = { data: e, width: t, height: n, depth: r }, this.magFilter = vt, this.minFilter = vt, this.wrapR = un, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1, this.layerUpdates = /* @__PURE__ */ new Set();
  }
  /**
   * Describes that a specific layer of the texture needs to be updated.
   * Normally when {@link Texture#needsUpdate} is set to `true`, the
   * entire data texture array is sent to the GPU. Marking specific
   * layers will only transmit subsets of all mipmaps associated with a
   * specific depth in the array which is often much more performant.
   *
   * @param {number} layerIndex - The layer index that should be updated.
   */
  addLayerUpdate(e) {
    this.layerUpdates.add(e);
  }
  /**
   * Resets the layer updates registry.
   */
  clearLayerUpdates() {
    this.layerUpdates.clear();
  }
}
class fc extends Tt {
  /**
   * Constructs a new data array texture.
   *
   * @param {?TypedArray} [data=null] - The buffer data.
   * @param {number} [width=1] - The width of the texture.
   * @param {number} [height=1] - The height of the texture.
   * @param {number} [depth=1] - The depth of the texture.
   */
  constructor(e = null, t = 1, n = 1, r = 1) {
    super(null), this.isData3DTexture = !0, this.image = { data: e, width: t, height: n, depth: r }, this.magFilter = vt, this.minFilter = vt, this.wrapR = un, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class tt {
  /**
   * Constructs a new 4x4 matrix. The arguments are supposed to be
   * in row-major order. If no arguments are provided, the constructor
   * initializes the matrix as an identity matrix.
   *
   * @param {number} [n11] - 1-1 matrix element.
   * @param {number} [n12] - 1-2 matrix element.
   * @param {number} [n13] - 1-3 matrix element.
   * @param {number} [n14] - 1-4 matrix element.
   * @param {number} [n21] - 2-1 matrix element.
   * @param {number} [n22] - 2-2 matrix element.
   * @param {number} [n23] - 2-3 matrix element.
   * @param {number} [n24] - 2-4 matrix element.
   * @param {number} [n31] - 3-1 matrix element.
   * @param {number} [n32] - 3-2 matrix element.
   * @param {number} [n33] - 3-3 matrix element.
   * @param {number} [n34] - 3-4 matrix element.
   * @param {number} [n41] - 4-1 matrix element.
   * @param {number} [n42] - 4-2 matrix element.
   * @param {number} [n43] - 4-3 matrix element.
   * @param {number} [n44] - 4-4 matrix element.
   */
  constructor(e, t, n, r, s, a, o, c, l, h, m, u, d, _, M, p) {
    tt.prototype.isMatrix4 = !0, this.elements = [
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ], e !== void 0 && this.set(e, t, n, r, s, a, o, c, l, h, m, u, d, _, M, p);
  }
  /**
   * Sets the elements of the matrix.The arguments are supposed to be
   * in row-major order.
   *
   * @param {number} [n11] - 1-1 matrix element.
   * @param {number} [n12] - 1-2 matrix element.
   * @param {number} [n13] - 1-3 matrix element.
   * @param {number} [n14] - 1-4 matrix element.
   * @param {number} [n21] - 2-1 matrix element.
   * @param {number} [n22] - 2-2 matrix element.
   * @param {number} [n23] - 2-3 matrix element.
   * @param {number} [n24] - 2-4 matrix element.
   * @param {number} [n31] - 3-1 matrix element.
   * @param {number} [n32] - 3-2 matrix element.
   * @param {number} [n33] - 3-3 matrix element.
   * @param {number} [n34] - 3-4 matrix element.
   * @param {number} [n41] - 4-1 matrix element.
   * @param {number} [n42] - 4-2 matrix element.
   * @param {number} [n43] - 4-3 matrix element.
   * @param {number} [n44] - 4-4 matrix element.
   * @return {Matrix4} A reference to this matrix.
   */
  set(e, t, n, r, s, a, o, c, l, h, m, u, d, _, M, p) {
    const f = this.elements;
    return f[0] = e, f[4] = t, f[8] = n, f[12] = r, f[1] = s, f[5] = a, f[9] = o, f[13] = c, f[2] = l, f[6] = h, f[10] = m, f[14] = u, f[3] = d, f[7] = _, f[11] = M, f[15] = p, this;
  }
  /**
   * Sets this matrix to the 4x4 identity matrix.
   *
   * @return {Matrix4} A reference to this matrix.
   */
  identity() {
    return this.set(
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Returns a matrix with copied values from this instance.
   *
   * @return {Matrix4} A clone of this instance.
   */
  clone() {
    return new tt().fromArray(this.elements);
  }
  /**
   * Copies the values of the given matrix to this instance.
   *
   * @param {Matrix4} m - The matrix to copy.
   * @return {Matrix4} A reference to this matrix.
   */
  copy(e) {
    const t = this.elements, n = e.elements;
    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15], this;
  }
  /**
   * Copies the translation component of the given matrix
   * into this matrix's translation component.
   *
   * @param {Matrix4} m - The matrix to copy the translation component.
   * @return {Matrix4} A reference to this matrix.
   */
  copyPosition(e) {
    const t = this.elements, n = e.elements;
    return t[12] = n[12], t[13] = n[13], t[14] = n[14], this;
  }
  /**
   * Set the upper 3x3 elements of this matrix to the values of given 3x3 matrix.
   *
   * @param {Matrix3} m - The 3x3 matrix.
   * @return {Matrix4} A reference to this matrix.
   */
  setFromMatrix3(e) {
    const t = e.elements;
    return this.set(
      t[0],
      t[3],
      t[6],
      0,
      t[1],
      t[4],
      t[7],
      0,
      t[2],
      t[5],
      t[8],
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Extracts the basis of this matrix into the three axis vectors provided.
   *
   * @param {Vector3} xAxis - The basis's x axis.
   * @param {Vector3} yAxis - The basis's y axis.
   * @param {Vector3} zAxis - The basis's z axis.
   * @return {Matrix4} A reference to this matrix.
   */
  extractBasis(e, t, n) {
    return this.determinant() === 0 ? (e.set(1, 0, 0), t.set(0, 1, 0), n.set(0, 0, 1), this) : (e.setFromMatrixColumn(this, 0), t.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this);
  }
  /**
   * Sets the given basis vectors to this matrix.
   *
   * @param {Vector3} xAxis - The basis's x axis.
   * @param {Vector3} yAxis - The basis's y axis.
   * @param {Vector3} zAxis - The basis's z axis.
   * @return {Matrix4} A reference to this matrix.
   */
  makeBasis(e, t, n) {
    return this.set(
      e.x,
      t.x,
      n.x,
      0,
      e.y,
      t.y,
      n.y,
      0,
      e.z,
      t.z,
      n.z,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Extracts the rotation component of the given matrix
   * into this matrix's rotation component.
   *
   * Note: This method does not support reflection matrices.
   *
   * @param {Matrix4} m - The matrix.
   * @return {Matrix4} A reference to this matrix.
   */
  extractRotation(e) {
    if (e.determinant() === 0)
      return this.identity();
    const t = this.elements, n = e.elements, r = 1 / Xn.setFromMatrixColumn(e, 0).length(), s = 1 / Xn.setFromMatrixColumn(e, 1).length(), a = 1 / Xn.setFromMatrixColumn(e, 2).length();
    return t[0] = n[0] * r, t[1] = n[1] * r, t[2] = n[2] * r, t[3] = 0, t[4] = n[4] * s, t[5] = n[5] * s, t[6] = n[6] * s, t[7] = 0, t[8] = n[8] * a, t[9] = n[9] * a, t[10] = n[10] * a, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  /**
   * Sets the rotation component (the upper left 3x3 matrix) of this matrix to
   * the rotation specified by the given Euler angles. The rest of
   * the matrix is set to the identity. Depending on the {@link Euler#order},
   * there are six possible outcomes. See [this page](https://en.wikipedia.org/wiki/Euler_angles#Rotation_matrix)
   * for a complete list.
   *
   * @param {Euler} euler - The Euler angles.
   * @return {Matrix4} A reference to this matrix.
   */
  makeRotationFromEuler(e) {
    const t = this.elements, n = e.x, r = e.y, s = e.z, a = Math.cos(n), o = Math.sin(n), c = Math.cos(r), l = Math.sin(r), h = Math.cos(s), m = Math.sin(s);
    if (e.order === "XYZ") {
      const u = a * h, d = a * m, _ = o * h, M = o * m;
      t[0] = c * h, t[4] = -c * m, t[8] = l, t[1] = d + _ * l, t[5] = u - M * l, t[9] = -o * c, t[2] = M - u * l, t[6] = _ + d * l, t[10] = a * c;
    } else if (e.order === "YXZ") {
      const u = c * h, d = c * m, _ = l * h, M = l * m;
      t[0] = u + M * o, t[4] = _ * o - d, t[8] = a * l, t[1] = a * m, t[5] = a * h, t[9] = -o, t[2] = d * o - _, t[6] = M + u * o, t[10] = a * c;
    } else if (e.order === "ZXY") {
      const u = c * h, d = c * m, _ = l * h, M = l * m;
      t[0] = u - M * o, t[4] = -a * m, t[8] = _ + d * o, t[1] = d + _ * o, t[5] = a * h, t[9] = M - u * o, t[2] = -a * l, t[6] = o, t[10] = a * c;
    } else if (e.order === "ZYX") {
      const u = a * h, d = a * m, _ = o * h, M = o * m;
      t[0] = c * h, t[4] = _ * l - d, t[8] = u * l + M, t[1] = c * m, t[5] = M * l + u, t[9] = d * l - _, t[2] = -l, t[6] = o * c, t[10] = a * c;
    } else if (e.order === "YZX") {
      const u = a * c, d = a * l, _ = o * c, M = o * l;
      t[0] = c * h, t[4] = M - u * m, t[8] = _ * m + d, t[1] = m, t[5] = a * h, t[9] = -o * h, t[2] = -l * h, t[6] = d * m + _, t[10] = u - M * m;
    } else if (e.order === "XZY") {
      const u = a * c, d = a * l, _ = o * c, M = o * l;
      t[0] = c * h, t[4] = -m, t[8] = l * h, t[1] = u * m + M, t[5] = a * h, t[9] = d * m - _, t[2] = _ * m - d, t[6] = o * h, t[10] = M * m + u;
    }
    return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  /**
   * Sets the rotation component of this matrix to the rotation specified by
   * the given Quaternion as outlined [here](https://en.wikipedia.org/wiki/Rotation_matrix#Quaternion)
   * The rest of the matrix is set to the identity.
   *
   * @param {Quaternion} q - The Quaternion.
   * @return {Matrix4} A reference to this matrix.
   */
  makeRotationFromQuaternion(e) {
    return this.compose(dc, e, pc);
  }
  /**
   * Sets the rotation component of the transformation matrix, looking from `eye` towards
   * `target`, and oriented by the up-direction.
   *
   * @param {Vector3} eye - The eye vector.
   * @param {Vector3} target - The target vector.
   * @param {Vector3} up - The up vector.
   * @return {Matrix4} A reference to this matrix.
   */
  lookAt(e, t, n) {
    const r = this.elements;
    return Ct.subVectors(e, t), Ct.lengthSq() === 0 && (Ct.z = 1), Ct.normalize(), vn.crossVectors(n, Ct), vn.lengthSq() === 0 && (Math.abs(n.z) === 1 ? Ct.x += 1e-4 : Ct.z += 1e-4, Ct.normalize(), vn.crossVectors(n, Ct)), vn.normalize(), Bi.crossVectors(Ct, vn), r[0] = vn.x, r[4] = Bi.x, r[8] = Ct.x, r[1] = vn.y, r[5] = Bi.y, r[9] = Ct.y, r[2] = vn.z, r[6] = Bi.z, r[10] = Ct.z, this;
  }
  /**
   * Post-multiplies this matrix by the given 4x4 matrix.
   *
   * @param {Matrix4} m - The matrix to multiply with.
   * @return {Matrix4} A reference to this matrix.
   */
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  /**
   * Pre-multiplies this matrix by the given 4x4 matrix.
   *
   * @param {Matrix4} m - The matrix to multiply with.
   * @return {Matrix4} A reference to this matrix.
   */
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  /**
   * Multiples the given 4x4 matrices and stores the result
   * in this matrix.
   *
   * @param {Matrix4} a - The first matrix.
   * @param {Matrix4} b - The second matrix.
   * @return {Matrix4} A reference to this matrix.
   */
  multiplyMatrices(e, t) {
    const n = e.elements, r = t.elements, s = this.elements, a = n[0], o = n[4], c = n[8], l = n[12], h = n[1], m = n[5], u = n[9], d = n[13], _ = n[2], M = n[6], p = n[10], f = n[14], S = n[3], b = n[7], E = n[11], R = n[15], A = r[0], L = r[4], v = r[8], T = r[12], q = r[1], C = r[5], G = r[9], z = r[13], k = r[2], H = r[6], B = r[10], O = r[14], Q = r[3], K = r[7], ce = r[11], pe = r[15];
    return s[0] = a * A + o * q + c * k + l * Q, s[4] = a * L + o * C + c * H + l * K, s[8] = a * v + o * G + c * B + l * ce, s[12] = a * T + o * z + c * O + l * pe, s[1] = h * A + m * q + u * k + d * Q, s[5] = h * L + m * C + u * H + d * K, s[9] = h * v + m * G + u * B + d * ce, s[13] = h * T + m * z + u * O + d * pe, s[2] = _ * A + M * q + p * k + f * Q, s[6] = _ * L + M * C + p * H + f * K, s[10] = _ * v + M * G + p * B + f * ce, s[14] = _ * T + M * z + p * O + f * pe, s[3] = S * A + b * q + E * k + R * Q, s[7] = S * L + b * C + E * H + R * K, s[11] = S * v + b * G + E * B + R * ce, s[15] = S * T + b * z + E * O + R * pe, this;
  }
  /**
   * Multiplies every component of the matrix by the given scalar.
   *
   * @param {number} s - The scalar.
   * @return {Matrix4} A reference to this matrix.
   */
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this;
  }
  /**
   * Computes and returns the determinant of this matrix.
   *
   * Based on the method outlined [here](http://www.euclideanspace.com/maths/algebra/matrix/functions/inverse/fourD/index.html).
   *
   * @return {number} The determinant.
   */
  determinant() {
    const e = this.elements, t = e[0], n = e[4], r = e[8], s = e[12], a = e[1], o = e[5], c = e[9], l = e[13], h = e[2], m = e[6], u = e[10], d = e[14], _ = e[3], M = e[7], p = e[11], f = e[15], S = c * d - l * u, b = o * d - l * m, E = o * u - c * m, R = a * d - l * h, A = a * u - c * h, L = a * m - o * h;
    return t * (M * S - p * b + f * E) - n * (_ * S - p * R + f * A) + r * (_ * b - M * R + f * L) - s * (_ * E - M * A + p * L);
  }
  /**
   * Transposes this matrix in place.
   *
   * @return {Matrix4} A reference to this matrix.
   */
  transpose() {
    const e = this.elements;
    let t;
    return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this;
  }
  /**
   * Sets the position component for this matrix from the given vector,
   * without affecting the rest of the matrix.
   *
   * @param {number|Vector3} x - The x component of the vector or alternatively the vector object.
   * @param {number} y - The y component of the vector.
   * @param {number} z - The z component of the vector.
   * @return {Matrix4} A reference to this matrix.
   */
  setPosition(e, t, n) {
    const r = this.elements;
    return e.isVector3 ? (r[12] = e.x, r[13] = e.y, r[14] = e.z) : (r[12] = e, r[13] = t, r[14] = n), this;
  }
  /**
   * Inverts this matrix, using the [analytic method](https://en.wikipedia.org/wiki/Invertible_matrix#Analytic_solution).
   * You can not invert with a determinant of zero. If you attempt this, the method produces
   * a zero matrix instead.
   *
   * @return {Matrix4} A reference to this matrix.
   */
  invert() {
    const e = this.elements, t = e[0], n = e[1], r = e[2], s = e[3], a = e[4], o = e[5], c = e[6], l = e[7], h = e[8], m = e[9], u = e[10], d = e[11], _ = e[12], M = e[13], p = e[14], f = e[15], S = t * o - n * a, b = t * c - r * a, E = t * l - s * a, R = n * c - r * o, A = n * l - s * o, L = r * l - s * c, v = h * M - m * _, T = h * p - u * _, q = h * f - d * _, C = m * p - u * M, G = m * f - d * M, z = u * f - d * p, k = S * z - b * G + E * C + R * q - A * T + L * v;
    if (k === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const H = 1 / k;
    return e[0] = (o * z - c * G + l * C) * H, e[1] = (r * G - n * z - s * C) * H, e[2] = (M * L - p * A + f * R) * H, e[3] = (u * A - m * L - d * R) * H, e[4] = (c * q - a * z - l * T) * H, e[5] = (t * z - r * q + s * T) * H, e[6] = (p * E - _ * L - f * b) * H, e[7] = (h * L - u * E + d * b) * H, e[8] = (a * G - o * q + l * v) * H, e[9] = (n * q - t * G - s * v) * H, e[10] = (_ * A - M * E + f * S) * H, e[11] = (m * E - h * A - d * S) * H, e[12] = (o * T - a * C - c * v) * H, e[13] = (t * C - n * T + r * v) * H, e[14] = (M * b - _ * R - p * S) * H, e[15] = (h * R - m * b + u * S) * H, this;
  }
  /**
   * Multiplies the columns of this matrix by the given vector.
   *
   * @param {Vector3} v - The scale vector.
   * @return {Matrix4} A reference to this matrix.
   */
  scale(e) {
    const t = this.elements, n = e.x, r = e.y, s = e.z;
    return t[0] *= n, t[4] *= r, t[8] *= s, t[1] *= n, t[5] *= r, t[9] *= s, t[2] *= n, t[6] *= r, t[10] *= s, t[3] *= n, t[7] *= r, t[11] *= s, this;
  }
  /**
   * Gets the maximum scale value of the three axes.
   *
   * @return {number} The maximum scale.
   */
  getMaxScaleOnAxis() {
    const e = this.elements, t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2], n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6], r = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
    return Math.sqrt(Math.max(t, n, r));
  }
  /**
   * Sets this matrix as a translation transform from the given vector.
   *
   * @param {number|Vector3} x - The amount to translate in the X axis or alternatively a translation vector.
   * @param {number} y - The amount to translate in the Y axis.
   * @param {number} z - The amount to translate in the z axis.
   * @return {Matrix4} A reference to this matrix.
   */
  makeTranslation(e, t, n) {
    return e.isVector3 ? this.set(
      1,
      0,
      0,
      e.x,
      0,
      1,
      0,
      e.y,
      0,
      0,
      1,
      e.z,
      0,
      0,
      0,
      1
    ) : this.set(
      1,
      0,
      0,
      e,
      0,
      1,
      0,
      t,
      0,
      0,
      1,
      n,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Sets this matrix as a rotational transformation around the X axis by
   * the given angle.
   *
   * @param {number} theta - The rotation in radians.
   * @return {Matrix4} A reference to this matrix.
   */
  makeRotationX(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      1,
      0,
      0,
      0,
      0,
      t,
      -n,
      0,
      0,
      n,
      t,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Sets this matrix as a rotational transformation around the Y axis by
   * the given angle.
   *
   * @param {number} theta - The rotation in radians.
   * @return {Matrix4} A reference to this matrix.
   */
  makeRotationY(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      0,
      n,
      0,
      0,
      1,
      0,
      0,
      -n,
      0,
      t,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Sets this matrix as a rotational transformation around the Z axis by
   * the given angle.
   *
   * @param {number} theta - The rotation in radians.
   * @return {Matrix4} A reference to this matrix.
   */
  makeRotationZ(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      -n,
      0,
      0,
      n,
      t,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Sets this matrix as a rotational transformation around the given axis by
   * the given angle.
   *
   * This is a somewhat controversial but mathematically sound alternative to
   * rotating via Quaternions. See the discussion [here](https://www.gamedev.net/articles/programming/math-and-physics/do-we-really-need-quaternions-r1199).
   *
   * @param {Vector3} axis - The normalized rotation axis.
   * @param {number} angle - The rotation in radians.
   * @return {Matrix4} A reference to this matrix.
   */
  makeRotationAxis(e, t) {
    const n = Math.cos(t), r = Math.sin(t), s = 1 - n, a = e.x, o = e.y, c = e.z, l = s * a, h = s * o;
    return this.set(
      l * a + n,
      l * o - r * c,
      l * c + r * o,
      0,
      l * o + r * c,
      h * o + n,
      h * c - r * a,
      0,
      l * c - r * o,
      h * c + r * a,
      s * c * c + n,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Sets this matrix as a scale transformation.
   *
   * @param {number} x - The amount to scale in the X axis.
   * @param {number} y - The amount to scale in the Y axis.
   * @param {number} z - The amount to scale in the Z axis.
   * @return {Matrix4} A reference to this matrix.
   */
  makeScale(e, t, n) {
    return this.set(
      e,
      0,
      0,
      0,
      0,
      t,
      0,
      0,
      0,
      0,
      n,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Sets this matrix as a shear transformation.
   *
   * @param {number} xy - The amount to shear X by Y.
   * @param {number} xz - The amount to shear X by Z.
   * @param {number} yx - The amount to shear Y by X.
   * @param {number} yz - The amount to shear Y by Z.
   * @param {number} zx - The amount to shear Z by X.
   * @param {number} zy - The amount to shear Z by Y.
   * @return {Matrix4} A reference to this matrix.
   */
  makeShear(e, t, n, r, s, a) {
    return this.set(
      1,
      n,
      s,
      0,
      e,
      1,
      a,
      0,
      t,
      r,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Sets this matrix to the transformation composed of the given position,
   * rotation (Quaternion) and scale.
   *
   * @param {Vector3} position - The position vector.
   * @param {Quaternion} quaternion - The rotation as a Quaternion.
   * @param {Vector3} scale - The scale vector.
   * @return {Matrix4} A reference to this matrix.
   */
  compose(e, t, n) {
    const r = this.elements, s = t._x, a = t._y, o = t._z, c = t._w, l = s + s, h = a + a, m = o + o, u = s * l, d = s * h, _ = s * m, M = a * h, p = a * m, f = o * m, S = c * l, b = c * h, E = c * m, R = n.x, A = n.y, L = n.z;
    return r[0] = (1 - (M + f)) * R, r[1] = (d + E) * R, r[2] = (_ - b) * R, r[3] = 0, r[4] = (d - E) * A, r[5] = (1 - (u + f)) * A, r[6] = (p + S) * A, r[7] = 0, r[8] = (_ + b) * L, r[9] = (p - S) * L, r[10] = (1 - (u + M)) * L, r[11] = 0, r[12] = e.x, r[13] = e.y, r[14] = e.z, r[15] = 1, this;
  }
  /**
   * Decomposes this matrix into its position, rotation and scale components
   * and provides the result in the given objects.
   *
   * Note: Not all matrices are decomposable in this way. For example, if an
   * object has a non-uniformly scaled parent, then the object's world matrix
   * may not be decomposable, and this method may not be appropriate.
   *
   * @param {Vector3} position - The position vector.
   * @param {Quaternion} quaternion - The rotation as a Quaternion.
   * @param {Vector3} scale - The scale vector.
   * @return {Matrix4} A reference to this matrix.
   */
  decompose(e, t, n) {
    const r = this.elements;
    e.x = r[12], e.y = r[13], e.z = r[14];
    const s = this.determinant();
    if (s === 0)
      return n.set(1, 1, 1), t.identity(), this;
    let a = Xn.set(r[0], r[1], r[2]).length();
    const o = Xn.set(r[4], r[5], r[6]).length(), c = Xn.set(r[8], r[9], r[10]).length();
    s < 0 && (a = -a), Bt.copy(this);
    const l = 1 / a, h = 1 / o, m = 1 / c;
    return Bt.elements[0] *= l, Bt.elements[1] *= l, Bt.elements[2] *= l, Bt.elements[4] *= h, Bt.elements[5] *= h, Bt.elements[6] *= h, Bt.elements[8] *= m, Bt.elements[9] *= m, Bt.elements[10] *= m, t.setFromRotationMatrix(Bt), n.x = a, n.y = o, n.z = c, this;
  }
  /**
  	 * Creates a perspective projection matrix. This is used internally by
  	 * {@link PerspectiveCamera#updateProjectionMatrix}.
  
  	 * @param {number} left - Left boundary of the viewing frustum at the near plane.
  	 * @param {number} right - Right boundary of the viewing frustum at the near plane.
  	 * @param {number} top - Top boundary of the viewing frustum at the near plane.
  	 * @param {number} bottom - Bottom boundary of the viewing frustum at the near plane.
  	 * @param {number} near - The distance from the camera to the near plane.
  	 * @param {number} far - The distance from the camera to the far plane.
  	 * @param {(WebGLCoordinateSystem|WebGPUCoordinateSystem)} [coordinateSystem=WebGLCoordinateSystem] - The coordinate system.
  	 * @param {boolean} [reversedDepth=false] - Whether to use a reversed depth.
  	 * @return {Matrix4} A reference to this matrix.
  	 */
  makePerspective(e, t, n, r, s, a, o = Jt, c = !1) {
    const l = this.elements, h = 2 * s / (t - e), m = 2 * s / (n - r), u = (t + e) / (t - e), d = (n + r) / (n - r);
    let _, M;
    if (c)
      _ = s / (a - s), M = a * s / (a - s);
    else if (o === Jt)
      _ = -(a + s) / (a - s), M = -2 * a * s / (a - s);
    else if (o === Ci)
      _ = -a / (a - s), M = -a * s / (a - s);
    else
      throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + o);
    return l[0] = h, l[4] = 0, l[8] = u, l[12] = 0, l[1] = 0, l[5] = m, l[9] = d, l[13] = 0, l[2] = 0, l[6] = 0, l[10] = _, l[14] = M, l[3] = 0, l[7] = 0, l[11] = -1, l[15] = 0, this;
  }
  /**
  	 * Creates a orthographic projection matrix. This is used internally by
  	 * {@link OrthographicCamera#updateProjectionMatrix}.
  
  	 * @param {number} left - Left boundary of the viewing frustum at the near plane.
  	 * @param {number} right - Right boundary of the viewing frustum at the near plane.
  	 * @param {number} top - Top boundary of the viewing frustum at the near plane.
  	 * @param {number} bottom - Bottom boundary of the viewing frustum at the near plane.
  	 * @param {number} near - The distance from the camera to the near plane.
  	 * @param {number} far - The distance from the camera to the far plane.
  	 * @param {(WebGLCoordinateSystem|WebGPUCoordinateSystem)} [coordinateSystem=WebGLCoordinateSystem] - The coordinate system.
  	 * @param {boolean} [reversedDepth=false] - Whether to use a reversed depth.
  	 * @return {Matrix4} A reference to this matrix.
  	 */
  makeOrthographic(e, t, n, r, s, a, o = Jt, c = !1) {
    const l = this.elements, h = 2 / (t - e), m = 2 / (n - r), u = -(t + e) / (t - e), d = -(n + r) / (n - r);
    let _, M;
    if (c)
      _ = 1 / (a - s), M = a / (a - s);
    else if (o === Jt)
      _ = -2 / (a - s), M = -(a + s) / (a - s);
    else if (o === Ci)
      _ = -1 / (a - s), M = -s / (a - s);
    else
      throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + o);
    return l[0] = h, l[4] = 0, l[8] = 0, l[12] = u, l[1] = 0, l[5] = m, l[9] = 0, l[13] = d, l[2] = 0, l[6] = 0, l[10] = _, l[14] = M, l[3] = 0, l[7] = 0, l[11] = 0, l[15] = 1, this;
  }
  /**
   * Returns `true` if this matrix is equal with the given one.
   *
   * @param {Matrix4} matrix - The matrix to test for equality.
   * @return {boolean} Whether this matrix is equal with the given one.
   */
  equals(e) {
    const t = this.elements, n = e.elements;
    for (let r = 0; r < 16; r++)
      if (t[r] !== n[r]) return !1;
    return !0;
  }
  /**
   * Sets the elements of the matrix from the given array.
   *
   * @param {Array<number>} array - The matrix elements in column-major order.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Matrix4} A reference to this matrix.
   */
  fromArray(e, t = 0) {
    for (let n = 0; n < 16; n++)
      this.elements[n] = e[n + t];
    return this;
  }
  /**
   * Writes the elements of this matrix to the given array. If no array is provided,
   * the method returns a new instance.
   *
   * @param {Array<number>} [array=[]] - The target array holding the matrix elements in column-major order.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Array<number>} The matrix elements in column-major order.
   */
  toArray(e = [], t = 0) {
    const n = this.elements;
    return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e[t + 9] = n[9], e[t + 10] = n[10], e[t + 11] = n[11], e[t + 12] = n[12], e[t + 13] = n[13], e[t + 14] = n[14], e[t + 15] = n[15], e;
  }
}
const Xn = /* @__PURE__ */ new I(), Bt = /* @__PURE__ */ new tt(), dc = /* @__PURE__ */ new I(0, 0, 0), pc = /* @__PURE__ */ new I(1, 1, 1), vn = /* @__PURE__ */ new I(), Bi = /* @__PURE__ */ new I(), Ct = /* @__PURE__ */ new I(), Na = /* @__PURE__ */ new tt(), Fa = /* @__PURE__ */ new di();
class en {
  /**
   * Constructs a new euler instance.
   *
   * @param {number} [x=0] - The angle of the x axis in radians.
   * @param {number} [y=0] - The angle of the y axis in radians.
   * @param {number} [z=0] - The angle of the z axis in radians.
   * @param {string} [order=Euler.DEFAULT_ORDER] - A string representing the order that the rotations are applied.
   */
  constructor(e = 0, t = 0, n = 0, r = en.DEFAULT_ORDER) {
    this.isEuler = !0, this._x = e, this._y = t, this._z = n, this._order = r;
  }
  /**
   * The angle of the x axis in radians.
   *
   * @type {number}
   * @default 0
   */
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e, this._onChangeCallback();
  }
  /**
   * The angle of the y axis in radians.
   *
   * @type {number}
   * @default 0
   */
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e, this._onChangeCallback();
  }
  /**
   * The angle of the z axis in radians.
   *
   * @type {number}
   * @default 0
   */
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e, this._onChangeCallback();
  }
  /**
   * A string representing the order that the rotations are applied.
   *
   * @type {string}
   * @default 'XYZ'
   */
  get order() {
    return this._order;
  }
  set order(e) {
    this._order = e, this._onChangeCallback();
  }
  /**
   * Sets the Euler components.
   *
   * @param {number} x - The angle of the x axis in radians.
   * @param {number} y - The angle of the y axis in radians.
   * @param {number} z - The angle of the z axis in radians.
   * @param {string} [order] - A string representing the order that the rotations are applied.
   * @return {Euler} A reference to this Euler instance.
   */
  set(e, t, n, r = this._order) {
    return this._x = e, this._y = t, this._z = n, this._order = r, this._onChangeCallback(), this;
  }
  /**
   * Returns a new Euler instance with copied values from this instance.
   *
   * @return {Euler} A clone of this instance.
   */
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  /**
   * Copies the values of the given Euler instance to this instance.
   *
   * @param {Euler} euler - The Euler instance to copy.
   * @return {Euler} A reference to this Euler instance.
   */
  copy(e) {
    return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this._onChangeCallback(), this;
  }
  /**
   * Sets the angles of this Euler instance from a pure rotation matrix.
   *
   * @param {Matrix4} m - A 4x4 matrix of which the upper 3x3 of matrix is a pure rotation matrix (i.e. unscaled).
   * @param {string} [order] - A string representing the order that the rotations are applied.
   * @param {boolean} [update=true] - Whether the internal `onChange` callback should be executed or not.
   * @return {Euler} A reference to this Euler instance.
   */
  setFromRotationMatrix(e, t = this._order, n = !0) {
    const r = e.elements, s = r[0], a = r[4], o = r[8], c = r[1], l = r[5], h = r[9], m = r[2], u = r[6], d = r[10];
    switch (t) {
      case "XYZ":
        this._y = Math.asin(ze(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(-h, d), this._z = Math.atan2(-a, s)) : (this._x = Math.atan2(u, l), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-ze(h, -1, 1)), Math.abs(h) < 0.9999999 ? (this._y = Math.atan2(o, d), this._z = Math.atan2(c, l)) : (this._y = Math.atan2(-m, s), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(ze(u, -1, 1)), Math.abs(u) < 0.9999999 ? (this._y = Math.atan2(-m, d), this._z = Math.atan2(-a, l)) : (this._y = 0, this._z = Math.atan2(c, s));
        break;
      case "ZYX":
        this._y = Math.asin(-ze(m, -1, 1)), Math.abs(m) < 0.9999999 ? (this._x = Math.atan2(u, d), this._z = Math.atan2(c, s)) : (this._x = 0, this._z = Math.atan2(-a, l));
        break;
      case "YZX":
        this._z = Math.asin(ze(c, -1, 1)), Math.abs(c) < 0.9999999 ? (this._x = Math.atan2(-h, l), this._y = Math.atan2(-m, s)) : (this._x = 0, this._y = Math.atan2(o, d));
        break;
      case "XZY":
        this._z = Math.asin(-ze(a, -1, 1)), Math.abs(a) < 0.9999999 ? (this._x = Math.atan2(u, l), this._y = Math.atan2(o, s)) : (this._x = Math.atan2(-h, d), this._y = 0);
        break;
      default:
        Ce("Euler: .setFromRotationMatrix() encountered an unknown order: " + t);
    }
    return this._order = t, n === !0 && this._onChangeCallback(), this;
  }
  /**
   * Sets the angles of this Euler instance from a normalized quaternion.
   *
   * @param {Quaternion} q - A normalized Quaternion.
   * @param {string} [order] - A string representing the order that the rotations are applied.
   * @param {boolean} [update=true] - Whether the internal `onChange` callback should be executed or not.
   * @return {Euler} A reference to this Euler instance.
   */
  setFromQuaternion(e, t, n) {
    return Na.makeRotationFromQuaternion(e), this.setFromRotationMatrix(Na, t, n);
  }
  /**
   * Sets the angles of this Euler instance from the given vector.
   *
   * @param {Vector3} v - The vector.
   * @param {string} [order] - A string representing the order that the rotations are applied.
   * @return {Euler} A reference to this Euler instance.
   */
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  /**
   * Resets the euler angle with a new order by creating a quaternion from this
   * euler angle and then setting this euler angle with the quaternion and the
   * new order.
   *
   * Warning: This discards revolution information.
   *
   * @param {string} [newOrder] - A string representing the new order that the rotations are applied.
   * @return {Euler} A reference to this Euler instance.
   */
  reorder(e) {
    return Fa.setFromEuler(this), this.setFromQuaternion(Fa, e);
  }
  /**
   * Returns `true` if this Euler instance is equal with the given one.
   *
   * @param {Euler} euler - The Euler instance to test for equality.
   * @return {boolean} Whether this Euler instance is equal with the given one.
   */
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order;
  }
  /**
   * Sets this Euler instance's components to values from the given array. The first three
   * entries of the array are assign to the x,y and z components. An optional fourth entry
   * defines the Euler order.
   *
   * @param {Array<number,number,number,?string>} array - An array holding the Euler component values.
   * @return {Euler} A reference to this Euler instance.
   */
  fromArray(e) {
    return this._x = e[0], this._y = e[1], this._z = e[2], e[3] !== void 0 && (this._order = e[3]), this._onChangeCallback(), this;
  }
  /**
   * Writes the components of this Euler instance to the given array. If no array is provided,
   * the method returns a new instance.
   *
   * @param {Array<number,number,number,string>} [array=[]] - The target array holding the Euler components.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Array<number,number,number,string>} The Euler components.
   */
  toArray(e = [], t = 0) {
    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._order, e;
  }
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
}
en.DEFAULT_ORDER = "XYZ";
class Xo {
  /**
   * Constructs a new layers instance, with membership
   * initially set to layer `0`.
   */
  constructor() {
    this.mask = 1;
  }
  /**
   * Sets membership to the given layer, and remove membership all other layers.
   *
   * @param {number} layer - The layer to set.
   */
  set(e) {
    this.mask = (1 << e | 0) >>> 0;
  }
  /**
   * Adds membership of the given layer.
   *
   * @param {number} layer - The layer to enable.
   */
  enable(e) {
    this.mask |= 1 << e | 0;
  }
  /**
   * Adds membership to all layers.
   */
  enableAll() {
    this.mask = -1;
  }
  /**
   * Toggles the membership of the given layer.
   *
   * @param {number} layer - The layer to toggle.
   */
  toggle(e) {
    this.mask ^= 1 << e | 0;
  }
  /**
   * Removes membership of the given layer.
   *
   * @param {number} layer - The layer to enable.
   */
  disable(e) {
    this.mask &= ~(1 << e | 0);
  }
  /**
   * Removes the membership from all layers.
   */
  disableAll() {
    this.mask = 0;
  }
  /**
   * Returns `true` if this and the given layers object have at least one
   * layer in common.
   *
   * @param {Layers} layers - The layers to test.
   * @return {boolean } Whether this and the given layers object have at least one layer in common or not.
   */
  test(e) {
    return (this.mask & e.mask) !== 0;
  }
  /**
   * Returns `true` if the given layer is enabled.
   *
   * @param {number} layer - The layer to test.
   * @return {boolean } Whether the given layer is enabled or not.
   */
  isEnabled(e) {
    return (this.mask & (1 << e | 0)) !== 0;
  }
}
let mc = 0;
const Oa = /* @__PURE__ */ new I(), Yn = /* @__PURE__ */ new di(), sn = /* @__PURE__ */ new tt(), zi = /* @__PURE__ */ new I(), gi = /* @__PURE__ */ new I(), _c = /* @__PURE__ */ new I(), gc = /* @__PURE__ */ new di(), Ba = /* @__PURE__ */ new I(1, 0, 0), za = /* @__PURE__ */ new I(0, 1, 0), Va = /* @__PURE__ */ new I(0, 0, 1), Ga = { type: "added" }, vc = { type: "removed" }, qn = { type: "childadded", child: null }, Ir = { type: "childremoved", child: null };
class ut extends fi {
  /**
   * Constructs a new 3D object.
   */
  constructor() {
    super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: mc++ }), this.uuid = Li(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = ut.DEFAULT_UP.clone();
    const e = new I(), t = new en(), n = new di(), r = new I(1, 1, 1);
    function s() {
      n.setFromEuler(t, !1);
    }
    function a() {
      t.setFromQuaternion(n, void 0, !1);
    }
    t._onChange(s), n._onChange(a), Object.defineProperties(this, {
      /**
       * Represents the object's local position.
       *
       * @name Object3D#position
       * @type {Vector3}
       * @default (0,0,0)
       */
      position: {
        configurable: !0,
        enumerable: !0,
        value: e
      },
      /**
       * Represents the object's local rotation as Euler angles, in radians.
       *
       * @name Object3D#rotation
       * @type {Euler}
       * @default (0,0,0)
       */
      rotation: {
        configurable: !0,
        enumerable: !0,
        value: t
      },
      /**
       * Represents the object's local rotation as Quaternions.
       *
       * @name Object3D#quaternion
       * @type {Quaternion}
       */
      quaternion: {
        configurable: !0,
        enumerable: !0,
        value: n
      },
      /**
       * Represents the object's local scale.
       *
       * @name Object3D#scale
       * @type {Vector3}
       * @default (1,1,1)
       */
      scale: {
        configurable: !0,
        enumerable: !0,
        value: r
      },
      /**
       * Represents the object's model-view matrix.
       *
       * @name Object3D#modelViewMatrix
       * @type {Matrix4}
       */
      modelViewMatrix: {
        value: new tt()
      },
      /**
       * Represents the object's normal matrix.
       *
       * @name Object3D#normalMatrix
       * @type {Matrix3}
       */
      normalMatrix: {
        value: new Ie()
      }
    }), this.matrix = new tt(), this.matrixWorld = new tt(), this.matrixAutoUpdate = ut.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.layers = new Xo(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.customDepthMaterial = void 0, this.customDistanceMaterial = void 0, this.static = !1, this.userData = {}, this.pivot = null;
  }
  /**
   * A callback that is executed immediately before a 3D object is rendered to a shadow map.
   *
   * @param {Renderer|WebGLRenderer} renderer - The renderer.
   * @param {Object3D} object - The 3D object.
   * @param {Camera} camera - The camera that is used to render the scene.
   * @param {Camera} shadowCamera - The shadow camera.
   * @param {BufferGeometry} geometry - The 3D object's geometry.
   * @param {Material} depthMaterial - The depth material.
   * @param {Object} group - The geometry group data.
   */
  onBeforeShadow() {
  }
  /**
   * A callback that is executed immediately after a 3D object is rendered to a shadow map.
   *
   * @param {Renderer|WebGLRenderer} renderer - The renderer.
   * @param {Object3D} object - The 3D object.
   * @param {Camera} camera - The camera that is used to render the scene.
   * @param {Camera} shadowCamera - The shadow camera.
   * @param {BufferGeometry} geometry - The 3D object's geometry.
   * @param {Material} depthMaterial - The depth material.
   * @param {Object} group - The geometry group data.
   */
  onAfterShadow() {
  }
  /**
   * A callback that is executed immediately before a 3D object is rendered.
   *
   * @param {Renderer|WebGLRenderer} renderer - The renderer.
   * @param {Object3D} object - The 3D object.
   * @param {Camera} camera - The camera that is used to render the scene.
   * @param {BufferGeometry} geometry - The 3D object's geometry.
   * @param {Material} material - The 3D object's material.
   * @param {Object} group - The geometry group data.
   */
  onBeforeRender() {
  }
  /**
   * A callback that is executed immediately after a 3D object is rendered.
   *
   * @param {Renderer|WebGLRenderer} renderer - The renderer.
   * @param {Object3D} object - The 3D object.
   * @param {Camera} camera - The camera that is used to render the scene.
   * @param {BufferGeometry} geometry - The 3D object's geometry.
   * @param {Material} material - The 3D object's material.
   * @param {Object} group - The geometry group data.
   */
  onAfterRender() {
  }
  /**
   * Applies the given transformation matrix to the object and updates the object's position,
   * rotation and scale.
   *
   * @param {Matrix4} matrix - The transformation matrix.
   */
  applyMatrix4(e) {
    this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(e), this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  /**
   * Applies a rotation represented by given the quaternion to the 3D object.
   *
   * @param {Quaternion} q - The quaternion.
   * @return {Object3D} A reference to this instance.
   */
  applyQuaternion(e) {
    return this.quaternion.premultiply(e), this;
  }
  /**
   * Sets the given rotation represented as an axis/angle couple to the 3D object.
   *
   * @param {Vector3} axis - The (normalized) axis vector.
   * @param {number} angle - The angle in radians.
   */
  setRotationFromAxisAngle(e, t) {
    this.quaternion.setFromAxisAngle(e, t);
  }
  /**
   * Sets the given rotation represented as Euler angles to the 3D object.
   *
   * @param {Euler} euler - The Euler angles.
   */
  setRotationFromEuler(e) {
    this.quaternion.setFromEuler(e, !0);
  }
  /**
   * Sets the given rotation represented as rotation matrix to the 3D object.
   *
   * @param {Matrix4} m - Although a 4x4 matrix is expected, the upper 3x3 portion must be
   * a pure rotation matrix (i.e, unscaled).
   */
  setRotationFromMatrix(e) {
    this.quaternion.setFromRotationMatrix(e);
  }
  /**
   * Sets the given rotation represented as a Quaternion to the 3D object.
   *
   * @param {Quaternion} q - The Quaternion
   */
  setRotationFromQuaternion(e) {
    this.quaternion.copy(e);
  }
  /**
   * Rotates the 3D object along an axis in local space.
   *
   * @param {Vector3} axis - The (normalized) axis vector.
   * @param {number} angle - The angle in radians.
   * @return {Object3D} A reference to this instance.
   */
  rotateOnAxis(e, t) {
    return Yn.setFromAxisAngle(e, t), this.quaternion.multiply(Yn), this;
  }
  /**
   * Rotates the 3D object along an axis in world space.
   *
   * @param {Vector3} axis - The (normalized) axis vector.
   * @param {number} angle - The angle in radians.
   * @return {Object3D} A reference to this instance.
   */
  rotateOnWorldAxis(e, t) {
    return Yn.setFromAxisAngle(e, t), this.quaternion.premultiply(Yn), this;
  }
  /**
   * Rotates the 3D object around its X axis in local space.
   *
   * @param {number} angle - The angle in radians.
   * @return {Object3D} A reference to this instance.
   */
  rotateX(e) {
    return this.rotateOnAxis(Ba, e);
  }
  /**
   * Rotates the 3D object around its Y axis in local space.
   *
   * @param {number} angle - The angle in radians.
   * @return {Object3D} A reference to this instance.
   */
  rotateY(e) {
    return this.rotateOnAxis(za, e);
  }
  /**
   * Rotates the 3D object around its Z axis in local space.
   *
   * @param {number} angle - The angle in radians.
   * @return {Object3D} A reference to this instance.
   */
  rotateZ(e) {
    return this.rotateOnAxis(Va, e);
  }
  /**
   * Translate the 3D object by a distance along the given axis in local space.
   *
   * @param {Vector3} axis - The (normalized) axis vector.
   * @param {number} distance - The distance in world units.
   * @return {Object3D} A reference to this instance.
   */
  translateOnAxis(e, t) {
    return Oa.copy(e).applyQuaternion(this.quaternion), this.position.add(Oa.multiplyScalar(t)), this;
  }
  /**
   * Translate the 3D object by a distance along its X-axis in local space.
   *
   * @param {number} distance - The distance in world units.
   * @return {Object3D} A reference to this instance.
   */
  translateX(e) {
    return this.translateOnAxis(Ba, e);
  }
  /**
   * Translate the 3D object by a distance along its Y-axis in local space.
   *
   * @param {number} distance - The distance in world units.
   * @return {Object3D} A reference to this instance.
   */
  translateY(e) {
    return this.translateOnAxis(za, e);
  }
  /**
   * Translate the 3D object by a distance along its Z-axis in local space.
   *
   * @param {number} distance - The distance in world units.
   * @return {Object3D} A reference to this instance.
   */
  translateZ(e) {
    return this.translateOnAxis(Va, e);
  }
  /**
   * Converts the given vector from this 3D object's local space to world space.
   *
   * @param {Vector3} vector - The vector to convert.
   * @return {Vector3} The converted vector.
   */
  localToWorld(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld);
  }
  /**
   * Converts the given vector from this 3D object's world space to local space.
   *
   * @param {Vector3} vector - The vector to convert.
   * @return {Vector3} The converted vector.
   */
  worldToLocal(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(sn.copy(this.matrixWorld).invert());
  }
  /**
   * Rotates the object to face a point in world space.
   *
   * This method does not support objects having non-uniformly-scaled parent(s).
   *
   * @param {number|Vector3} x - The x coordinate in world space. Alternatively, a vector representing a position in world space
   * @param {number} [y] - The y coordinate in world space.
   * @param {number} [z] - The z coordinate in world space.
   */
  lookAt(e, t, n) {
    e.isVector3 ? zi.copy(e) : zi.set(e, t, n);
    const r = this.parent;
    this.updateWorldMatrix(!0, !1), gi.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? sn.lookAt(gi, zi, this.up) : sn.lookAt(zi, gi, this.up), this.quaternion.setFromRotationMatrix(sn), r && (sn.extractRotation(r.matrixWorld), Yn.setFromRotationMatrix(sn), this.quaternion.premultiply(Yn.invert()));
  }
  /**
   * Adds the given 3D object as a child to this 3D object. An arbitrary number of
   * objects may be added. Any current parent on an object passed in here will be
   * removed, since an object can have at most one parent.
   *
   * @fires Object3D#added
   * @fires Object3D#childadded
   * @param {Object3D} object - The 3D object to add.
   * @return {Object3D} A reference to this instance.
   */
  add(e) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++)
        this.add(arguments[t]);
      return this;
    }
    return e === this ? (We("Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.removeFromParent(), e.parent = this, this.children.push(e), e.dispatchEvent(Ga), qn.child = e, this.dispatchEvent(qn), qn.child = null) : We("Object3D.add: object not an instance of THREE.Object3D.", e), this);
  }
  /**
   * Removes the given 3D object as child from this 3D object.
   * An arbitrary number of objects may be removed.
   *
   * @fires Object3D#removed
   * @fires Object3D#childremoved
   * @param {Object3D} object - The 3D object to remove.
   * @return {Object3D} A reference to this instance.
   */
  remove(e) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++)
        this.remove(arguments[n]);
      return this;
    }
    const t = this.children.indexOf(e);
    return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(vc), Ir.child = e, this.dispatchEvent(Ir), Ir.child = null), this;
  }
  /**
   * Removes this 3D object from its current parent.
   *
   * @fires Object3D#removed
   * @fires Object3D#childremoved
   * @return {Object3D} A reference to this instance.
   */
  removeFromParent() {
    const e = this.parent;
    return e !== null && e.remove(this), this;
  }
  /**
   * Removes all child objects.
   *
   * @fires Object3D#removed
   * @fires Object3D#childremoved
   * @return {Object3D} A reference to this instance.
   */
  clear() {
    return this.remove(...this.children);
  }
  /**
   * Adds the given 3D object as a child of this 3D object, while maintaining the object's world
   * transform. This method does not support scene graphs having non-uniformly-scaled nodes(s).
   *
   * @fires Object3D#added
   * @fires Object3D#childadded
   * @param {Object3D} object - The 3D object to attach.
   * @return {Object3D} A reference to this instance.
   */
  attach(e) {
    return this.updateWorldMatrix(!0, !1), sn.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(!0, !1), sn.multiply(e.parent.matrixWorld)), e.applyMatrix4(sn), e.removeFromParent(), e.parent = this, this.children.push(e), e.updateWorldMatrix(!1, !0), e.dispatchEvent(Ga), qn.child = e, this.dispatchEvent(qn), qn.child = null, this;
  }
  /**
   * Searches through the 3D object and its children, starting with the 3D object
   * itself, and returns the first with a matching ID.
   *
   * @param {number} id - The id.
   * @return {Object3D|undefined} The found 3D object. Returns `undefined` if no 3D object has been found.
   */
  getObjectById(e) {
    return this.getObjectByProperty("id", e);
  }
  /**
   * Searches through the 3D object and its children, starting with the 3D object
   * itself, and returns the first with a matching name.
   *
   * @param {string} name - The name.
   * @return {Object3D|undefined} The found 3D object. Returns `undefined` if no 3D object has been found.
   */
  getObjectByName(e) {
    return this.getObjectByProperty("name", e);
  }
  /**
   * Searches through the 3D object and its children, starting with the 3D object
   * itself, and returns the first with a matching property value.
   *
   * @param {string} name - The name of the property.
   * @param {any} value - The value.
   * @return {Object3D|undefined} The found 3D object. Returns `undefined` if no 3D object has been found.
   */
  getObjectByProperty(e, t) {
    if (this[e] === t) return this;
    for (let n = 0, r = this.children.length; n < r; n++) {
      const a = this.children[n].getObjectByProperty(e, t);
      if (a !== void 0)
        return a;
    }
  }
  /**
   * Searches through the 3D object and its children, starting with the 3D object
   * itself, and returns all 3D objects with a matching property value.
   *
   * @param {string} name - The name of the property.
   * @param {any} value - The value.
   * @param {Array<Object3D>} result - The method stores the result in this array.
   * @return {Array<Object3D>} The found 3D objects.
   */
  getObjectsByProperty(e, t, n = []) {
    this[e] === t && n.push(this);
    const r = this.children;
    for (let s = 0, a = r.length; s < a; s++)
      r[s].getObjectsByProperty(e, t, n);
    return n;
  }
  /**
   * Returns a vector representing the position of the 3D object in world space.
   *
   * @param {Vector3} target - The target vector the result is stored to.
   * @return {Vector3} The 3D object's position in world space.
   */
  getWorldPosition(e) {
    return this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld);
  }
  /**
   * Returns a Quaternion representing the position of the 3D object in world space.
   *
   * @param {Quaternion} target - The target Quaternion the result is stored to.
   * @return {Quaternion} The 3D object's rotation in world space.
   */
  getWorldQuaternion(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(gi, e, _c), e;
  }
  /**
   * Returns a vector representing the scale of the 3D object in world space.
   *
   * @param {Vector3} target - The target vector the result is stored to.
   * @return {Vector3} The 3D object's scale in world space.
   */
  getWorldScale(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(gi, gc, e), e;
  }
  /**
   * Returns a vector representing the ("look") direction of the 3D object in world space.
   *
   * @param {Vector3} target - The target vector the result is stored to.
   * @return {Vector3} The 3D object's direction in world space.
   */
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    const t = this.matrixWorld.elements;
    return e.set(t[8], t[9], t[10]).normalize();
  }
  /**
   * Abstract method to get intersections between a casted ray and this
   * 3D object. Renderable 3D objects such as {@link Mesh}, {@link Line} or {@link Points}
   * implement this method in order to use raycasting.
   *
   * @abstract
   * @param {Raycaster} raycaster - The raycaster.
   * @param {Array<Object>} intersects - An array holding the result of the method.
   */
  raycast() {
  }
  /**
   * Executes the callback on this 3D object and all descendants.
   *
   * Note: Modifying the scene graph inside the callback is discouraged.
   *
   * @param {Function} callback - A callback function that allows to process the current 3D object.
   */
  traverse(e) {
    e(this);
    const t = this.children;
    for (let n = 0, r = t.length; n < r; n++)
      t[n].traverse(e);
  }
  /**
   * Like {@link Object3D#traverse}, but the callback will only be executed for visible 3D objects.
   * Descendants of invisible 3D objects are not traversed.
   *
   * Note: Modifying the scene graph inside the callback is discouraged.
   *
   * @param {Function} callback - A callback function that allows to process the current 3D object.
   */
  traverseVisible(e) {
    if (this.visible === !1) return;
    e(this);
    const t = this.children;
    for (let n = 0, r = t.length; n < r; n++)
      t[n].traverseVisible(e);
  }
  /**
   * Like {@link Object3D#traverse}, but the callback will only be executed for all ancestors.
   *
   * Note: Modifying the scene graph inside the callback is discouraged.
   *
   * @param {Function} callback - A callback function that allows to process the current 3D object.
   */
  traverseAncestors(e) {
    const t = this.parent;
    t !== null && (e(t), t.traverseAncestors(e));
  }
  /**
   * Updates the transformation matrix in local space by computing it from the current
   * position, rotation and scale values.
   */
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale);
    const e = this.pivot;
    if (e !== null) {
      const t = e.x, n = e.y, r = e.z, s = this.matrix.elements;
      s[12] += t - s[0] * t - s[4] * n - s[8] * r, s[13] += n - s[1] * t - s[5] * n - s[9] * r, s[14] += r - s[2] * t - s[6] * n - s[10] * r;
    }
    this.matrixWorldNeedsUpdate = !0;
  }
  /**
   * Updates the transformation matrix in world space of this 3D objects and its descendants.
   *
   * To ensure correct results, this method also recomputes the 3D object's transformation matrix in
   * local space. The computation of the local and world matrix can be controlled with the
   * {@link Object3D#matrixAutoUpdate} and {@link Object3D#matrixWorldAutoUpdate} flags which are both
   * `true` by default.  Set these flags to `false` if you need more control over the update matrix process.
   *
   * @param {boolean} [force=false] - When set to `true`, a recomputation of world matrices is forced even
   * when {@link Object3D#matrixWorldNeedsUpdate} is `false`.
   */
  updateMatrixWorld(e) {
    this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = !1, e = !0);
    const t = this.children;
    for (let n = 0, r = t.length; n < r; n++)
      t[n].updateMatrixWorld(e);
  }
  /**
   * An alternative version of {@link Object3D#updateMatrixWorld} with more control over the
   * update of ancestor and descendant nodes.
   *
   * @param {boolean} [updateParents=false] Whether ancestor nodes should be updated or not.
   * @param {boolean} [updateChildren=false] Whether descendant nodes should be updated or not.
   */
  updateWorldMatrix(e, t) {
    const n = this.parent;
    if (e === !0 && n !== null && n.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), t === !0) {
      const r = this.children;
      for (let s = 0, a = r.length; s < a; s++)
        r[s].updateWorldMatrix(!1, !0);
    }
  }
  /**
   * Serializes the 3D object into JSON.
   *
   * @param {?(Object|string)} meta - An optional value holding meta information about the serialization.
   * @return {Object} A JSON object representing the serialized 3D object.
   * @see {@link ObjectLoader#parse}
   */
  toJSON(e) {
    const t = e === void 0 || typeof e == "string", n = {};
    t && (e = {
      geometries: {},
      materials: {},
      textures: {},
      images: {},
      shapes: {},
      skeletons: {},
      animations: {},
      nodes: {}
    }, n.metadata = {
      version: 4.7,
      type: "Object",
      generator: "Object3D.toJSON"
    });
    const r = {};
    r.uuid = this.uuid, r.type = this.type, this.name !== "" && (r.name = this.name), this.castShadow === !0 && (r.castShadow = !0), this.receiveShadow === !0 && (r.receiveShadow = !0), this.visible === !1 && (r.visible = !1), this.frustumCulled === !1 && (r.frustumCulled = !1), this.renderOrder !== 0 && (r.renderOrder = this.renderOrder), this.static !== !1 && (r.static = this.static), Object.keys(this.userData).length > 0 && (r.userData = this.userData), r.layers = this.layers.mask, r.matrix = this.matrix.toArray(), r.up = this.up.toArray(), this.pivot !== null && (r.pivot = this.pivot.toArray()), this.matrixAutoUpdate === !1 && (r.matrixAutoUpdate = !1), this.morphTargetDictionary !== void 0 && (r.morphTargetDictionary = Object.assign({}, this.morphTargetDictionary)), this.morphTargetInfluences !== void 0 && (r.morphTargetInfluences = this.morphTargetInfluences.slice()), this.isInstancedMesh && (r.type = "InstancedMesh", r.count = this.count, r.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (r.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (r.type = "BatchedMesh", r.perObjectFrustumCulled = this.perObjectFrustumCulled, r.sortObjects = this.sortObjects, r.drawRanges = this._drawRanges, r.reservedRanges = this._reservedRanges, r.geometryInfo = this._geometryInfo.map((o) => ({
      ...o,
      boundingBox: o.boundingBox ? o.boundingBox.toJSON() : void 0,
      boundingSphere: o.boundingSphere ? o.boundingSphere.toJSON() : void 0
    })), r.instanceInfo = this._instanceInfo.map((o) => ({ ...o })), r.availableInstanceIds = this._availableInstanceIds.slice(), r.availableGeometryIds = this._availableGeometryIds.slice(), r.nextIndexStart = this._nextIndexStart, r.nextVertexStart = this._nextVertexStart, r.geometryCount = this._geometryCount, r.maxInstanceCount = this._maxInstanceCount, r.maxVertexCount = this._maxVertexCount, r.maxIndexCount = this._maxIndexCount, r.geometryInitialized = this._geometryInitialized, r.matricesTexture = this._matricesTexture.toJSON(e), r.indirectTexture = this._indirectTexture.toJSON(e), this._colorsTexture !== null && (r.colorsTexture = this._colorsTexture.toJSON(e)), this.boundingSphere !== null && (r.boundingSphere = this.boundingSphere.toJSON()), this.boundingBox !== null && (r.boundingBox = this.boundingBox.toJSON()));
    function s(o, c) {
      return o[c.uuid] === void 0 && (o[c.uuid] = c.toJSON(e)), c.uuid;
    }
    if (this.isScene)
      this.background && (this.background.isColor ? r.background = this.background.toJSON() : this.background.isTexture && (r.background = this.background.toJSON(e).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (r.environment = this.environment.toJSON(e).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      r.geometry = s(e.geometries, this.geometry);
      const o = this.geometry.parameters;
      if (o !== void 0 && o.shapes !== void 0) {
        const c = o.shapes;
        if (Array.isArray(c))
          for (let l = 0, h = c.length; l < h; l++) {
            const m = c[l];
            s(e.shapes, m);
          }
        else
          s(e.shapes, c);
      }
    }
    if (this.isSkinnedMesh && (r.bindMode = this.bindMode, r.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (s(e.skeletons, this.skeleton), r.skeleton = this.skeleton.uuid)), this.material !== void 0)
      if (Array.isArray(this.material)) {
        const o = [];
        for (let c = 0, l = this.material.length; c < l; c++)
          o.push(s(e.materials, this.material[c]));
        r.material = o;
      } else
        r.material = s(e.materials, this.material);
    if (this.children.length > 0) {
      r.children = [];
      for (let o = 0; o < this.children.length; o++)
        r.children.push(this.children[o].toJSON(e).object);
    }
    if (this.animations.length > 0) {
      r.animations = [];
      for (let o = 0; o < this.animations.length; o++) {
        const c = this.animations[o];
        r.animations.push(s(e.animations, c));
      }
    }
    if (t) {
      const o = a(e.geometries), c = a(e.materials), l = a(e.textures), h = a(e.images), m = a(e.shapes), u = a(e.skeletons), d = a(e.animations), _ = a(e.nodes);
      o.length > 0 && (n.geometries = o), c.length > 0 && (n.materials = c), l.length > 0 && (n.textures = l), h.length > 0 && (n.images = h), m.length > 0 && (n.shapes = m), u.length > 0 && (n.skeletons = u), d.length > 0 && (n.animations = d), _.length > 0 && (n.nodes = _);
    }
    return n.object = r, n;
    function a(o) {
      const c = [];
      for (const l in o) {
        const h = o[l];
        delete h.metadata, c.push(h);
      }
      return c;
    }
  }
  /**
   * Returns a new 3D object with copied values from this instance.
   *
   * @param {boolean} [recursive=true] - When set to `true`, descendants of the 3D object are also cloned.
   * @return {Object3D} A clone of this instance.
   */
  clone(e) {
    return new this.constructor().copy(this, e);
  }
  /**
   * Copies the values of the given 3D object to this instance.
   *
   * @param {Object3D} source - The 3D object to copy.
   * @param {boolean} [recursive=true] - When set to `true`, descendants of the 3D object are cloned.
   * @return {Object3D} A reference to this instance.
   */
  copy(e, t = !0) {
    if (this.name = e.name, this.up.copy(e.up), this.position.copy(e.position), this.rotation.order = e.rotation.order, this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), e.pivot !== null && (this.pivot = e.pivot.clone()), this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.layers.mask = e.layers.mask, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.static = e.static, this.animations = e.animations.slice(), this.userData = JSON.parse(JSON.stringify(e.userData)), t === !0)
      for (let n = 0; n < e.children.length; n++) {
        const r = e.children[n];
        this.add(r.clone());
      }
    return this;
  }
}
ut.DEFAULT_UP = /* @__PURE__ */ new I(0, 1, 0);
ut.DEFAULT_MATRIX_AUTO_UPDATE = !0;
ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
class Vi extends ut {
  constructor() {
    super(), this.isGroup = !0, this.type = "Group";
  }
}
const xc = { type: "move" };
class Ur {
  /**
   * Constructs a new XR controller.
   */
  constructor() {
    this._targetRay = null, this._grip = null, this._hand = null;
  }
  /**
   * Returns a group representing the hand space of the XR controller.
   *
   * @return {Group} A group representing the hand space of the XR controller.
   */
  getHandSpace() {
    return this._hand === null && (this._hand = new Vi(), this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = { pinching: !1 }), this._hand;
  }
  /**
   * Returns a group representing the target ray space of the XR controller.
   *
   * @return {Group} A group representing the target ray space of the XR controller.
   */
  getTargetRaySpace() {
    return this._targetRay === null && (this._targetRay = new Vi(), this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new I(), this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new I()), this._targetRay;
  }
  /**
   * Returns a group representing the grip space of the XR controller.
   *
   * @return {Group} A group representing the grip space of the XR controller.
   */
  getGripSpace() {
    return this._grip === null && (this._grip = new Vi(), this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new I(), this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new I()), this._grip;
  }
  /**
   * Dispatches the given event to the groups representing
   * the different coordinate spaces of the XR controller.
   *
   * @param {Object} event - The event to dispatch.
   * @return {WebXRController} A reference to this instance.
   */
  dispatchEvent(e) {
    return this._targetRay !== null && this._targetRay.dispatchEvent(e), this._grip !== null && this._grip.dispatchEvent(e), this._hand !== null && this._hand.dispatchEvent(e), this;
  }
  /**
   * Connects the controller with the given XR input source.
   *
   * @param {XRInputSource} inputSource - The input source.
   * @return {WebXRController} A reference to this instance.
   */
  connect(e) {
    if (e && e.hand) {
      const t = this._hand;
      if (t)
        for (const n of e.hand.values())
          this._getHandJoint(t, n);
    }
    return this.dispatchEvent({ type: "connected", data: e }), this;
  }
  /**
   * Disconnects the controller from the given XR input source.
   *
   * @param {XRInputSource} inputSource - The input source.
   * @return {WebXRController} A reference to this instance.
   */
  disconnect(e) {
    return this.dispatchEvent({ type: "disconnected", data: e }), this._targetRay !== null && (this._targetRay.visible = !1), this._grip !== null && (this._grip.visible = !1), this._hand !== null && (this._hand.visible = !1), this;
  }
  /**
   * Updates the controller with the given input source, XR frame and reference space.
   * This updates the transformations of the groups that represent the different
   * coordinate systems of the controller.
   *
   * @param {XRInputSource} inputSource - The input source.
   * @param {XRFrame} frame - The XR frame.
   * @param {XRReferenceSpace} referenceSpace - The reference space.
   * @return {WebXRController} A reference to this instance.
   */
  update(e, t, n) {
    let r = null, s = null, a = null;
    const o = this._targetRay, c = this._grip, l = this._hand;
    if (e && t.session.visibilityState !== "visible-blurred") {
      if (l && e.hand) {
        a = !0;
        for (const M of e.hand.values()) {
          const p = t.getJointPose(M, n), f = this._getHandJoint(l, M);
          p !== null && (f.matrix.fromArray(p.transform.matrix), f.matrix.decompose(f.position, f.rotation, f.scale), f.matrixWorldNeedsUpdate = !0, f.jointRadius = p.radius), f.visible = p !== null;
        }
        const h = l.joints["index-finger-tip"], m = l.joints["thumb-tip"], u = h.position.distanceTo(m.position), d = 0.02, _ = 5e-3;
        l.inputState.pinching && u > d + _ ? (l.inputState.pinching = !1, this.dispatchEvent({
          type: "pinchend",
          handedness: e.handedness,
          target: this
        })) : !l.inputState.pinching && u <= d - _ && (l.inputState.pinching = !0, this.dispatchEvent({
          type: "pinchstart",
          handedness: e.handedness,
          target: this
        }));
      } else
        c !== null && e.gripSpace && (s = t.getPose(e.gripSpace, n), s !== null && (c.matrix.fromArray(s.transform.matrix), c.matrix.decompose(c.position, c.rotation, c.scale), c.matrixWorldNeedsUpdate = !0, s.linearVelocity ? (c.hasLinearVelocity = !0, c.linearVelocity.copy(s.linearVelocity)) : c.hasLinearVelocity = !1, s.angularVelocity ? (c.hasAngularVelocity = !0, c.angularVelocity.copy(s.angularVelocity)) : c.hasAngularVelocity = !1));
      o !== null && (r = t.getPose(e.targetRaySpace, n), r === null && s !== null && (r = s), r !== null && (o.matrix.fromArray(r.transform.matrix), o.matrix.decompose(o.position, o.rotation, o.scale), o.matrixWorldNeedsUpdate = !0, r.linearVelocity ? (o.hasLinearVelocity = !0, o.linearVelocity.copy(r.linearVelocity)) : o.hasLinearVelocity = !1, r.angularVelocity ? (o.hasAngularVelocity = !0, o.angularVelocity.copy(r.angularVelocity)) : o.hasAngularVelocity = !1, this.dispatchEvent(xc)));
    }
    return o !== null && (o.visible = r !== null), c !== null && (c.visible = s !== null), l !== null && (l.visible = a !== null), this;
  }
  /**
   * Returns a group representing the hand joint for the given input joint.
   *
   * @private
   * @param {Group} hand - The group representing the hand space.
   * @param {XRJointSpace} inputjoint - The hand joint data.
   * @return {Group} A group representing the hand joint for the given input joint.
   */
  _getHandJoint(e, t) {
    if (e.joints[t.jointName] === void 0) {
      const n = new Vi();
      n.matrixAutoUpdate = !1, n.visible = !1, e.joints[t.jointName] = n, e.add(n);
    }
    return e.joints[t.jointName];
  }
}
const Yo = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
}, xn = { h: 0, s: 0, l: 0 }, Gi = { h: 0, s: 0, l: 0 };
function Nr(i, e, t) {
  return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? i + (e - i) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? i + (e - i) * 6 * (2 / 3 - t) : i;
}
class Ve {
  /**
   * Constructs a new color.
   *
   * Note that standard method of specifying color in three.js is with a hexadecimal triplet,
   * and that method is used throughout the rest of the documentation.
   *
   * @param {(number|string|Color)} [r] - The red component of the color. If `g` and `b` are
   * not provided, it can be hexadecimal triplet, a CSS-style string or another `Color` instance.
   * @param {number} [g] - The green component.
   * @param {number} [b] - The blue component.
   */
  constructor(e, t, n) {
    return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, this.set(e, t, n);
  }
  /**
   * Sets the colors's components from the given values.
   *
   * @param {(number|string|Color)} [r] - The red component of the color. If `g` and `b` are
   * not provided, it can be hexadecimal triplet, a CSS-style string or another `Color` instance.
   * @param {number} [g] - The green component.
   * @param {number} [b] - The blue component.
   * @return {Color} A reference to this color.
   */
  set(e, t, n) {
    if (t === void 0 && n === void 0) {
      const r = e;
      r && r.isColor ? this.copy(r) : typeof r == "number" ? this.setHex(r) : typeof r == "string" && this.setStyle(r);
    } else
      this.setRGB(e, t, n);
    return this;
  }
  /**
   * Sets the colors's components to the given scalar value.
   *
   * @param {number} scalar - The scalar value.
   * @return {Color} A reference to this color.
   */
  setScalar(e) {
    return this.r = e, this.g = e, this.b = e, this;
  }
  /**
   * Sets this color from a hexadecimal value.
   *
   * @param {number} hex - The hexadecimal value.
   * @param {string} [colorSpace=SRGBColorSpace] - The color space.
   * @return {Color} A reference to this color.
   */
  setHex(e, t = Ut) {
    return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, He.colorSpaceToWorking(this, t), this;
  }
  /**
   * Sets this color from RGB values.
   *
   * @param {number} r - Red channel value between `0.0` and `1.0`.
   * @param {number} g - Green channel value between `0.0` and `1.0`.
   * @param {number} b - Blue channel value between `0.0` and `1.0`.
   * @param {string} [colorSpace=ColorManagement.workingColorSpace] - The color space.
   * @return {Color} A reference to this color.
   */
  setRGB(e, t, n, r = He.workingColorSpace) {
    return this.r = e, this.g = t, this.b = n, He.colorSpaceToWorking(this, r), this;
  }
  /**
   * Sets this color from RGB values.
   *
   * @param {number} h - Hue value between `0.0` and `1.0`.
   * @param {number} s - Saturation value between `0.0` and `1.0`.
   * @param {number} l - Lightness value between `0.0` and `1.0`.
   * @param {string} [colorSpace=ColorManagement.workingColorSpace] - The color space.
   * @return {Color} A reference to this color.
   */
  setHSL(e, t, n, r = He.workingColorSpace) {
    if (e = ac(e, 1), t = ze(t, 0, 1), n = ze(n, 0, 1), t === 0)
      this.r = this.g = this.b = n;
    else {
      const s = n <= 0.5 ? n * (1 + t) : n + t - n * t, a = 2 * n - s;
      this.r = Nr(a, s, e + 1 / 3), this.g = Nr(a, s, e), this.b = Nr(a, s, e - 1 / 3);
    }
    return He.colorSpaceToWorking(this, r), this;
  }
  /**
   * Sets this color from a CSS-style string. For example, `rgb(250, 0,0)`,
   * `rgb(100%, 0%, 0%)`, `hsl(0, 100%, 50%)`, `#ff0000`, `#f00`, or `red` ( or
   * any [X11 color name](https://en.wikipedia.org/wiki/X11_color_names#Color_name_chart) -
   * all 140 color names are supported).
   *
   * @param {string} style - Color as a CSS-style string.
   * @param {string} [colorSpace=SRGBColorSpace] - The color space.
   * @return {Color} A reference to this color.
   */
  setStyle(e, t = Ut) {
    function n(s) {
      s !== void 0 && parseFloat(s) < 1 && Ce("Color: Alpha component of " + e + " will be ignored.");
    }
    let r;
    if (r = /^(\w+)\(([^\)]*)\)/.exec(e)) {
      let s;
      const a = r[1], o = r[2];
      switch (a) {
        case "rgb":
        case "rgba":
          if (s = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
            return n(s[4]), this.setRGB(
              Math.min(255, parseInt(s[1], 10)) / 255,
              Math.min(255, parseInt(s[2], 10)) / 255,
              Math.min(255, parseInt(s[3], 10)) / 255,
              t
            );
          if (s = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
            return n(s[4]), this.setRGB(
              Math.min(100, parseInt(s[1], 10)) / 100,
              Math.min(100, parseInt(s[2], 10)) / 100,
              Math.min(100, parseInt(s[3], 10)) / 100,
              t
            );
          break;
        case "hsl":
        case "hsla":
          if (s = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
            return n(s[4]), this.setHSL(
              parseFloat(s[1]) / 360,
              parseFloat(s[2]) / 100,
              parseFloat(s[3]) / 100,
              t
            );
          break;
        default:
          Ce("Color: Unknown color model " + e);
      }
    } else if (r = /^\#([A-Fa-f\d]+)$/.exec(e)) {
      const s = r[1], a = s.length;
      if (a === 3)
        return this.setRGB(
          parseInt(s.charAt(0), 16) / 15,
          parseInt(s.charAt(1), 16) / 15,
          parseInt(s.charAt(2), 16) / 15,
          t
        );
      if (a === 6)
        return this.setHex(parseInt(s, 16), t);
      Ce("Color: Invalid hex color " + e);
    } else if (e && e.length > 0)
      return this.setColorName(e, t);
    return this;
  }
  /**
   * Sets this color from a color name. Faster than {@link Color#setStyle} if
   * you don't need the other CSS-style formats.
   *
   * For convenience, the list of names is exposed in `Color.NAMES` as a hash.
   * ```js
   * Color.NAMES.aliceblue // returns 0xF0F8FF
   * ```
   *
   * @param {string} style - The color name.
   * @param {string} [colorSpace=SRGBColorSpace] - The color space.
   * @return {Color} A reference to this color.
   */
  setColorName(e, t = Ut) {
    const n = Yo[e.toLowerCase()];
    return n !== void 0 ? this.setHex(n, t) : Ce("Color: Unknown color " + e), this;
  }
  /**
   * Returns a new color with copied values from this instance.
   *
   * @return {Color} A clone of this instance.
   */
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  /**
   * Copies the values of the given color to this instance.
   *
   * @param {Color} color - The color to copy.
   * @return {Color} A reference to this color.
   */
  copy(e) {
    return this.r = e.r, this.g = e.g, this.b = e.b, this;
  }
  /**
   * Copies the given color into this color, and then converts this color from
   * `SRGBColorSpace` to `LinearSRGBColorSpace`.
   *
   * @param {Color} color - The color to copy/convert.
   * @return {Color} A reference to this color.
   */
  copySRGBToLinear(e) {
    return this.r = fn(e.r), this.g = fn(e.g), this.b = fn(e.b), this;
  }
  /**
   * Copies the given color into this color, and then converts this color from
   * `LinearSRGBColorSpace` to `SRGBColorSpace`.
   *
   * @param {Color} color - The color to copy/convert.
   * @return {Color} A reference to this color.
   */
  copyLinearToSRGB(e) {
    return this.r = si(e.r), this.g = si(e.g), this.b = si(e.b), this;
  }
  /**
   * Converts this color from `SRGBColorSpace` to `LinearSRGBColorSpace`.
   *
   * @return {Color} A reference to this color.
   */
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  /**
   * Converts this color from `LinearSRGBColorSpace` to `SRGBColorSpace`.
   *
   * @return {Color} A reference to this color.
   */
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  /**
   * Returns the hexadecimal value of this color.
   *
   * @param {string} [colorSpace=SRGBColorSpace] - The color space.
   * @return {number} The hexadecimal value.
   */
  getHex(e = Ut) {
    return He.workingToColorSpace(St.copy(this), e), Math.round(ze(St.r * 255, 0, 255)) * 65536 + Math.round(ze(St.g * 255, 0, 255)) * 256 + Math.round(ze(St.b * 255, 0, 255));
  }
  /**
   * Returns the hexadecimal value of this color as a string (for example, 'FFFFFF').
   *
   * @param {string} [colorSpace=SRGBColorSpace] - The color space.
   * @return {string} The hexadecimal value as a string.
   */
  getHexString(e = Ut) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  /**
   * Converts the colors RGB values into the HSL format and stores them into the
   * given target object.
   *
   * @param {{h:number,s:number,l:number}} target - The target object that is used to store the method's result.
   * @param {string} [colorSpace=ColorManagement.workingColorSpace] - The color space.
   * @return {{h:number,s:number,l:number}} The HSL representation of this color.
   */
  getHSL(e, t = He.workingColorSpace) {
    He.workingToColorSpace(St.copy(this), t);
    const n = St.r, r = St.g, s = St.b, a = Math.max(n, r, s), o = Math.min(n, r, s);
    let c, l;
    const h = (o + a) / 2;
    if (o === a)
      c = 0, l = 0;
    else {
      const m = a - o;
      switch (l = h <= 0.5 ? m / (a + o) : m / (2 - a - o), a) {
        case n:
          c = (r - s) / m + (r < s ? 6 : 0);
          break;
        case r:
          c = (s - n) / m + 2;
          break;
        case s:
          c = (n - r) / m + 4;
          break;
      }
      c /= 6;
    }
    return e.h = c, e.s = l, e.l = h, e;
  }
  /**
   * Returns the RGB values of this color and stores them into the given target object.
   *
   * @param {Color} target - The target color that is used to store the method's result.
   * @param {string} [colorSpace=ColorManagement.workingColorSpace] - The color space.
   * @return {Color} The RGB representation of this color.
   */
  getRGB(e, t = He.workingColorSpace) {
    return He.workingToColorSpace(St.copy(this), t), e.r = St.r, e.g = St.g, e.b = St.b, e;
  }
  /**
   * Returns the value of this color as a CSS style string. Example: `rgb(255,0,0)`.
   *
   * @param {string} [colorSpace=SRGBColorSpace] - The color space.
   * @return {string} The CSS representation of this color.
   */
  getStyle(e = Ut) {
    He.workingToColorSpace(St.copy(this), e);
    const t = St.r, n = St.g, r = St.b;
    return e !== Ut ? `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})` : `rgb(${Math.round(t * 255)},${Math.round(n * 255)},${Math.round(r * 255)})`;
  }
  /**
   * Adds the given HSL values to this color's values.
   * Internally, this converts the color's RGB values to HSL, adds HSL
   * and then converts the color back to RGB.
   *
   * @param {number} h - Hue value between `0.0` and `1.0`.
   * @param {number} s - Saturation value between `0.0` and `1.0`.
   * @param {number} l - Lightness value between `0.0` and `1.0`.
   * @return {Color} A reference to this color.
   */
  offsetHSL(e, t, n) {
    return this.getHSL(xn), this.setHSL(xn.h + e, xn.s + t, xn.l + n);
  }
  /**
   * Adds the RGB values of the given color to the RGB values of this color.
   *
   * @param {Color} color - The color to add.
   * @return {Color} A reference to this color.
   */
  add(e) {
    return this.r += e.r, this.g += e.g, this.b += e.b, this;
  }
  /**
   * Adds the RGB values of the given colors and stores the result in this instance.
   *
   * @param {Color} color1 - The first color.
   * @param {Color} color2 - The second color.
   * @return {Color} A reference to this color.
   */
  addColors(e, t) {
    return this.r = e.r + t.r, this.g = e.g + t.g, this.b = e.b + t.b, this;
  }
  /**
   * Adds the given scalar value to the RGB values of this color.
   *
   * @param {number} s - The scalar to add.
   * @return {Color} A reference to this color.
   */
  addScalar(e) {
    return this.r += e, this.g += e, this.b += e, this;
  }
  /**
   * Subtracts the RGB values of the given color from the RGB values of this color.
   *
   * @param {Color} color - The color to subtract.
   * @return {Color} A reference to this color.
   */
  sub(e) {
    return this.r = Math.max(0, this.r - e.r), this.g = Math.max(0, this.g - e.g), this.b = Math.max(0, this.b - e.b), this;
  }
  /**
   * Multiplies the RGB values of the given color with the RGB values of this color.
   *
   * @param {Color} color - The color to multiply.
   * @return {Color} A reference to this color.
   */
  multiply(e) {
    return this.r *= e.r, this.g *= e.g, this.b *= e.b, this;
  }
  /**
   * Multiplies the given scalar value with the RGB values of this color.
   *
   * @param {number} s - The scalar to multiply.
   * @return {Color} A reference to this color.
   */
  multiplyScalar(e) {
    return this.r *= e, this.g *= e, this.b *= e, this;
  }
  /**
   * Linearly interpolates this color's RGB values toward the RGB values of the
   * given color. The alpha argument can be thought of as the ratio between
   * the two colors, where `0.0` is this color and `1.0` is the first argument.
   *
   * @param {Color} color - The color to converge on.
   * @param {number} alpha - The interpolation factor in the closed interval `[0,1]`.
   * @return {Color} A reference to this color.
   */
  lerp(e, t) {
    return this.r += (e.r - this.r) * t, this.g += (e.g - this.g) * t, this.b += (e.b - this.b) * t, this;
  }
  /**
   * Linearly interpolates between the given colors and stores the result in this instance.
   * The alpha argument can be thought of as the ratio between the two colors, where `0.0`
   * is the first and `1.0` is the second color.
   *
   * @param {Color} color1 - The first color.
   * @param {Color} color2 - The second color.
   * @param {number} alpha - The interpolation factor in the closed interval `[0,1]`.
   * @return {Color} A reference to this color.
   */
  lerpColors(e, t, n) {
    return this.r = e.r + (t.r - e.r) * n, this.g = e.g + (t.g - e.g) * n, this.b = e.b + (t.b - e.b) * n, this;
  }
  /**
   * Linearly interpolates this color's HSL values toward the HSL values of the
   * given color. It differs from {@link Color#lerp} by not interpolating straight
   * from one color to the other, but instead going through all the hues in between
   * those two colors. The alpha argument can be thought of as the ratio between
   * the two colors, where 0.0 is this color and 1.0 is the first argument.
   *
   * @param {Color} color - The color to converge on.
   * @param {number} alpha - The interpolation factor in the closed interval `[0,1]`.
   * @return {Color} A reference to this color.
   */
  lerpHSL(e, t) {
    this.getHSL(xn), e.getHSL(Gi);
    const n = Rr(xn.h, Gi.h, t), r = Rr(xn.s, Gi.s, t), s = Rr(xn.l, Gi.l, t);
    return this.setHSL(n, r, s), this;
  }
  /**
   * Sets the color's RGB components from the given 3D vector.
   *
   * @param {Vector3} v - The vector to set.
   * @return {Color} A reference to this color.
   */
  setFromVector3(e) {
    return this.r = e.x, this.g = e.y, this.b = e.z, this;
  }
  /**
   * Transforms this color with the given 3x3 matrix.
   *
   * @param {Matrix3} m - The matrix.
   * @return {Color} A reference to this color.
   */
  applyMatrix3(e) {
    const t = this.r, n = this.g, r = this.b, s = e.elements;
    return this.r = s[0] * t + s[3] * n + s[6] * r, this.g = s[1] * t + s[4] * n + s[7] * r, this.b = s[2] * t + s[5] * n + s[8] * r, this;
  }
  /**
   * Returns `true` if this color is equal with the given one.
   *
   * @param {Color} c - The color to test for equality.
   * @return {boolean} Whether this bounding color is equal with the given one.
   */
  equals(e) {
    return e.r === this.r && e.g === this.g && e.b === this.b;
  }
  /**
   * Sets this color's RGB components from the given array.
   *
   * @param {Array<number>} array - An array holding the RGB values.
   * @param {number} [offset=0] - The offset into the array.
   * @return {Color} A reference to this color.
   */
  fromArray(e, t = 0) {
    return this.r = e[t], this.g = e[t + 1], this.b = e[t + 2], this;
  }
  /**
   * Writes the RGB components of this color to the given array. If no array is provided,
   * the method returns a new instance.
   *
   * @param {Array<number>} [array=[]] - The target array holding the color components.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Array<number>} The color components.
   */
  toArray(e = [], t = 0) {
    return e[t] = this.r, e[t + 1] = this.g, e[t + 2] = this.b, e;
  }
  /**
   * Sets the components of this color from the given buffer attribute.
   *
   * @param {BufferAttribute} attribute - The buffer attribute holding color data.
   * @param {number} index - The index into the attribute.
   * @return {Color} A reference to this color.
   */
  fromBufferAttribute(e, t) {
    return this.r = e.getX(t), this.g = e.getY(t), this.b = e.getZ(t), this;
  }
  /**
   * This methods defines the serialization result of this class. Returns the color
   * as a hexadecimal value.
   *
   * @return {number} The hexadecimal value.
   */
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}
const St = /* @__PURE__ */ new Ve();
Ve.NAMES = Yo;
class Mc extends ut {
  /**
   * Constructs a new scene.
   */
  constructor() {
    super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.backgroundRotation = new en(), this.environmentIntensity = 1, this.environmentRotation = new en(), this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  copy(e, t) {
    return super.copy(e, t), e.background !== null && (this.background = e.background.clone()), e.environment !== null && (this.environment = e.environment.clone()), e.fog !== null && (this.fog = e.fog.clone()), this.backgroundBlurriness = e.backgroundBlurriness, this.backgroundIntensity = e.backgroundIntensity, this.backgroundRotation.copy(e.backgroundRotation), this.environmentIntensity = e.environmentIntensity, this.environmentRotation.copy(e.environmentRotation), e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()), this.matrixAutoUpdate = e.matrixAutoUpdate, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.fog !== null && (t.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (t.object.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (t.object.backgroundIntensity = this.backgroundIntensity), t.object.backgroundRotation = this.backgroundRotation.toArray(), this.environmentIntensity !== 1 && (t.object.environmentIntensity = this.environmentIntensity), t.object.environmentRotation = this.environmentRotation.toArray(), t;
  }
}
const zt = /* @__PURE__ */ new I(), an = /* @__PURE__ */ new I(), Fr = /* @__PURE__ */ new I(), on = /* @__PURE__ */ new I(), Zn = /* @__PURE__ */ new I(), Jn = /* @__PURE__ */ new I(), Ha = /* @__PURE__ */ new I(), Or = /* @__PURE__ */ new I(), Br = /* @__PURE__ */ new I(), zr = /* @__PURE__ */ new I(), Vr = /* @__PURE__ */ new st(), Gr = /* @__PURE__ */ new st(), Hr = /* @__PURE__ */ new st();
class Gt {
  /**
   * Constructs a new triangle.
   *
   * @param {Vector3} [a=(0,0,0)] - The first corner of the triangle.
   * @param {Vector3} [b=(0,0,0)] - The second corner of the triangle.
   * @param {Vector3} [c=(0,0,0)] - The third corner of the triangle.
   */
  constructor(e = new I(), t = new I(), n = new I()) {
    this.a = e, this.b = t, this.c = n;
  }
  /**
   * Computes the normal vector of a triangle.
   *
   * @param {Vector3} a - The first corner of the triangle.
   * @param {Vector3} b - The second corner of the triangle.
   * @param {Vector3} c - The third corner of the triangle.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The triangle's normal.
   */
  static getNormal(e, t, n, r) {
    r.subVectors(n, t), zt.subVectors(e, t), r.cross(zt);
    const s = r.lengthSq();
    return s > 0 ? r.multiplyScalar(1 / Math.sqrt(s)) : r.set(0, 0, 0);
  }
  /**
   * Computes a barycentric coordinates from the given vector.
   * Returns `null` if the triangle is degenerate.
   *
   * @param {Vector3} point - A point in 3D space.
   * @param {Vector3} a - The first corner of the triangle.
   * @param {Vector3} b - The second corner of the triangle.
   * @param {Vector3} c - The third corner of the triangle.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {?Vector3} The barycentric coordinates for the given point
   */
  static getBarycoord(e, t, n, r, s) {
    zt.subVectors(r, t), an.subVectors(n, t), Fr.subVectors(e, t);
    const a = zt.dot(zt), o = zt.dot(an), c = zt.dot(Fr), l = an.dot(an), h = an.dot(Fr), m = a * l - o * o;
    if (m === 0)
      return s.set(0, 0, 0), null;
    const u = 1 / m, d = (l * c - o * h) * u, _ = (a * h - o * c) * u;
    return s.set(1 - d - _, _, d);
  }
  /**
   * Returns `true` if the given point, when projected onto the plane of the
   * triangle, lies within the triangle.
   *
   * @param {Vector3} point - The point in 3D space to test.
   * @param {Vector3} a - The first corner of the triangle.
   * @param {Vector3} b - The second corner of the triangle.
   * @param {Vector3} c - The third corner of the triangle.
   * @return {boolean} Whether the given point, when projected onto the plane of the
   * triangle, lies within the triangle or not.
   */
  static containsPoint(e, t, n, r) {
    return this.getBarycoord(e, t, n, r, on) === null ? !1 : on.x >= 0 && on.y >= 0 && on.x + on.y <= 1;
  }
  /**
   * Computes the value barycentrically interpolated for the given point on the
   * triangle. Returns `null` if the triangle is degenerate.
   *
   * @param {Vector3} point - Position of interpolated point.
   * @param {Vector3} p1 - The first corner of the triangle.
   * @param {Vector3} p2 - The second corner of the triangle.
   * @param {Vector3} p3 - The third corner of the triangle.
   * @param {Vector3} v1 - Value to interpolate of first vertex.
   * @param {Vector3} v2 - Value to interpolate of second vertex.
   * @param {Vector3} v3 - Value to interpolate of third vertex.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {?Vector3} The interpolated value.
   */
  static getInterpolation(e, t, n, r, s, a, o, c) {
    return this.getBarycoord(e, t, n, r, on) === null ? (c.x = 0, c.y = 0, "z" in c && (c.z = 0), "w" in c && (c.w = 0), null) : (c.setScalar(0), c.addScaledVector(s, on.x), c.addScaledVector(a, on.y), c.addScaledVector(o, on.z), c);
  }
  /**
   * Computes the value barycentrically interpolated for the given attribute and indices.
   *
   * @param {BufferAttribute} attr - The attribute to interpolate.
   * @param {number} i1 - Index of first vertex.
   * @param {number} i2 - Index of second vertex.
   * @param {number} i3 - Index of third vertex.
   * @param {Vector3} barycoord - The barycoordinate value to use to interpolate.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The interpolated attribute value.
   */
  static getInterpolatedAttribute(e, t, n, r, s, a) {
    return Vr.setScalar(0), Gr.setScalar(0), Hr.setScalar(0), Vr.fromBufferAttribute(e, t), Gr.fromBufferAttribute(e, n), Hr.fromBufferAttribute(e, r), a.setScalar(0), a.addScaledVector(Vr, s.x), a.addScaledVector(Gr, s.y), a.addScaledVector(Hr, s.z), a;
  }
  /**
   * Returns `true` if the triangle is oriented towards the given direction.
   *
   * @param {Vector3} a - The first corner of the triangle.
   * @param {Vector3} b - The second corner of the triangle.
   * @param {Vector3} c - The third corner of the triangle.
   * @param {Vector3} direction - The (normalized) direction vector.
   * @return {boolean} Whether the triangle is oriented towards the given direction or not.
   */
  static isFrontFacing(e, t, n, r) {
    return zt.subVectors(n, t), an.subVectors(e, t), zt.cross(an).dot(r) < 0;
  }
  /**
   * Sets the triangle's vertices by copying the given values.
   *
   * @param {Vector3} a - The first corner of the triangle.
   * @param {Vector3} b - The second corner of the triangle.
   * @param {Vector3} c - The third corner of the triangle.
   * @return {Triangle} A reference to this triangle.
   */
  set(e, t, n) {
    return this.a.copy(e), this.b.copy(t), this.c.copy(n), this;
  }
  /**
   * Sets the triangle's vertices by copying the given array values.
   *
   * @param {Array<Vector3>} points - An array with 3D points.
   * @param {number} i0 - The array index representing the first corner of the triangle.
   * @param {number} i1 - The array index representing the second corner of the triangle.
   * @param {number} i2 - The array index representing the third corner of the triangle.
   * @return {Triangle} A reference to this triangle.
   */
  setFromPointsAndIndices(e, t, n, r) {
    return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[r]), this;
  }
  /**
   * Sets the triangle's vertices by copying the given attribute values.
   *
   * @param {BufferAttribute} attribute - A buffer attribute with 3D points data.
   * @param {number} i0 - The attribute index representing the first corner of the triangle.
   * @param {number} i1 - The attribute index representing the second corner of the triangle.
   * @param {number} i2 - The attribute index representing the third corner of the triangle.
   * @return {Triangle} A reference to this triangle.
   */
  setFromAttributeAndIndices(e, t, n, r) {
    return this.a.fromBufferAttribute(e, t), this.b.fromBufferAttribute(e, n), this.c.fromBufferAttribute(e, r), this;
  }
  /**
   * Returns a new triangle with copied values from this instance.
   *
   * @return {Triangle} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
  /**
   * Copies the values of the given triangle to this instance.
   *
   * @param {Triangle} triangle - The triangle to copy.
   * @return {Triangle} A reference to this triangle.
   */
  copy(e) {
    return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
  }
  /**
   * Computes the area of the triangle.
   *
   * @return {number} The triangle's area.
   */
  getArea() {
    return zt.subVectors(this.c, this.b), an.subVectors(this.a, this.b), zt.cross(an).length() * 0.5;
  }
  /**
   * Computes the midpoint of the triangle.
   *
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The triangle's midpoint.
   */
  getMidpoint(e) {
    return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  }
  /**
   * Computes the normal of the triangle.
   *
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The triangle's normal.
   */
  getNormal(e) {
    return Gt.getNormal(this.a, this.b, this.c, e);
  }
  /**
   * Computes a plane the triangle lies within.
   *
   * @param {Plane} target - The target vector that is used to store the method's result.
   * @return {Plane} The plane the triangle lies within.
   */
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  /**
   * Computes a barycentric coordinates from the given vector.
   * Returns `null` if the triangle is degenerate.
   *
   * @param {Vector3} point - A point in 3D space.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {?Vector3} The barycentric coordinates for the given point
   */
  getBarycoord(e, t) {
    return Gt.getBarycoord(e, this.a, this.b, this.c, t);
  }
  /**
   * Computes the value barycentrically interpolated for the given point on the
   * triangle. Returns `null` if the triangle is degenerate.
   *
   * @param {Vector3} point - Position of interpolated point.
   * @param {Vector3} v1 - Value to interpolate of first vertex.
   * @param {Vector3} v2 - Value to interpolate of second vertex.
   * @param {Vector3} v3 - Value to interpolate of third vertex.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {?Vector3} The interpolated value.
   */
  getInterpolation(e, t, n, r, s) {
    return Gt.getInterpolation(e, this.a, this.b, this.c, t, n, r, s);
  }
  /**
   * Returns `true` if the given point, when projected onto the plane of the
   * triangle, lies within the triangle.
   *
   * @param {Vector3} point - The point in 3D space to test.
   * @return {boolean} Whether the given point, when projected onto the plane of the
   * triangle, lies within the triangle or not.
   */
  containsPoint(e) {
    return Gt.containsPoint(e, this.a, this.b, this.c);
  }
  /**
   * Returns `true` if the triangle is oriented towards the given direction.
   *
   * @param {Vector3} direction - The (normalized) direction vector.
   * @return {boolean} Whether the triangle is oriented towards the given direction or not.
   */
  isFrontFacing(e) {
    return Gt.isFrontFacing(this.a, this.b, this.c, e);
  }
  /**
   * Returns `true` if this triangle intersects with the given box.
   *
   * @param {Box3} box - The box to intersect.
   * @return {boolean} Whether this triangle intersects with the given box or not.
   */
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  /**
   * Returns the closest point on the triangle to the given point.
   *
   * @param {Vector3} p - The point to compute the closest point for.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The closest point on the triangle.
   */
  closestPointToPoint(e, t) {
    const n = this.a, r = this.b, s = this.c;
    let a, o;
    Zn.subVectors(r, n), Jn.subVectors(s, n), Or.subVectors(e, n);
    const c = Zn.dot(Or), l = Jn.dot(Or);
    if (c <= 0 && l <= 0)
      return t.copy(n);
    Br.subVectors(e, r);
    const h = Zn.dot(Br), m = Jn.dot(Br);
    if (h >= 0 && m <= h)
      return t.copy(r);
    const u = c * m - h * l;
    if (u <= 0 && c >= 0 && h <= 0)
      return a = c / (c - h), t.copy(n).addScaledVector(Zn, a);
    zr.subVectors(e, s);
    const d = Zn.dot(zr), _ = Jn.dot(zr);
    if (_ >= 0 && d <= _)
      return t.copy(s);
    const M = d * l - c * _;
    if (M <= 0 && l >= 0 && _ <= 0)
      return o = l / (l - _), t.copy(n).addScaledVector(Jn, o);
    const p = h * _ - d * m;
    if (p <= 0 && m - h >= 0 && d - _ >= 0)
      return Ha.subVectors(s, r), o = (m - h) / (m - h + (d - _)), t.copy(r).addScaledVector(Ha, o);
    const f = 1 / (p + M + u);
    return a = M * f, o = u * f, t.copy(n).addScaledVector(Zn, a).addScaledVector(Jn, o);
  }
  /**
   * Returns `true` if this triangle is equal with the given one.
   *
   * @param {Triangle} triangle - The triangle to test for equality.
   * @return {boolean} Whether this triangle is equal with the given one.
   */
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
class Di {
  /**
   * Constructs a new bounding box.
   *
   * @param {Vector3} [min=(Infinity,Infinity,Infinity)] - A vector representing the lower boundary of the box.
   * @param {Vector3} [max=(-Infinity,-Infinity,-Infinity)] - A vector representing the upper boundary of the box.
   */
  constructor(e = new I(1 / 0, 1 / 0, 1 / 0), t = new I(-1 / 0, -1 / 0, -1 / 0)) {
    this.isBox3 = !0, this.min = e, this.max = t;
  }
  /**
   * Sets the lower and upper boundaries of this box.
   * Please note that this method only copies the values from the given objects.
   *
   * @param {Vector3} min - The lower boundary of the box.
   * @param {Vector3} max - The upper boundary of the box.
   * @return {Box3} A reference to this bounding box.
   */
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  /**
   * Sets the upper and lower bounds of this box so it encloses the position data
   * in the given array.
   *
   * @param {Array<number>} array - An array holding 3D position data.
   * @return {Box3} A reference to this bounding box.
   */
  setFromArray(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t += 3)
      this.expandByPoint(Vt.fromArray(e, t));
    return this;
  }
  /**
   * Sets the upper and lower bounds of this box so it encloses the position data
   * in the given buffer attribute.
   *
   * @param {BufferAttribute} attribute - A buffer attribute holding 3D position data.
   * @return {Box3} A reference to this bounding box.
   */
  setFromBufferAttribute(e) {
    this.makeEmpty();
    for (let t = 0, n = e.count; t < n; t++)
      this.expandByPoint(Vt.fromBufferAttribute(e, t));
    return this;
  }
  /**
   * Sets the upper and lower bounds of this box so it encloses the position data
   * in the given array.
   *
   * @param {Array<Vector3>} points - An array holding 3D position data as instances of {@link Vector3}.
   * @return {Box3} A reference to this bounding box.
   */
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t++)
      this.expandByPoint(e[t]);
    return this;
  }
  /**
   * Centers this box on the given center vector and sets this box's width, height and
   * depth to the given size values.
   *
   * @param {Vector3} center - The center of the box.
   * @param {Vector3} size - The x, y and z dimensions of the box.
   * @return {Box3} A reference to this bounding box.
   */
  setFromCenterAndSize(e, t) {
    const n = Vt.copy(t).multiplyScalar(0.5);
    return this.min.copy(e).sub(n), this.max.copy(e).add(n), this;
  }
  /**
   * Computes the world-axis-aligned bounding box for the given 3D object
   * (including its children), accounting for the object's, and children's,
   * world transforms. The function may result in a larger box than strictly necessary.
   *
   * @param {Object3D} object - The 3D object to compute the bounding box for.
   * @param {boolean} [precise=false] - If set to `true`, the method computes the smallest
   * world-axis-aligned bounding box at the expense of more computation.
   * @return {Box3} A reference to this bounding box.
   */
  setFromObject(e, t = !1) {
    return this.makeEmpty(), this.expandByObject(e, t);
  }
  /**
   * Returns a new box with copied values from this instance.
   *
   * @return {Box3} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
  /**
   * Copies the values of the given box to this instance.
   *
   * @param {Box3} box - The box to copy.
   * @return {Box3} A reference to this bounding box.
   */
  copy(e) {
    return this.min.copy(e.min), this.max.copy(e.max), this;
  }
  /**
   * Makes this box empty which means in encloses a zero space in 3D.
   *
   * @return {Box3} A reference to this bounding box.
   */
  makeEmpty() {
    return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
  }
  /**
   * Returns true if this box includes zero points within its bounds.
   * Note that a box with equal lower and upper bounds still includes one
   * point, the one both bounds share.
   *
   * @return {boolean} Whether this box is empty or not.
   */
  isEmpty() {
    return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
  }
  /**
   * Returns the center point of this box.
   *
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The center point.
   */
  getCenter(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  /**
   * Returns the dimensions of this box.
   *
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The size.
   */
  getSize(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
  }
  /**
   * Expands the boundaries of this box to include the given point.
   *
   * @param {Vector3} point - The point that should be included by the bounding box.
   * @return {Box3} A reference to this bounding box.
   */
  expandByPoint(e) {
    return this.min.min(e), this.max.max(e), this;
  }
  /**
   * Expands this box equilaterally by the given vector. The width of this
   * box will be expanded by the x component of the vector in both
   * directions. The height of this box will be expanded by the y component of
   * the vector in both directions. The depth of this box will be
   * expanded by the z component of the vector in both directions.
   *
   * @param {Vector3} vector - The vector that should expand the bounding box.
   * @return {Box3} A reference to this bounding box.
   */
  expandByVector(e) {
    return this.min.sub(e), this.max.add(e), this;
  }
  /**
   * Expands each dimension of the box by the given scalar. If negative, the
   * dimensions of the box will be contracted.
   *
   * @param {number} scalar - The scalar value that should expand the bounding box.
   * @return {Box3} A reference to this bounding box.
   */
  expandByScalar(e) {
    return this.min.addScalar(-e), this.max.addScalar(e), this;
  }
  /**
   * Expands the boundaries of this box to include the given 3D object and
   * its children, accounting for the object's, and children's, world
   * transforms. The function may result in a larger box than strictly
   * necessary (unless the precise parameter is set to true).
   *
   * @param {Object3D} object - The 3D object that should expand the bounding box.
   * @param {boolean} precise - If set to `true`, the method expands the bounding box
   * as little as necessary at the expense of more computation.
   * @return {Box3} A reference to this bounding box.
   */
  expandByObject(e, t = !1) {
    e.updateWorldMatrix(!1, !1);
    const n = e.geometry;
    if (n !== void 0) {
      const s = n.getAttribute("position");
      if (t === !0 && s !== void 0 && e.isInstancedMesh !== !0)
        for (let a = 0, o = s.count; a < o; a++)
          e.isMesh === !0 ? e.getVertexPosition(a, Vt) : Vt.fromBufferAttribute(s, a), Vt.applyMatrix4(e.matrixWorld), this.expandByPoint(Vt);
      else
        e.boundingBox !== void 0 ? (e.boundingBox === null && e.computeBoundingBox(), Hi.copy(e.boundingBox)) : (n.boundingBox === null && n.computeBoundingBox(), Hi.copy(n.boundingBox)), Hi.applyMatrix4(e.matrixWorld), this.union(Hi);
    }
    const r = e.children;
    for (let s = 0, a = r.length; s < a; s++)
      this.expandByObject(r[s], t);
    return this;
  }
  /**
   * Returns `true` if the given point lies within or on the boundaries of this box.
   *
   * @param {Vector3} point - The point to test.
   * @return {boolean} Whether the bounding box contains the given point or not.
   */
  containsPoint(e) {
    return e.x >= this.min.x && e.x <= this.max.x && e.y >= this.min.y && e.y <= this.max.y && e.z >= this.min.z && e.z <= this.max.z;
  }
  /**
   * Returns `true` if this bounding box includes the entirety of the given bounding box.
   * If this box and the given one are identical, this function also returns `true`.
   *
   * @param {Box3} box - The bounding box to test.
   * @return {boolean} Whether the bounding box contains the given bounding box or not.
   */
  containsBox(e) {
    return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z;
  }
  /**
   * Returns a point as a proportion of this box's width, height and depth.
   *
   * @param {Vector3} point - A point in 3D space.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} A point as a proportion of this box's width, height and depth.
   */
  getParameter(e, t) {
    return t.set(
      (e.x - this.min.x) / (this.max.x - this.min.x),
      (e.y - this.min.y) / (this.max.y - this.min.y),
      (e.z - this.min.z) / (this.max.z - this.min.z)
    );
  }
  /**
   * Returns `true` if the given bounding box intersects with this bounding box.
   *
   * @param {Box3} box - The bounding box to test.
   * @return {boolean} Whether the given bounding box intersects with this bounding box.
   */
  intersectsBox(e) {
    return e.max.x >= this.min.x && e.min.x <= this.max.x && e.max.y >= this.min.y && e.min.y <= this.max.y && e.max.z >= this.min.z && e.min.z <= this.max.z;
  }
  /**
   * Returns `true` if the given bounding sphere intersects with this bounding box.
   *
   * @param {Sphere} sphere - The bounding sphere to test.
   * @return {boolean} Whether the given bounding sphere intersects with this bounding box.
   */
  intersectsSphere(e) {
    return this.clampPoint(e.center, Vt), Vt.distanceToSquared(e.center) <= e.radius * e.radius;
  }
  /**
   * Returns `true` if the given plane intersects with this bounding box.
   *
   * @param {Plane} plane - The plane to test.
   * @return {boolean} Whether the given plane intersects with this bounding box.
   */
  intersectsPlane(e) {
    let t, n;
    return e.normal.x > 0 ? (t = e.normal.x * this.min.x, n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, n = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, n += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, n += e.normal.z * this.min.z), t <= -e.constant && n >= -e.constant;
  }
  /**
   * Returns `true` if the given triangle intersects with this bounding box.
   *
   * @param {Triangle} triangle - The triangle to test.
   * @return {boolean} Whether the given triangle intersects with this bounding box.
   */
  intersectsTriangle(e) {
    if (this.isEmpty())
      return !1;
    this.getCenter(vi), ki.subVectors(this.max, vi), Kn.subVectors(e.a, vi), $n.subVectors(e.b, vi), jn.subVectors(e.c, vi), Mn.subVectors($n, Kn), Sn.subVectors(jn, $n), Cn.subVectors(Kn, jn);
    let t = [
      0,
      -Mn.z,
      Mn.y,
      0,
      -Sn.z,
      Sn.y,
      0,
      -Cn.z,
      Cn.y,
      Mn.z,
      0,
      -Mn.x,
      Sn.z,
      0,
      -Sn.x,
      Cn.z,
      0,
      -Cn.x,
      -Mn.y,
      Mn.x,
      0,
      -Sn.y,
      Sn.x,
      0,
      -Cn.y,
      Cn.x,
      0
    ];
    return !kr(t, Kn, $n, jn, ki) || (t = [1, 0, 0, 0, 1, 0, 0, 0, 1], !kr(t, Kn, $n, jn, ki)) ? !1 : (Wi.crossVectors(Mn, Sn), t = [Wi.x, Wi.y, Wi.z], kr(t, Kn, $n, jn, ki));
  }
  /**
   * Clamps the given point within the bounds of this box.
   *
   * @param {Vector3} point - The point to clamp.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The clamped point.
   */
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  /**
   * Returns the euclidean distance from any edge of this box to the specified point. If
   * the given point lies inside of this box, the distance will be `0`.
   *
   * @param {Vector3} point - The point to compute the distance to.
   * @return {number} The euclidean distance.
   */
  distanceToPoint(e) {
    return this.clampPoint(e, Vt).distanceTo(e);
  }
  /**
   * Returns a bounding sphere that encloses this bounding box.
   *
   * @param {Sphere} target - The target sphere that is used to store the method's result.
   * @return {Sphere} The bounding sphere that encloses this bounding box.
   */
  getBoundingSphere(e) {
    return this.isEmpty() ? e.makeEmpty() : (this.getCenter(e.center), e.radius = this.getSize(Vt).length() * 0.5), e;
  }
  /**
   * Computes the intersection of this bounding box and the given one, setting the upper
   * bound of this box to the lesser of the two boxes' upper bounds and the
   * lower bound of this box to the greater of the two boxes' lower bounds. If
   * there's no overlap, makes this box empty.
   *
   * @param {Box3} box - The bounding box to intersect with.
   * @return {Box3} A reference to this bounding box.
   */
  intersect(e) {
    return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this;
  }
  /**
   * Computes the union of this box and another and the given one, setting the upper
   * bound of this box to the greater of the two boxes' upper bounds and the
   * lower bound of this box to the lesser of the two boxes' lower bounds.
   *
   * @param {Box3} box - The bounding box that will be unioned with this instance.
   * @return {Box3} A reference to this bounding box.
   */
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  /**
   * Transforms this bounding box by the given 4x4 transformation matrix.
   *
   * @param {Matrix4} matrix - The transformation matrix.
   * @return {Box3} A reference to this bounding box.
   */
  applyMatrix4(e) {
    return this.isEmpty() ? this : (ln[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), ln[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), ln[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), ln[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), ln[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), ln[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), ln[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), ln[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(ln), this);
  }
  /**
   * Adds the given offset to both the upper and lower bounds of this bounding box,
   * effectively moving it in 3D space.
   *
   * @param {Vector3} offset - The offset that should be used to translate the bounding box.
   * @return {Box3} A reference to this bounding box.
   */
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  /**
   * Returns `true` if this bounding box is equal with the given one.
   *
   * @param {Box3} box - The box to test for equality.
   * @return {boolean} Whether this bounding box is equal with the given one.
   */
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
  /**
   * Returns a serialized structure of the bounding box.
   *
   * @return {Object} Serialized structure with fields representing the object state.
   */
  toJSON() {
    return {
      min: this.min.toArray(),
      max: this.max.toArray()
    };
  }
  /**
   * Returns a serialized structure of the bounding box.
   *
   * @param {Object} json - The serialized json to set the box from.
   * @return {Box3} A reference to this bounding box.
   */
  fromJSON(e) {
    return this.min.fromArray(e.min), this.max.fromArray(e.max), this;
  }
}
const ln = [
  /* @__PURE__ */ new I(),
  /* @__PURE__ */ new I(),
  /* @__PURE__ */ new I(),
  /* @__PURE__ */ new I(),
  /* @__PURE__ */ new I(),
  /* @__PURE__ */ new I(),
  /* @__PURE__ */ new I(),
  /* @__PURE__ */ new I()
], Vt = /* @__PURE__ */ new I(), Hi = /* @__PURE__ */ new Di(), Kn = /* @__PURE__ */ new I(), $n = /* @__PURE__ */ new I(), jn = /* @__PURE__ */ new I(), Mn = /* @__PURE__ */ new I(), Sn = /* @__PURE__ */ new I(), Cn = /* @__PURE__ */ new I(), vi = /* @__PURE__ */ new I(), ki = /* @__PURE__ */ new I(), Wi = /* @__PURE__ */ new I(), Pn = /* @__PURE__ */ new I();
function kr(i, e, t, n, r) {
  for (let s = 0, a = i.length - 3; s <= a; s += 3) {
    Pn.fromArray(i, s);
    const o = r.x * Math.abs(Pn.x) + r.y * Math.abs(Pn.y) + r.z * Math.abs(Pn.z), c = e.dot(Pn), l = t.dot(Pn), h = n.dot(Pn);
    if (Math.max(-Math.max(c, l, h), Math.min(c, l, h)) > o)
      return !1;
  }
  return !0;
}
const ct = /* @__PURE__ */ new I(), Xi = /* @__PURE__ */ new be();
let Sc = 0;
class jt {
  /**
   * Constructs a new buffer attribute.
   *
   * @param {TypedArray} array - The array holding the attribute data.
   * @param {number} itemSize - The item size.
   * @param {boolean} [normalized=false] - Whether the data are normalized or not.
   */
  constructor(e, t, n = !1) {
    if (Array.isArray(e))
      throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.isBufferAttribute = !0, Object.defineProperty(this, "id", { value: Sc++ }), this.name = "", this.array = e, this.itemSize = t, this.count = e !== void 0 ? e.length / t : 0, this.normalized = n, this.usage = Ra, this.updateRanges = [], this.gpuType = Zt, this.version = 0;
  }
  /**
   * A callback function that is executed after the renderer has transferred the attribute
   * array data to the GPU.
   */
  onUploadCallback() {
  }
  /**
   * Flag to indicate that this attribute has changed and should be re-sent to
   * the GPU. Set this to `true` when you modify the value of the array.
   *
   * @type {number}
   * @default false
   * @param {boolean} value
   */
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  /**
   * Sets the usage of this buffer attribute.
   *
   * @param {(StaticDrawUsage|DynamicDrawUsage|StreamDrawUsage|StaticReadUsage|DynamicReadUsage|StreamReadUsage|StaticCopyUsage|DynamicCopyUsage|StreamCopyUsage)} value - The usage to set.
   * @return {BufferAttribute} A reference to this buffer attribute.
   */
  setUsage(e) {
    return this.usage = e, this;
  }
  /**
   * Adds a range of data in the data array to be updated on the GPU.
   *
   * @param {number} start - Position at which to start update.
   * @param {number} count - The number of components to update.
   */
  addUpdateRange(e, t) {
    this.updateRanges.push({ start: e, count: t });
  }
  /**
   * Clears the update ranges.
   */
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  /**
   * Copies the values of the given buffer attribute to this instance.
   *
   * @param {BufferAttribute} source - The buffer attribute to copy.
   * @return {BufferAttribute} A reference to this instance.
   */
  copy(e) {
    return this.name = e.name, this.array = new e.array.constructor(e.array), this.itemSize = e.itemSize, this.count = e.count, this.normalized = e.normalized, this.usage = e.usage, this.gpuType = e.gpuType, this;
  }
  /**
   * Copies a vector from the given buffer attribute to this one. The start
   * and destination position in the attribute buffers are represented by the
   * given indices.
   *
   * @param {number} index1 - The destination index into this buffer attribute.
   * @param {BufferAttribute} attribute - The buffer attribute to copy from.
   * @param {number} index2 - The source index into the given buffer attribute.
   * @return {BufferAttribute} A reference to this instance.
   */
  copyAt(e, t, n) {
    e *= this.itemSize, n *= t.itemSize;
    for (let r = 0, s = this.itemSize; r < s; r++)
      this.array[e + r] = t.array[n + r];
    return this;
  }
  /**
   * Copies the given array data into this buffer attribute.
   *
   * @param {(TypedArray|Array)} array - The array to copy.
   * @return {BufferAttribute} A reference to this instance.
   */
  copyArray(e) {
    return this.array.set(e), this;
  }
  /**
   * Applies the given 3x3 matrix to the given attribute. Works with
   * item size `2` and `3`.
   *
   * @param {Matrix3} m - The matrix to apply.
   * @return {BufferAttribute} A reference to this instance.
   */
  applyMatrix3(e) {
    if (this.itemSize === 2)
      for (let t = 0, n = this.count; t < n; t++)
        Xi.fromBufferAttribute(this, t), Xi.applyMatrix3(e), this.setXY(t, Xi.x, Xi.y);
    else if (this.itemSize === 3)
      for (let t = 0, n = this.count; t < n; t++)
        ct.fromBufferAttribute(this, t), ct.applyMatrix3(e), this.setXYZ(t, ct.x, ct.y, ct.z);
    return this;
  }
  /**
   * Applies the given 4x4 matrix to the given attribute. Only works with
   * item size `3`.
   *
   * @param {Matrix4} m - The matrix to apply.
   * @return {BufferAttribute} A reference to this instance.
   */
  applyMatrix4(e) {
    for (let t = 0, n = this.count; t < n; t++)
      ct.fromBufferAttribute(this, t), ct.applyMatrix4(e), this.setXYZ(t, ct.x, ct.y, ct.z);
    return this;
  }
  /**
   * Applies the given 3x3 normal matrix to the given attribute. Only works with
   * item size `3`.
   *
   * @param {Matrix3} m - The normal matrix to apply.
   * @return {BufferAttribute} A reference to this instance.
   */
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      ct.fromBufferAttribute(this, t), ct.applyNormalMatrix(e), this.setXYZ(t, ct.x, ct.y, ct.z);
    return this;
  }
  /**
   * Applies the given 4x4 matrix to the given attribute. Only works with
   * item size `3` and with direction vectors.
   *
   * @param {Matrix4} m - The matrix to apply.
   * @return {BufferAttribute} A reference to this instance.
   */
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      ct.fromBufferAttribute(this, t), ct.transformDirection(e), this.setXYZ(t, ct.x, ct.y, ct.z);
    return this;
  }
  /**
   * Sets the given array data in the buffer attribute.
   *
   * @param {(TypedArray|Array)} value - The array data to set.
   * @param {number} [offset=0] - The offset in this buffer attribute's array.
   * @return {BufferAttribute} A reference to this instance.
   */
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  /**
   * Returns the given component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} component - The component index.
   * @return {number} The returned value.
   */
  getComponent(e, t) {
    let n = this.array[e * this.itemSize + t];
    return this.normalized && (n = _i(n, this.array)), n;
  }
  /**
   * Sets the given value to the given component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} component - The component index.
   * @param {number} value - The value to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setComponent(e, t, n) {
    return this.normalized && (n = At(n, this.array)), this.array[e * this.itemSize + t] = n, this;
  }
  /**
   * Returns the x component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @return {number} The x component.
   */
  getX(e) {
    let t = this.array[e * this.itemSize];
    return this.normalized && (t = _i(t, this.array)), t;
  }
  /**
   * Sets the x component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} x - The value to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setX(e, t) {
    return this.normalized && (t = At(t, this.array)), this.array[e * this.itemSize] = t, this;
  }
  /**
   * Returns the y component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @return {number} The y component.
   */
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return this.normalized && (t = _i(t, this.array)), t;
  }
  /**
   * Sets the y component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} y - The value to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setY(e, t) {
    return this.normalized && (t = At(t, this.array)), this.array[e * this.itemSize + 1] = t, this;
  }
  /**
   * Returns the z component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @return {number} The z component.
   */
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return this.normalized && (t = _i(t, this.array)), t;
  }
  /**
   * Sets the z component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} z - The value to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setZ(e, t) {
    return this.normalized && (t = At(t, this.array)), this.array[e * this.itemSize + 2] = t, this;
  }
  /**
   * Returns the w component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @return {number} The w component.
   */
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return this.normalized && (t = _i(t, this.array)), t;
  }
  /**
   * Sets the w component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} w - The value to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setW(e, t) {
    return this.normalized && (t = At(t, this.array)), this.array[e * this.itemSize + 3] = t, this;
  }
  /**
   * Sets the x and y component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} x - The value for the x component to set.
   * @param {number} y - The value for the y component to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setXY(e, t, n) {
    return e *= this.itemSize, this.normalized && (t = At(t, this.array), n = At(n, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this;
  }
  /**
   * Sets the x, y and z component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} x - The value for the x component to set.
   * @param {number} y - The value for the y component to set.
   * @param {number} z - The value for the z component to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setXYZ(e, t, n, r) {
    return e *= this.itemSize, this.normalized && (t = At(t, this.array), n = At(n, this.array), r = At(r, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = r, this;
  }
  /**
   * Sets the x, y, z and w component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} x - The value for the x component to set.
   * @param {number} y - The value for the y component to set.
   * @param {number} z - The value for the z component to set.
   * @param {number} w - The value for the w component to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setXYZW(e, t, n, r, s) {
    return e *= this.itemSize, this.normalized && (t = At(t, this.array), n = At(n, this.array), r = At(r, this.array), s = At(s, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = r, this.array[e + 3] = s, this;
  }
  /**
   * Sets the given callback function that is executed after the Renderer has transferred
   * the attribute array data to the GPU. Can be used to perform clean-up operations after
   * the upload when attribute data are not needed anymore on the CPU side.
   *
   * @param {Function} callback - The `onUpload()` callback.
   * @return {BufferAttribute} A reference to this instance.
   */
  onUpload(e) {
    return this.onUploadCallback = e, this;
  }
  /**
   * Returns a new buffer attribute with copied values from this instance.
   *
   * @return {BufferAttribute} A clone of this instance.
   */
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  /**
   * Serializes the buffer attribute into JSON.
   *
   * @return {Object} A JSON object representing the serialized buffer attribute.
   */
  toJSON() {
    const e = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.from(this.array),
      normalized: this.normalized
    };
    return this.name !== "" && (e.name = this.name), this.usage !== Ra && (e.usage = this.usage), e;
  }
}
class qo extends jt {
  /**
   * Constructs a new buffer attribute.
   *
   * @param {(Array<number>|Uint16Array)} array - The array holding the attribute data.
   * @param {number} itemSize - The item size.
   * @param {boolean} [normalized=false] - Whether the data are normalized or not.
   */
  constructor(e, t, n) {
    super(new Uint16Array(e), t, n);
  }
}
class Zo extends jt {
  /**
   * Constructs a new buffer attribute.
   *
   * @param {(Array<number>|Uint32Array)} array - The array holding the attribute data.
   * @param {number} itemSize - The item size.
   * @param {boolean} [normalized=false] - Whether the data are normalized or not.
   */
  constructor(e, t, n) {
    super(new Uint32Array(e), t, n);
  }
}
class Dt extends jt {
  /**
   * Constructs a new buffer attribute.
   *
   * @param {(Array<number>|Float32Array)} array - The array holding the attribute data.
   * @param {number} itemSize - The item size.
   * @param {boolean} [normalized=false] - Whether the data are normalized or not.
   */
  constructor(e, t, n) {
    super(new Float32Array(e), t, n);
  }
}
const Ec = /* @__PURE__ */ new Di(), xi = /* @__PURE__ */ new I(), Wr = /* @__PURE__ */ new I();
class ca {
  /**
   * Constructs a new sphere.
   *
   * @param {Vector3} [center=(0,0,0)] - The center of the sphere
   * @param {number} [radius=-1] - The radius of the sphere.
   */
  constructor(e = new I(), t = -1) {
    this.isSphere = !0, this.center = e, this.radius = t;
  }
  /**
   * Sets the sphere's components by copying the given values.
   *
   * @param {Vector3} center - The center.
   * @param {number} radius - The radius.
   * @return {Sphere} A reference to this sphere.
   */
  set(e, t) {
    return this.center.copy(e), this.radius = t, this;
  }
  /**
   * Computes the minimum bounding sphere for list of points.
   * If the optional center point is given, it is used as the sphere's
   * center. Otherwise, the center of the axis-aligned bounding box
   * encompassing the points is calculated.
   *
   * @param {Array<Vector3>} points - A list of points in 3D space.
   * @param {Vector3} [optionalCenter] - The center of the sphere.
   * @return {Sphere} A reference to this sphere.
   */
  setFromPoints(e, t) {
    const n = this.center;
    t !== void 0 ? n.copy(t) : Ec.setFromPoints(e).getCenter(n);
    let r = 0;
    for (let s = 0, a = e.length; s < a; s++)
      r = Math.max(r, n.distanceToSquared(e[s]));
    return this.radius = Math.sqrt(r), this;
  }
  /**
   * Copies the values of the given sphere to this instance.
   *
   * @param {Sphere} sphere - The sphere to copy.
   * @return {Sphere} A reference to this sphere.
   */
  copy(e) {
    return this.center.copy(e.center), this.radius = e.radius, this;
  }
  /**
   * Returns `true` if the sphere is empty (the radius set to a negative number).
   *
   * Spheres with a radius of `0` contain only their center point and are not
   * considered to be empty.
   *
   * @return {boolean} Whether this sphere is empty or not.
   */
  isEmpty() {
    return this.radius < 0;
  }
  /**
   * Makes this sphere empty which means in encloses a zero space in 3D.
   *
   * @return {Sphere} A reference to this sphere.
   */
  makeEmpty() {
    return this.center.set(0, 0, 0), this.radius = -1, this;
  }
  /**
   * Returns `true` if this sphere contains the given point inclusive of
   * the surface of the sphere.
   *
   * @param {Vector3} point - The point to check.
   * @return {boolean} Whether this sphere contains the given point or not.
   */
  containsPoint(e) {
    return e.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  /**
   * Returns the closest distance from the boundary of the sphere to the
   * given point. If the sphere contains the point, the distance will
   * be negative.
   *
   * @param {Vector3} point - The point to compute the distance to.
   * @return {number} The distance to the point.
   */
  distanceToPoint(e) {
    return e.distanceTo(this.center) - this.radius;
  }
  /**
   * Returns `true` if this sphere intersects with the given one.
   *
   * @param {Sphere} sphere - The sphere to test.
   * @return {boolean} Whether this sphere intersects with the given one or not.
   */
  intersectsSphere(e) {
    const t = this.radius + e.radius;
    return e.center.distanceToSquared(this.center) <= t * t;
  }
  /**
   * Returns `true` if this sphere intersects with the given box.
   *
   * @param {Box3} box - The box to test.
   * @return {boolean} Whether this sphere intersects with the given box or not.
   */
  intersectsBox(e) {
    return e.intersectsSphere(this);
  }
  /**
   * Returns `true` if this sphere intersects with the given plane.
   *
   * @param {Plane} plane - The plane to test.
   * @return {boolean} Whether this sphere intersects with the given plane or not.
   */
  intersectsPlane(e) {
    return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
  }
  /**
   * Clamps a point within the sphere. If the point is outside the sphere, it
   * will clamp it to the closest point on the edge of the sphere. Points
   * already inside the sphere will not be affected.
   *
   * @param {Vector3} point - The plane to clamp.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The clamped point.
   */
  clampPoint(e, t) {
    const n = this.center.distanceToSquared(e);
    return t.copy(e), n > this.radius * this.radius && (t.sub(this.center).normalize(), t.multiplyScalar(this.radius).add(this.center)), t;
  }
  /**
   * Returns a bounding box that encloses this sphere.
   *
   * @param {Box3} target - The target box that is used to store the method's result.
   * @return {Box3} The bounding box that encloses this sphere.
   */
  getBoundingBox(e) {
    return this.isEmpty() ? (e.makeEmpty(), e) : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
  }
  /**
   * Transforms this sphere with the given 4x4 transformation matrix.
   *
   * @param {Matrix4} matrix - The transformation matrix.
   * @return {Sphere} A reference to this sphere.
   */
  applyMatrix4(e) {
    return this.center.applyMatrix4(e), this.radius = this.radius * e.getMaxScaleOnAxis(), this;
  }
  /**
   * Translates the sphere's center by the given offset.
   *
   * @param {Vector3} offset - The offset.
   * @return {Sphere} A reference to this sphere.
   */
  translate(e) {
    return this.center.add(e), this;
  }
  /**
   * Expands the boundaries of this sphere to include the given point.
   *
   * @param {Vector3} point - The point to include.
   * @return {Sphere} A reference to this sphere.
   */
  expandByPoint(e) {
    if (this.isEmpty())
      return this.center.copy(e), this.radius = 0, this;
    xi.subVectors(e, this.center);
    const t = xi.lengthSq();
    if (t > this.radius * this.radius) {
      const n = Math.sqrt(t), r = (n - this.radius) * 0.5;
      this.center.addScaledVector(xi, r / n), this.radius += r;
    }
    return this;
  }
  /**
   * Expands this sphere to enclose both the original sphere and the given sphere.
   *
   * @param {Sphere} sphere - The sphere to include.
   * @return {Sphere} A reference to this sphere.
   */
  union(e) {
    return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e), this) : (this.center.equals(e.center) === !0 ? this.radius = Math.max(this.radius, e.radius) : (Wr.subVectors(e.center, this.center).setLength(e.radius), this.expandByPoint(xi.copy(e.center).add(Wr)), this.expandByPoint(xi.copy(e.center).sub(Wr))), this);
  }
  /**
   * Returns `true` if this sphere is equal with the given one.
   *
   * @param {Sphere} sphere - The sphere to test for equality.
   * @return {boolean} Whether this bounding sphere is equal with the given one.
   */
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  /**
   * Returns a new sphere with copied values from this instance.
   *
   * @return {Sphere} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
  /**
   * Returns a serialized structure of the bounding sphere.
   *
   * @return {Object} Serialized structure with fields representing the object state.
   */
  toJSON() {
    return {
      radius: this.radius,
      center: this.center.toArray()
    };
  }
  /**
   * Returns a serialized structure of the bounding sphere.
   *
   * @param {Object} json - The serialized json to set the sphere from.
   * @return {Sphere} A reference to this bounding sphere.
   */
  fromJSON(e) {
    return this.radius = e.radius, this.center.fromArray(e.center), this;
  }
}
let yc = 0;
const It = /* @__PURE__ */ new tt(), Xr = /* @__PURE__ */ new ut(), Qn = /* @__PURE__ */ new I(), Pt = /* @__PURE__ */ new Di(), Mi = /* @__PURE__ */ new Di(), _t = /* @__PURE__ */ new I();
class kt extends fi {
  /**
   * Constructs a new geometry.
   */
  constructor() {
    super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: yc++ }), this.uuid = Li(), this.name = "", this.type = "BufferGeometry", this.index = null, this.indirect = null, this.indirectOffset = 0, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
  }
  /**
   * Returns the index of this geometry.
   *
   * @return {?BufferAttribute} The index. Returns `null` if no index is defined.
   */
  getIndex() {
    return this.index;
  }
  /**
   * Sets the given index to this geometry.
   *
   * @param {Array<number>|BufferAttribute} index - The index to set.
   * @return {BufferGeometry} A reference to this instance.
   */
  setIndex(e) {
    return Array.isArray(e) ? this.index = new (nc(e) ? Zo : qo)(e, 1) : this.index = e, this;
  }
  /**
   * Sets the given indirect attribute to this geometry.
   *
   * @param {BufferAttribute} indirect - The attribute holding indirect draw calls.
   * @param {number|Array<number>} [indirectOffset=0] - The offset, in bytes, into the indirect drawing buffer where the value data begins. If an array is provided, multiple indirect draw calls will be made for each offset.
   * @return {BufferGeometry} A reference to this instance.
   */
  setIndirect(e, t = 0) {
    return this.indirect = e, this.indirectOffset = t, this;
  }
  /**
   * Returns the indirect attribute of this geometry.
   *
   * @return {?BufferAttribute} The indirect attribute. Returns `null` if no indirect attribute is defined.
   */
  getIndirect() {
    return this.indirect;
  }
  /**
   * Returns the buffer attribute for the given name.
   *
   * @param {string} name - The attribute name.
   * @return {BufferAttribute|InterleavedBufferAttribute|undefined} The buffer attribute.
   * Returns `undefined` if not attribute has been found.
   */
  getAttribute(e) {
    return this.attributes[e];
  }
  /**
   * Sets the given attribute for the given name.
   *
   * @param {string} name - The attribute name.
   * @param {BufferAttribute|InterleavedBufferAttribute} attribute - The attribute to set.
   * @return {BufferGeometry} A reference to this instance.
   */
  setAttribute(e, t) {
    return this.attributes[e] = t, this;
  }
  /**
   * Deletes the attribute for the given name.
   *
   * @param {string} name - The attribute name to delete.
   * @return {BufferGeometry} A reference to this instance.
   */
  deleteAttribute(e) {
    return delete this.attributes[e], this;
  }
  /**
   * Returns `true` if this geometry has an attribute for the given name.
   *
   * @param {string} name - The attribute name.
   * @return {boolean} Whether this geometry has an attribute for the given name or not.
   */
  hasAttribute(e) {
    return this.attributes[e] !== void 0;
  }
  /**
   * Adds a group to this geometry.
   *
   * @param {number} start - The first element in this draw call. That is the first
   * vertex for non-indexed geometry, otherwise the first triangle index.
   * @param {number} count - Specifies how many vertices (or indices) are part of this group.
   * @param {number} [materialIndex=0] - The material array index to use.
   */
  addGroup(e, t, n = 0) {
    this.groups.push({
      start: e,
      count: t,
      materialIndex: n
    });
  }
  /**
   * Clears all groups.
   */
  clearGroups() {
    this.groups = [];
  }
  /**
   * Sets the draw range for this geometry.
   *
   * @param {number} start - The first vertex for non-indexed geometry, otherwise the first triangle index.
   * @param {number} count - For non-indexed BufferGeometry, `count` is the number of vertices to render.
   * For indexed BufferGeometry, `count` is the number of indices to render.
   */
  setDrawRange(e, t) {
    this.drawRange.start = e, this.drawRange.count = t;
  }
  /**
   * Applies the given 4x4 transformation matrix to the geometry.
   *
   * @param {Matrix4} matrix - The matrix to apply.
   * @return {BufferGeometry} A reference to this instance.
   */
  applyMatrix4(e) {
    const t = this.attributes.position;
    t !== void 0 && (t.applyMatrix4(e), t.needsUpdate = !0);
    const n = this.attributes.normal;
    if (n !== void 0) {
      const s = new Ie().getNormalMatrix(e);
      n.applyNormalMatrix(s), n.needsUpdate = !0;
    }
    const r = this.attributes.tangent;
    return r !== void 0 && (r.transformDirection(e), r.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  }
  /**
   * Applies the rotation represented by the Quaternion to the geometry.
   *
   * @param {Quaternion} q - The Quaternion to apply.
   * @return {BufferGeometry} A reference to this instance.
   */
  applyQuaternion(e) {
    return It.makeRotationFromQuaternion(e), this.applyMatrix4(It), this;
  }
  /**
   * Rotates the geometry about the X axis. This is typically done as a one time
   * operation, and not during a loop. Use {@link Object3D#rotation} for typical
   * real-time mesh rotation.
   *
   * @param {number} angle - The angle in radians.
   * @return {BufferGeometry} A reference to this instance.
   */
  rotateX(e) {
    return It.makeRotationX(e), this.applyMatrix4(It), this;
  }
  /**
   * Rotates the geometry about the Y axis. This is typically done as a one time
   * operation, and not during a loop. Use {@link Object3D#rotation} for typical
   * real-time mesh rotation.
   *
   * @param {number} angle - The angle in radians.
   * @return {BufferGeometry} A reference to this instance.
   */
  rotateY(e) {
    return It.makeRotationY(e), this.applyMatrix4(It), this;
  }
  /**
   * Rotates the geometry about the Z axis. This is typically done as a one time
   * operation, and not during a loop. Use {@link Object3D#rotation} for typical
   * real-time mesh rotation.
   *
   * @param {number} angle - The angle in radians.
   * @return {BufferGeometry} A reference to this instance.
   */
  rotateZ(e) {
    return It.makeRotationZ(e), this.applyMatrix4(It), this;
  }
  /**
   * Translates the geometry. This is typically done as a one time
   * operation, and not during a loop. Use {@link Object3D#position} for typical
   * real-time mesh rotation.
   *
   * @param {number} x - The x offset.
   * @param {number} y - The y offset.
   * @param {number} z - The z offset.
   * @return {BufferGeometry} A reference to this instance.
   */
  translate(e, t, n) {
    return It.makeTranslation(e, t, n), this.applyMatrix4(It), this;
  }
  /**
   * Scales the geometry. This is typically done as a one time
   * operation, and not during a loop. Use {@link Object3D#scale} for typical
   * real-time mesh rotation.
   *
   * @param {number} x - The x scale.
   * @param {number} y - The y scale.
   * @param {number} z - The z scale.
   * @return {BufferGeometry} A reference to this instance.
   */
  scale(e, t, n) {
    return It.makeScale(e, t, n), this.applyMatrix4(It), this;
  }
  /**
   * Rotates the geometry to face a point in 3D space. This is typically done as a one time
   * operation, and not during a loop. Use {@link Object3D#lookAt} for typical
   * real-time mesh rotation.
   *
   * @param {Vector3} vector - The target point.
   * @return {BufferGeometry} A reference to this instance.
   */
  lookAt(e) {
    return Xr.lookAt(e), Xr.updateMatrix(), this.applyMatrix4(Xr.matrix), this;
  }
  /**
   * Center the geometry based on its bounding box.
   *
   * @return {BufferGeometry} A reference to this instance.
   */
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(Qn).negate(), this.translate(Qn.x, Qn.y, Qn.z), this;
  }
  /**
   * Defines a geometry by creating a `position` attribute based on the given array of points. The array
   * can hold 2D or 3D vectors. When using two-dimensional data, the `z` coordinate for all vertices is
   * set to `0`.
   *
   * If the method is used with an existing `position` attribute, the vertex data are overwritten with the
   * data from the array. The length of the array must match the vertex count.
   *
   * @param {Array<Vector2>|Array<Vector3>} points - The points.
   * @return {BufferGeometry} A reference to this instance.
   */
  setFromPoints(e) {
    const t = this.getAttribute("position");
    if (t === void 0) {
      const n = [];
      for (let r = 0, s = e.length; r < s; r++) {
        const a = e[r];
        n.push(a.x, a.y, a.z || 0);
      }
      this.setAttribute("position", new Dt(n, 3));
    } else {
      const n = Math.min(e.length, t.count);
      for (let r = 0; r < n; r++) {
        const s = e[r];
        t.setXYZ(r, s.x, s.y, s.z || 0);
      }
      e.length > t.count && Ce("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."), t.needsUpdate = !0;
    }
    return this;
  }
  /**
   * Computes the bounding box of the geometry, and updates the `boundingBox` member.
   * The bounding box is not computed by the engine; it must be computed by your app.
   * You may need to recompute the bounding box if the geometry vertices are modified.
   */
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new Di());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      We("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this), this.boundingBox.set(
        new I(-1 / 0, -1 / 0, -1 / 0),
        new I(1 / 0, 1 / 0, 1 / 0)
      );
      return;
    }
    if (e !== void 0) {
      if (this.boundingBox.setFromBufferAttribute(e), t)
        for (let n = 0, r = t.length; n < r; n++) {
          const s = t[n];
          Pt.setFromBufferAttribute(s), this.morphTargetsRelative ? (_t.addVectors(this.boundingBox.min, Pt.min), this.boundingBox.expandByPoint(_t), _t.addVectors(this.boundingBox.max, Pt.max), this.boundingBox.expandByPoint(_t)) : (this.boundingBox.expandByPoint(Pt.min), this.boundingBox.expandByPoint(Pt.max));
        }
    } else
      this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && We('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  }
  /**
   * Computes the bounding sphere of the geometry, and updates the `boundingSphere` member.
   * The engine automatically computes the bounding sphere when it is needed, e.g., for ray casting or view frustum culling.
   * You may need to recompute the bounding sphere if the geometry vertices are modified.
   */
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new ca());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      We("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this), this.boundingSphere.set(new I(), 1 / 0);
      return;
    }
    if (e) {
      const n = this.boundingSphere.center;
      if (Pt.setFromBufferAttribute(e), t)
        for (let s = 0, a = t.length; s < a; s++) {
          const o = t[s];
          Mi.setFromBufferAttribute(o), this.morphTargetsRelative ? (_t.addVectors(Pt.min, Mi.min), Pt.expandByPoint(_t), _t.addVectors(Pt.max, Mi.max), Pt.expandByPoint(_t)) : (Pt.expandByPoint(Mi.min), Pt.expandByPoint(Mi.max));
        }
      Pt.getCenter(n);
      let r = 0;
      for (let s = 0, a = e.count; s < a; s++)
        _t.fromBufferAttribute(e, s), r = Math.max(r, n.distanceToSquared(_t));
      if (t)
        for (let s = 0, a = t.length; s < a; s++) {
          const o = t[s], c = this.morphTargetsRelative;
          for (let l = 0, h = o.count; l < h; l++)
            _t.fromBufferAttribute(o, l), c && (Qn.fromBufferAttribute(e, l), _t.add(Qn)), r = Math.max(r, n.distanceToSquared(_t));
        }
      this.boundingSphere.radius = Math.sqrt(r), isNaN(this.boundingSphere.radius) && We('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
    }
  }
  /**
   * Calculates and adds a tangent attribute to this geometry.
   *
   * The computation is only supported for indexed geometries and if position, normal, and uv attributes
   * are defined. When using a tangent space normal map, prefer the MikkTSpace algorithm provided by
   * {@link BufferGeometryUtils#computeMikkTSpaceTangents} instead.
   */
  computeTangents() {
    const e = this.index, t = this.attributes;
    if (e === null || t.position === void 0 || t.normal === void 0 || t.uv === void 0) {
      We("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
      return;
    }
    const n = t.position, r = t.normal, s = t.uv;
    this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new jt(new Float32Array(4 * n.count), 4));
    const a = this.getAttribute("tangent"), o = [], c = [];
    for (let v = 0; v < n.count; v++)
      o[v] = new I(), c[v] = new I();
    const l = new I(), h = new I(), m = new I(), u = new be(), d = new be(), _ = new be(), M = new I(), p = new I();
    function f(v, T, q) {
      l.fromBufferAttribute(n, v), h.fromBufferAttribute(n, T), m.fromBufferAttribute(n, q), u.fromBufferAttribute(s, v), d.fromBufferAttribute(s, T), _.fromBufferAttribute(s, q), h.sub(l), m.sub(l), d.sub(u), _.sub(u);
      const C = 1 / (d.x * _.y - _.x * d.y);
      isFinite(C) && (M.copy(h).multiplyScalar(_.y).addScaledVector(m, -d.y).multiplyScalar(C), p.copy(m).multiplyScalar(d.x).addScaledVector(h, -_.x).multiplyScalar(C), o[v].add(M), o[T].add(M), o[q].add(M), c[v].add(p), c[T].add(p), c[q].add(p));
    }
    let S = this.groups;
    S.length === 0 && (S = [{
      start: 0,
      count: e.count
    }]);
    for (let v = 0, T = S.length; v < T; ++v) {
      const q = S[v], C = q.start, G = q.count;
      for (let z = C, k = C + G; z < k; z += 3)
        f(
          e.getX(z + 0),
          e.getX(z + 1),
          e.getX(z + 2)
        );
    }
    const b = new I(), E = new I(), R = new I(), A = new I();
    function L(v) {
      R.fromBufferAttribute(r, v), A.copy(R);
      const T = o[v];
      b.copy(T), b.sub(R.multiplyScalar(R.dot(T))).normalize(), E.crossVectors(A, T);
      const C = E.dot(c[v]) < 0 ? -1 : 1;
      a.setXYZW(v, b.x, b.y, b.z, C);
    }
    for (let v = 0, T = S.length; v < T; ++v) {
      const q = S[v], C = q.start, G = q.count;
      for (let z = C, k = C + G; z < k; z += 3)
        L(e.getX(z + 0)), L(e.getX(z + 1)), L(e.getX(z + 2));
    }
  }
  /**
   * Computes vertex normals for the given vertex data. For indexed geometries, the method sets
   * each vertex normal to be the average of the face normals of the faces that share that vertex.
   * For non-indexed geometries, vertices are not shared, and the method sets each vertex normal
   * to be the same as the face normal.
   */
  computeVertexNormals() {
    const e = this.index, t = this.getAttribute("position");
    if (t !== void 0) {
      let n = this.getAttribute("normal");
      if (n === void 0)
        n = new jt(new Float32Array(t.count * 3), 3), this.setAttribute("normal", n);
      else
        for (let u = 0, d = n.count; u < d; u++)
          n.setXYZ(u, 0, 0, 0);
      const r = new I(), s = new I(), a = new I(), o = new I(), c = new I(), l = new I(), h = new I(), m = new I();
      if (e)
        for (let u = 0, d = e.count; u < d; u += 3) {
          const _ = e.getX(u + 0), M = e.getX(u + 1), p = e.getX(u + 2);
          r.fromBufferAttribute(t, _), s.fromBufferAttribute(t, M), a.fromBufferAttribute(t, p), h.subVectors(a, s), m.subVectors(r, s), h.cross(m), o.fromBufferAttribute(n, _), c.fromBufferAttribute(n, M), l.fromBufferAttribute(n, p), o.add(h), c.add(h), l.add(h), n.setXYZ(_, o.x, o.y, o.z), n.setXYZ(M, c.x, c.y, c.z), n.setXYZ(p, l.x, l.y, l.z);
        }
      else
        for (let u = 0, d = t.count; u < d; u += 3)
          r.fromBufferAttribute(t, u + 0), s.fromBufferAttribute(t, u + 1), a.fromBufferAttribute(t, u + 2), h.subVectors(a, s), m.subVectors(r, s), h.cross(m), n.setXYZ(u + 0, h.x, h.y, h.z), n.setXYZ(u + 1, h.x, h.y, h.z), n.setXYZ(u + 2, h.x, h.y, h.z);
      this.normalizeNormals(), n.needsUpdate = !0;
    }
  }
  /**
   * Ensures every normal vector in a geometry will have a magnitude of `1`. This will
   * correct lighting on the geometry surfaces.
   */
  normalizeNormals() {
    const e = this.attributes.normal;
    for (let t = 0, n = e.count; t < n; t++)
      _t.fromBufferAttribute(e, t), _t.normalize(), e.setXYZ(t, _t.x, _t.y, _t.z);
  }
  /**
   * Return a new non-index version of this indexed geometry. If the geometry
   * is already non-indexed, the method is a NOOP.
   *
   * @return {BufferGeometry} The non-indexed version of this indexed geometry.
   */
  toNonIndexed() {
    function e(o, c) {
      const l = o.array, h = o.itemSize, m = o.normalized, u = new l.constructor(c.length * h);
      let d = 0, _ = 0;
      for (let M = 0, p = c.length; M < p; M++) {
        o.isInterleavedBufferAttribute ? d = c[M] * o.data.stride + o.offset : d = c[M] * h;
        for (let f = 0; f < h; f++)
          u[_++] = l[d++];
      }
      return new jt(u, h, m);
    }
    if (this.index === null)
      return Ce("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const t = new kt(), n = this.index.array, r = this.attributes;
    for (const o in r) {
      const c = r[o], l = e(c, n);
      t.setAttribute(o, l);
    }
    const s = this.morphAttributes;
    for (const o in s) {
      const c = [], l = s[o];
      for (let h = 0, m = l.length; h < m; h++) {
        const u = l[h], d = e(u, n);
        c.push(d);
      }
      t.morphAttributes[o] = c;
    }
    t.morphTargetsRelative = this.morphTargetsRelative;
    const a = this.groups;
    for (let o = 0, c = a.length; o < c; o++) {
      const l = a[o];
      t.addGroup(l.start, l.count, l.materialIndex);
    }
    return t;
  }
  /**
   * Serializes the geometry into JSON.
   *
   * @return {Object} A JSON object representing the serialized geometry.
   */
  toJSON() {
    const e = {
      metadata: {
        version: 4.7,
        type: "BufferGeometry",
        generator: "BufferGeometry.toJSON"
      }
    };
    if (e.uuid = this.uuid, e.type = this.type, this.name !== "" && (e.name = this.name), Object.keys(this.userData).length > 0 && (e.userData = this.userData), this.parameters !== void 0) {
      const c = this.parameters;
      for (const l in c)
        c[l] !== void 0 && (e[l] = c[l]);
      return e;
    }
    e.data = { attributes: {} };
    const t = this.index;
    t !== null && (e.data.index = {
      type: t.array.constructor.name,
      array: Array.prototype.slice.call(t.array)
    });
    const n = this.attributes;
    for (const c in n) {
      const l = n[c];
      e.data.attributes[c] = l.toJSON(e.data);
    }
    const r = {};
    let s = !1;
    for (const c in this.morphAttributes) {
      const l = this.morphAttributes[c], h = [];
      for (let m = 0, u = l.length; m < u; m++) {
        const d = l[m];
        h.push(d.toJSON(e.data));
      }
      h.length > 0 && (r[c] = h, s = !0);
    }
    s && (e.data.morphAttributes = r, e.data.morphTargetsRelative = this.morphTargetsRelative);
    const a = this.groups;
    a.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(a)));
    const o = this.boundingSphere;
    return o !== null && (e.data.boundingSphere = o.toJSON()), e;
  }
  /**
   * Returns a new geometry with copied values from this instance.
   *
   * @return {BufferGeometry} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
  /**
   * Copies the values of the given geometry to this instance.
   *
   * @param {BufferGeometry} source - The geometry to copy.
   * @return {BufferGeometry} A reference to this instance.
   */
  copy(e) {
    this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
    const t = {};
    this.name = e.name;
    const n = e.index;
    n !== null && this.setIndex(n.clone());
    const r = e.attributes;
    for (const l in r) {
      const h = r[l];
      this.setAttribute(l, h.clone(t));
    }
    const s = e.morphAttributes;
    for (const l in s) {
      const h = [], m = s[l];
      for (let u = 0, d = m.length; u < d; u++)
        h.push(m[u].clone(t));
      this.morphAttributes[l] = h;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const a = e.groups;
    for (let l = 0, h = a.length; l < h; l++) {
      const m = a[l];
      this.addGroup(m.start, m.count, m.materialIndex);
    }
    const o = e.boundingBox;
    o !== null && (this.boundingBox = o.clone());
    const c = e.boundingSphere;
    return c !== null && (this.boundingSphere = c.clone()), this.drawRange.start = e.drawRange.start, this.drawRange.count = e.drawRange.count, this.userData = e.userData, this;
  }
  /**
   * Frees the GPU-related resources allocated by this instance. Call this
   * method whenever this instance is no longer used in your app.
   *
   * @fires BufferGeometry#dispose
   */
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
let Tc = 0;
class Ii extends fi {
  /**
   * Constructs a new material.
   */
  constructor() {
    super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: Tc++ }), this.uuid = Li(), this.name = "", this.type = "Material", this.blending = ri, this.side = An, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.alphaHash = !1, this.blendSrc = os, this.blendDst = ls, this.blendEquation = Fn, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new Ve(0, 0, 0), this.blendAlpha = 0, this.depthFunc = ai, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = wa, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = kn, this.stencilZFail = kn, this.stencilZPass = kn, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.allowOverride = !0, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
  }
  /**
   * Sets the alpha value to be used when running an alpha test. The material
   * will not be rendered if the opacity is lower than this value.
   *
   * @type {number}
   * @readonly
   * @default 0
   */
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(e) {
    this._alphaTest > 0 != e > 0 && this.version++, this._alphaTest = e;
  }
  /**
   * An optional callback that is executed immediately before the material is used to render a 3D object.
   *
   * This method can only be used when rendering with {@link WebGLRenderer}.
   *
   * @param {WebGLRenderer} renderer - The renderer.
   * @param {Scene} scene - The scene.
   * @param {Camera} camera - The camera that is used to render the scene.
   * @param {BufferGeometry} geometry - The 3D object's geometry.
   * @param {Object3D} object - The 3D object.
   * @param {Object} group - The geometry group data.
   */
  onBeforeRender() {
  }
  /**
   * An optional callback that is executed immediately before the shader
   * program is compiled. This function is called with the shader source code
   * as a parameter. Useful for the modification of built-in materials.
   *
   * This method can only be used when rendering with {@link WebGLRenderer}. The
   * recommended approach when customizing materials is to use `WebGPURenderer` with the new
   * Node Material system and [TSL](https://github.com/mrdoob/three.js/wiki/Three.js-Shading-Language).
   *
   * @param {{vertexShader:string,fragmentShader:string,uniforms:Object}} shaderobject - The object holds the uniforms and the vertex and fragment shader source.
   * @param {WebGLRenderer} renderer - A reference to the renderer.
   */
  onBeforeCompile() {
  }
  /**
   * In case {@link Material#onBeforeCompile} is used, this callback can be used to identify
   * values of settings used in `onBeforeCompile()`, so three.js can reuse a cached
   * shader or recompile the shader for this material as needed.
   *
   * This method can only be used when rendering with {@link WebGLRenderer}.
   *
   * @return {string} The custom program cache key.
   */
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  /**
   * This method can be used to set default values from parameter objects.
   * It is a generic implementation so it can be used with different types
   * of materials.
   *
   * @param {Object} [values] - The material values to set.
   */
  setValues(e) {
    if (e !== void 0)
      for (const t in e) {
        const n = e[t];
        if (n === void 0) {
          Ce(`Material: parameter '${t}' has value of undefined.`);
          continue;
        }
        const r = this[t];
        if (r === void 0) {
          Ce(`Material: '${t}' is not a property of THREE.${this.type}.`);
          continue;
        }
        r && r.isColor ? r.set(n) : r && r.isVector3 && n && n.isVector3 ? r.copy(n) : this[t] = n;
      }
  }
  /**
   * Serializes the material into JSON.
   *
   * @param {?(Object|string)} meta - An optional value holding meta information about the serialization.
   * @return {Object} A JSON object representing the serialized material.
   * @see {@link ObjectLoader#parse}
   */
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    t && (e = {
      textures: {},
      images: {}
    });
    const n = {
      metadata: {
        version: 4.7,
        type: "Material",
        generator: "Material.toJSON"
      }
    };
    n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity !== void 0 && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.sheenColorMap && this.sheenColorMap.isTexture && (n.sheenColorMap = this.sheenColorMap.toJSON(e).uuid), this.sheenRoughnessMap && this.sheenRoughnessMap.isTexture && (n.sheenRoughnessMap = this.sheenRoughnessMap.toJSON(e).uuid), this.dispersion !== void 0 && (n.dispersion = this.dispersion), this.iridescence !== void 0 && (n.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid), this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (n.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (n.anisotropyMap = this.anisotropyMap.toJSON(e).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapRotation !== void 0 && (n.envMapRotation = this.envMapRotation.toArray()), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(e).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(e).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.shadowSide !== null && (n.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== ri && (n.blending = this.blending), this.side !== An && (n.side = this.side), this.vertexColors === !0 && (n.vertexColors = !0), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === !0 && (n.transparent = !0), this.blendSrc !== os && (n.blendSrc = this.blendSrc), this.blendDst !== ls && (n.blendDst = this.blendDst), this.blendEquation !== Fn && (n.blendEquation = this.blendEquation), this.blendSrcAlpha !== null && (n.blendSrcAlpha = this.blendSrcAlpha), this.blendDstAlpha !== null && (n.blendDstAlpha = this.blendDstAlpha), this.blendEquationAlpha !== null && (n.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (n.blendColor = this.blendColor.getHex()), this.blendAlpha !== 0 && (n.blendAlpha = this.blendAlpha), this.depthFunc !== ai && (n.depthFunc = this.depthFunc), this.depthTest === !1 && (n.depthTest = this.depthTest), this.depthWrite === !1 && (n.depthWrite = this.depthWrite), this.colorWrite === !1 && (n.colorWrite = this.colorWrite), this.stencilWriteMask !== 255 && (n.stencilWriteMask = this.stencilWriteMask), this.stencilFunc !== wa && (n.stencilFunc = this.stencilFunc), this.stencilRef !== 0 && (n.stencilRef = this.stencilRef), this.stencilFuncMask !== 255 && (n.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== kn && (n.stencilFail = this.stencilFail), this.stencilZFail !== kn && (n.stencilZFail = this.stencilZFail), this.stencilZPass !== kn && (n.stencilZPass = this.stencilZPass), this.stencilWrite === !0 && (n.stencilWrite = this.stencilWrite), this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === !0 && (n.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === !0 && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.alphaHash === !0 && (n.alphaHash = !0), this.alphaToCoverage === !0 && (n.alphaToCoverage = !0), this.premultipliedAlpha === !0 && (n.premultipliedAlpha = !0), this.forceSinglePass === !0 && (n.forceSinglePass = !0), this.allowOverride === !1 && (n.allowOverride = !1), this.wireframe === !0 && (n.wireframe = !0), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === !0 && (n.flatShading = !0), this.visible === !1 && (n.visible = !1), this.toneMapped === !1 && (n.toneMapped = !1), this.fog === !1 && (n.fog = !1), Object.keys(this.userData).length > 0 && (n.userData = this.userData);
    function r(s) {
      const a = [];
      for (const o in s) {
        const c = s[o];
        delete c.metadata, a.push(c);
      }
      return a;
    }
    if (t) {
      const s = r(e.textures), a = r(e.images);
      s.length > 0 && (n.textures = s), a.length > 0 && (n.images = a);
    }
    return n;
  }
  /**
   * Returns a new material with copied values from this instance.
   *
   * @return {Material} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
  /**
   * Copies the values of the given material to this instance.
   *
   * @param {Material} source - The material to copy.
   * @return {Material} A reference to this instance.
   */
  copy(e) {
    this.name = e.name, this.blending = e.blending, this.side = e.side, this.vertexColors = e.vertexColors, this.opacity = e.opacity, this.transparent = e.transparent, this.blendSrc = e.blendSrc, this.blendDst = e.blendDst, this.blendEquation = e.blendEquation, this.blendSrcAlpha = e.blendSrcAlpha, this.blendDstAlpha = e.blendDstAlpha, this.blendEquationAlpha = e.blendEquationAlpha, this.blendColor.copy(e.blendColor), this.blendAlpha = e.blendAlpha, this.depthFunc = e.depthFunc, this.depthTest = e.depthTest, this.depthWrite = e.depthWrite, this.stencilWriteMask = e.stencilWriteMask, this.stencilFunc = e.stencilFunc, this.stencilRef = e.stencilRef, this.stencilFuncMask = e.stencilFuncMask, this.stencilFail = e.stencilFail, this.stencilZFail = e.stencilZFail, this.stencilZPass = e.stencilZPass, this.stencilWrite = e.stencilWrite;
    const t = e.clippingPlanes;
    let n = null;
    if (t !== null) {
      const r = t.length;
      n = new Array(r);
      for (let s = 0; s !== r; ++s)
        n[s] = t[s].clone();
    }
    return this.clippingPlanes = n, this.clipIntersection = e.clipIntersection, this.clipShadows = e.clipShadows, this.shadowSide = e.shadowSide, this.colorWrite = e.colorWrite, this.precision = e.precision, this.polygonOffset = e.polygonOffset, this.polygonOffsetFactor = e.polygonOffsetFactor, this.polygonOffsetUnits = e.polygonOffsetUnits, this.dithering = e.dithering, this.alphaTest = e.alphaTest, this.alphaHash = e.alphaHash, this.alphaToCoverage = e.alphaToCoverage, this.premultipliedAlpha = e.premultipliedAlpha, this.forceSinglePass = e.forceSinglePass, this.allowOverride = e.allowOverride, this.visible = e.visible, this.toneMapped = e.toneMapped, this.userData = JSON.parse(JSON.stringify(e.userData)), this;
  }
  /**
   * Frees the GPU-related resources allocated by this instance. Call this
   * method whenever this instance is no longer used in your app.
   *
   * @fires Material#dispose
   */
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  /**
   * Setting this property to `true` indicates the engine the material
   * needs to be recompiled.
   *
   * @type {boolean}
   * @default false
   * @param {boolean} value
   */
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
}
const cn = /* @__PURE__ */ new I(), Yr = /* @__PURE__ */ new I(), Yi = /* @__PURE__ */ new I(), En = /* @__PURE__ */ new I(), qr = /* @__PURE__ */ new I(), qi = /* @__PURE__ */ new I(), Zr = /* @__PURE__ */ new I();
class bc {
  /**
   * Constructs a new ray.
   *
   * @param {Vector3} [origin=(0,0,0)] - The origin of the ray.
   * @param {Vector3} [direction=(0,0,-1)] - The (normalized) direction of the ray.
   */
  constructor(e = new I(), t = new I(0, 0, -1)) {
    this.origin = e, this.direction = t;
  }
  /**
   * Sets the ray's components by copying the given values.
   *
   * @param {Vector3} origin - The origin.
   * @param {Vector3} direction - The direction.
   * @return {Ray} A reference to this ray.
   */
  set(e, t) {
    return this.origin.copy(e), this.direction.copy(t), this;
  }
  /**
   * Copies the values of the given ray to this instance.
   *
   * @param {Ray} ray - The ray to copy.
   * @return {Ray} A reference to this ray.
   */
  copy(e) {
    return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
  }
  /**
   * Returns a vector that is located at a given distance along this ray.
   *
   * @param {number} t - The distance along the ray to retrieve a position for.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} A position on the ray.
   */
  at(e, t) {
    return t.copy(this.origin).addScaledVector(this.direction, e);
  }
  /**
   * Adjusts the direction of the ray to point at the given vector in world space.
   *
   * @param {Vector3} v - The target position.
   * @return {Ray} A reference to this ray.
   */
  lookAt(e) {
    return this.direction.copy(e).sub(this.origin).normalize(), this;
  }
  /**
   * Shift the origin of this ray along its direction by the given distance.
   *
   * @param {number} t - The distance along the ray to interpolate.
   * @return {Ray} A reference to this ray.
   */
  recast(e) {
    return this.origin.copy(this.at(e, cn)), this;
  }
  /**
   * Returns the point along this ray that is closest to the given point.
   *
   * @param {Vector3} point - A point in 3D space to get the closet location on the ray for.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The closest point on this ray.
   */
  closestPointToPoint(e, t) {
    t.subVectors(e, this.origin);
    const n = t.dot(this.direction);
    return n < 0 ? t.copy(this.origin) : t.copy(this.origin).addScaledVector(this.direction, n);
  }
  /**
   * Returns the distance of the closest approach between this ray and the given point.
   *
   * @param {Vector3} point - A point in 3D space to compute the distance to.
   * @return {number} The distance.
   */
  distanceToPoint(e) {
    return Math.sqrt(this.distanceSqToPoint(e));
  }
  /**
   * Returns the squared distance of the closest approach between this ray and the given point.
   *
   * @param {Vector3} point - A point in 3D space to compute the distance to.
   * @return {number} The squared distance.
   */
  distanceSqToPoint(e) {
    const t = cn.subVectors(e, this.origin).dot(this.direction);
    return t < 0 ? this.origin.distanceToSquared(e) : (cn.copy(this.origin).addScaledVector(this.direction, t), cn.distanceToSquared(e));
  }
  /**
   * Returns the squared distance between this ray and the given line segment.
   *
   * @param {Vector3} v0 - The start point of the line segment.
   * @param {Vector3} v1 - The end point of the line segment.
   * @param {Vector3} [optionalPointOnRay] - When provided, it receives the point on this ray that is closest to the segment.
   * @param {Vector3} [optionalPointOnSegment] - When provided, it receives the point on the line segment that is closest to this ray.
   * @return {number} The squared distance.
   */
  distanceSqToSegment(e, t, n, r) {
    Yr.copy(e).add(t).multiplyScalar(0.5), Yi.copy(t).sub(e).normalize(), En.copy(this.origin).sub(Yr);
    const s = e.distanceTo(t) * 0.5, a = -this.direction.dot(Yi), o = En.dot(this.direction), c = -En.dot(Yi), l = En.lengthSq(), h = Math.abs(1 - a * a);
    let m, u, d, _;
    if (h > 0)
      if (m = a * c - o, u = a * o - c, _ = s * h, m >= 0)
        if (u >= -_)
          if (u <= _) {
            const M = 1 / h;
            m *= M, u *= M, d = m * (m + a * u + 2 * o) + u * (a * m + u + 2 * c) + l;
          } else
            u = s, m = Math.max(0, -(a * u + o)), d = -m * m + u * (u + 2 * c) + l;
        else
          u = -s, m = Math.max(0, -(a * u + o)), d = -m * m + u * (u + 2 * c) + l;
      else
        u <= -_ ? (m = Math.max(0, -(-a * s + o)), u = m > 0 ? -s : Math.min(Math.max(-s, -c), s), d = -m * m + u * (u + 2 * c) + l) : u <= _ ? (m = 0, u = Math.min(Math.max(-s, -c), s), d = u * (u + 2 * c) + l) : (m = Math.max(0, -(a * s + o)), u = m > 0 ? s : Math.min(Math.max(-s, -c), s), d = -m * m + u * (u + 2 * c) + l);
    else
      u = a > 0 ? -s : s, m = Math.max(0, -(a * u + o)), d = -m * m + u * (u + 2 * c) + l;
    return n && n.copy(this.origin).addScaledVector(this.direction, m), r && r.copy(Yr).addScaledVector(Yi, u), d;
  }
  /**
   * Intersects this ray with the given sphere, returning the intersection
   * point or `null` if there is no intersection.
   *
   * @param {Sphere} sphere - The sphere to intersect.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {?Vector3} The intersection point.
   */
  intersectSphere(e, t) {
    cn.subVectors(e.center, this.origin);
    const n = cn.dot(this.direction), r = cn.dot(cn) - n * n, s = e.radius * e.radius;
    if (r > s) return null;
    const a = Math.sqrt(s - r), o = n - a, c = n + a;
    return c < 0 ? null : o < 0 ? this.at(c, t) : this.at(o, t);
  }
  /**
   * Returns `true` if this ray intersects with the given sphere.
   *
   * @param {Sphere} sphere - The sphere to intersect.
   * @return {boolean} Whether this ray intersects with the given sphere or not.
   */
  intersectsSphere(e) {
    return e.radius < 0 ? !1 : this.distanceSqToPoint(e.center) <= e.radius * e.radius;
  }
  /**
   * Computes the distance from the ray's origin to the given plane. Returns `null` if the ray
   * does not intersect with the plane.
   *
   * @param {Plane} plane - The plane to compute the distance to.
   * @return {?number} Whether this ray intersects with the given sphere or not.
   */
  distanceToPlane(e) {
    const t = e.normal.dot(this.direction);
    if (t === 0)
      return e.distanceToPoint(this.origin) === 0 ? 0 : null;
    const n = -(this.origin.dot(e.normal) + e.constant) / t;
    return n >= 0 ? n : null;
  }
  /**
   * Intersects this ray with the given plane, returning the intersection
   * point or `null` if there is no intersection.
   *
   * @param {Plane} plane - The plane to intersect.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {?Vector3} The intersection point.
   */
  intersectPlane(e, t) {
    const n = this.distanceToPlane(e);
    return n === null ? null : this.at(n, t);
  }
  /**
   * Returns `true` if this ray intersects with the given plane.
   *
   * @param {Plane} plane - The plane to intersect.
   * @return {boolean} Whether this ray intersects with the given plane or not.
   */
  intersectsPlane(e) {
    const t = e.distanceToPoint(this.origin);
    return t === 0 || e.normal.dot(this.direction) * t < 0;
  }
  /**
   * Intersects this ray with the given bounding box, returning the intersection
   * point or `null` if there is no intersection.
   *
   * @param {Box3} box - The box to intersect.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {?Vector3} The intersection point.
   */
  intersectBox(e, t) {
    let n, r, s, a, o, c;
    const l = 1 / this.direction.x, h = 1 / this.direction.y, m = 1 / this.direction.z, u = this.origin;
    return l >= 0 ? (n = (e.min.x - u.x) * l, r = (e.max.x - u.x) * l) : (n = (e.max.x - u.x) * l, r = (e.min.x - u.x) * l), h >= 0 ? (s = (e.min.y - u.y) * h, a = (e.max.y - u.y) * h) : (s = (e.max.y - u.y) * h, a = (e.min.y - u.y) * h), n > a || s > r || ((s > n || isNaN(n)) && (n = s), (a < r || isNaN(r)) && (r = a), m >= 0 ? (o = (e.min.z - u.z) * m, c = (e.max.z - u.z) * m) : (o = (e.max.z - u.z) * m, c = (e.min.z - u.z) * m), n > c || o > r) || ((o > n || n !== n) && (n = o), (c < r || r !== r) && (r = c), r < 0) ? null : this.at(n >= 0 ? n : r, t);
  }
  /**
   * Returns `true` if this ray intersects with the given box.
   *
   * @param {Box3} box - The box to intersect.
   * @return {boolean} Whether this ray intersects with the given box or not.
   */
  intersectsBox(e) {
    return this.intersectBox(e, cn) !== null;
  }
  /**
   * Intersects this ray with the given triangle, returning the intersection
   * point or `null` if there is no intersection.
   *
   * @param {Vector3} a - The first vertex of the triangle.
   * @param {Vector3} b - The second vertex of the triangle.
   * @param {Vector3} c - The third vertex of the triangle.
   * @param {boolean} backfaceCulling - Whether to use backface culling or not.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {?Vector3} The intersection point.
   */
  intersectTriangle(e, t, n, r, s) {
    qr.subVectors(t, e), qi.subVectors(n, e), Zr.crossVectors(qr, qi);
    let a = this.direction.dot(Zr), o;
    if (a > 0) {
      if (r) return null;
      o = 1;
    } else if (a < 0)
      o = -1, a = -a;
    else
      return null;
    En.subVectors(this.origin, e);
    const c = o * this.direction.dot(qi.crossVectors(En, qi));
    if (c < 0)
      return null;
    const l = o * this.direction.dot(qr.cross(En));
    if (l < 0 || c + l > a)
      return null;
    const h = -o * En.dot(Zr);
    return h < 0 ? null : this.at(h / a, s);
  }
  /**
   * Transforms this ray with the given 4x4 transformation matrix.
   *
   * @param {Matrix4} matrix4 - The transformation matrix.
   * @return {Ray} A reference to this ray.
   */
  applyMatrix4(e) {
    return this.origin.applyMatrix4(e), this.direction.transformDirection(e), this;
  }
  /**
   * Returns `true` if this ray is equal with the given one.
   *
   * @param {Ray} ray - The ray to test for equality.
   * @return {boolean} Whether this ray is equal with the given one.
   */
  equals(e) {
    return e.origin.equals(this.origin) && e.direction.equals(this.direction);
  }
  /**
   * Returns a new ray with copied values from this instance.
   *
   * @return {Ray} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
}
class Jo extends Ii {
  /**
   * Constructs a new mesh basic material.
   *
   * @param {Object} [parameters] - An object with one or more properties
   * defining the material's appearance. Any property of the material
   * (including any property from inherited materials) can be passed
   * in here. Color values can be passed any type of value accepted
   * by {@link Color#set}.
   */
  constructor(e) {
    super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new Ve(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new en(), this.combine = Ao, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this;
  }
}
const ka = /* @__PURE__ */ new tt(), Ln = /* @__PURE__ */ new bc(), Zi = /* @__PURE__ */ new ca(), Wa = /* @__PURE__ */ new I(), Ji = /* @__PURE__ */ new I(), Ki = /* @__PURE__ */ new I(), $i = /* @__PURE__ */ new I(), Jr = /* @__PURE__ */ new I(), ji = /* @__PURE__ */ new I(), Xa = /* @__PURE__ */ new I(), Qi = /* @__PURE__ */ new I();
class bt extends ut {
  /**
   * Constructs a new mesh.
   *
   * @param {BufferGeometry} [geometry] - The mesh geometry.
   * @param {Material|Array<Material>} [material] - The mesh material.
   */
  constructor(e = new kt(), t = new Jo()) {
    super(), this.isMesh = !0, this.type = "Mesh", this.geometry = e, this.material = t, this.morphTargetDictionary = void 0, this.morphTargetInfluences = void 0, this.count = 1, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), e.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = e.morphTargetInfluences.slice()), e.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  /**
   * Sets the values of {@link Mesh#morphTargetDictionary} and {@link Mesh#morphTargetInfluences}
   * to make sure existing morph targets can influence this 3D object.
   */
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const r = t[n[0]];
      if (r !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let s = 0, a = r.length; s < a; s++) {
          const o = r[s].name || String(s);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = s;
        }
      }
    }
  }
  /**
   * Returns the local-space position of the vertex at the given index, taking into
   * account the current animation state of both morph targets and skinning.
   *
   * @param {number} index - The vertex index.
   * @param {Vector3} target - The target object that is used to store the method's result.
   * @return {Vector3} The vertex position in local space.
   */
  getVertexPosition(e, t) {
    const n = this.geometry, r = n.attributes.position, s = n.morphAttributes.position, a = n.morphTargetsRelative;
    t.fromBufferAttribute(r, e);
    const o = this.morphTargetInfluences;
    if (s && o) {
      ji.set(0, 0, 0);
      for (let c = 0, l = s.length; c < l; c++) {
        const h = o[c], m = s[c];
        h !== 0 && (Jr.fromBufferAttribute(m, e), a ? ji.addScaledVector(Jr, h) : ji.addScaledVector(Jr.sub(t), h));
      }
      t.add(ji);
    }
    return t;
  }
  /**
   * Computes intersection points between a casted ray and this line.
   *
   * @param {Raycaster} raycaster - The raycaster.
   * @param {Array<Object>} intersects - The target array that holds the intersection points.
   */
  raycast(e, t) {
    const n = this.geometry, r = this.material, s = this.matrixWorld;
    r !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(), Zi.copy(n.boundingSphere), Zi.applyMatrix4(s), Ln.copy(e.ray).recast(e.near), !(Zi.containsPoint(Ln.origin) === !1 && (Ln.intersectSphere(Zi, Wa) === null || Ln.origin.distanceToSquared(Wa) > (e.far - e.near) ** 2)) && (ka.copy(s).invert(), Ln.copy(e.ray).applyMatrix4(ka), !(n.boundingBox !== null && Ln.intersectsBox(n.boundingBox) === !1) && this._computeIntersections(e, t, Ln)));
  }
  _computeIntersections(e, t, n) {
    let r;
    const s = this.geometry, a = this.material, o = s.index, c = s.attributes.position, l = s.attributes.uv, h = s.attributes.uv1, m = s.attributes.normal, u = s.groups, d = s.drawRange;
    if (o !== null)
      if (Array.isArray(a))
        for (let _ = 0, M = u.length; _ < M; _++) {
          const p = u[_], f = a[p.materialIndex], S = Math.max(p.start, d.start), b = Math.min(o.count, Math.min(p.start + p.count, d.start + d.count));
          for (let E = S, R = b; E < R; E += 3) {
            const A = o.getX(E), L = o.getX(E + 1), v = o.getX(E + 2);
            r = er(this, f, e, n, l, h, m, A, L, v), r && (r.faceIndex = Math.floor(E / 3), r.face.materialIndex = p.materialIndex, t.push(r));
          }
        }
      else {
        const _ = Math.max(0, d.start), M = Math.min(o.count, d.start + d.count);
        for (let p = _, f = M; p < f; p += 3) {
          const S = o.getX(p), b = o.getX(p + 1), E = o.getX(p + 2);
          r = er(this, a, e, n, l, h, m, S, b, E), r && (r.faceIndex = Math.floor(p / 3), t.push(r));
        }
      }
    else if (c !== void 0)
      if (Array.isArray(a))
        for (let _ = 0, M = u.length; _ < M; _++) {
          const p = u[_], f = a[p.materialIndex], S = Math.max(p.start, d.start), b = Math.min(c.count, Math.min(p.start + p.count, d.start + d.count));
          for (let E = S, R = b; E < R; E += 3) {
            const A = E, L = E + 1, v = E + 2;
            r = er(this, f, e, n, l, h, m, A, L, v), r && (r.faceIndex = Math.floor(E / 3), r.face.materialIndex = p.materialIndex, t.push(r));
          }
        }
      else {
        const _ = Math.max(0, d.start), M = Math.min(c.count, d.start + d.count);
        for (let p = _, f = M; p < f; p += 3) {
          const S = p, b = p + 1, E = p + 2;
          r = er(this, a, e, n, l, h, m, S, b, E), r && (r.faceIndex = Math.floor(p / 3), t.push(r));
        }
      }
  }
}
function Ac(i, e, t, n, r, s, a, o) {
  let c;
  if (e.side === wt ? c = n.intersectTriangle(a, s, r, !0, o) : c = n.intersectTriangle(r, s, a, e.side === An, o), c === null) return null;
  Qi.copy(o), Qi.applyMatrix4(i.matrixWorld);
  const l = t.ray.origin.distanceTo(Qi);
  return l < t.near || l > t.far ? null : {
    distance: l,
    point: Qi.clone(),
    object: i
  };
}
function er(i, e, t, n, r, s, a, o, c, l) {
  i.getVertexPosition(o, Ji), i.getVertexPosition(c, Ki), i.getVertexPosition(l, $i);
  const h = Ac(i, e, t, n, Ji, Ki, $i, Xa);
  if (h) {
    const m = new I();
    Gt.getBarycoord(Xa, Ji, Ki, $i, m), r && (h.uv = Gt.getInterpolatedAttribute(r, o, c, l, m, new be())), s && (h.uv1 = Gt.getInterpolatedAttribute(s, o, c, l, m, new be())), a && (h.normal = Gt.getInterpolatedAttribute(a, o, c, l, m, new I()), h.normal.dot(n.direction) > 0 && h.normal.multiplyScalar(-1));
    const u = {
      a: o,
      b: c,
      c: l,
      normal: new I(),
      materialIndex: 0
    };
    Gt.getNormal(Ji, Ki, $i, u.normal), h.face = u, h.barycoord = m;
  }
  return h;
}
class wc extends Tt {
  /**
   * Constructs a new data texture.
   *
   * @param {?TypedArray} [data=null] - The buffer data.
   * @param {number} [width=1] - The width of the texture.
   * @param {number} [height=1] - The height of the texture.
   * @param {number} [format=RGBAFormat] - The texture format.
   * @param {number} [type=UnsignedByteType] - The texture type.
   * @param {number} [mapping=Texture.DEFAULT_MAPPING] - The texture mapping.
   * @param {number} [wrapS=ClampToEdgeWrapping] - The wrapS value.
   * @param {number} [wrapT=ClampToEdgeWrapping] - The wrapT value.
   * @param {number} [magFilter=NearestFilter] - The mag filter value.
   * @param {number} [minFilter=NearestFilter] - The min filter value.
   * @param {number} [anisotropy=Texture.DEFAULT_ANISOTROPY] - The anisotropy value.
   * @param {string} [colorSpace=NoColorSpace] - The color space.
   */
  constructor(e = null, t = 1, n = 1, r, s, a, o, c, l = vt, h = vt, m, u) {
    super(null, a, o, c, l, h, r, s, m, u), this.isDataTexture = !0, this.image = { data: e, width: t, height: n }, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
const Kr = /* @__PURE__ */ new I(), Rc = /* @__PURE__ */ new I(), Cc = /* @__PURE__ */ new Ie();
class Nn {
  /**
   * Constructs a new plane.
   *
   * @param {Vector3} [normal=(1,0,0)] - A unit length vector defining the normal of the plane.
   * @param {number} [constant=0] - The signed distance from the origin to the plane.
   */
  constructor(e = new I(1, 0, 0), t = 0) {
    this.isPlane = !0, this.normal = e, this.constant = t;
  }
  /**
   * Sets the plane components by copying the given values.
   *
   * @param {Vector3} normal - The normal.
   * @param {number} constant - The constant.
   * @return {Plane} A reference to this plane.
   */
  set(e, t) {
    return this.normal.copy(e), this.constant = t, this;
  }
  /**
   * Sets the plane components by defining `x`, `y`, `z` as the
   * plane normal and `w` as the constant.
   *
   * @param {number} x - The value for the normal's x component.
   * @param {number} y - The value for the normal's y component.
   * @param {number} z - The value for the normal's z component.
   * @param {number} w - The constant value.
   * @return {Plane} A reference to this plane.
   */
  setComponents(e, t, n, r) {
    return this.normal.set(e, t, n), this.constant = r, this;
  }
  /**
   * Sets the plane from the given normal and coplanar point (that is a point
   * that lies onto the plane).
   *
   * @param {Vector3} normal - The normal.
   * @param {Vector3} point - A coplanar point.
   * @return {Plane} A reference to this plane.
   */
  setFromNormalAndCoplanarPoint(e, t) {
    return this.normal.copy(e), this.constant = -t.dot(this.normal), this;
  }
  /**
   * Sets the plane from three coplanar points. The winding order is
   * assumed to be counter-clockwise, and determines the direction of
   * the plane normal.
   *
   * @param {Vector3} a - The first coplanar point.
   * @param {Vector3} b - The second coplanar point.
   * @param {Vector3} c - The third coplanar point.
   * @return {Plane} A reference to this plane.
   */
  setFromCoplanarPoints(e, t, n) {
    const r = Kr.subVectors(n, t).cross(Rc.subVectors(e, t)).normalize();
    return this.setFromNormalAndCoplanarPoint(r, e), this;
  }
  /**
   * Copies the values of the given plane to this instance.
   *
   * @param {Plane} plane - The plane to copy.
   * @return {Plane} A reference to this plane.
   */
  copy(e) {
    return this.normal.copy(e.normal), this.constant = e.constant, this;
  }
  /**
   * Normalizes the plane normal and adjusts the constant accordingly.
   *
   * @return {Plane} A reference to this plane.
   */
  normalize() {
    const e = 1 / this.normal.length();
    return this.normal.multiplyScalar(e), this.constant *= e, this;
  }
  /**
   * Negates both the plane normal and the constant.
   *
   * @return {Plane} A reference to this plane.
   */
  negate() {
    return this.constant *= -1, this.normal.negate(), this;
  }
  /**
   * Returns the signed distance from the given point to this plane.
   *
   * @param {Vector3} point - The point to compute the distance for.
   * @return {number} The signed distance.
   */
  distanceToPoint(e) {
    return this.normal.dot(e) + this.constant;
  }
  /**
   * Returns the signed distance from the given sphere to this plane.
   *
   * @param {Sphere} sphere - The sphere to compute the distance for.
   * @return {number} The signed distance.
   */
  distanceToSphere(e) {
    return this.distanceToPoint(e.center) - e.radius;
  }
  /**
   * Projects a the given point onto the plane.
   *
   * @param {Vector3} point - The point to project.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The projected point on the plane.
   */
  projectPoint(e, t) {
    return t.copy(e).addScaledVector(this.normal, -this.distanceToPoint(e));
  }
  /**
   * Returns the intersection point of the passed line and the plane. Returns
   * `null` if the line does not intersect. Returns the line's starting point if
   * the line is coplanar with the plane.
   *
   * @param {Line3} line - The line to compute the intersection for.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {?Vector3} The intersection point.
   */
  intersectLine(e, t) {
    const n = e.delta(Kr), r = this.normal.dot(n);
    if (r === 0)
      return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
    const s = -(e.start.dot(this.normal) + this.constant) / r;
    return s < 0 || s > 1 ? null : t.copy(e.start).addScaledVector(n, s);
  }
  /**
   * Returns `true` if the given line segment intersects with (passes through) the plane.
   *
   * @param {Line3} line - The line to test.
   * @return {boolean} Whether the given line segment intersects with the plane or not.
   */
  intersectsLine(e) {
    const t = this.distanceToPoint(e.start), n = this.distanceToPoint(e.end);
    return t < 0 && n > 0 || n < 0 && t > 0;
  }
  /**
   * Returns `true` if the given bounding box intersects with the plane.
   *
   * @param {Box3} box - The bounding box to test.
   * @return {boolean} Whether the given bounding box intersects with the plane or not.
   */
  intersectsBox(e) {
    return e.intersectsPlane(this);
  }
  /**
   * Returns `true` if the given bounding sphere intersects with the plane.
   *
   * @param {Sphere} sphere - The bounding sphere to test.
   * @return {boolean} Whether the given bounding sphere intersects with the plane or not.
   */
  intersectsSphere(e) {
    return e.intersectsPlane(this);
  }
  /**
   * Returns a coplanar vector to the plane, by calculating the
   * projection of the normal at the origin onto the plane.
   *
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The coplanar point.
   */
  coplanarPoint(e) {
    return e.copy(this.normal).multiplyScalar(-this.constant);
  }
  /**
   * Apply a 4x4 matrix to the plane. The matrix must be an affine, homogeneous transform.
   *
   * The optional normal matrix can be pre-computed like so:
   * ```js
   * const optionalNormalMatrix = new THREE.Matrix3().getNormalMatrix( matrix );
   * ```
   *
   * @param {Matrix4} matrix - The transformation matrix.
   * @param {Matrix4} [optionalNormalMatrix] - A pre-computed normal matrix.
   * @return {Plane} A reference to this plane.
   */
  applyMatrix4(e, t) {
    const n = t || Cc.getNormalMatrix(e), r = this.coplanarPoint(Kr).applyMatrix4(e), s = this.normal.applyMatrix3(n).normalize();
    return this.constant = -r.dot(s), this;
  }
  /**
   * Translates the plane by the distance defined by the given offset vector.
   * Note that this only affects the plane constant and will not affect the normal vector.
   *
   * @param {Vector3} offset - The offset vector.
   * @return {Plane} A reference to this plane.
   */
  translate(e) {
    return this.constant -= e.dot(this.normal), this;
  }
  /**
   * Returns `true` if this plane is equal with the given one.
   *
   * @param {Plane} plane - The plane to test for equality.
   * @return {boolean} Whether this plane is equal with the given one.
   */
  equals(e) {
    return e.normal.equals(this.normal) && e.constant === this.constant;
  }
  /**
   * Returns a new plane with copied values from this instance.
   *
   * @return {Plane} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
}
const Dn = /* @__PURE__ */ new ca(), Pc = /* @__PURE__ */ new be(0.5, 0.5), tr = /* @__PURE__ */ new I();
class ua {
  /**
   * Constructs a new frustum.
   *
   * @param {Plane} [p0] - The first plane that encloses the frustum.
   * @param {Plane} [p1] - The second plane that encloses the frustum.
   * @param {Plane} [p2] - The third plane that encloses the frustum.
   * @param {Plane} [p3] - The fourth plane that encloses the frustum.
   * @param {Plane} [p4] - The fifth plane that encloses the frustum.
   * @param {Plane} [p5] - The sixth plane that encloses the frustum.
   */
  constructor(e = new Nn(), t = new Nn(), n = new Nn(), r = new Nn(), s = new Nn(), a = new Nn()) {
    this.planes = [e, t, n, r, s, a];
  }
  /**
   * Sets the frustum planes by copying the given planes.
   *
   * @param {Plane} [p0] - The first plane that encloses the frustum.
   * @param {Plane} [p1] - The second plane that encloses the frustum.
   * @param {Plane} [p2] - The third plane that encloses the frustum.
   * @param {Plane} [p3] - The fourth plane that encloses the frustum.
   * @param {Plane} [p4] - The fifth plane that encloses the frustum.
   * @param {Plane} [p5] - The sixth plane that encloses the frustum.
   * @return {Frustum} A reference to this frustum.
   */
  set(e, t, n, r, s, a) {
    const o = this.planes;
    return o[0].copy(e), o[1].copy(t), o[2].copy(n), o[3].copy(r), o[4].copy(s), o[5].copy(a), this;
  }
  /**
   * Copies the values of the given frustum to this instance.
   *
   * @param {Frustum} frustum - The frustum to copy.
   * @return {Frustum} A reference to this frustum.
   */
  copy(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++)
      t[n].copy(e.planes[n]);
    return this;
  }
  /**
   * Sets the frustum planes from the given projection matrix.
   *
   * @param {Matrix4} m - The projection matrix.
   * @param {(WebGLCoordinateSystem|WebGPUCoordinateSystem)} coordinateSystem - The coordinate system.
   * @param {boolean} [reversedDepth=false] - Whether to use a reversed depth.
   * @return {Frustum} A reference to this frustum.
   */
  setFromProjectionMatrix(e, t = Jt, n = !1) {
    const r = this.planes, s = e.elements, a = s[0], o = s[1], c = s[2], l = s[3], h = s[4], m = s[5], u = s[6], d = s[7], _ = s[8], M = s[9], p = s[10], f = s[11], S = s[12], b = s[13], E = s[14], R = s[15];
    if (r[0].setComponents(l - a, d - h, f - _, R - S).normalize(), r[1].setComponents(l + a, d + h, f + _, R + S).normalize(), r[2].setComponents(l + o, d + m, f + M, R + b).normalize(), r[3].setComponents(l - o, d - m, f - M, R - b).normalize(), n)
      r[4].setComponents(c, u, p, E).normalize(), r[5].setComponents(l - c, d - u, f - p, R - E).normalize();
    else if (r[4].setComponents(l - c, d - u, f - p, R - E).normalize(), t === Jt)
      r[5].setComponents(l + c, d + u, f + p, R + E).normalize();
    else if (t === Ci)
      r[5].setComponents(c, u, p, E).normalize();
    else
      throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + t);
    return this;
  }
  /**
   * Returns `true` if the 3D object's bounding sphere is intersecting this frustum.
   *
   * Note that the 3D object must have a geometry so that the bounding sphere can be calculated.
   *
   * @param {Object3D} object - The 3D object to test.
   * @return {boolean} Whether the 3D object's bounding sphere is intersecting this frustum or not.
   */
  intersectsObject(e) {
    if (e.boundingSphere !== void 0)
      e.boundingSphere === null && e.computeBoundingSphere(), Dn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
    else {
      const t = e.geometry;
      t.boundingSphere === null && t.computeBoundingSphere(), Dn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld);
    }
    return this.intersectsSphere(Dn);
  }
  /**
   * Returns `true` if the given sprite is intersecting this frustum.
   *
   * @param {Sprite} sprite - The sprite to test.
   * @return {boolean} Whether the sprite is intersecting this frustum or not.
   */
  intersectsSprite(e) {
    Dn.center.set(0, 0, 0);
    const t = Pc.distanceTo(e.center);
    return Dn.radius = 0.7071067811865476 + t, Dn.applyMatrix4(e.matrixWorld), this.intersectsSphere(Dn);
  }
  /**
   * Returns `true` if the given bounding sphere is intersecting this frustum.
   *
   * @param {Sphere} sphere - The bounding sphere to test.
   * @return {boolean} Whether the bounding sphere is intersecting this frustum or not.
   */
  intersectsSphere(e) {
    const t = this.planes, n = e.center, r = -e.radius;
    for (let s = 0; s < 6; s++)
      if (t[s].distanceToPoint(n) < r)
        return !1;
    return !0;
  }
  /**
   * Returns `true` if the given bounding box is intersecting this frustum.
   *
   * @param {Box3} box - The bounding box to test.
   * @return {boolean} Whether the bounding box is intersecting this frustum or not.
   */
  intersectsBox(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) {
      const r = t[n];
      if (tr.x = r.normal.x > 0 ? e.max.x : e.min.x, tr.y = r.normal.y > 0 ? e.max.y : e.min.y, tr.z = r.normal.z > 0 ? e.max.z : e.min.z, r.distanceToPoint(tr) < 0)
        return !1;
    }
    return !0;
  }
  /**
   * Returns `true` if the given point lies within the frustum.
   *
   * @param {Vector3} point - The point to test.
   * @return {boolean} Whether the point lies within this frustum or not.
   */
  containsPoint(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++)
      if (t[n].distanceToPoint(e) < 0)
        return !1;
    return !0;
  }
  /**
   * Returns a new frustum with copied values from this instance.
   *
   * @return {Frustum} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
}
class Ko extends Tt {
  /**
   * Constructs a new cube texture.
   *
   * @param {Array<Image>} [images=[]] - An array holding a image for each side of a cube.
   * @param {number} [mapping=CubeReflectionMapping] - The texture mapping.
   * @param {number} [wrapS=ClampToEdgeWrapping] - The wrapS value.
   * @param {number} [wrapT=ClampToEdgeWrapping] - The wrapT value.
   * @param {number} [magFilter=LinearFilter] - The mag filter value.
   * @param {number} [minFilter=LinearMipmapLinearFilter] - The min filter value.
   * @param {number} [format=RGBAFormat] - The texture format.
   * @param {number} [type=UnsignedByteType] - The texture type.
   * @param {number} [anisotropy=Texture.DEFAULT_ANISOTROPY] - The anisotropy value.
   * @param {string} [colorSpace=NoColorSpace] - The color space value.
   */
  constructor(e = [], t = Vn, n, r, s, a, o, c, l, h) {
    super(e, t, n, r, s, a, o, c, l, h), this.isCubeTexture = !0, this.flipY = !1;
  }
  /**
   * Alias for {@link CubeTexture#image}.
   *
   * @type {Array<Image>}
   */
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class Pi extends Tt {
  /**
   * Constructs a new depth texture.
   *
   * @param {number} width - The width of the texture.
   * @param {number} height - The height of the texture.
   * @param {number} [type=UnsignedIntType] - The texture type.
   * @param {number} [mapping=Texture.DEFAULT_MAPPING] - The texture mapping.
   * @param {number} [wrapS=ClampToEdgeWrapping] - The wrapS value.
   * @param {number} [wrapT=ClampToEdgeWrapping] - The wrapT value.
   * @param {number} [magFilter=LinearFilter] - The mag filter value.
   * @param {number} [minFilter=LinearFilter] - The min filter value.
   * @param {number} [anisotropy=Texture.DEFAULT_ANISOTROPY] - The anisotropy value.
   * @param {number} [format=DepthFormat] - The texture format.
   * @param {number} [depth=1] - The depth of the texture.
   */
  constructor(e, t, n = Qt, r, s, a, o = vt, c = vt, l, h = pn, m = 1) {
    if (h !== pn && h !== zn)
      throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    const u = { width: e, height: t, depth: m };
    super(u, r, s, a, o, c, h, n, l), this.isDepthTexture = !0, this.flipY = !1, this.generateMipmaps = !1, this.compareFunction = null;
  }
  copy(e) {
    return super.copy(e), this.source = new la(Object.assign({}, e.image)), this.compareFunction = e.compareFunction, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.compareFunction !== null && (t.compareFunction = this.compareFunction), t;
  }
}
class Lc extends Pi {
  /**
   * Constructs a new cube depth texture.
   *
   * @param {number} size - The size (width and height) of each cube face.
   * @param {number} [type=UnsignedIntType] - The texture type.
   * @param {number} [mapping=CubeReflectionMapping] - The texture mapping.
   * @param {number} [wrapS=ClampToEdgeWrapping] - The wrapS value.
   * @param {number} [wrapT=ClampToEdgeWrapping] - The wrapT value.
   * @param {number} [magFilter=NearestFilter] - The mag filter value.
   * @param {number} [minFilter=NearestFilter] - The min filter value.
   * @param {number} [anisotropy=Texture.DEFAULT_ANISOTROPY] - The anisotropy value.
   * @param {number} [format=DepthFormat] - The texture format.
   */
  constructor(e, t = Qt, n = Vn, r, s, a = vt, o = vt, c, l = pn) {
    const h = { width: e, height: e, depth: 1 }, m = [h, h, h, h, h, h];
    super(e, e, t, n, r, s, a, o, c, l), this.image = m, this.isCubeDepthTexture = !0, this.isCubeTexture = !0;
  }
  /**
   * Alias for {@link CubeDepthTexture#image}.
   *
   * @type {Array<Image>}
   */
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class $o extends Tt {
  /**
   * Creates a new raw texture.
   *
   * @param {?(WebGLTexture|GPUTexture)} [sourceTexture=null] - The external texture.
   */
  constructor(e = null) {
    super(), this.sourceTexture = e, this.isExternalTexture = !0;
  }
  copy(e) {
    return super.copy(e), this.sourceTexture = e.sourceTexture, this;
  }
}
class pi extends kt {
  /**
   * Constructs a new box geometry.
   *
   * @param {number} [width=1] - The width. That is, the length of the edges parallel to the X axis.
   * @param {number} [height=1] - The height. That is, the length of the edges parallel to the Y axis.
   * @param {number} [depth=1] - The depth. That is, the length of the edges parallel to the Z axis.
   * @param {number} [widthSegments=1] - Number of segmented rectangular faces along the width of the sides.
   * @param {number} [heightSegments=1] - Number of segmented rectangular faces along the height of the sides.
   * @param {number} [depthSegments=1] - Number of segmented rectangular faces along the depth of the sides.
   */
  constructor(e = 1, t = 1, n = 1, r = 1, s = 1, a = 1) {
    super(), this.type = "BoxGeometry", this.parameters = {
      width: e,
      height: t,
      depth: n,
      widthSegments: r,
      heightSegments: s,
      depthSegments: a
    };
    const o = this;
    r = Math.floor(r), s = Math.floor(s), a = Math.floor(a);
    const c = [], l = [], h = [], m = [];
    let u = 0, d = 0;
    _("z", "y", "x", -1, -1, n, t, e, a, s, 0), _("z", "y", "x", 1, -1, n, t, -e, a, s, 1), _("x", "z", "y", 1, 1, e, n, t, r, a, 2), _("x", "z", "y", 1, -1, e, n, -t, r, a, 3), _("x", "y", "z", 1, -1, e, t, n, r, s, 4), _("x", "y", "z", -1, -1, e, t, -n, r, s, 5), this.setIndex(c), this.setAttribute("position", new Dt(l, 3)), this.setAttribute("normal", new Dt(h, 3)), this.setAttribute("uv", new Dt(m, 2));
    function _(M, p, f, S, b, E, R, A, L, v, T) {
      const q = E / L, C = R / v, G = E / 2, z = R / 2, k = A / 2, H = L + 1, B = v + 1;
      let O = 0, Q = 0;
      const K = new I();
      for (let ce = 0; ce < B; ce++) {
        const pe = ce * C - z;
        for (let he = 0; he < H; he++) {
          const Ue = he * q - G;
          K[M] = Ue * S, K[p] = pe * b, K[f] = k, l.push(K.x, K.y, K.z), K[M] = 0, K[p] = 0, K[f] = A > 0 ? 1 : -1, h.push(K.x, K.y, K.z), m.push(he / L), m.push(1 - ce / v), O += 1;
        }
      }
      for (let ce = 0; ce < v; ce++)
        for (let pe = 0; pe < L; pe++) {
          const he = u + pe + H * ce, Ue = u + pe + H * (ce + 1), it = u + (pe + 1) + H * (ce + 1), nt = u + (pe + 1) + H * ce;
          c.push(he, Ue, nt), c.push(Ue, it, nt), Q += 6;
        }
      o.addGroup(d, Q, T), d += Q, u += O;
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  /**
   * Factory method for creating an instance of this class from the given
   * JSON object.
   *
   * @param {Object} data - A JSON object representing the serialized geometry.
   * @return {BoxGeometry} A new instance.
   */
  static fromJSON(e) {
    return new pi(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments);
  }
}
class mn {
  /**
   * Constructs a new curve.
   */
  constructor() {
    this.type = "Curve", this.arcLengthDivisions = 200, this.needsUpdate = !1, this.cacheArcLengths = null;
  }
  /**
   * This method returns a vector in 2D or 3D space (depending on the curve definition)
   * for the given interpolation factor.
   *
   * @abstract
   * @param {number} t - A interpolation factor representing a position on the curve. Must be in the range `[0,1]`.
   * @param {(Vector2|Vector3)} [optionalTarget] - The optional target vector the result is written to.
   * @return {(Vector2|Vector3)} The position on the curve. It can be a 2D or 3D vector depending on the curve definition.
   */
  getPoint() {
    Ce("Curve: .getPoint() not implemented.");
  }
  /**
   * This method returns a vector in 2D or 3D space (depending on the curve definition)
   * for the given interpolation factor. Unlike {@link Curve#getPoint}, this method honors the length
   * of the curve which equidistant samples.
   *
   * @param {number} u - A interpolation factor representing a position on the curve. Must be in the range `[0,1]`.
   * @param {(Vector2|Vector3)} [optionalTarget] - The optional target vector the result is written to.
   * @return {(Vector2|Vector3)} The position on the curve. It can be a 2D or 3D vector depending on the curve definition.
   */
  getPointAt(e, t) {
    const n = this.getUtoTmapping(e);
    return this.getPoint(n, t);
  }
  /**
   * This method samples the curve via {@link Curve#getPoint} and returns an array of points representing
   * the curve shape.
   *
   * @param {number} [divisions=5] - The number of divisions.
   * @return {Array<(Vector2|Vector3)>} An array holding the sampled curve values. The number of points is `divisions + 1`.
   */
  getPoints(e = 5) {
    const t = [];
    for (let n = 0; n <= e; n++)
      t.push(this.getPoint(n / e));
    return t;
  }
  // Get sequence of points using getPointAt( u )
  /**
   * This method samples the curve via {@link Curve#getPointAt} and returns an array of points representing
   * the curve shape. Unlike {@link Curve#getPoints}, this method returns equi-spaced points across the entire
   * curve.
   *
   * @param {number} [divisions=5] - The number of divisions.
   * @return {Array<(Vector2|Vector3)>} An array holding the sampled curve values. The number of points is `divisions + 1`.
   */
  getSpacedPoints(e = 5) {
    const t = [];
    for (let n = 0; n <= e; n++)
      t.push(this.getPointAt(n / e));
    return t;
  }
  /**
   * Returns the total arc length of the curve.
   *
   * @return {number} The length of the curve.
   */
  getLength() {
    const e = this.getLengths();
    return e[e.length - 1];
  }
  /**
   * Returns an array of cumulative segment lengths of the curve.
   *
   * @param {number} [divisions=this.arcLengthDivisions] - The number of divisions.
   * @return {Array<number>} An array holding the cumulative segment lengths.
   */
  getLengths(e = this.arcLengthDivisions) {
    if (this.cacheArcLengths && this.cacheArcLengths.length === e + 1 && !this.needsUpdate)
      return this.cacheArcLengths;
    this.needsUpdate = !1;
    const t = [];
    let n, r = this.getPoint(0), s = 0;
    t.push(0);
    for (let a = 1; a <= e; a++)
      n = this.getPoint(a / e), s += n.distanceTo(r), t.push(s), r = n;
    return this.cacheArcLengths = t, t;
  }
  /**
   * Update the cumulative segment distance cache. The method must be called
   * every time curve parameters are changed. If an updated curve is part of a
   * composed curve like {@link CurvePath}, this method must be called on the
   * composed curve, too.
   */
  updateArcLengths() {
    this.needsUpdate = !0, this.getLengths();
  }
  /**
   * Given an interpolation factor in the range `[0,1]`, this method returns an updated
   * interpolation factor in the same range that can be ued to sample equidistant points
   * from a curve.
   *
   * @param {number} u - The interpolation factor.
   * @param {?number} distance - An optional distance on the curve.
   * @return {number} The updated interpolation factor.
   */
  getUtoTmapping(e, t = null) {
    const n = this.getLengths();
    let r = 0;
    const s = n.length;
    let a;
    t ? a = t : a = e * n[s - 1];
    let o = 0, c = s - 1, l;
    for (; o <= c; )
      if (r = Math.floor(o + (c - o) / 2), l = n[r] - a, l < 0)
        o = r + 1;
      else if (l > 0)
        c = r - 1;
      else {
        c = r;
        break;
      }
    if (r = c, n[r] === a)
      return r / (s - 1);
    const h = n[r], u = n[r + 1] - h, d = (a - h) / u;
    return (r + d) / (s - 1);
  }
  /**
   * Returns a unit vector tangent for the given interpolation factor.
   * If the derived curve does not implement its tangent derivation,
   * two points a small delta apart will be used to find its gradient
   * which seems to give a reasonable approximation.
   *
   * @param {number} t - The interpolation factor.
   * @param {(Vector2|Vector3)} [optionalTarget] - The optional target vector the result is written to.
   * @return {(Vector2|Vector3)} The tangent vector.
   */
  getTangent(e, t) {
    let r = e - 1e-4, s = e + 1e-4;
    r < 0 && (r = 0), s > 1 && (s = 1);
    const a = this.getPoint(r), o = this.getPoint(s), c = t || (a.isVector2 ? new be() : new I());
    return c.copy(o).sub(a).normalize(), c;
  }
  /**
   * Same as {@link Curve#getTangent} but with equidistant samples.
   *
   * @param {number} u - The interpolation factor.
   * @param {(Vector2|Vector3)} [optionalTarget] - The optional target vector the result is written to.
   * @return {(Vector2|Vector3)} The tangent vector.
   * @see {@link Curve#getPointAt}
   */
  getTangentAt(e, t) {
    const n = this.getUtoTmapping(e);
    return this.getTangent(n, t);
  }
  /**
   * Generates the Frenet Frames. Requires a curve definition in 3D space. Used
   * in geometries like {@link TubeGeometry} or {@link ExtrudeGeometry}.
   *
   * @param {number} segments - The number of segments.
   * @param {boolean} [closed=false] - Whether the curve is closed or not.
   * @return {{tangents: Array<Vector3>, normals: Array<Vector3>, binormals: Array<Vector3>}} The Frenet Frames.
   */
  computeFrenetFrames(e, t = !1) {
    const n = new I(), r = [], s = [], a = [], o = new I(), c = new tt();
    for (let d = 0; d <= e; d++) {
      const _ = d / e;
      r[d] = this.getTangentAt(_, new I());
    }
    s[0] = new I(), a[0] = new I();
    let l = Number.MAX_VALUE;
    const h = Math.abs(r[0].x), m = Math.abs(r[0].y), u = Math.abs(r[0].z);
    h <= l && (l = h, n.set(1, 0, 0)), m <= l && (l = m, n.set(0, 1, 0)), u <= l && n.set(0, 0, 1), o.crossVectors(r[0], n).normalize(), s[0].crossVectors(r[0], o), a[0].crossVectors(r[0], s[0]);
    for (let d = 1; d <= e; d++) {
      if (s[d] = s[d - 1].clone(), a[d] = a[d - 1].clone(), o.crossVectors(r[d - 1], r[d]), o.length() > Number.EPSILON) {
        o.normalize();
        const _ = Math.acos(ze(r[d - 1].dot(r[d]), -1, 1));
        s[d].applyMatrix4(c.makeRotationAxis(o, _));
      }
      a[d].crossVectors(r[d], s[d]);
    }
    if (t === !0) {
      let d = Math.acos(ze(s[0].dot(s[e]), -1, 1));
      d /= e, r[0].dot(o.crossVectors(s[0], s[e])) > 0 && (d = -d);
      for (let _ = 1; _ <= e; _++)
        s[_].applyMatrix4(c.makeRotationAxis(r[_], d * _)), a[_].crossVectors(r[_], s[_]);
    }
    return {
      tangents: r,
      normals: s,
      binormals: a
    };
  }
  /**
   * Returns a new curve with copied values from this instance.
   *
   * @return {Curve} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
  /**
   * Copies the values of the given curve to this instance.
   *
   * @param {Curve} source - The curve to copy.
   * @return {Curve} A reference to this curve.
   */
  copy(e) {
    return this.arcLengthDivisions = e.arcLengthDivisions, this;
  }
  /**
   * Serializes the curve into JSON.
   *
   * @return {Object} A JSON object representing the serialized curve.
   * @see {@link ObjectLoader#parse}
   */
  toJSON() {
    const e = {
      metadata: {
        version: 4.7,
        type: "Curve",
        generator: "Curve.toJSON"
      }
    };
    return e.arcLengthDivisions = this.arcLengthDivisions, e.type = this.type, e;
  }
  /**
   * Deserializes the curve from the given JSON.
   *
   * @param {Object} json - The JSON holding the serialized curve.
   * @return {Curve} A reference to this curve.
   */
  fromJSON(e) {
    return this.arcLengthDivisions = e.arcLengthDivisions, this;
  }
}
class jo extends mn {
  /**
   * Constructs a new ellipse curve.
   *
   * @param {number} [aX=0] - The X center of the ellipse.
   * @param {number} [aY=0] - The Y center of the ellipse.
   * @param {number} [xRadius=1] - The radius of the ellipse in the x direction.
   * @param {number} [yRadius=1] - The radius of the ellipse in the y direction.
   * @param {number} [aStartAngle=0] - The start angle of the curve in radians starting from the positive X axis.
   * @param {number} [aEndAngle=Math.PI*2] - The end angle of the curve in radians starting from the positive X axis.
   * @param {boolean} [aClockwise=false] - Whether the ellipse is drawn clockwise or not.
   * @param {number} [aRotation=0] - The rotation angle of the ellipse in radians, counterclockwise from the positive X axis.
   */
  constructor(e = 0, t = 0, n = 1, r = 1, s = 0, a = Math.PI * 2, o = !1, c = 0) {
    super(), this.isEllipseCurve = !0, this.type = "EllipseCurve", this.aX = e, this.aY = t, this.xRadius = n, this.yRadius = r, this.aStartAngle = s, this.aEndAngle = a, this.aClockwise = o, this.aRotation = c;
  }
  /**
   * Returns a point on the curve.
   *
   * @param {number} t - A interpolation factor representing a position on the curve. Must be in the range `[0,1]`.
   * @param {Vector2} [optionalTarget] - The optional target vector the result is written to.
   * @return {Vector2} The position on the curve.
   */
  getPoint(e, t = new be()) {
    const n = t, r = Math.PI * 2;
    let s = this.aEndAngle - this.aStartAngle;
    const a = Math.abs(s) < Number.EPSILON;
    for (; s < 0; ) s += r;
    for (; s > r; ) s -= r;
    s < Number.EPSILON && (a ? s = 0 : s = r), this.aClockwise === !0 && !a && (s === r ? s = -r : s = s - r);
    const o = this.aStartAngle + e * s;
    let c = this.aX + this.xRadius * Math.cos(o), l = this.aY + this.yRadius * Math.sin(o);
    if (this.aRotation !== 0) {
      const h = Math.cos(this.aRotation), m = Math.sin(this.aRotation), u = c - this.aX, d = l - this.aY;
      c = u * h - d * m + this.aX, l = u * m + d * h + this.aY;
    }
    return n.set(c, l);
  }
  copy(e) {
    return super.copy(e), this.aX = e.aX, this.aY = e.aY, this.xRadius = e.xRadius, this.yRadius = e.yRadius, this.aStartAngle = e.aStartAngle, this.aEndAngle = e.aEndAngle, this.aClockwise = e.aClockwise, this.aRotation = e.aRotation, this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.aX = this.aX, e.aY = this.aY, e.xRadius = this.xRadius, e.yRadius = this.yRadius, e.aStartAngle = this.aStartAngle, e.aEndAngle = this.aEndAngle, e.aClockwise = this.aClockwise, e.aRotation = this.aRotation, e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.aX = e.aX, this.aY = e.aY, this.xRadius = e.xRadius, this.yRadius = e.yRadius, this.aStartAngle = e.aStartAngle, this.aEndAngle = e.aEndAngle, this.aClockwise = e.aClockwise, this.aRotation = e.aRotation, this;
  }
}
class Dc extends jo {
  /**
   * Constructs a new arc curve.
   *
   * @param {number} [aX=0] - The X center of the ellipse.
   * @param {number} [aY=0] - The Y center of the ellipse.
   * @param {number} [aRadius=1] - The radius of the ellipse in the x direction.
   * @param {number} [aStartAngle=0] - The start angle of the curve in radians starting from the positive X axis.
   * @param {number} [aEndAngle=Math.PI*2] - The end angle of the curve in radians starting from the positive X axis.
   * @param {boolean} [aClockwise=false] - Whether the ellipse is drawn clockwise or not.
   */
  constructor(e, t, n, r, s, a) {
    super(e, t, n, n, r, s, a), this.isArcCurve = !0, this.type = "ArcCurve";
  }
}
function ha() {
  let i = 0, e = 0, t = 0, n = 0;
  function r(s, a, o, c) {
    i = s, e = o, t = -3 * s + 3 * a - 2 * o - c, n = 2 * s - 2 * a + o + c;
  }
  return {
    initCatmullRom: function(s, a, o, c, l) {
      r(a, o, l * (o - s), l * (c - a));
    },
    initNonuniformCatmullRom: function(s, a, o, c, l, h, m) {
      let u = (a - s) / l - (o - s) / (l + h) + (o - a) / h, d = (o - a) / h - (c - a) / (h + m) + (c - o) / m;
      u *= h, d *= h, r(a, o, u, d);
    },
    calc: function(s) {
      const a = s * s, o = a * s;
      return i + e * s + t * a + n * o;
    }
  };
}
const nr = /* @__PURE__ */ new I(), $r = /* @__PURE__ */ new ha(), jr = /* @__PURE__ */ new ha(), Qr = /* @__PURE__ */ new ha();
class Qo extends mn {
  /**
   * Constructs a new Catmull-Rom curve.
   *
   * @param {Array<Vector3>} [points] - An array of 3D points defining the curve.
   * @param {boolean} [closed=false] - Whether the curve is closed or not.
   * @param {('centripetal'|'chordal'|'catmullrom')} [curveType='centripetal'] - The curve type.
   * @param {number} [tension=0.5] - Tension of the curve.
   */
  constructor(e = [], t = !1, n = "centripetal", r = 0.5) {
    super(), this.isCatmullRomCurve3 = !0, this.type = "CatmullRomCurve3", this.points = e, this.closed = t, this.curveType = n, this.tension = r;
  }
  /**
   * Returns a point on the curve.
   *
   * @param {number} t - A interpolation factor representing a position on the curve. Must be in the range `[0,1]`.
   * @param {Vector3} [optionalTarget] - The optional target vector the result is written to.
   * @return {Vector3} The position on the curve.
   */
  getPoint(e, t = new I()) {
    const n = t, r = this.points, s = r.length, a = (s - (this.closed ? 0 : 1)) * e;
    let o = Math.floor(a), c = a - o;
    this.closed ? o += o > 0 ? 0 : (Math.floor(Math.abs(o) / s) + 1) * s : c === 0 && o === s - 1 && (o = s - 2, c = 1);
    let l, h;
    this.closed || o > 0 ? l = r[(o - 1) % s] : (nr.subVectors(r[0], r[1]).add(r[0]), l = nr);
    const m = r[o % s], u = r[(o + 1) % s];
    if (this.closed || o + 2 < s ? h = r[(o + 2) % s] : (nr.subVectors(r[s - 1], r[s - 2]).add(r[s - 1]), h = nr), this.curveType === "centripetal" || this.curveType === "chordal") {
      const d = this.curveType === "chordal" ? 0.5 : 0.25;
      let _ = Math.pow(l.distanceToSquared(m), d), M = Math.pow(m.distanceToSquared(u), d), p = Math.pow(u.distanceToSquared(h), d);
      M < 1e-4 && (M = 1), _ < 1e-4 && (_ = M), p < 1e-4 && (p = M), $r.initNonuniformCatmullRom(l.x, m.x, u.x, h.x, _, M, p), jr.initNonuniformCatmullRom(l.y, m.y, u.y, h.y, _, M, p), Qr.initNonuniformCatmullRom(l.z, m.z, u.z, h.z, _, M, p);
    } else this.curveType === "catmullrom" && ($r.initCatmullRom(l.x, m.x, u.x, h.x, this.tension), jr.initCatmullRom(l.y, m.y, u.y, h.y, this.tension), Qr.initCatmullRom(l.z, m.z, u.z, h.z, this.tension));
    return n.set(
      $r.calc(c),
      jr.calc(c),
      Qr.calc(c)
    ), n;
  }
  copy(e) {
    super.copy(e), this.points = [];
    for (let t = 0, n = e.points.length; t < n; t++) {
      const r = e.points[t];
      this.points.push(r.clone());
    }
    return this.closed = e.closed, this.curveType = e.curveType, this.tension = e.tension, this;
  }
  toJSON() {
    const e = super.toJSON();
    e.points = [];
    for (let t = 0, n = this.points.length; t < n; t++) {
      const r = this.points[t];
      e.points.push(r.toArray());
    }
    return e.closed = this.closed, e.curveType = this.curveType, e.tension = this.tension, e;
  }
  fromJSON(e) {
    super.fromJSON(e), this.points = [];
    for (let t = 0, n = e.points.length; t < n; t++) {
      const r = e.points[t];
      this.points.push(new I().fromArray(r));
    }
    return this.closed = e.closed, this.curveType = e.curveType, this.tension = e.tension, this;
  }
}
function Ya(i, e, t, n, r) {
  const s = (n - e) * 0.5, a = (r - t) * 0.5, o = i * i, c = i * o;
  return (2 * t - 2 * n + s + a) * c + (-3 * t + 3 * n - 2 * s - a) * o + s * i + t;
}
function Ic(i, e) {
  const t = 1 - i;
  return t * t * e;
}
function Uc(i, e) {
  return 2 * (1 - i) * i * e;
}
function Nc(i, e) {
  return i * i * e;
}
function bi(i, e, t, n) {
  return Ic(i, e) + Uc(i, t) + Nc(i, n);
}
function Fc(i, e) {
  const t = 1 - i;
  return t * t * t * e;
}
function Oc(i, e) {
  const t = 1 - i;
  return 3 * t * t * i * e;
}
function Bc(i, e) {
  return 3 * (1 - i) * i * i * e;
}
function zc(i, e) {
  return i * i * i * e;
}
function Ai(i, e, t, n, r) {
  return Fc(i, e) + Oc(i, t) + Bc(i, n) + zc(i, r);
}
class Vc extends mn {
  /**
   * Constructs a new Cubic Bezier curve.
   *
   * @param {Vector2} [v0] - The start point.
   * @param {Vector2} [v1] - The first control point.
   * @param {Vector2} [v2] - The second control point.
   * @param {Vector2} [v3] - The end point.
   */
  constructor(e = new be(), t = new be(), n = new be(), r = new be()) {
    super(), this.isCubicBezierCurve = !0, this.type = "CubicBezierCurve", this.v0 = e, this.v1 = t, this.v2 = n, this.v3 = r;
  }
  /**
   * Returns a point on the curve.
   *
   * @param {number} t - A interpolation factor representing a position on the curve. Must be in the range `[0,1]`.
   * @param {Vector2} [optionalTarget] - The optional target vector the result is written to.
   * @return {Vector2} The position on the curve.
   */
  getPoint(e, t = new be()) {
    const n = t, r = this.v0, s = this.v1, a = this.v2, o = this.v3;
    return n.set(
      Ai(e, r.x, s.x, a.x, o.x),
      Ai(e, r.y, s.y, a.y, o.y)
    ), n;
  }
  copy(e) {
    return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this.v3.copy(e.v3), this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e.v3 = this.v3.toArray(), e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this.v3.fromArray(e.v3), this;
  }
}
class Gc extends mn {
  /**
   * Constructs a new Cubic Bezier curve.
   *
   * @param {Vector3} [v0] - The start point.
   * @param {Vector3} [v1] - The first control point.
   * @param {Vector3} [v2] - The second control point.
   * @param {Vector3} [v3] - The end point.
   */
  constructor(e = new I(), t = new I(), n = new I(), r = new I()) {
    super(), this.isCubicBezierCurve3 = !0, this.type = "CubicBezierCurve3", this.v0 = e, this.v1 = t, this.v2 = n, this.v3 = r;
  }
  /**
   * Returns a point on the curve.
   *
   * @param {number} t - A interpolation factor representing a position on the curve. Must be in the range `[0,1]`.
   * @param {Vector3} [optionalTarget] - The optional target vector the result is written to.
   * @return {Vector3} The position on the curve.
   */
  getPoint(e, t = new I()) {
    const n = t, r = this.v0, s = this.v1, a = this.v2, o = this.v3;
    return n.set(
      Ai(e, r.x, s.x, a.x, o.x),
      Ai(e, r.y, s.y, a.y, o.y),
      Ai(e, r.z, s.z, a.z, o.z)
    ), n;
  }
  copy(e) {
    return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this.v3.copy(e.v3), this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e.v3 = this.v3.toArray(), e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this.v3.fromArray(e.v3), this;
  }
}
class Hc extends mn {
  /**
   * Constructs a new line curve.
   *
   * @param {Vector2} [v1] - The start point.
   * @param {Vector2} [v2] - The end point.
   */
  constructor(e = new be(), t = new be()) {
    super(), this.isLineCurve = !0, this.type = "LineCurve", this.v1 = e, this.v2 = t;
  }
  /**
   * Returns a point on the line.
   *
   * @param {number} t - A interpolation factor representing a position on the line. Must be in the range `[0,1]`.
   * @param {Vector2} [optionalTarget] - The optional target vector the result is written to.
   * @return {Vector2} The position on the line.
   */
  getPoint(e, t = new be()) {
    const n = t;
    return e === 1 ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(e).add(this.v1)), n;
  }
  // Line curve is linear, so we can overwrite default getPointAt
  getPointAt(e, t) {
    return this.getPoint(e, t);
  }
  getTangent(e, t = new be()) {
    return t.subVectors(this.v2, this.v1).normalize();
  }
  getTangentAt(e, t) {
    return this.getTangent(e, t);
  }
  copy(e) {
    return super.copy(e), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this;
  }
}
class kc extends mn {
  /**
   * Constructs a new line curve.
   *
   * @param {Vector3} [v1] - The start point.
   * @param {Vector3} [v2] - The end point.
   */
  constructor(e = new I(), t = new I()) {
    super(), this.isLineCurve3 = !0, this.type = "LineCurve3", this.v1 = e, this.v2 = t;
  }
  /**
   * Returns a point on the line.
   *
   * @param {number} t - A interpolation factor representing a position on the line. Must be in the range `[0,1]`.
   * @param {Vector3} [optionalTarget] - The optional target vector the result is written to.
   * @return {Vector3} The position on the line.
   */
  getPoint(e, t = new I()) {
    const n = t;
    return e === 1 ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(e).add(this.v1)), n;
  }
  // Line curve is linear, so we can overwrite default getPointAt
  getPointAt(e, t) {
    return this.getPoint(e, t);
  }
  getTangent(e, t = new I()) {
    return t.subVectors(this.v2, this.v1).normalize();
  }
  getTangentAt(e, t) {
    return this.getTangent(e, t);
  }
  copy(e) {
    return super.copy(e), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this;
  }
}
class Wc extends mn {
  /**
   * Constructs a new Quadratic Bezier curve.
   *
   * @param {Vector2} [v0] - The start point.
   * @param {Vector2} [v1] - The control point.
   * @param {Vector2} [v2] - The end point.
   */
  constructor(e = new be(), t = new be(), n = new be()) {
    super(), this.isQuadraticBezierCurve = !0, this.type = "QuadraticBezierCurve", this.v0 = e, this.v1 = t, this.v2 = n;
  }
  /**
   * Returns a point on the curve.
   *
   * @param {number} t - A interpolation factor representing a position on the curve. Must be in the range `[0,1]`.
   * @param {Vector2} [optionalTarget] - The optional target vector the result is written to.
   * @return {Vector2} The position on the curve.
   */
  getPoint(e, t = new be()) {
    const n = t, r = this.v0, s = this.v1, a = this.v2;
    return n.set(
      bi(e, r.x, s.x, a.x),
      bi(e, r.y, s.y, a.y)
    ), n;
  }
  copy(e) {
    return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this;
  }
}
class el extends mn {
  /**
   * Constructs a new Quadratic Bezier curve.
   *
   * @param {Vector3} [v0] - The start point.
   * @param {Vector3} [v1] - The control point.
   * @param {Vector3} [v2] - The end point.
   */
  constructor(e = new I(), t = new I(), n = new I()) {
    super(), this.isQuadraticBezierCurve3 = !0, this.type = "QuadraticBezierCurve3", this.v0 = e, this.v1 = t, this.v2 = n;
  }
  /**
   * Returns a point on the curve.
   *
   * @param {number} t - A interpolation factor representing a position on the curve. Must be in the range `[0,1]`.
   * @param {Vector3} [optionalTarget] - The optional target vector the result is written to.
   * @return {Vector3} The position on the curve.
   */
  getPoint(e, t = new I()) {
    const n = t, r = this.v0, s = this.v1, a = this.v2;
    return n.set(
      bi(e, r.x, s.x, a.x),
      bi(e, r.y, s.y, a.y),
      bi(e, r.z, s.z, a.z)
    ), n;
  }
  copy(e) {
    return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this;
  }
}
class Xc extends mn {
  /**
   * Constructs a new 2D spline curve.
   *
   * @param {Array<Vector2>} [points] -  An array of 2D points defining the curve.
   */
  constructor(e = []) {
    super(), this.isSplineCurve = !0, this.type = "SplineCurve", this.points = e;
  }
  /**
   * Returns a point on the curve.
   *
   * @param {number} t - A interpolation factor representing a position on the curve. Must be in the range `[0,1]`.
   * @param {Vector2} [optionalTarget] - The optional target vector the result is written to.
   * @return {Vector2} The position on the curve.
   */
  getPoint(e, t = new be()) {
    const n = t, r = this.points, s = (r.length - 1) * e, a = Math.floor(s), o = s - a, c = r[a === 0 ? a : a - 1], l = r[a], h = r[a > r.length - 2 ? r.length - 1 : a + 1], m = r[a > r.length - 3 ? r.length - 1 : a + 2];
    return n.set(
      Ya(o, c.x, l.x, h.x, m.x),
      Ya(o, c.y, l.y, h.y, m.y)
    ), n;
  }
  copy(e) {
    super.copy(e), this.points = [];
    for (let t = 0, n = e.points.length; t < n; t++) {
      const r = e.points[t];
      this.points.push(r.clone());
    }
    return this;
  }
  toJSON() {
    const e = super.toJSON();
    e.points = [];
    for (let t = 0, n = this.points.length; t < n; t++) {
      const r = this.points[t];
      e.points.push(r.toArray());
    }
    return e;
  }
  fromJSON(e) {
    super.fromJSON(e), this.points = [];
    for (let t = 0, n = e.points.length; t < n; t++) {
      const r = e.points[t];
      this.points.push(new be().fromArray(r));
    }
    return this;
  }
}
var Yc = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ArcCurve: Dc,
  CatmullRomCurve3: Qo,
  CubicBezierCurve: Vc,
  CubicBezierCurve3: Gc,
  EllipseCurve: jo,
  LineCurve: Hc,
  LineCurve3: kc,
  QuadraticBezierCurve: Wc,
  QuadraticBezierCurve3: el,
  SplineCurve: Xc
});
class Ui extends kt {
  /**
   * Constructs a new plane geometry.
   *
   * @param {number} [width=1] - The width along the X axis.
   * @param {number} [height=1] - The height along the Y axis
   * @param {number} [widthSegments=1] - The number of segments along the X axis.
   * @param {number} [heightSegments=1] - The number of segments along the Y axis.
   */
  constructor(e = 1, t = 1, n = 1, r = 1) {
    super(), this.type = "PlaneGeometry", this.parameters = {
      width: e,
      height: t,
      widthSegments: n,
      heightSegments: r
    };
    const s = e / 2, a = t / 2, o = Math.floor(n), c = Math.floor(r), l = o + 1, h = c + 1, m = e / o, u = t / c, d = [], _ = [], M = [], p = [];
    for (let f = 0; f < h; f++) {
      const S = f * u - a;
      for (let b = 0; b < l; b++) {
        const E = b * m - s;
        _.push(E, -S, 0), M.push(0, 0, 1), p.push(b / o), p.push(1 - f / c);
      }
    }
    for (let f = 0; f < c; f++)
      for (let S = 0; S < o; S++) {
        const b = S + l * f, E = S + l * (f + 1), R = S + 1 + l * (f + 1), A = S + 1 + l * f;
        d.push(b, E, A), d.push(E, R, A);
      }
    this.setIndex(d), this.setAttribute("position", new Dt(_, 3)), this.setAttribute("normal", new Dt(M, 3)), this.setAttribute("uv", new Dt(p, 2));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  /**
   * Factory method for creating an instance of this class from the given
   * JSON object.
   *
   * @param {Object} data - A JSON object representing the serialized geometry.
   * @return {PlaneGeometry} A new instance.
   */
  static fromJSON(e) {
    return new Ui(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
class fa extends kt {
  /**
   * Constructs a new tube geometry.
   *
   * @param {Curve} [path=QuadraticBezierCurve3] - A 3D curve defining the path of the tube.
   * @param {number} [tubularSegments=64] - The number of segments that make up the tube.
   * @param {number} [radius=1] -The radius of the tube.
   * @param {number} [radialSegments=8] - The number of segments that make up the cross-section.
   * @param {boolean} [closed=false] - Whether the tube is closed or not.
   */
  constructor(e = new el(new I(-1, -1, 0), new I(-1, 1, 0), new I(1, 1, 0)), t = 64, n = 1, r = 8, s = !1) {
    super(), this.type = "TubeGeometry", this.parameters = {
      path: e,
      tubularSegments: t,
      radius: n,
      radialSegments: r,
      closed: s
    };
    const a = e.computeFrenetFrames(t, s);
    this.tangents = a.tangents, this.normals = a.normals, this.binormals = a.binormals;
    const o = new I(), c = new I(), l = new be();
    let h = new I();
    const m = [], u = [], d = [], _ = [];
    M(), this.setIndex(_), this.setAttribute("position", new Dt(m, 3)), this.setAttribute("normal", new Dt(u, 3)), this.setAttribute("uv", new Dt(d, 2));
    function M() {
      for (let b = 0; b < t; b++)
        p(b);
      p(s === !1 ? t : 0), S(), f();
    }
    function p(b) {
      h = e.getPointAt(b / t, h);
      const E = a.normals[b], R = a.binormals[b];
      for (let A = 0; A <= r; A++) {
        const L = A / r * Math.PI * 2, v = Math.sin(L), T = -Math.cos(L);
        c.x = T * E.x + v * R.x, c.y = T * E.y + v * R.y, c.z = T * E.z + v * R.z, c.normalize(), u.push(c.x, c.y, c.z), o.x = h.x + n * c.x, o.y = h.y + n * c.y, o.z = h.z + n * c.z, m.push(o.x, o.y, o.z);
      }
    }
    function f() {
      for (let b = 1; b <= t; b++)
        for (let E = 1; E <= r; E++) {
          const R = (r + 1) * (b - 1) + (E - 1), A = (r + 1) * b + (E - 1), L = (r + 1) * b + E, v = (r + 1) * (b - 1) + E;
          _.push(R, A, v), _.push(A, L, v);
        }
    }
    function S() {
      for (let b = 0; b <= t; b++)
        for (let E = 0; E <= r; E++)
          l.x = b / t, l.y = E / r, d.push(l.x, l.y);
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.path = this.parameters.path.toJSON(), e;
  }
  /**
   * Factory method for creating an instance of this class from the given
   * JSON object.
   *
   * @param {Object} data - A JSON object representing the serialized geometry.
   * @return {TubeGeometry} A new instance.
   */
  static fromJSON(e) {
    return new fa(
      new Yc[e.path.type]().fromJSON(e.path),
      e.tubularSegments,
      e.radius,
      e.radialSegments,
      e.closed
    );
  }
}
function ui(i) {
  const e = {};
  for (const t in i) {
    e[t] = {};
    for (const n in i[t]) {
      const r = i[t][n];
      r && (r.isColor || r.isMatrix3 || r.isMatrix4 || r.isVector2 || r.isVector3 || r.isVector4 || r.isTexture || r.isQuaternion) ? r.isRenderTargetTexture ? (Ce("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), e[t][n] = null) : e[t][n] = r.clone() : Array.isArray(r) ? e[t][n] = r.slice() : e[t][n] = r;
    }
  }
  return e;
}
function yt(i) {
  const e = {};
  for (let t = 0; t < i.length; t++) {
    const n = ui(i[t]);
    for (const r in n)
      e[r] = n[r];
  }
  return e;
}
function qc(i) {
  const e = [];
  for (let t = 0; t < i.length; t++)
    e.push(i[t].clone());
  return e;
}
function tl(i) {
  const e = i.getRenderTarget();
  return e === null ? i.outputColorSpace : e.isXRRenderTarget === !0 ? e.texture.colorSpace : He.workingColorSpace;
}
const Zc = { clone: ui, merge: yt };
var Jc = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, Kc = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class tn extends Ii {
  /**
   * Constructs a new shader material.
   *
   * @param {Object} [parameters] - An object with one or more properties
   * defining the material's appearance. Any property of the material
   * (including any property from inherited materials) can be passed
   * in here. Color values can be passed any type of value accepted
   * by {@link Color#set}.
   */
  constructor(e) {
    super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = Jc, this.fragmentShader = Kc, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.forceSinglePass = !0, this.extensions = {
      clipCullDistance: !1,
      // set to use vertex shader clipping
      multiDraw: !1
      // set to use vertex shader multi_draw / enable gl_DrawID
    }, this.defaultAttributeValues = {
      color: [1, 1, 1],
      uv: [0, 0],
      uv1: [0, 0]
    }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, e !== void 0 && this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = ui(e.uniforms), this.uniformsGroups = qc(e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this.defaultAttributeValues = Object.assign({}, e.defaultAttributeValues), this.index0AttributeName = e.index0AttributeName, this.uniformsNeedUpdate = e.uniformsNeedUpdate, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    t.glslVersion = this.glslVersion, t.uniforms = {};
    for (const r in this.uniforms) {
      const a = this.uniforms[r].value;
      a && a.isTexture ? t.uniforms[r] = {
        type: "t",
        value: a.toJSON(e).uuid
      } : a && a.isColor ? t.uniforms[r] = {
        type: "c",
        value: a.getHex()
      } : a && a.isVector2 ? t.uniforms[r] = {
        type: "v2",
        value: a.toArray()
      } : a && a.isVector3 ? t.uniforms[r] = {
        type: "v3",
        value: a.toArray()
      } : a && a.isVector4 ? t.uniforms[r] = {
        type: "v4",
        value: a.toArray()
      } : a && a.isMatrix3 ? t.uniforms[r] = {
        type: "m3",
        value: a.toArray()
      } : a && a.isMatrix4 ? t.uniforms[r] = {
        type: "m4",
        value: a.toArray()
      } : t.uniforms[r] = {
        value: a
      };
    }
    Object.keys(this.defines).length > 0 && (t.defines = this.defines), t.vertexShader = this.vertexShader, t.fragmentShader = this.fragmentShader, t.lights = this.lights, t.clipping = this.clipping;
    const n = {};
    for (const r in this.extensions)
      this.extensions[r] === !0 && (n[r] = !0);
    return Object.keys(n).length > 0 && (t.extensions = n), t;
  }
}
class $c extends tn {
  /**
   * Constructs a new raw shader material.
   *
   * @param {Object} [parameters] - An object with one or more properties
   * defining the material's appearance. Any property of the material
   * (including any property from inherited materials) can be passed
   * in here. Color values can be passed any type of value accepted
   * by {@link Color#set}.
   */
  constructor(e) {
    super(e), this.isRawShaderMaterial = !0, this.type = "RawShaderMaterial";
  }
}
class gr extends Ii {
  /**
   * Constructs a new mesh standard material.
   *
   * @param {Object} [parameters] - An object with one or more properties
   * defining the material's appearance. Any property of the material
   * (including any property from inherited materials) can be passed
   * in here. Color values can be passed any type of value accepted
   * by {@link Color#set}.
   */
  constructor(e) {
    super(), this.isMeshStandardMaterial = !0, this.type = "MeshStandardMaterial", this.defines = { STANDARD: "" }, this.color = new Ve(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Ve(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = Ho, this.normalScale = new be(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new en(), this.envMapIntensity = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.defines = { STANDARD: "" }, this.color.copy(e.color), this.roughness = e.roughness, this.metalness = e.metalness, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.roughnessMap = e.roughnessMap, this.metalnessMap = e.metalnessMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.envMapIntensity = e.envMapIntensity, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this;
  }
}
class jc extends Ii {
  /**
   * Constructs a new mesh depth material.
   *
   * @param {Object} [parameters] - An object with one or more properties
   * defining the material's appearance. Any property of the material
   * (including any property from inherited materials) can be passed
   * in here. Color values can be passed any type of value accepted
   * by {@link Color#set}.
   */
  constructor(e) {
    super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this.depthPacking = Zl, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this;
  }
}
class Qc extends Ii {
  /**
   * Constructs a new mesh distance material.
   *
   * @param {Object} [parameters] - An object with one or more properties
   * defining the material's appearance. Any property of the material
   * (including any property from inherited materials) can be passed
   * in here. Color values can be passed any type of value accepted
   * by {@link Color#set}.
   */
  constructor(e) {
    super(), this.isMeshDistanceMaterial = !0, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this;
  }
}
class nl extends ut {
  /**
   * Constructs a new light.
   *
   * @param {(number|Color|string)} [color=0xffffff] - The light's color.
   * @param {number} [intensity=1] - The light's strength/intensity.
   */
  constructor(e, t = 1) {
    super(), this.isLight = !0, this.type = "Light", this.color = new Ve(e), this.intensity = t;
  }
  /**
   * Frees the GPU-related resources allocated by this instance. Call this
   * method whenever this instance is no longer used in your app.
   */
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  copy(e, t) {
    return super.copy(e, t), this.color.copy(e.color), this.intensity = e.intensity, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.color = this.color.getHex(), t.object.intensity = this.intensity, t;
  }
}
class eu extends nl {
  /**
   * Constructs a new hemisphere light.
   *
   * @param {(number|Color|string)} [skyColor=0xffffff] - The light's sky color.
   * @param {(number|Color|string)} [groundColor=0xffffff] - The light's ground color.
   * @param {number} [intensity=1] - The light's strength/intensity.
   */
  constructor(e, t, n) {
    super(e, n), this.isHemisphereLight = !0, this.type = "HemisphereLight", this.position.copy(ut.DEFAULT_UP), this.updateMatrix(), this.groundColor = new Ve(t);
  }
  copy(e, t) {
    return super.copy(e, t), this.groundColor.copy(e.groundColor), this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.groundColor = this.groundColor.getHex(), t;
  }
}
const es = /* @__PURE__ */ new tt(), qa = /* @__PURE__ */ new I(), Za = /* @__PURE__ */ new I();
class tu {
  /**
   * Constructs a new light shadow.
   *
   * @param {Camera} camera - The light's view of the world.
   */
  constructor(e) {
    this.camera = e, this.intensity = 1, this.bias = 0, this.biasNode = null, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new be(512, 512), this.mapType = Lt, this.map = null, this.mapPass = null, this.matrix = new tt(), this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new ua(), this._frameExtents = new be(1, 1), this._viewportCount = 1, this._viewports = [
      new st(0, 0, 1, 1)
    ];
  }
  /**
   * Used internally by the renderer to get the number of viewports that need
   * to be rendered for this shadow.
   *
   * @return {number} The viewport count.
   */
  getViewportCount() {
    return this._viewportCount;
  }
  /**
   * Gets the shadow cameras frustum. Used internally by the renderer to cull objects.
   *
   * @return {Frustum} The shadow camera frustum.
   */
  getFrustum() {
    return this._frustum;
  }
  /**
   * Update the matrices for the camera and shadow, used internally by the renderer.
   *
   * @param {Light} light - The light for which the shadow is being rendered.
   */
  updateMatrices(e) {
    const t = this.camera, n = this.matrix;
    qa.setFromMatrixPosition(e.matrixWorld), t.position.copy(qa), Za.setFromMatrixPosition(e.target.matrixWorld), t.lookAt(Za), t.updateMatrixWorld(), es.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), this._frustum.setFromProjectionMatrix(es, t.coordinateSystem, t.reversedDepth), t.coordinateSystem === Ci || t.reversedDepth ? n.set(
      0.5,
      0,
      0,
      0.5,
      0,
      0.5,
      0,
      0.5,
      0,
      0,
      1,
      0,
      // Identity Z (preserving the correct [0, 1] range from the projection matrix)
      0,
      0,
      0,
      1
    ) : n.set(
      0.5,
      0,
      0,
      0.5,
      0,
      0.5,
      0,
      0.5,
      0,
      0,
      0.5,
      0.5,
      0,
      0,
      0,
      1
    ), n.multiply(es);
  }
  /**
   * Returns a viewport definition for the given viewport index.
   *
   * @param {number} viewportIndex - The viewport index.
   * @return {Vector4} The viewport.
   */
  getViewport(e) {
    return this._viewports[e];
  }
  /**
   * Returns the frame extends.
   *
   * @return {Vector2} The frame extends.
   */
  getFrameExtents() {
    return this._frameExtents;
  }
  /**
   * Frees the GPU-related resources allocated by this instance. Call this
   * method whenever this instance is no longer used in your app.
   */
  dispose() {
    this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
  }
  /**
   * Copies the values of the given light shadow instance to this instance.
   *
   * @param {LightShadow} source - The light shadow to copy.
   * @return {LightShadow} A reference to this light shadow instance.
   */
  copy(e) {
    return this.camera = e.camera.clone(), this.intensity = e.intensity, this.bias = e.bias, this.radius = e.radius, this.autoUpdate = e.autoUpdate, this.needsUpdate = e.needsUpdate, this.normalBias = e.normalBias, this.blurSamples = e.blurSamples, this.mapSize.copy(e.mapSize), this.biasNode = e.biasNode, this;
  }
  /**
   * Returns a new light shadow instance with copied values from this instance.
   *
   * @return {LightShadow} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
  /**
   * Serializes the light shadow into JSON.
   *
   * @return {Object} A JSON object representing the serialized light shadow.
   * @see {@link ObjectLoader#parse}
   */
  toJSON() {
    const e = {};
    return this.intensity !== 1 && (e.intensity = this.intensity), this.bias !== 0 && (e.bias = this.bias), this.normalBias !== 0 && (e.normalBias = this.normalBias), this.radius !== 1 && (e.radius = this.radius), (this.mapSize.x !== 512 || this.mapSize.y !== 512) && (e.mapSize = this.mapSize.toArray()), e.camera = this.camera.toJSON(!1).object, delete e.camera.matrix, e;
  }
}
const ir = /* @__PURE__ */ new I(), rr = /* @__PURE__ */ new di(), Xt = /* @__PURE__ */ new I();
class il extends ut {
  /**
   * Constructs a new camera.
   */
  constructor() {
    super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new tt(), this.projectionMatrix = new tt(), this.projectionMatrixInverse = new tt(), this.coordinateSystem = Jt, this._reversedDepth = !1;
  }
  /**
   * The flag that indicates whether the camera uses a reversed depth buffer.
   *
   * @type {boolean}
   * @default false
   */
  get reversedDepth() {
    return this._reversedDepth;
  }
  copy(e, t) {
    return super.copy(e, t), this.matrixWorldInverse.copy(e.matrixWorldInverse), this.projectionMatrix.copy(e.projectionMatrix), this.projectionMatrixInverse.copy(e.projectionMatrixInverse), this.coordinateSystem = e.coordinateSystem, this;
  }
  /**
   * Returns a vector representing the ("look") direction of the 3D object in world space.
   *
   * This method is overwritten since cameras have a different forward vector compared to other
   * 3D objects. A camera looks down its local, negative z-axis by default.
   *
   * @param {Vector3} target - The target vector the result is stored to.
   * @return {Vector3} The 3D object's direction in world space.
   */
  getWorldDirection(e) {
    return super.getWorldDirection(e).negate();
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e), this.matrixWorld.decompose(ir, rr, Xt), Xt.x === 1 && Xt.y === 1 && Xt.z === 1 ? this.matrixWorldInverse.copy(this.matrixWorld).invert() : this.matrixWorldInverse.compose(ir, rr, Xt.set(1, 1, 1)).invert();
  }
  updateWorldMatrix(e, t) {
    super.updateWorldMatrix(e, t), this.matrixWorld.decompose(ir, rr, Xt), Xt.x === 1 && Xt.y === 1 && Xt.z === 1 ? this.matrixWorldInverse.copy(this.matrixWorld).invert() : this.matrixWorldInverse.compose(ir, rr, Xt.set(1, 1, 1)).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const yn = /* @__PURE__ */ new I(), Ja = /* @__PURE__ */ new be(), Ka = /* @__PURE__ */ new be();
class Nt extends il {
  /**
   * Constructs a new perspective camera.
   *
   * @param {number} [fov=50] - The vertical field of view.
   * @param {number} [aspect=1] - The aspect ratio.
   * @param {number} [near=0.1] - The camera's near plane.
   * @param {number} [far=2000] - The camera's far plane.
   */
  constructor(e = 50, t = 1, n = 0.1, r = 2e3) {
    super(), this.isPerspectiveCamera = !0, this.type = "PerspectiveCamera", this.fov = e, this.zoom = 1, this.near = n, this.far = r, this.focus = 10, this.aspect = t, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = e.view === null ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this;
  }
  /**
   * Sets the FOV by focal length in respect to the current {@link PerspectiveCamera#filmGauge}.
   *
   * The default film gauge is 35, so that the focal length can be specified for
   * a 35mm (full frame) camera.
   *
   * @param {number} focalLength - Values for focal length and film gauge must have the same unit.
   */
  setFocalLength(e) {
    const t = 0.5 * this.getFilmHeight() / e;
    this.fov = Ks * 2 * Math.atan(t), this.updateProjectionMatrix();
  }
  /**
   * Returns the focal length from the current {@link PerspectiveCamera#fov} and
   * {@link PerspectiveCamera#filmGauge}.
   *
   * @return {number} The computed focal length.
   */
  getFocalLength() {
    const e = Math.tan(wr * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / e;
  }
  /**
   * Returns the current vertical field of view angle in degrees considering {@link PerspectiveCamera#zoom}.
   *
   * @return {number} The effective FOV.
   */
  getEffectiveFOV() {
    return Ks * 2 * Math.atan(
      Math.tan(wr * 0.5 * this.fov) / this.zoom
    );
  }
  /**
   * Returns the width of the image on the film. If {@link PerspectiveCamera#aspect} is greater than or
   * equal to one (landscape format), the result equals {@link PerspectiveCamera#filmGauge}.
   *
   * @return {number} The film width.
   */
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  /**
   * Returns the height of the image on the film. If {@link PerspectiveCamera#aspect} is greater than or
   * equal to one (landscape format), the result equals {@link PerspectiveCamera#filmGauge}.
   *
   * @return {number} The film width.
   */
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  /**
   * Computes the 2D bounds of the camera's viewable rectangle at a given distance along the viewing direction.
   * Sets `minTarget` and `maxTarget` to the coordinates of the lower-left and upper-right corners of the view rectangle.
   *
   * @param {number} distance - The viewing distance.
   * @param {Vector2} minTarget - The lower-left corner of the view rectangle is written into this vector.
   * @param {Vector2} maxTarget - The upper-right corner of the view rectangle is written into this vector.
   */
  getViewBounds(e, t, n) {
    yn.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse), t.set(yn.x, yn.y).multiplyScalar(-e / yn.z), yn.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse), n.set(yn.x, yn.y).multiplyScalar(-e / yn.z);
  }
  /**
   * Computes the width and height of the camera's viewable rectangle at a given distance along the viewing direction.
   *
   * @param {number} distance - The viewing distance.
   * @param {Vector2} target - The target vector that is used to store result where x is width and y is height.
   * @returns {Vector2} The view size.
   */
  getViewSize(e, t) {
    return this.getViewBounds(e, Ja, Ka), t.subVectors(Ka, Ja);
  }
  /**
   * Sets an offset in a larger frustum. This is useful for multi-window or
   * multi-monitor/multi-machine setups.
   *
   * For example, if you have 3x2 monitors and each monitor is 1920x1080 and
   * the monitors are in grid like this
   *```
   *   +---+---+---+
   *   | A | B | C |
   *   +---+---+---+
   *   | D | E | F |
   *   +---+---+---+
   *```
   * then for each monitor you would call it like this:
   *```js
   * const w = 1920;
   * const h = 1080;
   * const fullWidth = w * 3;
   * const fullHeight = h * 2;
   *
   * // --A--
   * camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 0, w, h );
   * // --B--
   * camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 0, w, h );
   * // --C--
   * camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 0, w, h );
   * // --D--
   * camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 1, w, h );
   * // --E--
   * camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 1, w, h );
   * // --F--
   * camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 1, w, h );
   * ```
   *
   * Note there is no reason monitors have to be the same size or in a grid.
   *
   * @param {number} fullWidth - The full width of multiview setup.
   * @param {number} fullHeight - The full height of multiview setup.
   * @param {number} x - The horizontal offset of the subcamera.
   * @param {number} y - The vertical offset of the subcamera.
   * @param {number} width - The width of subcamera.
   * @param {number} height - The height of subcamera.
   */
  setViewOffset(e, t, n, r, s, a) {
    this.aspect = e / t, this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = r, this.view.width = s, this.view.height = a, this.updateProjectionMatrix();
  }
  /**
   * Removes the view offset from the projection matrix.
   */
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  /**
   * Updates the camera's projection matrix. Must be called after any change of
   * camera properties.
   */
  updateProjectionMatrix() {
    const e = this.near;
    let t = e * Math.tan(wr * 0.5 * this.fov) / this.zoom, n = 2 * t, r = this.aspect * n, s = -0.5 * r;
    const a = this.view;
    if (this.view !== null && this.view.enabled) {
      const c = a.fullWidth, l = a.fullHeight;
      s += a.offsetX * r / c, t -= a.offsetY * n / l, r *= a.width / c, n *= a.height / l;
    }
    const o = this.filmOffset;
    o !== 0 && (s += e * o / this.getFilmWidth()), this.projectionMatrix.makePerspective(s, s + r, t, t - n, e, this.far, this.coordinateSystem, this.reversedDepth), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, this.view !== null && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t;
  }
}
class da extends il {
  /**
   * Constructs a new orthographic camera.
   *
   * @param {number} [left=-1] - The left plane of the camera's frustum.
   * @param {number} [right=1] - The right plane of the camera's frustum.
   * @param {number} [top=1] - The top plane of the camera's frustum.
   * @param {number} [bottom=-1] - The bottom plane of the camera's frustum.
   * @param {number} [near=0.1] - The camera's near plane.
   * @param {number} [far=2000] - The camera's far plane.
   */
  constructor(e = -1, t = 1, n = 1, r = -1, s = 0.1, a = 2e3) {
    super(), this.isOrthographicCamera = !0, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = e, this.right = t, this.top = n, this.bottom = r, this.near = s, this.far = a, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this.view = e.view === null ? null : Object.assign({}, e.view), this;
  }
  /**
   * Sets an offset in a larger frustum. This is useful for multi-window or
   * multi-monitor/multi-machine setups.
   *
   * @param {number} fullWidth - The full width of multiview setup.
   * @param {number} fullHeight - The full height of multiview setup.
   * @param {number} x - The horizontal offset of the subcamera.
   * @param {number} y - The vertical offset of the subcamera.
   * @param {number} width - The width of subcamera.
   * @param {number} height - The height of subcamera.
   * @see {@link PerspectiveCamera#setViewOffset}
   */
  setViewOffset(e, t, n, r, s, a) {
    this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = r, this.view.width = s, this.view.height = a, this.updateProjectionMatrix();
  }
  /**
   * Removes the view offset from the projection matrix.
   */
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  /**
   * Updates the camera's projection matrix. Must be called after any change of
   * camera properties.
   */
  updateProjectionMatrix() {
    const e = (this.right - this.left) / (2 * this.zoom), t = (this.top - this.bottom) / (2 * this.zoom), n = (this.right + this.left) / 2, r = (this.top + this.bottom) / 2;
    let s = n - e, a = n + e, o = r + t, c = r - t;
    if (this.view !== null && this.view.enabled) {
      const l = (this.right - this.left) / this.view.fullWidth / this.zoom, h = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      s += l * this.view.offsetX, a = s + l * this.view.width, o -= h * this.view.offsetY, c = o - h * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(s, a, o, c, this.near, this.far, this.coordinateSystem, this.reversedDepth), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, this.view !== null && (t.object.view = Object.assign({}, this.view)), t;
  }
}
class nu extends tu {
  /**
   * Constructs a new directional light shadow.
   */
  constructor() {
    super(new da(-5, 5, 5, -5, 0.5, 500)), this.isDirectionalLightShadow = !0;
  }
}
class iu extends nl {
  /**
   * Constructs a new directional light.
   *
   * @param {(number|Color|string)} [color=0xffffff] - The light's color.
   * @param {number} [intensity=1] - The light's strength/intensity.
   */
  constructor(e, t) {
    super(e, t), this.isDirectionalLight = !0, this.type = "DirectionalLight", this.position.copy(ut.DEFAULT_UP), this.updateMatrix(), this.target = new ut(), this.shadow = new nu();
  }
  dispose() {
    super.dispose(), this.shadow.dispose();
  }
  copy(e) {
    return super.copy(e), this.target = e.target.clone(), this.shadow = e.shadow.clone(), this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.shadow = this.shadow.toJSON(), t.object.target = this.target.uuid, t;
  }
}
const ei = -90, ti = 1;
class ru extends ut {
  /**
   * Constructs a new cube camera.
   *
   * @param {number} near - The camera's near plane.
   * @param {number} far - The camera's far plane.
   * @param {WebGLCubeRenderTarget} renderTarget - The cube render target.
   */
  constructor(e, t, n) {
    super(), this.type = "CubeCamera", this.renderTarget = n, this.coordinateSystem = null, this.activeMipmapLevel = 0;
    const r = new Nt(ei, ti, e, t);
    r.layers = this.layers, this.add(r);
    const s = new Nt(ei, ti, e, t);
    s.layers = this.layers, this.add(s);
    const a = new Nt(ei, ti, e, t);
    a.layers = this.layers, this.add(a);
    const o = new Nt(ei, ti, e, t);
    o.layers = this.layers, this.add(o);
    const c = new Nt(ei, ti, e, t);
    c.layers = this.layers, this.add(c);
    const l = new Nt(ei, ti, e, t);
    l.layers = this.layers, this.add(l);
  }
  /**
   * Must be called when the coordinate system of the cube camera is changed.
   */
  updateCoordinateSystem() {
    const e = this.coordinateSystem, t = this.children.concat(), [n, r, s, a, o, c] = t;
    for (const l of t) this.remove(l);
    if (e === Jt)
      n.up.set(0, 1, 0), n.lookAt(1, 0, 0), r.up.set(0, 1, 0), r.lookAt(-1, 0, 0), s.up.set(0, 0, -1), s.lookAt(0, 1, 0), a.up.set(0, 0, 1), a.lookAt(0, -1, 0), o.up.set(0, 1, 0), o.lookAt(0, 0, 1), c.up.set(0, 1, 0), c.lookAt(0, 0, -1);
    else if (e === Ci)
      n.up.set(0, -1, 0), n.lookAt(-1, 0, 0), r.up.set(0, -1, 0), r.lookAt(1, 0, 0), s.up.set(0, 0, 1), s.lookAt(0, 1, 0), a.up.set(0, 0, -1), a.lookAt(0, -1, 0), o.up.set(0, -1, 0), o.lookAt(0, 0, 1), c.up.set(0, -1, 0), c.lookAt(0, 0, -1);
    else
      throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + e);
    for (const l of t)
      this.add(l), l.updateMatrixWorld();
  }
  /**
   * Calling this method will render the given scene with the given renderer
   * into the cube render target of the camera.
   *
   * @param {(Renderer|WebGLRenderer)} renderer - The renderer.
   * @param {Scene} scene - The scene to render.
   */
  update(e, t) {
    this.parent === null && this.updateMatrixWorld();
    const { renderTarget: n, activeMipmapLevel: r } = this;
    this.coordinateSystem !== e.coordinateSystem && (this.coordinateSystem = e.coordinateSystem, this.updateCoordinateSystem());
    const [s, a, o, c, l, h] = this.children, m = e.getRenderTarget(), u = e.getActiveCubeFace(), d = e.getActiveMipmapLevel(), _ = e.xr.enabled;
    e.xr.enabled = !1;
    const M = n.texture.generateMipmaps;
    n.texture.generateMipmaps = !1;
    let p = !1;
    e.isWebGLRenderer === !0 ? p = e.state.buffers.depth.getReversed() : p = e.reversedDepthBuffer, e.setRenderTarget(n, 0, r), p && e.autoClear === !1 && e.clearDepth(), e.render(t, s), e.setRenderTarget(n, 1, r), p && e.autoClear === !1 && e.clearDepth(), e.render(t, a), e.setRenderTarget(n, 2, r), p && e.autoClear === !1 && e.clearDepth(), e.render(t, o), e.setRenderTarget(n, 3, r), p && e.autoClear === !1 && e.clearDepth(), e.render(t, c), e.setRenderTarget(n, 4, r), p && e.autoClear === !1 && e.clearDepth(), e.render(t, l), n.texture.generateMipmaps = M, e.setRenderTarget(n, 5, r), p && e.autoClear === !1 && e.clearDepth(), e.render(t, h), e.setRenderTarget(m, u, d), e.xr.enabled = _, n.texture.needsPMREMUpdate = !0;
  }
}
class su extends Nt {
  /**
   * Constructs a new array camera.
   *
   * @param {Array<PerspectiveCamera>} [array=[]] - An array of perspective sub cameras.
   */
  constructor(e = []) {
    super(), this.isArrayCamera = !0, this.isMultiViewCamera = !1, this.cameras = e;
  }
}
function $a(i, e, t, n) {
  const r = au(n);
  switch (t) {
    case zo:
      return i * e;
    case Go:
      return i * e / r.components * r.byteLength;
    case ia:
      return i * e / r.components * r.byteLength;
    case li:
      return i * e * 2 / r.components * r.byteLength;
    case ra:
      return i * e * 2 / r.components * r.byteLength;
    case Vo:
      return i * e * 3 / r.components * r.byteLength;
    case Ht:
      return i * e * 4 / r.components * r.byteLength;
    case sa:
      return i * e * 4 / r.components * r.byteLength;
    case cr:
    case ur:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case hr:
    case fr:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case xs:
    case Ss:
      return Math.max(i, 16) * Math.max(e, 8) / 4;
    case vs:
    case Ms:
      return Math.max(i, 8) * Math.max(e, 8) / 2;
    case Es:
    case ys:
    case bs:
    case As:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case Ts:
    case ws:
    case Rs:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case Cs:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case Ps:
      return Math.floor((i + 4) / 5) * Math.floor((e + 3) / 4) * 16;
    case Ls:
      return Math.floor((i + 4) / 5) * Math.floor((e + 4) / 5) * 16;
    case Ds:
      return Math.floor((i + 5) / 6) * Math.floor((e + 4) / 5) * 16;
    case Is:
      return Math.floor((i + 5) / 6) * Math.floor((e + 5) / 6) * 16;
    case Us:
      return Math.floor((i + 7) / 8) * Math.floor((e + 4) / 5) * 16;
    case Ns:
      return Math.floor((i + 7) / 8) * Math.floor((e + 5) / 6) * 16;
    case Fs:
      return Math.floor((i + 7) / 8) * Math.floor((e + 7) / 8) * 16;
    case Os:
      return Math.floor((i + 9) / 10) * Math.floor((e + 4) / 5) * 16;
    case Bs:
      return Math.floor((i + 9) / 10) * Math.floor((e + 5) / 6) * 16;
    case zs:
      return Math.floor((i + 9) / 10) * Math.floor((e + 7) / 8) * 16;
    case Vs:
      return Math.floor((i + 9) / 10) * Math.floor((e + 9) / 10) * 16;
    case Gs:
      return Math.floor((i + 11) / 12) * Math.floor((e + 9) / 10) * 16;
    case Hs:
      return Math.floor((i + 11) / 12) * Math.floor((e + 11) / 12) * 16;
    case ks:
    case Ws:
    case Xs:
      return Math.ceil(i / 4) * Math.ceil(e / 4) * 16;
    case Ys:
    case qs:
      return Math.ceil(i / 4) * Math.ceil(e / 4) * 8;
    case Zs:
    case Js:
      return Math.ceil(i / 4) * Math.ceil(e / 4) * 16;
  }
  throw new Error(
    `Unable to determine texture byte length for ${t} format.`
  );
}
function au(i) {
  switch (i) {
    case Lt:
    case No:
      return { byteLength: 1, components: 1 };
    case wi:
    case Fo:
    case dn:
      return { byteLength: 2, components: 1 };
    case ta:
    case na:
      return { byteLength: 2, components: 4 };
    case Qt:
    case ea:
    case Zt:
      return { byteLength: 4, components: 1 };
    case Oo:
    case Bo:
      return { byteLength: 4, components: 3 };
  }
  throw new Error(`Unknown texture type ${i}.`);
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: {
  revision: Qs
} }));
typeof window < "u" && (window.__THREE__ ? Ce("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = Qs);
/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
function rl() {
  let i = null, e = !1, t = null, n = null;
  function r(s, a) {
    t(s, a), n = i.requestAnimationFrame(r);
  }
  return {
    start: function() {
      e !== !0 && t !== null && (n = i.requestAnimationFrame(r), e = !0);
    },
    stop: function() {
      i.cancelAnimationFrame(n), e = !1;
    },
    setAnimationLoop: function(s) {
      t = s;
    },
    setContext: function(s) {
      i = s;
    }
  };
}
function ou(i) {
  const e = /* @__PURE__ */ new WeakMap();
  function t(o, c) {
    const l = o.array, h = o.usage, m = l.byteLength, u = i.createBuffer();
    i.bindBuffer(c, u), i.bufferData(c, l, h), o.onUploadCallback();
    let d;
    if (l instanceof Float32Array)
      d = i.FLOAT;
    else if (typeof Float16Array < "u" && l instanceof Float16Array)
      d = i.HALF_FLOAT;
    else if (l instanceof Uint16Array)
      o.isFloat16BufferAttribute ? d = i.HALF_FLOAT : d = i.UNSIGNED_SHORT;
    else if (l instanceof Int16Array)
      d = i.SHORT;
    else if (l instanceof Uint32Array)
      d = i.UNSIGNED_INT;
    else if (l instanceof Int32Array)
      d = i.INT;
    else if (l instanceof Int8Array)
      d = i.BYTE;
    else if (l instanceof Uint8Array)
      d = i.UNSIGNED_BYTE;
    else if (l instanceof Uint8ClampedArray)
      d = i.UNSIGNED_BYTE;
    else
      throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + l);
    return {
      buffer: u,
      type: d,
      bytesPerElement: l.BYTES_PER_ELEMENT,
      version: o.version,
      size: m
    };
  }
  function n(o, c, l) {
    const h = c.array, m = c.updateRanges;
    if (i.bindBuffer(l, o), m.length === 0)
      i.bufferSubData(l, 0, h);
    else {
      m.sort((d, _) => d.start - _.start);
      let u = 0;
      for (let d = 1; d < m.length; d++) {
        const _ = m[u], M = m[d];
        M.start <= _.start + _.count + 1 ? _.count = Math.max(
          _.count,
          M.start + M.count - _.start
        ) : (++u, m[u] = M);
      }
      m.length = u + 1;
      for (let d = 0, _ = m.length; d < _; d++) {
        const M = m[d];
        i.bufferSubData(
          l,
          M.start * h.BYTES_PER_ELEMENT,
          h,
          M.start,
          M.count
        );
      }
      c.clearUpdateRanges();
    }
    c.onUploadCallback();
  }
  function r(o) {
    return o.isInterleavedBufferAttribute && (o = o.data), e.get(o);
  }
  function s(o) {
    o.isInterleavedBufferAttribute && (o = o.data);
    const c = e.get(o);
    c && (i.deleteBuffer(c.buffer), e.delete(o));
  }
  function a(o, c) {
    if (o.isInterleavedBufferAttribute && (o = o.data), o.isGLBufferAttribute) {
      const h = e.get(o);
      (!h || h.version < o.version) && e.set(o, {
        buffer: o.buffer,
        type: o.type,
        bytesPerElement: o.elementSize,
        version: o.version
      });
      return;
    }
    const l = e.get(o);
    if (l === void 0)
      e.set(o, t(o, c));
    else if (l.version < o.version) {
      if (l.size !== o.array.byteLength)
        throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");
      n(l.buffer, o, c), l.version = o.version;
    }
  }
  return {
    get: r,
    remove: s,
    update: a
  };
}
var lu = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`, cu = `#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`, uu = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`, hu = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, fu = `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`, du = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, pu = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`, mu = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, _u = `#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`, gu = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`, vu = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`, xu = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, Mu = `float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`, Su = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`, Eu = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`, yu = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`, Tu = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, bu = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, Au = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, wu = `#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`, Ru = `#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`, Cu = `#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`, Pu = `#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`, Lu = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`, Du = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`, Iu = `vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`, Uu = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, Nu = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`, Fu = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, Ou = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, Bu = "gl_FragColor = linearToOutputTexel( gl_FragColor );", zu = `vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`, Vu = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`, Gu = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`, Hu = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`, ku = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, Wu = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`, Xu = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, Yu = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, qu = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, Zu = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, Ju = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`, Ku = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, $u = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, ju = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`, Qu = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`, eh = `#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`, th = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, nh = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`, ih = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, rh = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`, sh = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`, ah = `uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`, oh = `
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`, lh = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`, ch = `#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`, uh = `#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, hh = `#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, fh = `#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, dh = `#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`, ph = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`, mh = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, _h = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`, gh = `#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, vh = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`, xh = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, Mh = `#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`, Sh = `#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, Eh = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, yh = `#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`, Th = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, bh = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`, Ah = `#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`, wh = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Rh = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Ch = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, Ph = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`, Lh = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`, Dh = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`, Ih = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`, Uh = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, Nh = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, Fh = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`, Oh = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, Bh = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, zh = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, Vh = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, Gh = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`, Hh = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, kh = `#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`, Wh = `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`, Xh = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`, Yh = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`, qh = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, Zh = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`, Jh = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, Kh = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`, $h = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, jh = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, Qh = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, ef = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`, tf = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`, nf = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`, rf = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, sf = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, af = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`, of = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const lf = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, cf = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, uf = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, hf = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, ff = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, df = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, pf = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`, mf = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`, _f = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`, gf = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`, vf = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, xf = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Mf = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, Sf = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, Ef = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`, yf = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Tf = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, bf = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Af = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`, wf = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Rf = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`, Cf = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`, Pf = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Lf = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Df = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`, If = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Uf = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Nf = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Ff = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`, Of = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, Bf = `#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, zf = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, Vf = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, Gf = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, Ne = {
  alphahash_fragment: lu,
  alphahash_pars_fragment: cu,
  alphamap_fragment: uu,
  alphamap_pars_fragment: hu,
  alphatest_fragment: fu,
  alphatest_pars_fragment: du,
  aomap_fragment: pu,
  aomap_pars_fragment: mu,
  batching_pars_vertex: _u,
  batching_vertex: gu,
  begin_vertex: vu,
  beginnormal_vertex: xu,
  bsdfs: Mu,
  iridescence_fragment: Su,
  bumpmap_pars_fragment: Eu,
  clipping_planes_fragment: yu,
  clipping_planes_pars_fragment: Tu,
  clipping_planes_pars_vertex: bu,
  clipping_planes_vertex: Au,
  color_fragment: wu,
  color_pars_fragment: Ru,
  color_pars_vertex: Cu,
  color_vertex: Pu,
  common: Lu,
  cube_uv_reflection_fragment: Du,
  defaultnormal_vertex: Iu,
  displacementmap_pars_vertex: Uu,
  displacementmap_vertex: Nu,
  emissivemap_fragment: Fu,
  emissivemap_pars_fragment: Ou,
  colorspace_fragment: Bu,
  colorspace_pars_fragment: zu,
  envmap_fragment: Vu,
  envmap_common_pars_fragment: Gu,
  envmap_pars_fragment: Hu,
  envmap_pars_vertex: ku,
  envmap_physical_pars_fragment: eh,
  envmap_vertex: Wu,
  fog_vertex: Xu,
  fog_pars_vertex: Yu,
  fog_fragment: qu,
  fog_pars_fragment: Zu,
  gradientmap_pars_fragment: Ju,
  lightmap_pars_fragment: Ku,
  lights_lambert_fragment: $u,
  lights_lambert_pars_fragment: ju,
  lights_pars_begin: Qu,
  lights_toon_fragment: th,
  lights_toon_pars_fragment: nh,
  lights_phong_fragment: ih,
  lights_phong_pars_fragment: rh,
  lights_physical_fragment: sh,
  lights_physical_pars_fragment: ah,
  lights_fragment_begin: oh,
  lights_fragment_maps: lh,
  lights_fragment_end: ch,
  logdepthbuf_fragment: uh,
  logdepthbuf_pars_fragment: hh,
  logdepthbuf_pars_vertex: fh,
  logdepthbuf_vertex: dh,
  map_fragment: ph,
  map_pars_fragment: mh,
  map_particle_fragment: _h,
  map_particle_pars_fragment: gh,
  metalnessmap_fragment: vh,
  metalnessmap_pars_fragment: xh,
  morphinstance_vertex: Mh,
  morphcolor_vertex: Sh,
  morphnormal_vertex: Eh,
  morphtarget_pars_vertex: yh,
  morphtarget_vertex: Th,
  normal_fragment_begin: bh,
  normal_fragment_maps: Ah,
  normal_pars_fragment: wh,
  normal_pars_vertex: Rh,
  normal_vertex: Ch,
  normalmap_pars_fragment: Ph,
  clearcoat_normal_fragment_begin: Lh,
  clearcoat_normal_fragment_maps: Dh,
  clearcoat_pars_fragment: Ih,
  iridescence_pars_fragment: Uh,
  opaque_fragment: Nh,
  packing: Fh,
  premultiplied_alpha_fragment: Oh,
  project_vertex: Bh,
  dithering_fragment: zh,
  dithering_pars_fragment: Vh,
  roughnessmap_fragment: Gh,
  roughnessmap_pars_fragment: Hh,
  shadowmap_pars_fragment: kh,
  shadowmap_pars_vertex: Wh,
  shadowmap_vertex: Xh,
  shadowmask_pars_fragment: Yh,
  skinbase_vertex: qh,
  skinning_pars_vertex: Zh,
  skinning_vertex: Jh,
  skinnormal_vertex: Kh,
  specularmap_fragment: $h,
  specularmap_pars_fragment: jh,
  tonemapping_fragment: Qh,
  tonemapping_pars_fragment: ef,
  transmission_fragment: tf,
  transmission_pars_fragment: nf,
  uv_pars_fragment: rf,
  uv_pars_vertex: sf,
  uv_vertex: af,
  worldpos_vertex: of,
  background_vert: lf,
  background_frag: cf,
  backgroundCube_vert: uf,
  backgroundCube_frag: hf,
  cube_vert: ff,
  cube_frag: df,
  depth_vert: pf,
  depth_frag: mf,
  distance_vert: _f,
  distance_frag: gf,
  equirect_vert: vf,
  equirect_frag: xf,
  linedashed_vert: Mf,
  linedashed_frag: Sf,
  meshbasic_vert: Ef,
  meshbasic_frag: yf,
  meshlambert_vert: Tf,
  meshlambert_frag: bf,
  meshmatcap_vert: Af,
  meshmatcap_frag: wf,
  meshnormal_vert: Rf,
  meshnormal_frag: Cf,
  meshphong_vert: Pf,
  meshphong_frag: Lf,
  meshphysical_vert: Df,
  meshphysical_frag: If,
  meshtoon_vert: Uf,
  meshtoon_frag: Nf,
  points_vert: Ff,
  points_frag: Of,
  shadow_vert: Bf,
  shadow_frag: zf,
  sprite_vert: Vf,
  sprite_frag: Gf
}, ae = {
  common: {
    diffuse: { value: /* @__PURE__ */ new Ve(16777215) },
    opacity: { value: 1 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new Ie() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Ie() },
    alphaTest: { value: 0 }
  },
  specularmap: {
    specularMap: { value: null },
    specularMapTransform: { value: /* @__PURE__ */ new Ie() }
  },
  envmap: {
    envMap: { value: null },
    envMapRotation: { value: /* @__PURE__ */ new Ie() },
    flipEnvMap: { value: -1 },
    reflectivity: { value: 1 },
    // basic, lambert, phong
    ior: { value: 1.5 },
    // physical
    refractionRatio: { value: 0.98 },
    // basic, lambert, phong
    dfgLUT: { value: null }
    // DFG LUT for physically-based rendering
  },
  aomap: {
    aoMap: { value: null },
    aoMapIntensity: { value: 1 },
    aoMapTransform: { value: /* @__PURE__ */ new Ie() }
  },
  lightmap: {
    lightMap: { value: null },
    lightMapIntensity: { value: 1 },
    lightMapTransform: { value: /* @__PURE__ */ new Ie() }
  },
  bumpmap: {
    bumpMap: { value: null },
    bumpMapTransform: { value: /* @__PURE__ */ new Ie() },
    bumpScale: { value: 1 }
  },
  normalmap: {
    normalMap: { value: null },
    normalMapTransform: { value: /* @__PURE__ */ new Ie() },
    normalScale: { value: /* @__PURE__ */ new be(1, 1) }
  },
  displacementmap: {
    displacementMap: { value: null },
    displacementMapTransform: { value: /* @__PURE__ */ new Ie() },
    displacementScale: { value: 1 },
    displacementBias: { value: 0 }
  },
  emissivemap: {
    emissiveMap: { value: null },
    emissiveMapTransform: { value: /* @__PURE__ */ new Ie() }
  },
  metalnessmap: {
    metalnessMap: { value: null },
    metalnessMapTransform: { value: /* @__PURE__ */ new Ie() }
  },
  roughnessmap: {
    roughnessMap: { value: null },
    roughnessMapTransform: { value: /* @__PURE__ */ new Ie() }
  },
  gradientmap: {
    gradientMap: { value: null }
  },
  fog: {
    fogDensity: { value: 25e-5 },
    fogNear: { value: 1 },
    fogFar: { value: 2e3 },
    fogColor: { value: /* @__PURE__ */ new Ve(16777215) }
  },
  lights: {
    ambientLightColor: { value: [] },
    lightProbe: { value: [] },
    directionalLights: { value: [], properties: {
      direction: {},
      color: {}
    } },
    directionalLightShadows: { value: [], properties: {
      shadowIntensity: 1,
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },
    directionalShadowMatrix: { value: [] },
    spotLights: { value: [], properties: {
      color: {},
      position: {},
      direction: {},
      distance: {},
      coneCos: {},
      penumbraCos: {},
      decay: {}
    } },
    spotLightShadows: { value: [], properties: {
      shadowIntensity: 1,
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },
    spotLightMap: { value: [] },
    spotLightMatrix: { value: [] },
    pointLights: { value: [], properties: {
      color: {},
      position: {},
      decay: {},
      distance: {}
    } },
    pointLightShadows: { value: [], properties: {
      shadowIntensity: 1,
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {},
      shadowCameraNear: {},
      shadowCameraFar: {}
    } },
    pointShadowMatrix: { value: [] },
    hemisphereLights: { value: [], properties: {
      direction: {},
      skyColor: {},
      groundColor: {}
    } },
    // TODO (abelnation): RectAreaLight BRDF data needs to be moved from example to main src
    rectAreaLights: { value: [], properties: {
      color: {},
      position: {},
      width: {},
      height: {}
    } },
    ltc_1: { value: null },
    ltc_2: { value: null }
  },
  points: {
    diffuse: { value: /* @__PURE__ */ new Ve(16777215) },
    opacity: { value: 1 },
    size: { value: 1 },
    scale: { value: 1 },
    map: { value: null },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Ie() },
    alphaTest: { value: 0 },
    uvTransform: { value: /* @__PURE__ */ new Ie() }
  },
  sprite: {
    diffuse: { value: /* @__PURE__ */ new Ve(16777215) },
    opacity: { value: 1 },
    center: { value: /* @__PURE__ */ new be(0.5, 0.5) },
    rotation: { value: 0 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new Ie() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Ie() },
    alphaTest: { value: 0 }
  }
}, qt = {
  basic: {
    uniforms: /* @__PURE__ */ yt([
      ae.common,
      ae.specularmap,
      ae.envmap,
      ae.aomap,
      ae.lightmap,
      ae.fog
    ]),
    vertexShader: Ne.meshbasic_vert,
    fragmentShader: Ne.meshbasic_frag
  },
  lambert: {
    uniforms: /* @__PURE__ */ yt([
      ae.common,
      ae.specularmap,
      ae.envmap,
      ae.aomap,
      ae.lightmap,
      ae.emissivemap,
      ae.bumpmap,
      ae.normalmap,
      ae.displacementmap,
      ae.fog,
      ae.lights,
      {
        emissive: { value: /* @__PURE__ */ new Ve(0) },
        envMapIntensity: { value: 1 }
      }
    ]),
    vertexShader: Ne.meshlambert_vert,
    fragmentShader: Ne.meshlambert_frag
  },
  phong: {
    uniforms: /* @__PURE__ */ yt([
      ae.common,
      ae.specularmap,
      ae.envmap,
      ae.aomap,
      ae.lightmap,
      ae.emissivemap,
      ae.bumpmap,
      ae.normalmap,
      ae.displacementmap,
      ae.fog,
      ae.lights,
      {
        emissive: { value: /* @__PURE__ */ new Ve(0) },
        specular: { value: /* @__PURE__ */ new Ve(1118481) },
        shininess: { value: 30 },
        envMapIntensity: { value: 1 }
      }
    ]),
    vertexShader: Ne.meshphong_vert,
    fragmentShader: Ne.meshphong_frag
  },
  standard: {
    uniforms: /* @__PURE__ */ yt([
      ae.common,
      ae.envmap,
      ae.aomap,
      ae.lightmap,
      ae.emissivemap,
      ae.bumpmap,
      ae.normalmap,
      ae.displacementmap,
      ae.roughnessmap,
      ae.metalnessmap,
      ae.fog,
      ae.lights,
      {
        emissive: { value: /* @__PURE__ */ new Ve(0) },
        roughness: { value: 1 },
        metalness: { value: 0 },
        envMapIntensity: { value: 1 }
      }
    ]),
    vertexShader: Ne.meshphysical_vert,
    fragmentShader: Ne.meshphysical_frag
  },
  toon: {
    uniforms: /* @__PURE__ */ yt([
      ae.common,
      ae.aomap,
      ae.lightmap,
      ae.emissivemap,
      ae.bumpmap,
      ae.normalmap,
      ae.displacementmap,
      ae.gradientmap,
      ae.fog,
      ae.lights,
      {
        emissive: { value: /* @__PURE__ */ new Ve(0) }
      }
    ]),
    vertexShader: Ne.meshtoon_vert,
    fragmentShader: Ne.meshtoon_frag
  },
  matcap: {
    uniforms: /* @__PURE__ */ yt([
      ae.common,
      ae.bumpmap,
      ae.normalmap,
      ae.displacementmap,
      ae.fog,
      {
        matcap: { value: null }
      }
    ]),
    vertexShader: Ne.meshmatcap_vert,
    fragmentShader: Ne.meshmatcap_frag
  },
  points: {
    uniforms: /* @__PURE__ */ yt([
      ae.points,
      ae.fog
    ]),
    vertexShader: Ne.points_vert,
    fragmentShader: Ne.points_frag
  },
  dashed: {
    uniforms: /* @__PURE__ */ yt([
      ae.common,
      ae.fog,
      {
        scale: { value: 1 },
        dashSize: { value: 1 },
        totalSize: { value: 2 }
      }
    ]),
    vertexShader: Ne.linedashed_vert,
    fragmentShader: Ne.linedashed_frag
  },
  depth: {
    uniforms: /* @__PURE__ */ yt([
      ae.common,
      ae.displacementmap
    ]),
    vertexShader: Ne.depth_vert,
    fragmentShader: Ne.depth_frag
  },
  normal: {
    uniforms: /* @__PURE__ */ yt([
      ae.common,
      ae.bumpmap,
      ae.normalmap,
      ae.displacementmap,
      {
        opacity: { value: 1 }
      }
    ]),
    vertexShader: Ne.meshnormal_vert,
    fragmentShader: Ne.meshnormal_frag
  },
  sprite: {
    uniforms: /* @__PURE__ */ yt([
      ae.sprite,
      ae.fog
    ]),
    vertexShader: Ne.sprite_vert,
    fragmentShader: Ne.sprite_frag
  },
  background: {
    uniforms: {
      uvTransform: { value: /* @__PURE__ */ new Ie() },
      t2D: { value: null },
      backgroundIntensity: { value: 1 }
    },
    vertexShader: Ne.background_vert,
    fragmentShader: Ne.background_frag
  },
  backgroundCube: {
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 },
      backgroundBlurriness: { value: 0 },
      backgroundIntensity: { value: 1 },
      backgroundRotation: { value: /* @__PURE__ */ new Ie() }
    },
    vertexShader: Ne.backgroundCube_vert,
    fragmentShader: Ne.backgroundCube_frag
  },
  cube: {
    uniforms: {
      tCube: { value: null },
      tFlip: { value: -1 },
      opacity: { value: 1 }
    },
    vertexShader: Ne.cube_vert,
    fragmentShader: Ne.cube_frag
  },
  equirect: {
    uniforms: {
      tEquirect: { value: null }
    },
    vertexShader: Ne.equirect_vert,
    fragmentShader: Ne.equirect_frag
  },
  distance: {
    uniforms: /* @__PURE__ */ yt([
      ae.common,
      ae.displacementmap,
      {
        referencePosition: { value: /* @__PURE__ */ new I() },
        nearDistance: { value: 1 },
        farDistance: { value: 1e3 }
      }
    ]),
    vertexShader: Ne.distance_vert,
    fragmentShader: Ne.distance_frag
  },
  shadow: {
    uniforms: /* @__PURE__ */ yt([
      ae.lights,
      ae.fog,
      {
        color: { value: /* @__PURE__ */ new Ve(0) },
        opacity: { value: 1 }
      }
    ]),
    vertexShader: Ne.shadow_vert,
    fragmentShader: Ne.shadow_frag
  }
};
qt.physical = {
  uniforms: /* @__PURE__ */ yt([
    qt.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatMapTransform: { value: /* @__PURE__ */ new Ie() },
      clearcoatNormalMap: { value: null },
      clearcoatNormalMapTransform: { value: /* @__PURE__ */ new Ie() },
      clearcoatNormalScale: { value: /* @__PURE__ */ new be(1, 1) },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatRoughnessMapTransform: { value: /* @__PURE__ */ new Ie() },
      dispersion: { value: 0 },
      iridescence: { value: 0 },
      iridescenceMap: { value: null },
      iridescenceMapTransform: { value: /* @__PURE__ */ new Ie() },
      iridescenceIOR: { value: 1.3 },
      iridescenceThicknessMinimum: { value: 100 },
      iridescenceThicknessMaximum: { value: 400 },
      iridescenceThicknessMap: { value: null },
      iridescenceThicknessMapTransform: { value: /* @__PURE__ */ new Ie() },
      sheen: { value: 0 },
      sheenColor: { value: /* @__PURE__ */ new Ve(0) },
      sheenColorMap: { value: null },
      sheenColorMapTransform: { value: /* @__PURE__ */ new Ie() },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      sheenRoughnessMapTransform: { value: /* @__PURE__ */ new Ie() },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionMapTransform: { value: /* @__PURE__ */ new Ie() },
      transmissionSamplerSize: { value: /* @__PURE__ */ new be() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      thicknessMapTransform: { value: /* @__PURE__ */ new Ie() },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: /* @__PURE__ */ new Ve(0) },
      specularColor: { value: /* @__PURE__ */ new Ve(1, 1, 1) },
      specularColorMap: { value: null },
      specularColorMapTransform: { value: /* @__PURE__ */ new Ie() },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularIntensityMapTransform: { value: /* @__PURE__ */ new Ie() },
      anisotropyVector: { value: /* @__PURE__ */ new be() },
      anisotropyMap: { value: null },
      anisotropyMapTransform: { value: /* @__PURE__ */ new Ie() }
    }
  ]),
  vertexShader: Ne.meshphysical_vert,
  fragmentShader: Ne.meshphysical_frag
};
const sr = { r: 0, b: 0, g: 0 }, In = /* @__PURE__ */ new en(), Hf = /* @__PURE__ */ new tt();
function kf(i, e, t, n, r, s) {
  const a = new Ve(0);
  let o = r === !0 ? 0 : 1, c, l, h = null, m = 0, u = null;
  function d(S) {
    let b = S.isScene === !0 ? S.background : null;
    if (b && b.isTexture) {
      const E = S.backgroundBlurriness > 0;
      b = e.get(b, E);
    }
    return b;
  }
  function _(S) {
    let b = !1;
    const E = d(S);
    E === null ? p(a, o) : E && E.isColor && (p(E, 1), b = !0);
    const R = i.xr.getEnvironmentBlendMode();
    R === "additive" ? t.buffers.color.setClear(0, 0, 0, 1, s) : R === "alpha-blend" && t.buffers.color.setClear(0, 0, 0, 0, s), (i.autoClear || b) && (t.buffers.depth.setTest(!0), t.buffers.depth.setMask(!0), t.buffers.color.setMask(!0), i.clear(i.autoClearColor, i.autoClearDepth, i.autoClearStencil));
  }
  function M(S, b) {
    const E = d(b);
    E && (E.isCubeTexture || E.mapping === xr) ? (l === void 0 && (l = new bt(
      new pi(1, 1, 1),
      new tn({
        name: "BackgroundCubeMaterial",
        uniforms: ui(qt.backgroundCube.uniforms),
        vertexShader: qt.backgroundCube.vertexShader,
        fragmentShader: qt.backgroundCube.fragmentShader,
        side: wt,
        depthTest: !1,
        depthWrite: !1,
        fog: !1,
        allowOverride: !1
      })
    ), l.geometry.deleteAttribute("normal"), l.geometry.deleteAttribute("uv"), l.onBeforeRender = function(R, A, L) {
      this.matrixWorld.copyPosition(L.matrixWorld);
    }, Object.defineProperty(l.material, "envMap", {
      get: function() {
        return this.uniforms.envMap.value;
      }
    }), n.update(l)), In.copy(b.backgroundRotation), In.x *= -1, In.y *= -1, In.z *= -1, E.isCubeTexture && E.isRenderTargetTexture === !1 && (In.y *= -1, In.z *= -1), l.material.uniforms.envMap.value = E, l.material.uniforms.flipEnvMap.value = E.isCubeTexture && E.isRenderTargetTexture === !1 ? -1 : 1, l.material.uniforms.backgroundBlurriness.value = b.backgroundBlurriness, l.material.uniforms.backgroundIntensity.value = b.backgroundIntensity, l.material.uniforms.backgroundRotation.value.setFromMatrix4(Hf.makeRotationFromEuler(In)), l.material.toneMapped = He.getTransfer(E.colorSpace) !== Ze, (h !== E || m !== E.version || u !== i.toneMapping) && (l.material.needsUpdate = !0, h = E, m = E.version, u = i.toneMapping), l.layers.enableAll(), S.unshift(l, l.geometry, l.material, 0, 0, null)) : E && E.isTexture && (c === void 0 && (c = new bt(
      new Ui(2, 2),
      new tn({
        name: "BackgroundMaterial",
        uniforms: ui(qt.background.uniforms),
        vertexShader: qt.background.vertexShader,
        fragmentShader: qt.background.fragmentShader,
        side: An,
        depthTest: !1,
        depthWrite: !1,
        fog: !1,
        allowOverride: !1
      })
    ), c.geometry.deleteAttribute("normal"), Object.defineProperty(c.material, "map", {
      get: function() {
        return this.uniforms.t2D.value;
      }
    }), n.update(c)), c.material.uniforms.t2D.value = E, c.material.uniforms.backgroundIntensity.value = b.backgroundIntensity, c.material.toneMapped = He.getTransfer(E.colorSpace) !== Ze, E.matrixAutoUpdate === !0 && E.updateMatrix(), c.material.uniforms.uvTransform.value.copy(E.matrix), (h !== E || m !== E.version || u !== i.toneMapping) && (c.material.needsUpdate = !0, h = E, m = E.version, u = i.toneMapping), c.layers.enableAll(), S.unshift(c, c.geometry, c.material, 0, 0, null));
  }
  function p(S, b) {
    S.getRGB(sr, tl(i)), t.buffers.color.setClear(sr.r, sr.g, sr.b, b, s);
  }
  function f() {
    l !== void 0 && (l.geometry.dispose(), l.material.dispose(), l = void 0), c !== void 0 && (c.geometry.dispose(), c.material.dispose(), c = void 0);
  }
  return {
    getClearColor: function() {
      return a;
    },
    setClearColor: function(S, b = 1) {
      a.set(S), o = b, p(a, o);
    },
    getClearAlpha: function() {
      return o;
    },
    setClearAlpha: function(S) {
      o = S, p(a, o);
    },
    render: _,
    addToRenderList: M,
    dispose: f
  };
}
function Wf(i, e) {
  const t = i.getParameter(i.MAX_VERTEX_ATTRIBS), n = {}, r = u(null);
  let s = r, a = !1;
  function o(C, G, z, k, H) {
    let B = !1;
    const O = m(C, k, z, G);
    s !== O && (s = O, l(s.object)), B = d(C, k, z, H), B && _(C, k, z, H), H !== null && e.update(H, i.ELEMENT_ARRAY_BUFFER), (B || a) && (a = !1, E(C, G, z, k), H !== null && i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, e.get(H).buffer));
  }
  function c() {
    return i.createVertexArray();
  }
  function l(C) {
    return i.bindVertexArray(C);
  }
  function h(C) {
    return i.deleteVertexArray(C);
  }
  function m(C, G, z, k) {
    const H = k.wireframe === !0;
    let B = n[G.id];
    B === void 0 && (B = {}, n[G.id] = B);
    const O = C.isInstancedMesh === !0 ? C.id : 0;
    let Q = B[O];
    Q === void 0 && (Q = {}, B[O] = Q);
    let K = Q[z.id];
    K === void 0 && (K = {}, Q[z.id] = K);
    let ce = K[H];
    return ce === void 0 && (ce = u(c()), K[H] = ce), ce;
  }
  function u(C) {
    const G = [], z = [], k = [];
    for (let H = 0; H < t; H++)
      G[H] = 0, z[H] = 0, k[H] = 0;
    return {
      // for backward compatibility on non-VAO support browser
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: G,
      enabledAttributes: z,
      attributeDivisors: k,
      object: C,
      attributes: {},
      index: null
    };
  }
  function d(C, G, z, k) {
    const H = s.attributes, B = G.attributes;
    let O = 0;
    const Q = z.getAttributes();
    for (const K in Q)
      if (Q[K].location >= 0) {
        const pe = H[K];
        let he = B[K];
        if (he === void 0 && (K === "instanceMatrix" && C.instanceMatrix && (he = C.instanceMatrix), K === "instanceColor" && C.instanceColor && (he = C.instanceColor)), pe === void 0 || pe.attribute !== he || he && pe.data !== he.data) return !0;
        O++;
      }
    return s.attributesNum !== O || s.index !== k;
  }
  function _(C, G, z, k) {
    const H = {}, B = G.attributes;
    let O = 0;
    const Q = z.getAttributes();
    for (const K in Q)
      if (Q[K].location >= 0) {
        let pe = B[K];
        pe === void 0 && (K === "instanceMatrix" && C.instanceMatrix && (pe = C.instanceMatrix), K === "instanceColor" && C.instanceColor && (pe = C.instanceColor));
        const he = {};
        he.attribute = pe, pe && pe.data && (he.data = pe.data), H[K] = he, O++;
      }
    s.attributes = H, s.attributesNum = O, s.index = k;
  }
  function M() {
    const C = s.newAttributes;
    for (let G = 0, z = C.length; G < z; G++)
      C[G] = 0;
  }
  function p(C) {
    f(C, 0);
  }
  function f(C, G) {
    const z = s.newAttributes, k = s.enabledAttributes, H = s.attributeDivisors;
    z[C] = 1, k[C] === 0 && (i.enableVertexAttribArray(C), k[C] = 1), H[C] !== G && (i.vertexAttribDivisor(C, G), H[C] = G);
  }
  function S() {
    const C = s.newAttributes, G = s.enabledAttributes;
    for (let z = 0, k = G.length; z < k; z++)
      G[z] !== C[z] && (i.disableVertexAttribArray(z), G[z] = 0);
  }
  function b(C, G, z, k, H, B, O) {
    O === !0 ? i.vertexAttribIPointer(C, G, z, H, B) : i.vertexAttribPointer(C, G, z, k, H, B);
  }
  function E(C, G, z, k) {
    M();
    const H = k.attributes, B = z.getAttributes(), O = G.defaultAttributeValues;
    for (const Q in B) {
      const K = B[Q];
      if (K.location >= 0) {
        let ce = H[Q];
        if (ce === void 0 && (Q === "instanceMatrix" && C.instanceMatrix && (ce = C.instanceMatrix), Q === "instanceColor" && C.instanceColor && (ce = C.instanceColor)), ce !== void 0) {
          const pe = ce.normalized, he = ce.itemSize, Ue = e.get(ce);
          if (Ue === void 0) continue;
          const it = Ue.buffer, nt = Ue.type, Z = Ue.bytesPerElement, ne = nt === i.INT || nt === i.UNSIGNED_INT || ce.gpuType === ea;
          if (ce.isInterleavedBufferAttribute) {
            const se = ce.data, De = se.stride, Ae = ce.offset;
            if (se.isInstancedInterleavedBuffer) {
              for (let Re = 0; Re < K.locationSize; Re++)
                f(K.location + Re, se.meshPerAttribute);
              C.isInstancedMesh !== !0 && k._maxInstanceCount === void 0 && (k._maxInstanceCount = se.meshPerAttribute * se.count);
            } else
              for (let Re = 0; Re < K.locationSize; Re++)
                p(K.location + Re);
            i.bindBuffer(i.ARRAY_BUFFER, it);
            for (let Re = 0; Re < K.locationSize; Re++)
              b(
                K.location + Re,
                he / K.locationSize,
                nt,
                pe,
                De * Z,
                (Ae + he / K.locationSize * Re) * Z,
                ne
              );
          } else {
            if (ce.isInstancedBufferAttribute) {
              for (let se = 0; se < K.locationSize; se++)
                f(K.location + se, ce.meshPerAttribute);
              C.isInstancedMesh !== !0 && k._maxInstanceCount === void 0 && (k._maxInstanceCount = ce.meshPerAttribute * ce.count);
            } else
              for (let se = 0; se < K.locationSize; se++)
                p(K.location + se);
            i.bindBuffer(i.ARRAY_BUFFER, it);
            for (let se = 0; se < K.locationSize; se++)
              b(
                K.location + se,
                he / K.locationSize,
                nt,
                pe,
                he * Z,
                he / K.locationSize * se * Z,
                ne
              );
          }
        } else if (O !== void 0) {
          const pe = O[Q];
          if (pe !== void 0)
            switch (pe.length) {
              case 2:
                i.vertexAttrib2fv(K.location, pe);
                break;
              case 3:
                i.vertexAttrib3fv(K.location, pe);
                break;
              case 4:
                i.vertexAttrib4fv(K.location, pe);
                break;
              default:
                i.vertexAttrib1fv(K.location, pe);
            }
        }
      }
    }
    S();
  }
  function R() {
    T();
    for (const C in n) {
      const G = n[C];
      for (const z in G) {
        const k = G[z];
        for (const H in k) {
          const B = k[H];
          for (const O in B)
            h(B[O].object), delete B[O];
          delete k[H];
        }
      }
      delete n[C];
    }
  }
  function A(C) {
    if (n[C.id] === void 0) return;
    const G = n[C.id];
    for (const z in G) {
      const k = G[z];
      for (const H in k) {
        const B = k[H];
        for (const O in B)
          h(B[O].object), delete B[O];
        delete k[H];
      }
    }
    delete n[C.id];
  }
  function L(C) {
    for (const G in n) {
      const z = n[G];
      for (const k in z) {
        const H = z[k];
        if (H[C.id] === void 0) continue;
        const B = H[C.id];
        for (const O in B)
          h(B[O].object), delete B[O];
        delete H[C.id];
      }
    }
  }
  function v(C) {
    for (const G in n) {
      const z = n[G], k = C.isInstancedMesh === !0 ? C.id : 0, H = z[k];
      if (H !== void 0) {
        for (const B in H) {
          const O = H[B];
          for (const Q in O)
            h(O[Q].object), delete O[Q];
          delete H[B];
        }
        delete z[k], Object.keys(z).length === 0 && delete n[G];
      }
    }
  }
  function T() {
    q(), a = !0, s !== r && (s = r, l(s.object));
  }
  function q() {
    r.geometry = null, r.program = null, r.wireframe = !1;
  }
  return {
    setup: o,
    reset: T,
    resetDefaultState: q,
    dispose: R,
    releaseStatesOfGeometry: A,
    releaseStatesOfObject: v,
    releaseStatesOfProgram: L,
    initAttributes: M,
    enableAttribute: p,
    disableUnusedAttributes: S
  };
}
function Xf(i, e, t) {
  let n;
  function r(l) {
    n = l;
  }
  function s(l, h) {
    i.drawArrays(n, l, h), t.update(h, n, 1);
  }
  function a(l, h, m) {
    m !== 0 && (i.drawArraysInstanced(n, l, h, m), t.update(h, n, m));
  }
  function o(l, h, m) {
    if (m === 0) return;
    e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n, l, 0, h, 0, m);
    let d = 0;
    for (let _ = 0; _ < m; _++)
      d += h[_];
    t.update(d, n, 1);
  }
  function c(l, h, m, u) {
    if (m === 0) return;
    const d = e.get("WEBGL_multi_draw");
    if (d === null)
      for (let _ = 0; _ < l.length; _++)
        a(l[_], h[_], u[_]);
    else {
      d.multiDrawArraysInstancedWEBGL(n, l, 0, h, 0, u, 0, m);
      let _ = 0;
      for (let M = 0; M < m; M++)
        _ += h[M] * u[M];
      t.update(_, n, 1);
    }
  }
  this.setMode = r, this.render = s, this.renderInstances = a, this.renderMultiDraw = o, this.renderMultiDrawInstances = c;
}
function Yf(i, e, t, n) {
  let r;
  function s() {
    if (r !== void 0) return r;
    if (e.has("EXT_texture_filter_anisotropic") === !0) {
      const L = e.get("EXT_texture_filter_anisotropic");
      r = i.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else
      r = 0;
    return r;
  }
  function a(L) {
    return !(L !== Ht && n.convert(L) !== i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT));
  }
  function o(L) {
    const v = L === dn && (e.has("EXT_color_buffer_half_float") || e.has("EXT_color_buffer_float"));
    return !(L !== Lt && n.convert(L) !== i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE) && // Edge and Chrome Mac < 52 (#9513)
    L !== Zt && !v);
  }
  function c(L) {
    if (L === "highp") {
      if (i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.HIGH_FLOAT).precision > 0 && i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.HIGH_FLOAT).precision > 0)
        return "highp";
      L = "mediump";
    }
    return L === "mediump" && i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.MEDIUM_FLOAT).precision > 0 && i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
  }
  let l = t.precision !== void 0 ? t.precision : "highp";
  const h = c(l);
  h !== l && (Ce("WebGLRenderer:", l, "not supported, using", h, "instead."), l = h);
  const m = t.logarithmicDepthBuffer === !0, u = t.reversedDepthBuffer === !0 && e.has("EXT_clip_control"), d = i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS), _ = i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS), M = i.getParameter(i.MAX_TEXTURE_SIZE), p = i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE), f = i.getParameter(i.MAX_VERTEX_ATTRIBS), S = i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS), b = i.getParameter(i.MAX_VARYING_VECTORS), E = i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS), R = i.getParameter(i.MAX_SAMPLES), A = i.getParameter(i.SAMPLES);
  return {
    isWebGL2: !0,
    // keeping this for backwards compatibility
    getMaxAnisotropy: s,
    getMaxPrecision: c,
    textureFormatReadable: a,
    textureTypeReadable: o,
    precision: l,
    logarithmicDepthBuffer: m,
    reversedDepthBuffer: u,
    maxTextures: d,
    maxVertexTextures: _,
    maxTextureSize: M,
    maxCubemapSize: p,
    maxAttributes: f,
    maxVertexUniforms: S,
    maxVaryings: b,
    maxFragmentUniforms: E,
    maxSamples: R,
    samples: A
  };
}
function qf(i) {
  const e = this;
  let t = null, n = 0, r = !1, s = !1;
  const a = new Nn(), o = new Ie(), c = { value: null, needsUpdate: !1 };
  this.uniform = c, this.numPlanes = 0, this.numIntersection = 0, this.init = function(m, u) {
    const d = m.length !== 0 || u || // enable state of previous frame - the clipping code has to
    // run another frame in order to reset the state:
    n !== 0 || r;
    return r = u, n = m.length, d;
  }, this.beginShadows = function() {
    s = !0, h(null);
  }, this.endShadows = function() {
    s = !1;
  }, this.setGlobalState = function(m, u) {
    t = h(m, u, 0);
  }, this.setState = function(m, u, d) {
    const _ = m.clippingPlanes, M = m.clipIntersection, p = m.clipShadows, f = i.get(m);
    if (!r || _ === null || _.length === 0 || s && !p)
      s ? h(null) : l();
    else {
      const S = s ? 0 : n, b = S * 4;
      let E = f.clippingState || null;
      c.value = E, E = h(_, u, b, d);
      for (let R = 0; R !== b; ++R)
        E[R] = t[R];
      f.clippingState = E, this.numIntersection = M ? this.numPlanes : 0, this.numPlanes += S;
    }
  };
  function l() {
    c.value !== t && (c.value = t, c.needsUpdate = n > 0), e.numPlanes = n, e.numIntersection = 0;
  }
  function h(m, u, d, _) {
    const M = m !== null ? m.length : 0;
    let p = null;
    if (M !== 0) {
      if (p = c.value, _ !== !0 || p === null) {
        const f = d + M * 4, S = u.matrixWorldInverse;
        o.getNormalMatrix(S), (p === null || p.length < f) && (p = new Float32Array(f));
        for (let b = 0, E = d; b !== M; ++b, E += 4)
          a.copy(m[b]).applyMatrix4(S, o), a.normal.toArray(p, E), p[E + 3] = a.constant;
      }
      c.value = p, c.needsUpdate = !0;
    }
    return e.numPlanes = M, e.numIntersection = 0, p;
  }
}
const bn = 4, ja = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582], On = 20, Zf = 256, Si = /* @__PURE__ */ new da(), Qa = /* @__PURE__ */ new Ve();
let ts = null, ns = 0, is = 0, rs = !1;
const Jf = /* @__PURE__ */ new I();
class eo {
  /**
   * Constructs a new PMREM generator.
   *
   * @param {WebGLRenderer} renderer - The renderer.
   */
  constructor(e) {
    this._renderer = e, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._sizeLods = [], this._sigmas = [], this._lodMeshes = [], this._backgroundBox = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._blurMaterial = null, this._ggxMaterial = null;
  }
  /**
   * Generates a PMREM from a supplied Scene, which can be faster than using an
   * image if networking bandwidth is low. Optional sigma specifies a blur radius
   * in radians to be applied to the scene before PMREM generation. Optional near
   * and far planes ensure the scene is rendered in its entirety.
   *
   * @param {Scene} scene - The scene to be captured.
   * @param {number} [sigma=0] - The blur radius in radians.
   * @param {number} [near=0.1] - The near plane distance.
   * @param {number} [far=100] - The far plane distance.
   * @param {Object} [options={}] - The configuration options.
   * @param {number} [options.size=256] - The texture size of the PMREM.
   * @param {Vector3} [options.position=origin] - The position of the internal cube camera that renders the scene.
   * @return {WebGLRenderTarget} The resulting PMREM.
   */
  fromScene(e, t = 0, n = 0.1, r = 100, s = {}) {
    const {
      size: a = 256,
      position: o = Jf
    } = s;
    ts = this._renderer.getRenderTarget(), ns = this._renderer.getActiveCubeFace(), is = this._renderer.getActiveMipmapLevel(), rs = this._renderer.xr.enabled, this._renderer.xr.enabled = !1, this._setSize(a);
    const c = this._allocateTargets();
    return c.depthBuffer = !0, this._sceneToCubeUV(e, n, r, c, o), t > 0 && this._blur(c, 0, 0, t), this._applyPMREM(c), this._cleanup(c), c;
  }
  /**
   * Generates a PMREM from an equirectangular texture, which can be either LDR
   * or HDR. The ideal input image size is 1k (1024 x 512),
   * as this matches best with the 256 x 256 cubemap output.
   *
   * @param {Texture} equirectangular - The equirectangular texture to be converted.
   * @param {?WebGLRenderTarget} [renderTarget=null] - The render target to use.
   * @return {WebGLRenderTarget} The resulting PMREM.
   */
  fromEquirectangular(e, t = null) {
    return this._fromTexture(e, t);
  }
  /**
   * Generates a PMREM from an cubemap texture, which can be either LDR
   * or HDR. The ideal input cube size is 256 x 256,
   * as this matches best with the 256 x 256 cubemap output.
   *
   * @param {Texture} cubemap - The cubemap texture to be converted.
   * @param {?WebGLRenderTarget} [renderTarget=null] - The render target to use.
   * @return {WebGLRenderTarget} The resulting PMREM.
   */
  fromCubemap(e, t = null) {
    return this._fromTexture(e, t);
  }
  /**
   * Pre-compiles the cubemap shader. You can get faster start-up by invoking this method during
   * your texture's network fetch for increased concurrency.
   */
  compileCubemapShader() {
    this._cubemapMaterial === null && (this._cubemapMaterial = io(), this._compileMaterial(this._cubemapMaterial));
  }
  /**
   * Pre-compiles the equirectangular shader. You can get faster start-up by invoking this method during
   * your texture's network fetch for increased concurrency.
   */
  compileEquirectangularShader() {
    this._equirectMaterial === null && (this._equirectMaterial = no(), this._compileMaterial(this._equirectMaterial));
  }
  /**
   * Disposes of the PMREMGenerator's internal memory. Note that PMREMGenerator is a static class,
   * so you should not need more than one PMREMGenerator object. If you do, calling dispose() on
   * one of them will cause any others to also become unusable.
   */
  dispose() {
    this._dispose(), this._cubemapMaterial !== null && this._cubemapMaterial.dispose(), this._equirectMaterial !== null && this._equirectMaterial.dispose(), this._backgroundBox !== null && (this._backgroundBox.geometry.dispose(), this._backgroundBox.material.dispose());
  }
  // private interface
  _setSize(e) {
    this._lodMax = Math.floor(Math.log2(e)), this._cubeSize = Math.pow(2, this._lodMax);
  }
  _dispose() {
    this._blurMaterial !== null && this._blurMaterial.dispose(), this._ggxMaterial !== null && this._ggxMaterial.dispose(), this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose();
    for (let e = 0; e < this._lodMeshes.length; e++)
      this._lodMeshes[e].geometry.dispose();
  }
  _cleanup(e) {
    this._renderer.setRenderTarget(ts, ns, is), this._renderer.xr.enabled = rs, e.scissorTest = !1, ni(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    e.mapping === Vn || e.mapping === oi ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4), ts = this._renderer.getRenderTarget(), ns = this._renderer.getActiveCubeFace(), is = this._renderer.getActiveMipmapLevel(), rs = this._renderer.xr.enabled, this._renderer.xr.enabled = !1;
    const n = t || this._allocateTargets();
    return this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n;
  }
  _allocateTargets() {
    const e = 3 * Math.max(this._cubeSize, 112), t = 4 * this._cubeSize, n = {
      magFilter: Et,
      minFilter: Et,
      generateMipmaps: !1,
      type: dn,
      format: Ht,
      colorSpace: ci,
      depthBuffer: !1
    }, r = to(e, t, n);
    if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e || this._pingPongRenderTarget.height !== t) {
      this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = to(e, t, n);
      const { _lodMax: s } = this;
      ({ lodMeshes: this._lodMeshes, sizeLods: this._sizeLods, sigmas: this._sigmas } = Kf(s)), this._blurMaterial = jf(s, e, t), this._ggxMaterial = $f(s, e, t);
    }
    return r;
  }
  _compileMaterial(e) {
    const t = new bt(new kt(), e);
    this._renderer.compile(t, Si);
  }
  _sceneToCubeUV(e, t, n, r, s) {
    const c = new Nt(90, 1, t, n), l = [1, -1, 1, 1, 1, 1], h = [1, 1, 1, -1, -1, -1], m = this._renderer, u = m.autoClear, d = m.toneMapping;
    m.getClearColor(Qa), m.toneMapping = Kt, m.autoClear = !1, m.state.buffers.depth.getReversed() && (m.setRenderTarget(r), m.clearDepth(), m.setRenderTarget(null)), this._backgroundBox === null && (this._backgroundBox = new bt(
      new pi(),
      new Jo({
        name: "PMREM.Background",
        side: wt,
        depthWrite: !1,
        depthTest: !1
      })
    ));
    const M = this._backgroundBox, p = M.material;
    let f = !1;
    const S = e.background;
    S ? S.isColor && (p.color.copy(S), e.background = null, f = !0) : (p.color.copy(Qa), f = !0);
    for (let b = 0; b < 6; b++) {
      const E = b % 3;
      E === 0 ? (c.up.set(0, l[b], 0), c.position.set(s.x, s.y, s.z), c.lookAt(s.x + h[b], s.y, s.z)) : E === 1 ? (c.up.set(0, 0, l[b]), c.position.set(s.x, s.y, s.z), c.lookAt(s.x, s.y + h[b], s.z)) : (c.up.set(0, l[b], 0), c.position.set(s.x, s.y, s.z), c.lookAt(s.x, s.y, s.z + h[b]));
      const R = this._cubeSize;
      ni(r, E * R, b > 2 ? R : 0, R, R), m.setRenderTarget(r), f && m.render(M, c), m.render(e, c);
    }
    m.toneMapping = d, m.autoClear = u, e.background = S;
  }
  _textureToCubeUV(e, t) {
    const n = this._renderer, r = e.mapping === Vn || e.mapping === oi;
    r ? (this._cubemapMaterial === null && (this._cubemapMaterial = io()), this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = no());
    const s = r ? this._cubemapMaterial : this._equirectMaterial, a = this._lodMeshes[0];
    a.material = s;
    const o = s.uniforms;
    o.envMap.value = e;
    const c = this._cubeSize;
    ni(t, 0, 0, 3 * c, 2 * c), n.setRenderTarget(t), n.render(a, Si);
  }
  _applyPMREM(e) {
    const t = this._renderer, n = t.autoClear;
    t.autoClear = !1;
    const r = this._lodMeshes.length;
    for (let s = 1; s < r; s++)
      this._applyGGXFilter(e, s - 1, s);
    t.autoClear = n;
  }
  /**
   * Applies GGX VNDF importance sampling filter to generate a prefiltered environment map.
   * Uses Monte Carlo integration with VNDF importance sampling to accurately represent the
   * GGX BRDF for physically-based rendering. Reads from the previous LOD level and
   * applies incremental roughness filtering to avoid over-blurring.
   *
   * @private
   * @param {WebGLRenderTarget} cubeUVRenderTarget
   * @param {number} lodIn - Source LOD level to read from
   * @param {number} lodOut - Target LOD level to write to
   */
  _applyGGXFilter(e, t, n) {
    const r = this._renderer, s = this._pingPongRenderTarget, a = this._ggxMaterial, o = this._lodMeshes[n];
    o.material = a;
    const c = a.uniforms, l = n / (this._lodMeshes.length - 1), h = t / (this._lodMeshes.length - 1), m = Math.sqrt(l * l - h * h), u = 0 + l * 1.25, d = m * u, { _lodMax: _ } = this, M = this._sizeLods[n], p = 3 * M * (n > _ - bn ? n - _ + bn : 0), f = 4 * (this._cubeSize - M);
    c.envMap.value = e.texture, c.roughness.value = d, c.mipInt.value = _ - t, ni(s, p, f, 3 * M, 2 * M), r.setRenderTarget(s), r.render(o, Si), c.envMap.value = s.texture, c.roughness.value = 0, c.mipInt.value = _ - n, ni(e, p, f, 3 * M, 2 * M), r.setRenderTarget(e), r.render(o, Si);
  }
  /**
   * This is a two-pass Gaussian blur for a cubemap. Normally this is done
   * vertically and horizontally, but this breaks down on a cube. Here we apply
   * the blur latitudinally (around the poles), and then longitudinally (towards
   * the poles) to approximate the orthogonally-separable blur. It is least
   * accurate at the poles, but still does a decent job.
   *
   * Used for initial scene blur in fromScene() method when sigma > 0.
   *
   * @private
   * @param {WebGLRenderTarget} cubeUVRenderTarget
   * @param {number} lodIn
   * @param {number} lodOut
   * @param {number} sigma
   * @param {Vector3} [poleAxis]
   */
  _blur(e, t, n, r, s) {
    const a = this._pingPongRenderTarget;
    this._halfBlur(
      e,
      a,
      t,
      n,
      r,
      "latitudinal",
      s
    ), this._halfBlur(
      a,
      e,
      n,
      n,
      r,
      "longitudinal",
      s
    );
  }
  _halfBlur(e, t, n, r, s, a, o) {
    const c = this._renderer, l = this._blurMaterial;
    a !== "latitudinal" && a !== "longitudinal" && We(
      "blur direction must be either latitudinal or longitudinal!"
    );
    const h = 3, m = this._lodMeshes[r];
    m.material = l;
    const u = l.uniforms, d = this._sizeLods[n] - 1, _ = isFinite(s) ? Math.PI / (2 * d) : 2 * Math.PI / (2 * On - 1), M = s / _, p = isFinite(s) ? 1 + Math.floor(h * M) : On;
    p > On && Ce(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${On}`);
    const f = [];
    let S = 0;
    for (let L = 0; L < On; ++L) {
      const v = L / M, T = Math.exp(-v * v / 2);
      f.push(T), L === 0 ? S += T : L < p && (S += 2 * T);
    }
    for (let L = 0; L < f.length; L++)
      f[L] = f[L] / S;
    u.envMap.value = e.texture, u.samples.value = p, u.weights.value = f, u.latitudinal.value = a === "latitudinal", o && (u.poleAxis.value = o);
    const { _lodMax: b } = this;
    u.dTheta.value = _, u.mipInt.value = b - n;
    const E = this._sizeLods[r], R = 3 * E * (r > b - bn ? r - b + bn : 0), A = 4 * (this._cubeSize - E);
    ni(t, R, A, 3 * E, 2 * E), c.setRenderTarget(t), c.render(m, Si);
  }
}
function Kf(i) {
  const e = [], t = [], n = [];
  let r = i;
  const s = i - bn + 1 + ja.length;
  for (let a = 0; a < s; a++) {
    const o = Math.pow(2, r);
    e.push(o);
    let c = 1 / o;
    a > i - bn ? c = ja[a - i + bn - 1] : a === 0 && (c = 0), t.push(c);
    const l = 1 / (o - 2), h = -l, m = 1 + l, u = [h, h, m, h, m, m, h, h, m, m, h, m], d = 6, _ = 6, M = 3, p = 2, f = 1, S = new Float32Array(M * _ * d), b = new Float32Array(p * _ * d), E = new Float32Array(f * _ * d);
    for (let A = 0; A < d; A++) {
      const L = A % 3 * 2 / 3 - 1, v = A > 2 ? 0 : -1, T = [
        L,
        v,
        0,
        L + 2 / 3,
        v,
        0,
        L + 2 / 3,
        v + 1,
        0,
        L,
        v,
        0,
        L + 2 / 3,
        v + 1,
        0,
        L,
        v + 1,
        0
      ];
      S.set(T, M * _ * A), b.set(u, p * _ * A);
      const q = [A, A, A, A, A, A];
      E.set(q, f * _ * A);
    }
    const R = new kt();
    R.setAttribute("position", new jt(S, M)), R.setAttribute("uv", new jt(b, p)), R.setAttribute("faceIndex", new jt(E, f)), n.push(new bt(R, null)), r > bn && r--;
  }
  return { lodMeshes: n, sizeLods: e, sigmas: t };
}
function to(i, e, t) {
  const n = new $t(i, e, t);
  return n.texture.mapping = xr, n.texture.name = "PMREM.cubeUv", n.scissorTest = !0, n;
}
function ni(i, e, t, n, r) {
  i.viewport.set(e, t, n, r), i.scissor.set(e, t, n, r);
}
function $f(i, e, t) {
  return new tn({
    name: "PMREMGGXConvolution",
    defines: {
      GGX_SAMPLES: Zf,
      CUBEUV_TEXEL_WIDTH: 1 / e,
      CUBEUV_TEXEL_HEIGHT: 1 / t,
      CUBEUV_MAX_MIP: `${i}.0`
    },
    uniforms: {
      envMap: { value: null },
      roughness: { value: 0 },
      mipInt: { value: 0 }
    },
    vertexShader: Mr(),
    fragmentShader: (
      /* glsl */
      `

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`
    ),
    blending: hn,
    depthTest: !1,
    depthWrite: !1
  });
}
function jf(i, e, t) {
  const n = new Float32Array(On), r = new I(0, 1, 0);
  return new tn({
    name: "SphericalGaussianBlur",
    defines: {
      n: On,
      CUBEUV_TEXEL_WIDTH: 1 / e,
      CUBEUV_TEXEL_HEIGHT: 1 / t,
      CUBEUV_MAX_MIP: `${i}.0`
    },
    uniforms: {
      envMap: { value: null },
      samples: { value: 1 },
      weights: { value: n },
      latitudinal: { value: !1 },
      dTheta: { value: 0 },
      mipInt: { value: 0 },
      poleAxis: { value: r }
    },
    vertexShader: Mr(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`
    ),
    blending: hn,
    depthTest: !1,
    depthWrite: !1
  });
}
function no() {
  return new tn({
    name: "EquirectangularToCubeUV",
    uniforms: {
      envMap: { value: null }
    },
    vertexShader: Mr(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`
    ),
    blending: hn,
    depthTest: !1,
    depthWrite: !1
  });
}
function io() {
  return new tn({
    name: "CubemapToCubeUV",
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 }
    },
    vertexShader: Mr(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`
    ),
    blending: hn,
    depthTest: !1,
    depthWrite: !1
  });
}
function Mr() {
  return (
    /* glsl */
    `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`
  );
}
class sl extends $t {
  /**
   * Constructs a new cube render target.
   *
   * @param {number} [size=1] - The size of the render target.
   * @param {RenderTarget~Options} [options] - The configuration object.
   */
  constructor(e = 1, t = {}) {
    super(e, e, t), this.isWebGLCubeRenderTarget = !0;
    const n = { width: e, height: e, depth: 1 }, r = [n, n, n, n, n, n];
    this.texture = new Ko(r), this._setTextureOptions(t), this.texture.isRenderTargetTexture = !0;
  }
  /**
   * Converts the given equirectangular texture to a cube map.
   *
   * @param {WebGLRenderer} renderer - The renderer.
   * @param {Texture} texture - The equirectangular texture.
   * @return {WebGLCubeRenderTarget} A reference to this cube render target.
   */
  fromEquirectangularTexture(e, t) {
    this.texture.type = t.type, this.texture.colorSpace = t.colorSpace, this.texture.generateMipmaps = t.generateMipmaps, this.texture.minFilter = t.minFilter, this.texture.magFilter = t.magFilter;
    const n = {
      uniforms: {
        tEquirect: { value: null }
      },
      vertexShader: (
        /* glsl */
        `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`
      ),
      fragmentShader: (
        /* glsl */
        `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`
      )
    }, r = new pi(5, 5, 5), s = new tn({
      name: "CubemapFromEquirect",
      uniforms: ui(n.uniforms),
      vertexShader: n.vertexShader,
      fragmentShader: n.fragmentShader,
      side: wt,
      blending: hn
    });
    s.uniforms.tEquirect.value = t;
    const a = new bt(r, s), o = t.minFilter;
    return t.minFilter === Bn && (t.minFilter = Et), new ru(1, 10, this).update(e, a), t.minFilter = o, a.geometry.dispose(), a.material.dispose(), this;
  }
  /**
   * Clears this cube render target.
   *
   * @param {WebGLRenderer} renderer - The renderer.
   * @param {boolean} [color=true] - Whether the color buffer should be cleared or not.
   * @param {boolean} [depth=true] - Whether the depth buffer should be cleared or not.
   * @param {boolean} [stencil=true] - Whether the stencil buffer should be cleared or not.
   */
  clear(e, t = !0, n = !0, r = !0) {
    const s = e.getRenderTarget();
    for (let a = 0; a < 6; a++)
      e.setRenderTarget(this, a), e.clear(t, n, r);
    e.setRenderTarget(s);
  }
}
function Qf(i) {
  let e = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap(), n = null;
  function r(u, d = !1) {
    return u == null ? null : d ? a(u) : s(u);
  }
  function s(u) {
    if (u && u.isTexture) {
      const d = u.mapping;
      if (d === Tr || d === br)
        if (e.has(u)) {
          const _ = e.get(u).texture;
          return o(_, u.mapping);
        } else {
          const _ = u.image;
          if (_ && _.height > 0) {
            const M = new sl(_.height);
            return M.fromEquirectangularTexture(i, u), e.set(u, M), u.addEventListener("dispose", l), o(M.texture, u.mapping);
          } else
            return null;
        }
    }
    return u;
  }
  function a(u) {
    if (u && u.isTexture) {
      const d = u.mapping, _ = d === Tr || d === br, M = d === Vn || d === oi;
      if (_ || M) {
        let p = t.get(u);
        const f = p !== void 0 ? p.texture.pmremVersion : 0;
        if (u.isRenderTargetTexture && u.pmremVersion !== f)
          return n === null && (n = new eo(i)), p = _ ? n.fromEquirectangular(u, p) : n.fromCubemap(u, p), p.texture.pmremVersion = u.pmremVersion, t.set(u, p), p.texture;
        if (p !== void 0)
          return p.texture;
        {
          const S = u.image;
          return _ && S && S.height > 0 || M && S && c(S) ? (n === null && (n = new eo(i)), p = _ ? n.fromEquirectangular(u) : n.fromCubemap(u), p.texture.pmremVersion = u.pmremVersion, t.set(u, p), u.addEventListener("dispose", h), p.texture) : null;
        }
      }
    }
    return u;
  }
  function o(u, d) {
    return d === Tr ? u.mapping = Vn : d === br && (u.mapping = oi), u;
  }
  function c(u) {
    let d = 0;
    const _ = 6;
    for (let M = 0; M < _; M++)
      u[M] !== void 0 && d++;
    return d === _;
  }
  function l(u) {
    const d = u.target;
    d.removeEventListener("dispose", l);
    const _ = e.get(d);
    _ !== void 0 && (e.delete(d), _.dispose());
  }
  function h(u) {
    const d = u.target;
    d.removeEventListener("dispose", h);
    const _ = t.get(d);
    _ !== void 0 && (t.delete(d), _.dispose());
  }
  function m() {
    e = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap(), n !== null && (n.dispose(), n = null);
  }
  return {
    get: r,
    dispose: m
  };
}
function ed(i) {
  const e = {};
  function t(n) {
    if (e[n] !== void 0)
      return e[n];
    const r = i.getExtension(n);
    return e[n] = r, r;
  }
  return {
    has: function(n) {
      return t(n) !== null;
    },
    init: function() {
      t("EXT_color_buffer_float"), t("WEBGL_clip_cull_distance"), t("OES_texture_float_linear"), t("EXT_color_buffer_half_float"), t("WEBGL_multisampled_render_to_texture"), t("WEBGL_render_shared_exponent");
    },
    get: function(n) {
      const r = t(n);
      return r === null && _r("WebGLRenderer: " + n + " extension not supported."), r;
    }
  };
}
function td(i, e, t, n) {
  const r = {}, s = /* @__PURE__ */ new WeakMap();
  function a(m) {
    const u = m.target;
    u.index !== null && e.remove(u.index);
    for (const _ in u.attributes)
      e.remove(u.attributes[_]);
    u.removeEventListener("dispose", a), delete r[u.id];
    const d = s.get(u);
    d && (e.remove(d), s.delete(u)), n.releaseStatesOfGeometry(u), u.isInstancedBufferGeometry === !0 && delete u._maxInstanceCount, t.memory.geometries--;
  }
  function o(m, u) {
    return r[u.id] === !0 || (u.addEventListener("dispose", a), r[u.id] = !0, t.memory.geometries++), u;
  }
  function c(m) {
    const u = m.attributes;
    for (const d in u)
      e.update(u[d], i.ARRAY_BUFFER);
  }
  function l(m) {
    const u = [], d = m.index, _ = m.attributes.position;
    let M = 0;
    if (_ === void 0)
      return;
    if (d !== null) {
      const S = d.array;
      M = d.version;
      for (let b = 0, E = S.length; b < E; b += 3) {
        const R = S[b + 0], A = S[b + 1], L = S[b + 2];
        u.push(R, A, A, L, L, R);
      }
    } else {
      const S = _.array;
      M = _.version;
      for (let b = 0, E = S.length / 3 - 1; b < E; b += 3) {
        const R = b + 0, A = b + 1, L = b + 2;
        u.push(R, A, A, L, L, R);
      }
    }
    const p = new (_.count >= 65535 ? Zo : qo)(u, 1);
    p.version = M;
    const f = s.get(m);
    f && e.remove(f), s.set(m, p);
  }
  function h(m) {
    const u = s.get(m);
    if (u) {
      const d = m.index;
      d !== null && u.version < d.version && l(m);
    } else
      l(m);
    return s.get(m);
  }
  return {
    get: o,
    update: c,
    getWireframeAttribute: h
  };
}
function nd(i, e, t) {
  let n;
  function r(u) {
    n = u;
  }
  let s, a;
  function o(u) {
    s = u.type, a = u.bytesPerElement;
  }
  function c(u, d) {
    i.drawElements(n, d, s, u * a), t.update(d, n, 1);
  }
  function l(u, d, _) {
    _ !== 0 && (i.drawElementsInstanced(n, d, s, u * a, _), t.update(d, n, _));
  }
  function h(u, d, _) {
    if (_ === 0) return;
    e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n, d, 0, s, u, 0, _);
    let p = 0;
    for (let f = 0; f < _; f++)
      p += d[f];
    t.update(p, n, 1);
  }
  function m(u, d, _, M) {
    if (_ === 0) return;
    const p = e.get("WEBGL_multi_draw");
    if (p === null)
      for (let f = 0; f < u.length; f++)
        l(u[f] / a, d[f], M[f]);
    else {
      p.multiDrawElementsInstancedWEBGL(n, d, 0, s, u, 0, M, 0, _);
      let f = 0;
      for (let S = 0; S < _; S++)
        f += d[S] * M[S];
      t.update(f, n, 1);
    }
  }
  this.setMode = r, this.setIndex = o, this.render = c, this.renderInstances = l, this.renderMultiDraw = h, this.renderMultiDrawInstances = m;
}
function id(i) {
  const e = {
    geometries: 0,
    textures: 0
  }, t = {
    frame: 0,
    calls: 0,
    triangles: 0,
    points: 0,
    lines: 0
  };
  function n(s, a, o) {
    switch (t.calls++, a) {
      case i.TRIANGLES:
        t.triangles += o * (s / 3);
        break;
      case i.LINES:
        t.lines += o * (s / 2);
        break;
      case i.LINE_STRIP:
        t.lines += o * (s - 1);
        break;
      case i.LINE_LOOP:
        t.lines += o * s;
        break;
      case i.POINTS:
        t.points += o * s;
        break;
      default:
        We("WebGLInfo: Unknown draw mode:", a);
        break;
    }
  }
  function r() {
    t.calls = 0, t.triangles = 0, t.points = 0, t.lines = 0;
  }
  return {
    memory: e,
    render: t,
    programs: null,
    autoReset: !0,
    reset: r,
    update: n
  };
}
function rd(i, e, t) {
  const n = /* @__PURE__ */ new WeakMap(), r = new st();
  function s(a, o, c) {
    const l = a.morphTargetInfluences, h = o.morphAttributes.position || o.morphAttributes.normal || o.morphAttributes.color, m = h !== void 0 ? h.length : 0;
    let u = n.get(o);
    if (u === void 0 || u.count !== m) {
      let T = function() {
        L.dispose(), n.delete(o), o.removeEventListener("dispose", T);
      };
      u !== void 0 && u.texture.dispose();
      const d = o.morphAttributes.position !== void 0, _ = o.morphAttributes.normal !== void 0, M = o.morphAttributes.color !== void 0, p = o.morphAttributes.position || [], f = o.morphAttributes.normal || [], S = o.morphAttributes.color || [];
      let b = 0;
      d === !0 && (b = 1), _ === !0 && (b = 2), M === !0 && (b = 3);
      let E = o.attributes.position.count * b, R = 1;
      E > e.maxTextureSize && (R = Math.ceil(E / e.maxTextureSize), E = e.maxTextureSize);
      const A = new Float32Array(E * R * 4 * m), L = new Wo(A, E, R, m);
      L.type = Zt, L.needsUpdate = !0;
      const v = b * 4;
      for (let q = 0; q < m; q++) {
        const C = p[q], G = f[q], z = S[q], k = E * R * 4 * q;
        for (let H = 0; H < C.count; H++) {
          const B = H * v;
          d === !0 && (r.fromBufferAttribute(C, H), A[k + B + 0] = r.x, A[k + B + 1] = r.y, A[k + B + 2] = r.z, A[k + B + 3] = 0), _ === !0 && (r.fromBufferAttribute(G, H), A[k + B + 4] = r.x, A[k + B + 5] = r.y, A[k + B + 6] = r.z, A[k + B + 7] = 0), M === !0 && (r.fromBufferAttribute(z, H), A[k + B + 8] = r.x, A[k + B + 9] = r.y, A[k + B + 10] = r.z, A[k + B + 11] = z.itemSize === 4 ? r.w : 1);
        }
      }
      u = {
        count: m,
        texture: L,
        size: new be(E, R)
      }, n.set(o, u), o.addEventListener("dispose", T);
    }
    if (a.isInstancedMesh === !0 && a.morphTexture !== null)
      c.getUniforms().setValue(i, "morphTexture", a.morphTexture, t);
    else {
      let d = 0;
      for (let M = 0; M < l.length; M++)
        d += l[M];
      const _ = o.morphTargetsRelative ? 1 : 1 - d;
      c.getUniforms().setValue(i, "morphTargetBaseInfluence", _), c.getUniforms().setValue(i, "morphTargetInfluences", l);
    }
    c.getUniforms().setValue(i, "morphTargetsTexture", u.texture, t), c.getUniforms().setValue(i, "morphTargetsTextureSize", u.size);
  }
  return {
    update: s
  };
}
function sd(i, e, t, n, r) {
  let s = /* @__PURE__ */ new WeakMap();
  function a(l) {
    const h = r.render.frame, m = l.geometry, u = e.get(l, m);
    if (s.get(u) !== h && (e.update(u), s.set(u, h)), l.isInstancedMesh && (l.hasEventListener("dispose", c) === !1 && l.addEventListener("dispose", c), s.get(l) !== h && (t.update(l.instanceMatrix, i.ARRAY_BUFFER), l.instanceColor !== null && t.update(l.instanceColor, i.ARRAY_BUFFER), s.set(l, h))), l.isSkinnedMesh) {
      const d = l.skeleton;
      s.get(d) !== h && (d.update(), s.set(d, h));
    }
    return u;
  }
  function o() {
    s = /* @__PURE__ */ new WeakMap();
  }
  function c(l) {
    const h = l.target;
    h.removeEventListener("dispose", c), n.releaseStatesOfObject(h), t.remove(h.instanceMatrix), h.instanceColor !== null && t.remove(h.instanceColor);
  }
  return {
    update: a,
    dispose: o
  };
}
const ad = {
  [wo]: "LINEAR_TONE_MAPPING",
  [Ro]: "REINHARD_TONE_MAPPING",
  [Co]: "CINEON_TONE_MAPPING",
  [Po]: "ACES_FILMIC_TONE_MAPPING",
  [Do]: "AGX_TONE_MAPPING",
  [Io]: "NEUTRAL_TONE_MAPPING",
  [Lo]: "CUSTOM_TONE_MAPPING"
};
function od(i, e, t, n, r) {
  const s = new $t(e, t, {
    type: i,
    depthBuffer: n,
    stencilBuffer: r
  }), a = new $t(e, t, {
    type: dn,
    depthBuffer: !1,
    stencilBuffer: !1
  }), o = new kt();
  o.setAttribute("position", new Dt([-1, 3, 0, -1, -1, 0, 3, -1, 0], 3)), o.setAttribute("uv", new Dt([0, 2, 0, 0, 2, 0], 2));
  const c = new $c({
    uniforms: {
      tDiffuse: { value: null }
    },
    vertexShader: (
      /* glsl */
      `
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`
    ),
    fragmentShader: (
      /* glsl */
      `
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`
    ),
    depthTest: !1,
    depthWrite: !1
  }), l = new bt(o, c), h = new da(-1, 1, 1, -1, 0, 1);
  let m = null, u = null, d = !1, _, M = null, p = [], f = !1;
  this.setSize = function(S, b) {
    s.setSize(S, b), a.setSize(S, b);
    for (let E = 0; E < p.length; E++) {
      const R = p[E];
      R.setSize && R.setSize(S, b);
    }
  }, this.setEffects = function(S) {
    p = S, f = p.length > 0 && p[0].isRenderPass === !0;
    const b = s.width, E = s.height;
    for (let R = 0; R < p.length; R++) {
      const A = p[R];
      A.setSize && A.setSize(b, E);
    }
  }, this.begin = function(S, b) {
    if (d || S.toneMapping === Kt && p.length === 0) return !1;
    if (M = b, b !== null) {
      const E = b.width, R = b.height;
      (s.width !== E || s.height !== R) && this.setSize(E, R);
    }
    return f === !1 && S.setRenderTarget(s), _ = S.toneMapping, S.toneMapping = Kt, !0;
  }, this.hasRenderPass = function() {
    return f;
  }, this.end = function(S, b) {
    S.toneMapping = _, d = !0;
    let E = s, R = a;
    for (let A = 0; A < p.length; A++) {
      const L = p[A];
      if (L.enabled !== !1 && (L.render(S, R, E, b), L.needsSwap !== !1)) {
        const v = E;
        E = R, R = v;
      }
    }
    if (m !== S.outputColorSpace || u !== S.toneMapping) {
      m = S.outputColorSpace, u = S.toneMapping, c.defines = {}, He.getTransfer(m) === Ze && (c.defines.SRGB_TRANSFER = "");
      const A = ad[u];
      A && (c.defines[A] = ""), c.needsUpdate = !0;
    }
    c.uniforms.tDiffuse.value = E.texture, S.setRenderTarget(M), S.render(l, h), M = null, d = !1;
  }, this.isCompositing = function() {
    return d;
  }, this.dispose = function() {
    s.dispose(), a.dispose(), o.dispose(), c.dispose();
  };
}
const al = /* @__PURE__ */ new Tt(), $s = /* @__PURE__ */ new Pi(1, 1), ol = /* @__PURE__ */ new Wo(), ll = /* @__PURE__ */ new fc(), cl = /* @__PURE__ */ new Ko(), ro = [], so = [], ao = new Float32Array(16), oo = new Float32Array(9), lo = new Float32Array(4);
function mi(i, e, t) {
  const n = i[0];
  if (n <= 0 || n > 0) return i;
  const r = e * t;
  let s = ro[r];
  if (s === void 0 && (s = new Float32Array(r), ro[r] = s), e !== 0) {
    n.toArray(s, 0);
    for (let a = 1, o = 0; a !== e; ++a)
      o += t, i[a].toArray(s, o);
  }
  return s;
}
function ht(i, e) {
  if (i.length !== e.length) return !1;
  for (let t = 0, n = i.length; t < n; t++)
    if (i[t] !== e[t]) return !1;
  return !0;
}
function ft(i, e) {
  for (let t = 0, n = e.length; t < n; t++)
    i[t] = e[t];
}
function Sr(i, e) {
  let t = so[e];
  t === void 0 && (t = new Int32Array(e), so[e] = t);
  for (let n = 0; n !== e; ++n)
    t[n] = i.allocateTextureUnit();
  return t;
}
function ld(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1f(this.addr, e), t[0] = e);
}
function cd(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (i.uniform2f(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (ht(t, e)) return;
    i.uniform2fv(this.addr, e), ft(t, e);
  }
}
function ud(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i.uniform3f(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else if (e.r !== void 0)
    (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) && (i.uniform3f(this.addr, e.r, e.g, e.b), t[0] = e.r, t[1] = e.g, t[2] = e.b);
  else {
    if (ht(t, e)) return;
    i.uniform3fv(this.addr, e), ft(t, e);
  }
}
function hd(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i.uniform4f(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (ht(t, e)) return;
    i.uniform4fv(this.addr, e), ft(t, e);
  }
}
function fd(i, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (ht(t, e)) return;
    i.uniformMatrix2fv(this.addr, !1, e), ft(t, e);
  } else {
    if (ht(t, n)) return;
    lo.set(n), i.uniformMatrix2fv(this.addr, !1, lo), ft(t, n);
  }
}
function dd(i, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (ht(t, e)) return;
    i.uniformMatrix3fv(this.addr, !1, e), ft(t, e);
  } else {
    if (ht(t, n)) return;
    oo.set(n), i.uniformMatrix3fv(this.addr, !1, oo), ft(t, n);
  }
}
function pd(i, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (ht(t, e)) return;
    i.uniformMatrix4fv(this.addr, !1, e), ft(t, e);
  } else {
    if (ht(t, n)) return;
    ao.set(n), i.uniformMatrix4fv(this.addr, !1, ao), ft(t, n);
  }
}
function md(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1i(this.addr, e), t[0] = e);
}
function _d(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (i.uniform2i(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (ht(t, e)) return;
    i.uniform2iv(this.addr, e), ft(t, e);
  }
}
function gd(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i.uniform3i(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (ht(t, e)) return;
    i.uniform3iv(this.addr, e), ft(t, e);
  }
}
function vd(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i.uniform4i(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (ht(t, e)) return;
    i.uniform4iv(this.addr, e), ft(t, e);
  }
}
function xd(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1ui(this.addr, e), t[0] = e);
}
function Md(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (i.uniform2ui(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (ht(t, e)) return;
    i.uniform2uiv(this.addr, e), ft(t, e);
  }
}
function Sd(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i.uniform3ui(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (ht(t, e)) return;
    i.uniform3uiv(this.addr, e), ft(t, e);
  }
}
function Ed(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i.uniform4ui(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (ht(t, e)) return;
    i.uniform4uiv(this.addr, e), ft(t, e);
  }
}
function yd(i, e, t) {
  const n = this.cache, r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r);
  let s;
  this.type === i.SAMPLER_2D_SHADOW ? ($s.compareFunction = t.isReversedDepthBuffer() ? oa : aa, s = $s) : s = al, t.setTexture2D(e || s, r);
}
function Td(i, e, t) {
  const n = this.cache, r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), t.setTexture3D(e || ll, r);
}
function bd(i, e, t) {
  const n = this.cache, r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), t.setTextureCube(e || cl, r);
}
function Ad(i, e, t) {
  const n = this.cache, r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), t.setTexture2DArray(e || ol, r);
}
function wd(i) {
  switch (i) {
    case 5126:
      return ld;
    case 35664:
      return cd;
    case 35665:
      return ud;
    case 35666:
      return hd;
    case 35674:
      return fd;
    case 35675:
      return dd;
    case 35676:
      return pd;
    case 5124:
    case 35670:
      return md;
    case 35667:
    case 35671:
      return _d;
    case 35668:
    case 35672:
      return gd;
    case 35669:
    case 35673:
      return vd;
    case 5125:
      return xd;
    case 36294:
      return Md;
    case 36295:
      return Sd;
    case 36296:
      return Ed;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return yd;
    case 35679:
    case 36299:
    case 36307:
      return Td;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return bd;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return Ad;
  }
}
function Rd(i, e) {
  i.uniform1fv(this.addr, e);
}
function Cd(i, e) {
  const t = mi(e, this.size, 2);
  i.uniform2fv(this.addr, t);
}
function Pd(i, e) {
  const t = mi(e, this.size, 3);
  i.uniform3fv(this.addr, t);
}
function Ld(i, e) {
  const t = mi(e, this.size, 4);
  i.uniform4fv(this.addr, t);
}
function Dd(i, e) {
  const t = mi(e, this.size, 4);
  i.uniformMatrix2fv(this.addr, !1, t);
}
function Id(i, e) {
  const t = mi(e, this.size, 9);
  i.uniformMatrix3fv(this.addr, !1, t);
}
function Ud(i, e) {
  const t = mi(e, this.size, 16);
  i.uniformMatrix4fv(this.addr, !1, t);
}
function Nd(i, e) {
  i.uniform1iv(this.addr, e);
}
function Fd(i, e) {
  i.uniform2iv(this.addr, e);
}
function Od(i, e) {
  i.uniform3iv(this.addr, e);
}
function Bd(i, e) {
  i.uniform4iv(this.addr, e);
}
function zd(i, e) {
  i.uniform1uiv(this.addr, e);
}
function Vd(i, e) {
  i.uniform2uiv(this.addr, e);
}
function Gd(i, e) {
  i.uniform3uiv(this.addr, e);
}
function Hd(i, e) {
  i.uniform4uiv(this.addr, e);
}
function kd(i, e, t) {
  const n = this.cache, r = e.length, s = Sr(t, r);
  ht(n, s) || (i.uniform1iv(this.addr, s), ft(n, s));
  let a;
  this.type === i.SAMPLER_2D_SHADOW ? a = $s : a = al;
  for (let o = 0; o !== r; ++o)
    t.setTexture2D(e[o] || a, s[o]);
}
function Wd(i, e, t) {
  const n = this.cache, r = e.length, s = Sr(t, r);
  ht(n, s) || (i.uniform1iv(this.addr, s), ft(n, s));
  for (let a = 0; a !== r; ++a)
    t.setTexture3D(e[a] || ll, s[a]);
}
function Xd(i, e, t) {
  const n = this.cache, r = e.length, s = Sr(t, r);
  ht(n, s) || (i.uniform1iv(this.addr, s), ft(n, s));
  for (let a = 0; a !== r; ++a)
    t.setTextureCube(e[a] || cl, s[a]);
}
function Yd(i, e, t) {
  const n = this.cache, r = e.length, s = Sr(t, r);
  ht(n, s) || (i.uniform1iv(this.addr, s), ft(n, s));
  for (let a = 0; a !== r; ++a)
    t.setTexture2DArray(e[a] || ol, s[a]);
}
function qd(i) {
  switch (i) {
    case 5126:
      return Rd;
    case 35664:
      return Cd;
    case 35665:
      return Pd;
    case 35666:
      return Ld;
    case 35674:
      return Dd;
    case 35675:
      return Id;
    case 35676:
      return Ud;
    case 5124:
    case 35670:
      return Nd;
    case 35667:
    case 35671:
      return Fd;
    case 35668:
    case 35672:
      return Od;
    case 35669:
    case 35673:
      return Bd;
    case 5125:
      return zd;
    case 36294:
      return Vd;
    case 36295:
      return Gd;
    case 36296:
      return Hd;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return kd;
    case 35679:
    case 36299:
    case 36307:
      return Wd;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return Xd;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return Yd;
  }
}
class Zd {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.setValue = wd(t.type);
  }
}
class Jd {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.size = t.size, this.setValue = qd(t.type);
  }
}
class Kd {
  constructor(e) {
    this.id = e, this.seq = [], this.map = {};
  }
  setValue(e, t, n) {
    const r = this.seq;
    for (let s = 0, a = r.length; s !== a; ++s) {
      const o = r[s];
      o.setValue(e, t[o.id], n);
    }
  }
}
const ss = /(\w+)(\])?(\[|\.)?/g;
function co(i, e) {
  i.seq.push(e), i.map[e.id] = e;
}
function $d(i, e, t) {
  const n = i.name, r = n.length;
  for (ss.lastIndex = 0; ; ) {
    const s = ss.exec(n), a = ss.lastIndex;
    let o = s[1];
    const c = s[2] === "]", l = s[3];
    if (c && (o = o | 0), l === void 0 || l === "[" && a + 2 === r) {
      co(t, l === void 0 ? new Zd(o, i, e) : new Jd(o, i, e));
      break;
    } else {
      let m = t.map[o];
      m === void 0 && (m = new Kd(o), co(t, m)), t = m;
    }
  }
}
class dr {
  constructor(e, t) {
    this.seq = [], this.map = {};
    const n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
    for (let a = 0; a < n; ++a) {
      const o = e.getActiveUniform(t, a), c = e.getUniformLocation(t, o.name);
      $d(o, c, this);
    }
    const r = [], s = [];
    for (const a of this.seq)
      a.type === e.SAMPLER_2D_SHADOW || a.type === e.SAMPLER_CUBE_SHADOW || a.type === e.SAMPLER_2D_ARRAY_SHADOW ? r.push(a) : s.push(a);
    r.length > 0 && (this.seq = r.concat(s));
  }
  setValue(e, t, n, r) {
    const s = this.map[t];
    s !== void 0 && s.setValue(e, n, r);
  }
  setOptional(e, t, n) {
    const r = t[n];
    r !== void 0 && this.setValue(e, n, r);
  }
  static upload(e, t, n, r) {
    for (let s = 0, a = t.length; s !== a; ++s) {
      const o = t[s], c = n[o.id];
      c.needsUpdate !== !1 && o.setValue(e, c.value, r);
    }
  }
  static seqWithValue(e, t) {
    const n = [];
    for (let r = 0, s = e.length; r !== s; ++r) {
      const a = e[r];
      a.id in t && n.push(a);
    }
    return n;
  }
}
function uo(i, e, t) {
  const n = i.createShader(e);
  return i.shaderSource(n, t), i.compileShader(n), n;
}
const jd = 37297;
let Qd = 0;
function ep(i, e) {
  const t = i.split(`
`), n = [], r = Math.max(e - 6, 0), s = Math.min(e + 6, t.length);
  for (let a = r; a < s; a++) {
    const o = a + 1;
    n.push(`${o === e ? ">" : " "} ${o}: ${t[a]}`);
  }
  return n.join(`
`);
}
const ho = /* @__PURE__ */ new Ie();
function tp(i) {
  He._getMatrix(ho, He.workingColorSpace, i);
  const e = `mat3( ${ho.elements.map((t) => t.toFixed(4))} )`;
  switch (He.getTransfer(i)) {
    case pr:
      return [e, "LinearTransferOETF"];
    case Ze:
      return [e, "sRGBTransferOETF"];
    default:
      return Ce("WebGLProgram: Unsupported color space: ", i), [e, "LinearTransferOETF"];
  }
}
function fo(i, e, t) {
  const n = i.getShaderParameter(e, i.COMPILE_STATUS), s = (i.getShaderInfoLog(e) || "").trim();
  if (n && s === "") return "";
  const a = /ERROR: 0:(\d+)/.exec(s);
  if (a) {
    const o = parseInt(a[1]);
    return t.toUpperCase() + `

` + s + `

` + ep(i.getShaderSource(e), o);
  } else
    return s;
}
function np(i, e) {
  const t = tp(e);
  return [
    `vec4 ${i}( vec4 value ) {`,
    `	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,
    "}"
  ].join(`
`);
}
const ip = {
  [wo]: "Linear",
  [Ro]: "Reinhard",
  [Co]: "Cineon",
  [Po]: "ACESFilmic",
  [Do]: "AgX",
  [Io]: "Neutral",
  [Lo]: "Custom"
};
function rp(i, e) {
  const t = ip[e];
  return t === void 0 ? (Ce("WebGLProgram: Unsupported toneMapping:", e), "vec3 " + i + "( vec3 color ) { return LinearToneMapping( color ); }") : "vec3 " + i + "( vec3 color ) { return " + t + "ToneMapping( color ); }";
}
const ar = /* @__PURE__ */ new I();
function sp() {
  He.getLuminanceCoefficients(ar);
  const i = ar.x.toFixed(4), e = ar.y.toFixed(4), t = ar.z.toFixed(4);
  return [
    "float luminance( const in vec3 rgb ) {",
    `	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,
    "	return dot( weights, rgb );",
    "}"
  ].join(`
`);
}
function ap(i) {
  return [
    i.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "",
    i.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""
  ].filter(Ti).join(`
`);
}
function op(i) {
  const e = [];
  for (const t in i) {
    const n = i[t];
    n !== !1 && e.push("#define " + t + " " + n);
  }
  return e.join(`
`);
}
function lp(i, e) {
  const t = {}, n = i.getProgramParameter(e, i.ACTIVE_ATTRIBUTES);
  for (let r = 0; r < n; r++) {
    const s = i.getActiveAttrib(e, r), a = s.name;
    let o = 1;
    s.type === i.FLOAT_MAT2 && (o = 2), s.type === i.FLOAT_MAT3 && (o = 3), s.type === i.FLOAT_MAT4 && (o = 4), t[a] = {
      type: s.type,
      location: i.getAttribLocation(e, a),
      locationSize: o
    };
  }
  return t;
}
function Ti(i) {
  return i !== "";
}
function po(i, e) {
  const t = e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return i.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, t).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function mo(i, e) {
  return i.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection);
}
const cp = /^[ \t]*#include +<([\w\d./]+)>/gm;
function js(i) {
  return i.replace(cp, hp);
}
const up = /* @__PURE__ */ new Map();
function hp(i, e) {
  let t = Ne[e];
  if (t === void 0) {
    const n = up.get(e);
    if (n !== void 0)
      t = Ne[n], Ce('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', e, n);
    else
      throw new Error("Can not resolve #include <" + e + ">");
  }
  return js(t);
}
const fp = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function _o(i) {
  return i.replace(fp, dp);
}
function dp(i, e, t, n) {
  let r = "";
  for (let s = parseInt(e); s < parseInt(t); s++)
    r += n.replace(/\[\s*i\s*\]/g, "[ " + s + " ]").replace(/UNROLLED_LOOP_INDEX/g, s);
  return r;
}
function go(i) {
  let e = `precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;
  return i.precision === "highp" ? e += `
#define HIGH_PRECISION` : i.precision === "mediump" ? e += `
#define MEDIUM_PRECISION` : i.precision === "lowp" && (e += `
#define LOW_PRECISION`), e;
}
const pp = {
  [lr]: "SHADOWMAP_TYPE_PCF",
  [yi]: "SHADOWMAP_TYPE_VSM"
};
function mp(i) {
  return pp[i.shadowMapType] || "SHADOWMAP_TYPE_BASIC";
}
const _p = {
  [Vn]: "ENVMAP_TYPE_CUBE",
  [oi]: "ENVMAP_TYPE_CUBE",
  [xr]: "ENVMAP_TYPE_CUBE_UV"
};
function gp(i) {
  return i.envMap === !1 ? "ENVMAP_TYPE_CUBE" : _p[i.envMapMode] || "ENVMAP_TYPE_CUBE";
}
const vp = {
  [oi]: "ENVMAP_MODE_REFRACTION"
};
function xp(i) {
  return i.envMap === !1 ? "ENVMAP_MODE_REFLECTION" : vp[i.envMapMode] || "ENVMAP_MODE_REFLECTION";
}
const Mp = {
  [Ao]: "ENVMAP_BLENDING_MULTIPLY",
  [Xl]: "ENVMAP_BLENDING_MIX",
  [Yl]: "ENVMAP_BLENDING_ADD"
};
function Sp(i) {
  return i.envMap === !1 ? "ENVMAP_BLENDING_NONE" : Mp[i.combine] || "ENVMAP_BLENDING_NONE";
}
function Ep(i) {
  const e = i.envMapCubeUVHeight;
  if (e === null) return null;
  const t = Math.log2(e) - 2, n = 1 / e;
  return { texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 7 * 16)), texelHeight: n, maxMip: t };
}
function yp(i, e, t, n) {
  const r = i.getContext(), s = t.defines;
  let a = t.vertexShader, o = t.fragmentShader;
  const c = mp(t), l = gp(t), h = xp(t), m = Sp(t), u = Ep(t), d = ap(t), _ = op(s), M = r.createProgram();
  let p, f, S = t.glslVersion ? "#version " + t.glslVersion + `
` : "";
  t.isRawShaderMaterial ? (p = [
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    _
  ].filter(Ti).join(`
`), p.length > 0 && (p += `
`), f = [
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    _
  ].filter(Ti).join(`
`), f.length > 0 && (f += `
`)) : (p = [
    go(t),
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    _,
    t.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "",
    t.batching ? "#define USE_BATCHING" : "",
    t.batchingColor ? "#define USE_BATCHING_COLOR" : "",
    t.instancing ? "#define USE_INSTANCING" : "",
    t.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
    t.instancingMorph ? "#define USE_INSTANCING_MORPH" : "",
    t.useFog && t.fog ? "#define USE_FOG" : "",
    t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
    t.map ? "#define USE_MAP" : "",
    t.envMap ? "#define USE_ENVMAP" : "",
    t.envMap ? "#define " + h : "",
    t.lightMap ? "#define USE_LIGHTMAP" : "",
    t.aoMap ? "#define USE_AOMAP" : "",
    t.bumpMap ? "#define USE_BUMPMAP" : "",
    t.normalMap ? "#define USE_NORMALMAP" : "",
    t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
    t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
    t.displacementMap ? "#define USE_DISPLACEMENTMAP" : "",
    t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    t.anisotropy ? "#define USE_ANISOTROPY" : "",
    t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
    t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
    t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
    t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
    t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
    t.specularMap ? "#define USE_SPECULARMAP" : "",
    t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
    t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
    t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    t.metalnessMap ? "#define USE_METALNESSMAP" : "",
    t.alphaMap ? "#define USE_ALPHAMAP" : "",
    t.alphaHash ? "#define USE_ALPHAHASH" : "",
    t.transmission ? "#define USE_TRANSMISSION" : "",
    t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
    t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
    t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
    t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
    //
    t.mapUv ? "#define MAP_UV " + t.mapUv : "",
    t.alphaMapUv ? "#define ALPHAMAP_UV " + t.alphaMapUv : "",
    t.lightMapUv ? "#define LIGHTMAP_UV " + t.lightMapUv : "",
    t.aoMapUv ? "#define AOMAP_UV " + t.aoMapUv : "",
    t.emissiveMapUv ? "#define EMISSIVEMAP_UV " + t.emissiveMapUv : "",
    t.bumpMapUv ? "#define BUMPMAP_UV " + t.bumpMapUv : "",
    t.normalMapUv ? "#define NORMALMAP_UV " + t.normalMapUv : "",
    t.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + t.displacementMapUv : "",
    t.metalnessMapUv ? "#define METALNESSMAP_UV " + t.metalnessMapUv : "",
    t.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + t.roughnessMapUv : "",
    t.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + t.anisotropyMapUv : "",
    t.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + t.clearcoatMapUv : "",
    t.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + t.clearcoatNormalMapUv : "",
    t.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + t.clearcoatRoughnessMapUv : "",
    t.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + t.iridescenceMapUv : "",
    t.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + t.iridescenceThicknessMapUv : "",
    t.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + t.sheenColorMapUv : "",
    t.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + t.sheenRoughnessMapUv : "",
    t.specularMapUv ? "#define SPECULARMAP_UV " + t.specularMapUv : "",
    t.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + t.specularColorMapUv : "",
    t.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + t.specularIntensityMapUv : "",
    t.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + t.transmissionMapUv : "",
    t.thicknessMapUv ? "#define THICKNESSMAP_UV " + t.thicknessMapUv : "",
    //
    t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "",
    t.vertexColors ? "#define USE_COLOR" : "",
    t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
    t.vertexUv1s ? "#define USE_UV1" : "",
    t.vertexUv2s ? "#define USE_UV2" : "",
    t.vertexUv3s ? "#define USE_UV3" : "",
    t.pointsUvs ? "#define USE_POINTS_UV" : "",
    t.flatShading ? "#define FLAT_SHADED" : "",
    t.skinning ? "#define USE_SKINNING" : "",
    t.morphTargets ? "#define USE_MORPHTARGETS" : "",
    t.morphNormals && t.flatShading === !1 ? "#define USE_MORPHNORMALS" : "",
    t.morphColors ? "#define USE_MORPHCOLORS" : "",
    t.morphTargetsCount > 0 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + t.morphTextureStride : "",
    t.morphTargetsCount > 0 ? "#define MORPHTARGETS_COUNT " + t.morphTargetsCount : "",
    t.doubleSided ? "#define DOUBLE_SIDED" : "",
    t.flipSided ? "#define FLIP_SIDED" : "",
    t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    t.shadowMapEnabled ? "#define " + c : "",
    t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
    t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
    t.logarithmicDepthBuffer ? "#define USE_LOGARITHMIC_DEPTH_BUFFER" : "",
    t.reversedDepthBuffer ? "#define USE_REVERSED_DEPTH_BUFFER" : "",
    "uniform mat4 modelMatrix;",
    "uniform mat4 modelViewMatrix;",
    "uniform mat4 projectionMatrix;",
    "uniform mat4 viewMatrix;",
    "uniform mat3 normalMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    "#ifdef USE_INSTANCING",
    "	attribute mat4 instanceMatrix;",
    "#endif",
    "#ifdef USE_INSTANCING_COLOR",
    "	attribute vec3 instanceColor;",
    "#endif",
    "#ifdef USE_INSTANCING_MORPH",
    "	uniform sampler2D morphTexture;",
    "#endif",
    "attribute vec3 position;",
    "attribute vec3 normal;",
    "attribute vec2 uv;",
    "#ifdef USE_UV1",
    "	attribute vec2 uv1;",
    "#endif",
    "#ifdef USE_UV2",
    "	attribute vec2 uv2;",
    "#endif",
    "#ifdef USE_UV3",
    "	attribute vec2 uv3;",
    "#endif",
    "#ifdef USE_TANGENT",
    "	attribute vec4 tangent;",
    "#endif",
    "#if defined( USE_COLOR_ALPHA )",
    "	attribute vec4 color;",
    "#elif defined( USE_COLOR )",
    "	attribute vec3 color;",
    "#endif",
    "#ifdef USE_SKINNING",
    "	attribute vec4 skinIndex;",
    "	attribute vec4 skinWeight;",
    "#endif",
    `
`
  ].filter(Ti).join(`
`), f = [
    go(t),
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    _,
    t.useFog && t.fog ? "#define USE_FOG" : "",
    t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
    t.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "",
    t.map ? "#define USE_MAP" : "",
    t.matcap ? "#define USE_MATCAP" : "",
    t.envMap ? "#define USE_ENVMAP" : "",
    t.envMap ? "#define " + l : "",
    t.envMap ? "#define " + h : "",
    t.envMap ? "#define " + m : "",
    u ? "#define CUBEUV_TEXEL_WIDTH " + u.texelWidth : "",
    u ? "#define CUBEUV_TEXEL_HEIGHT " + u.texelHeight : "",
    u ? "#define CUBEUV_MAX_MIP " + u.maxMip + ".0" : "",
    t.lightMap ? "#define USE_LIGHTMAP" : "",
    t.aoMap ? "#define USE_AOMAP" : "",
    t.bumpMap ? "#define USE_BUMPMAP" : "",
    t.normalMap ? "#define USE_NORMALMAP" : "",
    t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
    t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
    t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    t.anisotropy ? "#define USE_ANISOTROPY" : "",
    t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
    t.clearcoat ? "#define USE_CLEARCOAT" : "",
    t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
    t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
    t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    t.dispersion ? "#define USE_DISPERSION" : "",
    t.iridescence ? "#define USE_IRIDESCENCE" : "",
    t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
    t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
    t.specularMap ? "#define USE_SPECULARMAP" : "",
    t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
    t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
    t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    t.metalnessMap ? "#define USE_METALNESSMAP" : "",
    t.alphaMap ? "#define USE_ALPHAMAP" : "",
    t.alphaTest ? "#define USE_ALPHATEST" : "",
    t.alphaHash ? "#define USE_ALPHAHASH" : "",
    t.sheen ? "#define USE_SHEEN" : "",
    t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
    t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
    t.transmission ? "#define USE_TRANSMISSION" : "",
    t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
    t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
    t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "",
    t.vertexColors || t.instancingColor ? "#define USE_COLOR" : "",
    t.vertexAlphas || t.batchingColor ? "#define USE_COLOR_ALPHA" : "",
    t.vertexUv1s ? "#define USE_UV1" : "",
    t.vertexUv2s ? "#define USE_UV2" : "",
    t.vertexUv3s ? "#define USE_UV3" : "",
    t.pointsUvs ? "#define USE_POINTS_UV" : "",
    t.gradientMap ? "#define USE_GRADIENTMAP" : "",
    t.flatShading ? "#define FLAT_SHADED" : "",
    t.doubleSided ? "#define DOUBLE_SIDED" : "",
    t.flipSided ? "#define FLIP_SIDED" : "",
    t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    t.shadowMapEnabled ? "#define " + c : "",
    t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
    t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
    t.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
    t.decodeVideoTextureEmissive ? "#define DECODE_VIDEO_TEXTURE_EMISSIVE" : "",
    t.logarithmicDepthBuffer ? "#define USE_LOGARITHMIC_DEPTH_BUFFER" : "",
    t.reversedDepthBuffer ? "#define USE_REVERSED_DEPTH_BUFFER" : "",
    "uniform mat4 viewMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    t.toneMapping !== Kt ? "#define TONE_MAPPING" : "",
    t.toneMapping !== Kt ? Ne.tonemapping_pars_fragment : "",
    // this code is required here because it is used by the toneMapping() function defined below
    t.toneMapping !== Kt ? rp("toneMapping", t.toneMapping) : "",
    t.dithering ? "#define DITHERING" : "",
    t.opaque ? "#define OPAQUE" : "",
    Ne.colorspace_pars_fragment,
    // this code is required here because it is used by the various encoding/decoding function defined below
    np("linearToOutputTexel", t.outputColorSpace),
    sp(),
    t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "",
    `
`
  ].filter(Ti).join(`
`)), a = js(a), a = po(a, t), a = mo(a, t), o = js(o), o = po(o, t), o = mo(o, t), a = _o(a), o = _o(o), t.isRawShaderMaterial !== !0 && (S = `#version 300 es
`, p = [
    d,
    "#define attribute in",
    "#define varying out",
    "#define texture2D texture"
  ].join(`
`) + `
` + p, f = [
    "#define varying in",
    t.glslVersion === Ca ? "" : "layout(location = 0) out highp vec4 pc_fragColor;",
    t.glslVersion === Ca ? "" : "#define gl_FragColor pc_fragColor",
    "#define gl_FragDepthEXT gl_FragDepth",
    "#define texture2D texture",
    "#define textureCube texture",
    "#define texture2DProj textureProj",
    "#define texture2DLodEXT textureLod",
    "#define texture2DProjLodEXT textureProjLod",
    "#define textureCubeLodEXT textureLod",
    "#define texture2DGradEXT textureGrad",
    "#define texture2DProjGradEXT textureProjGrad",
    "#define textureCubeGradEXT textureGrad"
  ].join(`
`) + `
` + f);
  const b = S + p + a, E = S + f + o, R = uo(r, r.VERTEX_SHADER, b), A = uo(r, r.FRAGMENT_SHADER, E);
  r.attachShader(M, R), r.attachShader(M, A), t.index0AttributeName !== void 0 ? r.bindAttribLocation(M, 0, t.index0AttributeName) : t.morphTargets === !0 && r.bindAttribLocation(M, 0, "position"), r.linkProgram(M);
  function L(C) {
    if (i.debug.checkShaderErrors) {
      const G = r.getProgramInfoLog(M) || "", z = r.getShaderInfoLog(R) || "", k = r.getShaderInfoLog(A) || "", H = G.trim(), B = z.trim(), O = k.trim();
      let Q = !0, K = !0;
      if (r.getProgramParameter(M, r.LINK_STATUS) === !1)
        if (Q = !1, typeof i.debug.onShaderError == "function")
          i.debug.onShaderError(r, M, R, A);
        else {
          const ce = fo(r, R, "vertex"), pe = fo(r, A, "fragment");
          We(
            "THREE.WebGLProgram: Shader Error " + r.getError() + " - VALIDATE_STATUS " + r.getProgramParameter(M, r.VALIDATE_STATUS) + `

Material Name: ` + C.name + `
Material Type: ` + C.type + `

Program Info Log: ` + H + `
` + ce + `
` + pe
          );
        }
      else H !== "" ? Ce("WebGLProgram: Program Info Log:", H) : (B === "" || O === "") && (K = !1);
      K && (C.diagnostics = {
        runnable: Q,
        programLog: H,
        vertexShader: {
          log: B,
          prefix: p
        },
        fragmentShader: {
          log: O,
          prefix: f
        }
      });
    }
    r.deleteShader(R), r.deleteShader(A), v = new dr(r, M), T = lp(r, M);
  }
  let v;
  this.getUniforms = function() {
    return v === void 0 && L(this), v;
  };
  let T;
  this.getAttributes = function() {
    return T === void 0 && L(this), T;
  };
  let q = t.rendererExtensionParallelShaderCompile === !1;
  return this.isReady = function() {
    return q === !1 && (q = r.getProgramParameter(M, jd)), q;
  }, this.destroy = function() {
    n.releaseStatesOfProgram(this), r.deleteProgram(M), this.program = void 0;
  }, this.type = t.shaderType, this.name = t.shaderName, this.id = Qd++, this.cacheKey = e, this.usedTimes = 1, this.program = M, this.vertexShader = R, this.fragmentShader = A, this;
}
let Tp = 0;
class bp {
  constructor() {
    this.shaderCache = /* @__PURE__ */ new Map(), this.materialCache = /* @__PURE__ */ new Map();
  }
  update(e) {
    const t = e.vertexShader, n = e.fragmentShader, r = this._getShaderStage(t), s = this._getShaderStage(n), a = this._getShaderCacheForMaterial(e);
    return a.has(r) === !1 && (a.add(r), r.usedTimes++), a.has(s) === !1 && (a.add(s), s.usedTimes++), this;
  }
  remove(e) {
    const t = this.materialCache.get(e);
    for (const n of t)
      n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n.code);
    return this.materialCache.delete(e), this;
  }
  getVertexShaderID(e) {
    return this._getShaderStage(e.vertexShader).id;
  }
  getFragmentShaderID(e) {
    return this._getShaderStage(e.fragmentShader).id;
  }
  dispose() {
    this.shaderCache.clear(), this.materialCache.clear();
  }
  _getShaderCacheForMaterial(e) {
    const t = this.materialCache;
    let n = t.get(e);
    return n === void 0 && (n = /* @__PURE__ */ new Set(), t.set(e, n)), n;
  }
  _getShaderStage(e) {
    const t = this.shaderCache;
    let n = t.get(e);
    return n === void 0 && (n = new Ap(e), t.set(e, n)), n;
  }
}
class Ap {
  constructor(e) {
    this.id = Tp++, this.code = e, this.usedTimes = 0;
  }
}
function wp(i, e, t, n, r, s) {
  const a = new Xo(), o = new bp(), c = /* @__PURE__ */ new Set(), l = [], h = /* @__PURE__ */ new Map(), m = n.logarithmicDepthBuffer;
  let u = n.precision;
  const d = {
    MeshDepthMaterial: "depth",
    MeshDistanceMaterial: "distance",
    MeshNormalMaterial: "normal",
    MeshBasicMaterial: "basic",
    MeshLambertMaterial: "lambert",
    MeshPhongMaterial: "phong",
    MeshToonMaterial: "toon",
    MeshStandardMaterial: "physical",
    MeshPhysicalMaterial: "physical",
    MeshMatcapMaterial: "matcap",
    LineBasicMaterial: "basic",
    LineDashedMaterial: "dashed",
    PointsMaterial: "points",
    ShadowMaterial: "shadow",
    SpriteMaterial: "sprite"
  };
  function _(v) {
    return c.add(v), v === 0 ? "uv" : `uv${v}`;
  }
  function M(v, T, q, C, G) {
    const z = C.fog, k = G.geometry, H = v.isMeshStandardMaterial || v.isMeshLambertMaterial || v.isMeshPhongMaterial ? C.environment : null, B = v.isMeshStandardMaterial || v.isMeshLambertMaterial && !v.envMap || v.isMeshPhongMaterial && !v.envMap, O = e.get(v.envMap || H, B), Q = O && O.mapping === xr ? O.image.height : null, K = d[v.type];
    v.precision !== null && (u = n.getMaxPrecision(v.precision), u !== v.precision && Ce("WebGLProgram.getParameters:", v.precision, "not supported, using", u, "instead."));
    const ce = k.morphAttributes.position || k.morphAttributes.normal || k.morphAttributes.color, pe = ce !== void 0 ? ce.length : 0;
    let he = 0;
    k.morphAttributes.position !== void 0 && (he = 1), k.morphAttributes.normal !== void 0 && (he = 2), k.morphAttributes.color !== void 0 && (he = 3);
    let Ue, it, nt, Z;
    if (K) {
      const qe = qt[K];
      Ue = qe.vertexShader, it = qe.fragmentShader;
    } else
      Ue = v.vertexShader, it = v.fragmentShader, o.update(v), nt = o.getVertexShaderID(v), Z = o.getFragmentShaderID(v);
    const ne = i.getRenderTarget(), se = i.state.buffers.depth.getReversed(), De = G.isInstancedMesh === !0, Ae = G.isBatchedMesh === !0, Re = !!v.map, dt = !!v.matcap, Ge = !!O, Ye = !!v.aoMap, $e = !!v.lightMap, Fe = !!v.bumpMap, at = !!v.normalMap, w = !!v.displacementMap, lt = !!v.emissiveMap, Xe = !!v.metalnessMap, Qe = !!v.roughnessMap, Me = v.anisotropy > 0, y = v.clearcoat > 0, g = v.dispersion > 0, D = v.iridescence > 0, Y = v.sheen > 0, J = v.transmission > 0, X = Me && !!v.anisotropyMap, me = y && !!v.clearcoatMap, ie = y && !!v.clearcoatNormalMap, Te = y && !!v.clearcoatRoughnessMap, we = D && !!v.iridescenceMap, $ = D && !!v.iridescenceThicknessMap, ee = Y && !!v.sheenColorMap, _e = Y && !!v.sheenRoughnessMap, ve = !!v.specularMap, ue = !!v.specularColorMap, Oe = !!v.specularIntensityMap, P = J && !!v.transmissionMap, re = J && !!v.thicknessMap, te = !!v.gradientMap, de = !!v.alphaMap, j = v.alphaTest > 0, W = !!v.alphaHash, ge = !!v.extensions;
    let Pe = Kt;
    v.toneMapped && (ne === null || ne.isXRRenderTarget === !0) && (Pe = i.toneMapping);
    const et = {
      shaderID: K,
      shaderType: v.type,
      shaderName: v.name,
      vertexShader: Ue,
      fragmentShader: it,
      defines: v.defines,
      customVertexShaderID: nt,
      customFragmentShaderID: Z,
      isRawShaderMaterial: v.isRawShaderMaterial === !0,
      glslVersion: v.glslVersion,
      precision: u,
      batching: Ae,
      batchingColor: Ae && G._colorsTexture !== null,
      instancing: De,
      instancingColor: De && G.instanceColor !== null,
      instancingMorph: De && G.morphTexture !== null,
      outputColorSpace: ne === null ? i.outputColorSpace : ne.isXRRenderTarget === !0 ? ne.texture.colorSpace : ci,
      alphaToCoverage: !!v.alphaToCoverage,
      map: Re,
      matcap: dt,
      envMap: Ge,
      envMapMode: Ge && O.mapping,
      envMapCubeUVHeight: Q,
      aoMap: Ye,
      lightMap: $e,
      bumpMap: Fe,
      normalMap: at,
      displacementMap: w,
      emissiveMap: lt,
      normalMapObjectSpace: at && v.normalMapType === Jl,
      normalMapTangentSpace: at && v.normalMapType === Ho,
      metalnessMap: Xe,
      roughnessMap: Qe,
      anisotropy: Me,
      anisotropyMap: X,
      clearcoat: y,
      clearcoatMap: me,
      clearcoatNormalMap: ie,
      clearcoatRoughnessMap: Te,
      dispersion: g,
      iridescence: D,
      iridescenceMap: we,
      iridescenceThicknessMap: $,
      sheen: Y,
      sheenColorMap: ee,
      sheenRoughnessMap: _e,
      specularMap: ve,
      specularColorMap: ue,
      specularIntensityMap: Oe,
      transmission: J,
      transmissionMap: P,
      thicknessMap: re,
      gradientMap: te,
      opaque: v.transparent === !1 && v.blending === ri && v.alphaToCoverage === !1,
      alphaMap: de,
      alphaTest: j,
      alphaHash: W,
      combine: v.combine,
      //
      mapUv: Re && _(v.map.channel),
      aoMapUv: Ye && _(v.aoMap.channel),
      lightMapUv: $e && _(v.lightMap.channel),
      bumpMapUv: Fe && _(v.bumpMap.channel),
      normalMapUv: at && _(v.normalMap.channel),
      displacementMapUv: w && _(v.displacementMap.channel),
      emissiveMapUv: lt && _(v.emissiveMap.channel),
      metalnessMapUv: Xe && _(v.metalnessMap.channel),
      roughnessMapUv: Qe && _(v.roughnessMap.channel),
      anisotropyMapUv: X && _(v.anisotropyMap.channel),
      clearcoatMapUv: me && _(v.clearcoatMap.channel),
      clearcoatNormalMapUv: ie && _(v.clearcoatNormalMap.channel),
      clearcoatRoughnessMapUv: Te && _(v.clearcoatRoughnessMap.channel),
      iridescenceMapUv: we && _(v.iridescenceMap.channel),
      iridescenceThicknessMapUv: $ && _(v.iridescenceThicknessMap.channel),
      sheenColorMapUv: ee && _(v.sheenColorMap.channel),
      sheenRoughnessMapUv: _e && _(v.sheenRoughnessMap.channel),
      specularMapUv: ve && _(v.specularMap.channel),
      specularColorMapUv: ue && _(v.specularColorMap.channel),
      specularIntensityMapUv: Oe && _(v.specularIntensityMap.channel),
      transmissionMapUv: P && _(v.transmissionMap.channel),
      thicknessMapUv: re && _(v.thicknessMap.channel),
      alphaMapUv: de && _(v.alphaMap.channel),
      //
      vertexTangents: !!k.attributes.tangent && (at || Me),
      vertexColors: v.vertexColors,
      vertexAlphas: v.vertexColors === !0 && !!k.attributes.color && k.attributes.color.itemSize === 4,
      pointsUvs: G.isPoints === !0 && !!k.attributes.uv && (Re || de),
      fog: !!z,
      useFog: v.fog === !0,
      fogExp2: !!z && z.isFogExp2,
      flatShading: v.wireframe === !1 && (v.flatShading === !0 || k.attributes.normal === void 0 && at === !1 && (v.isMeshLambertMaterial || v.isMeshPhongMaterial || v.isMeshStandardMaterial || v.isMeshPhysicalMaterial)),
      sizeAttenuation: v.sizeAttenuation === !0,
      logarithmicDepthBuffer: m,
      reversedDepthBuffer: se,
      skinning: G.isSkinnedMesh === !0,
      morphTargets: k.morphAttributes.position !== void 0,
      morphNormals: k.morphAttributes.normal !== void 0,
      morphColors: k.morphAttributes.color !== void 0,
      morphTargetsCount: pe,
      morphTextureStride: he,
      numDirLights: T.directional.length,
      numPointLights: T.point.length,
      numSpotLights: T.spot.length,
      numSpotLightMaps: T.spotLightMap.length,
      numRectAreaLights: T.rectArea.length,
      numHemiLights: T.hemi.length,
      numDirLightShadows: T.directionalShadowMap.length,
      numPointLightShadows: T.pointShadowMap.length,
      numSpotLightShadows: T.spotShadowMap.length,
      numSpotLightShadowsWithMaps: T.numSpotLightShadowsWithMaps,
      numLightProbes: T.numLightProbes,
      numClippingPlanes: s.numPlanes,
      numClipIntersection: s.numIntersection,
      dithering: v.dithering,
      shadowMapEnabled: i.shadowMap.enabled && q.length > 0,
      shadowMapType: i.shadowMap.type,
      toneMapping: Pe,
      decodeVideoTexture: Re && v.map.isVideoTexture === !0 && He.getTransfer(v.map.colorSpace) === Ze,
      decodeVideoTextureEmissive: lt && v.emissiveMap.isVideoTexture === !0 && He.getTransfer(v.emissiveMap.colorSpace) === Ze,
      premultipliedAlpha: v.premultipliedAlpha,
      doubleSided: v.side === Ft,
      flipSided: v.side === wt,
      useDepthPacking: v.depthPacking >= 0,
      depthPacking: v.depthPacking || 0,
      index0AttributeName: v.index0AttributeName,
      extensionClipCullDistance: ge && v.extensions.clipCullDistance === !0 && t.has("WEBGL_clip_cull_distance"),
      extensionMultiDraw: (ge && v.extensions.multiDraw === !0 || Ae) && t.has("WEBGL_multi_draw"),
      rendererExtensionParallelShaderCompile: t.has("KHR_parallel_shader_compile"),
      customProgramCacheKey: v.customProgramCacheKey()
    };
    return et.vertexUv1s = c.has(1), et.vertexUv2s = c.has(2), et.vertexUv3s = c.has(3), c.clear(), et;
  }
  function p(v) {
    const T = [];
    if (v.shaderID ? T.push(v.shaderID) : (T.push(v.customVertexShaderID), T.push(v.customFragmentShaderID)), v.defines !== void 0)
      for (const q in v.defines)
        T.push(q), T.push(v.defines[q]);
    return v.isRawShaderMaterial === !1 && (f(T, v), S(T, v), T.push(i.outputColorSpace)), T.push(v.customProgramCacheKey), T.join();
  }
  function f(v, T) {
    v.push(T.precision), v.push(T.outputColorSpace), v.push(T.envMapMode), v.push(T.envMapCubeUVHeight), v.push(T.mapUv), v.push(T.alphaMapUv), v.push(T.lightMapUv), v.push(T.aoMapUv), v.push(T.bumpMapUv), v.push(T.normalMapUv), v.push(T.displacementMapUv), v.push(T.emissiveMapUv), v.push(T.metalnessMapUv), v.push(T.roughnessMapUv), v.push(T.anisotropyMapUv), v.push(T.clearcoatMapUv), v.push(T.clearcoatNormalMapUv), v.push(T.clearcoatRoughnessMapUv), v.push(T.iridescenceMapUv), v.push(T.iridescenceThicknessMapUv), v.push(T.sheenColorMapUv), v.push(T.sheenRoughnessMapUv), v.push(T.specularMapUv), v.push(T.specularColorMapUv), v.push(T.specularIntensityMapUv), v.push(T.transmissionMapUv), v.push(T.thicknessMapUv), v.push(T.combine), v.push(T.fogExp2), v.push(T.sizeAttenuation), v.push(T.morphTargetsCount), v.push(T.morphAttributeCount), v.push(T.numDirLights), v.push(T.numPointLights), v.push(T.numSpotLights), v.push(T.numSpotLightMaps), v.push(T.numHemiLights), v.push(T.numRectAreaLights), v.push(T.numDirLightShadows), v.push(T.numPointLightShadows), v.push(T.numSpotLightShadows), v.push(T.numSpotLightShadowsWithMaps), v.push(T.numLightProbes), v.push(T.shadowMapType), v.push(T.toneMapping), v.push(T.numClippingPlanes), v.push(T.numClipIntersection), v.push(T.depthPacking);
  }
  function S(v, T) {
    a.disableAll(), T.instancing && a.enable(0), T.instancingColor && a.enable(1), T.instancingMorph && a.enable(2), T.matcap && a.enable(3), T.envMap && a.enable(4), T.normalMapObjectSpace && a.enable(5), T.normalMapTangentSpace && a.enable(6), T.clearcoat && a.enable(7), T.iridescence && a.enable(8), T.alphaTest && a.enable(9), T.vertexColors && a.enable(10), T.vertexAlphas && a.enable(11), T.vertexUv1s && a.enable(12), T.vertexUv2s && a.enable(13), T.vertexUv3s && a.enable(14), T.vertexTangents && a.enable(15), T.anisotropy && a.enable(16), T.alphaHash && a.enable(17), T.batching && a.enable(18), T.dispersion && a.enable(19), T.batchingColor && a.enable(20), T.gradientMap && a.enable(21), v.push(a.mask), a.disableAll(), T.fog && a.enable(0), T.useFog && a.enable(1), T.flatShading && a.enable(2), T.logarithmicDepthBuffer && a.enable(3), T.reversedDepthBuffer && a.enable(4), T.skinning && a.enable(5), T.morphTargets && a.enable(6), T.morphNormals && a.enable(7), T.morphColors && a.enable(8), T.premultipliedAlpha && a.enable(9), T.shadowMapEnabled && a.enable(10), T.doubleSided && a.enable(11), T.flipSided && a.enable(12), T.useDepthPacking && a.enable(13), T.dithering && a.enable(14), T.transmission && a.enable(15), T.sheen && a.enable(16), T.opaque && a.enable(17), T.pointsUvs && a.enable(18), T.decodeVideoTexture && a.enable(19), T.decodeVideoTextureEmissive && a.enable(20), T.alphaToCoverage && a.enable(21), v.push(a.mask);
  }
  function b(v) {
    const T = d[v.type];
    let q;
    if (T) {
      const C = qt[T];
      q = Zc.clone(C.uniforms);
    } else
      q = v.uniforms;
    return q;
  }
  function E(v, T) {
    let q = h.get(T);
    return q !== void 0 ? ++q.usedTimes : (q = new yp(i, T, v, r), l.push(q), h.set(T, q)), q;
  }
  function R(v) {
    if (--v.usedTimes === 0) {
      const T = l.indexOf(v);
      l[T] = l[l.length - 1], l.pop(), h.delete(v.cacheKey), v.destroy();
    }
  }
  function A(v) {
    o.remove(v);
  }
  function L() {
    o.dispose();
  }
  return {
    getParameters: M,
    getProgramCacheKey: p,
    getUniforms: b,
    acquireProgram: E,
    releaseProgram: R,
    releaseShaderCache: A,
    // Exposed for resource monitoring & error feedback via renderer.info:
    programs: l,
    dispose: L
  };
}
function Rp() {
  let i = /* @__PURE__ */ new WeakMap();
  function e(a) {
    return i.has(a);
  }
  function t(a) {
    let o = i.get(a);
    return o === void 0 && (o = {}, i.set(a, o)), o;
  }
  function n(a) {
    i.delete(a);
  }
  function r(a, o, c) {
    i.get(a)[o] = c;
  }
  function s() {
    i = /* @__PURE__ */ new WeakMap();
  }
  return {
    has: e,
    get: t,
    remove: n,
    update: r,
    dispose: s
  };
}
function Cp(i, e) {
  return i.groupOrder !== e.groupOrder ? i.groupOrder - e.groupOrder : i.renderOrder !== e.renderOrder ? i.renderOrder - e.renderOrder : i.material.id !== e.material.id ? i.material.id - e.material.id : i.materialVariant !== e.materialVariant ? i.materialVariant - e.materialVariant : i.z !== e.z ? i.z - e.z : i.id - e.id;
}
function vo(i, e) {
  return i.groupOrder !== e.groupOrder ? i.groupOrder - e.groupOrder : i.renderOrder !== e.renderOrder ? i.renderOrder - e.renderOrder : i.z !== e.z ? e.z - i.z : i.id - e.id;
}
function xo() {
  const i = [];
  let e = 0;
  const t = [], n = [], r = [];
  function s() {
    e = 0, t.length = 0, n.length = 0, r.length = 0;
  }
  function a(u) {
    let d = 0;
    return u.isInstancedMesh && (d += 2), u.isSkinnedMesh && (d += 1), d;
  }
  function o(u, d, _, M, p, f) {
    let S = i[e];
    return S === void 0 ? (S = {
      id: u.id,
      object: u,
      geometry: d,
      material: _,
      materialVariant: a(u),
      groupOrder: M,
      renderOrder: u.renderOrder,
      z: p,
      group: f
    }, i[e] = S) : (S.id = u.id, S.object = u, S.geometry = d, S.material = _, S.materialVariant = a(u), S.groupOrder = M, S.renderOrder = u.renderOrder, S.z = p, S.group = f), e++, S;
  }
  function c(u, d, _, M, p, f) {
    const S = o(u, d, _, M, p, f);
    _.transmission > 0 ? n.push(S) : _.transparent === !0 ? r.push(S) : t.push(S);
  }
  function l(u, d, _, M, p, f) {
    const S = o(u, d, _, M, p, f);
    _.transmission > 0 ? n.unshift(S) : _.transparent === !0 ? r.unshift(S) : t.unshift(S);
  }
  function h(u, d) {
    t.length > 1 && t.sort(u || Cp), n.length > 1 && n.sort(d || vo), r.length > 1 && r.sort(d || vo);
  }
  function m() {
    for (let u = e, d = i.length; u < d; u++) {
      const _ = i[u];
      if (_.id === null) break;
      _.id = null, _.object = null, _.geometry = null, _.material = null, _.group = null;
    }
  }
  return {
    opaque: t,
    transmissive: n,
    transparent: r,
    init: s,
    push: c,
    unshift: l,
    finish: m,
    sort: h
  };
}
function Pp() {
  let i = /* @__PURE__ */ new WeakMap();
  function e(n, r) {
    const s = i.get(n);
    let a;
    return s === void 0 ? (a = new xo(), i.set(n, [a])) : r >= s.length ? (a = new xo(), s.push(a)) : a = s[r], a;
  }
  function t() {
    i = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: e,
    dispose: t
  };
}
function Lp() {
  const i = {};
  return {
    get: function(e) {
      if (i[e.id] !== void 0)
        return i[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            direction: new I(),
            color: new Ve()
          };
          break;
        case "SpotLight":
          t = {
            position: new I(),
            direction: new I(),
            color: new Ve(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0
          };
          break;
        case "PointLight":
          t = {
            position: new I(),
            color: new Ve(),
            distance: 0,
            decay: 0
          };
          break;
        case "HemisphereLight":
          t = {
            direction: new I(),
            skyColor: new Ve(),
            groundColor: new Ve()
          };
          break;
        case "RectAreaLight":
          t = {
            color: new Ve(),
            position: new I(),
            halfWidth: new I(),
            halfHeight: new I()
          };
          break;
      }
      return i[e.id] = t, t;
    }
  };
}
function Dp() {
  const i = {};
  return {
    get: function(e) {
      if (i[e.id] !== void 0)
        return i[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new be()
          };
          break;
        case "SpotLight":
          t = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new be()
          };
          break;
        case "PointLight":
          t = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new be(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3
          };
          break;
      }
      return i[e.id] = t, t;
    }
  };
}
let Ip = 0;
function Up(i, e) {
  return (e.castShadow ? 2 : 0) - (i.castShadow ? 2 : 0) + (e.map ? 1 : 0) - (i.map ? 1 : 0);
}
function Np(i) {
  const e = new Lp(), t = Dp(), n = {
    version: 0,
    hash: {
      directionalLength: -1,
      pointLength: -1,
      spotLength: -1,
      rectAreaLength: -1,
      hemiLength: -1,
      numDirectionalShadows: -1,
      numPointShadows: -1,
      numSpotShadows: -1,
      numSpotMaps: -1,
      numLightProbes: -1
    },
    ambient: [0, 0, 0],
    probe: [],
    directional: [],
    directionalShadow: [],
    directionalShadowMap: [],
    directionalShadowMatrix: [],
    spot: [],
    spotLightMap: [],
    spotShadow: [],
    spotShadowMap: [],
    spotLightMatrix: [],
    rectArea: [],
    rectAreaLTC1: null,
    rectAreaLTC2: null,
    point: [],
    pointShadow: [],
    pointShadowMap: [],
    pointShadowMatrix: [],
    hemi: [],
    numSpotLightShadowsWithMaps: 0,
    numLightProbes: 0
  };
  for (let l = 0; l < 9; l++) n.probe.push(new I());
  const r = new I(), s = new tt(), a = new tt();
  function o(l) {
    let h = 0, m = 0, u = 0;
    for (let T = 0; T < 9; T++) n.probe[T].set(0, 0, 0);
    let d = 0, _ = 0, M = 0, p = 0, f = 0, S = 0, b = 0, E = 0, R = 0, A = 0, L = 0;
    l.sort(Up);
    for (let T = 0, q = l.length; T < q; T++) {
      const C = l[T], G = C.color, z = C.intensity, k = C.distance;
      let H = null;
      if (C.shadow && C.shadow.map && (C.shadow.map.texture.format === li ? H = C.shadow.map.texture : H = C.shadow.map.depthTexture || C.shadow.map.texture), C.isAmbientLight)
        h += G.r * z, m += G.g * z, u += G.b * z;
      else if (C.isLightProbe) {
        for (let B = 0; B < 9; B++)
          n.probe[B].addScaledVector(C.sh.coefficients[B], z);
        L++;
      } else if (C.isDirectionalLight) {
        const B = e.get(C);
        if (B.color.copy(C.color).multiplyScalar(C.intensity), C.castShadow) {
          const O = C.shadow, Q = t.get(C);
          Q.shadowIntensity = O.intensity, Q.shadowBias = O.bias, Q.shadowNormalBias = O.normalBias, Q.shadowRadius = O.radius, Q.shadowMapSize = O.mapSize, n.directionalShadow[d] = Q, n.directionalShadowMap[d] = H, n.directionalShadowMatrix[d] = C.shadow.matrix, S++;
        }
        n.directional[d] = B, d++;
      } else if (C.isSpotLight) {
        const B = e.get(C);
        B.position.setFromMatrixPosition(C.matrixWorld), B.color.copy(G).multiplyScalar(z), B.distance = k, B.coneCos = Math.cos(C.angle), B.penumbraCos = Math.cos(C.angle * (1 - C.penumbra)), B.decay = C.decay, n.spot[M] = B;
        const O = C.shadow;
        if (C.map && (n.spotLightMap[R] = C.map, R++, O.updateMatrices(C), C.castShadow && A++), n.spotLightMatrix[M] = O.matrix, C.castShadow) {
          const Q = t.get(C);
          Q.shadowIntensity = O.intensity, Q.shadowBias = O.bias, Q.shadowNormalBias = O.normalBias, Q.shadowRadius = O.radius, Q.shadowMapSize = O.mapSize, n.spotShadow[M] = Q, n.spotShadowMap[M] = H, E++;
        }
        M++;
      } else if (C.isRectAreaLight) {
        const B = e.get(C);
        B.color.copy(G).multiplyScalar(z), B.halfWidth.set(C.width * 0.5, 0, 0), B.halfHeight.set(0, C.height * 0.5, 0), n.rectArea[p] = B, p++;
      } else if (C.isPointLight) {
        const B = e.get(C);
        if (B.color.copy(C.color).multiplyScalar(C.intensity), B.distance = C.distance, B.decay = C.decay, C.castShadow) {
          const O = C.shadow, Q = t.get(C);
          Q.shadowIntensity = O.intensity, Q.shadowBias = O.bias, Q.shadowNormalBias = O.normalBias, Q.shadowRadius = O.radius, Q.shadowMapSize = O.mapSize, Q.shadowCameraNear = O.camera.near, Q.shadowCameraFar = O.camera.far, n.pointShadow[_] = Q, n.pointShadowMap[_] = H, n.pointShadowMatrix[_] = C.shadow.matrix, b++;
        }
        n.point[_] = B, _++;
      } else if (C.isHemisphereLight) {
        const B = e.get(C);
        B.skyColor.copy(C.color).multiplyScalar(z), B.groundColor.copy(C.groundColor).multiplyScalar(z), n.hemi[f] = B, f++;
      }
    }
    p > 0 && (i.has("OES_texture_float_linear") === !0 ? (n.rectAreaLTC1 = ae.LTC_FLOAT_1, n.rectAreaLTC2 = ae.LTC_FLOAT_2) : (n.rectAreaLTC1 = ae.LTC_HALF_1, n.rectAreaLTC2 = ae.LTC_HALF_2)), n.ambient[0] = h, n.ambient[1] = m, n.ambient[2] = u;
    const v = n.hash;
    (v.directionalLength !== d || v.pointLength !== _ || v.spotLength !== M || v.rectAreaLength !== p || v.hemiLength !== f || v.numDirectionalShadows !== S || v.numPointShadows !== b || v.numSpotShadows !== E || v.numSpotMaps !== R || v.numLightProbes !== L) && (n.directional.length = d, n.spot.length = M, n.rectArea.length = p, n.point.length = _, n.hemi.length = f, n.directionalShadow.length = S, n.directionalShadowMap.length = S, n.pointShadow.length = b, n.pointShadowMap.length = b, n.spotShadow.length = E, n.spotShadowMap.length = E, n.directionalShadowMatrix.length = S, n.pointShadowMatrix.length = b, n.spotLightMatrix.length = E + R - A, n.spotLightMap.length = R, n.numSpotLightShadowsWithMaps = A, n.numLightProbes = L, v.directionalLength = d, v.pointLength = _, v.spotLength = M, v.rectAreaLength = p, v.hemiLength = f, v.numDirectionalShadows = S, v.numPointShadows = b, v.numSpotShadows = E, v.numSpotMaps = R, v.numLightProbes = L, n.version = Ip++);
  }
  function c(l, h) {
    let m = 0, u = 0, d = 0, _ = 0, M = 0;
    const p = h.matrixWorldInverse;
    for (let f = 0, S = l.length; f < S; f++) {
      const b = l[f];
      if (b.isDirectionalLight) {
        const E = n.directional[m];
        E.direction.setFromMatrixPosition(b.matrixWorld), r.setFromMatrixPosition(b.target.matrixWorld), E.direction.sub(r), E.direction.transformDirection(p), m++;
      } else if (b.isSpotLight) {
        const E = n.spot[d];
        E.position.setFromMatrixPosition(b.matrixWorld), E.position.applyMatrix4(p), E.direction.setFromMatrixPosition(b.matrixWorld), r.setFromMatrixPosition(b.target.matrixWorld), E.direction.sub(r), E.direction.transformDirection(p), d++;
      } else if (b.isRectAreaLight) {
        const E = n.rectArea[_];
        E.position.setFromMatrixPosition(b.matrixWorld), E.position.applyMatrix4(p), a.identity(), s.copy(b.matrixWorld), s.premultiply(p), a.extractRotation(s), E.halfWidth.set(b.width * 0.5, 0, 0), E.halfHeight.set(0, b.height * 0.5, 0), E.halfWidth.applyMatrix4(a), E.halfHeight.applyMatrix4(a), _++;
      } else if (b.isPointLight) {
        const E = n.point[u];
        E.position.setFromMatrixPosition(b.matrixWorld), E.position.applyMatrix4(p), u++;
      } else if (b.isHemisphereLight) {
        const E = n.hemi[M];
        E.direction.setFromMatrixPosition(b.matrixWorld), E.direction.transformDirection(p), M++;
      }
    }
  }
  return {
    setup: o,
    setupView: c,
    state: n
  };
}
function Mo(i) {
  const e = new Np(i), t = [], n = [];
  function r(h) {
    l.camera = h, t.length = 0, n.length = 0;
  }
  function s(h) {
    t.push(h);
  }
  function a(h) {
    n.push(h);
  }
  function o() {
    e.setup(t);
  }
  function c(h) {
    e.setupView(t, h);
  }
  const l = {
    lightsArray: t,
    shadowsArray: n,
    camera: null,
    lights: e,
    transmissionRenderTarget: {}
  };
  return {
    init: r,
    state: l,
    setupLights: o,
    setupLightsView: c,
    pushLight: s,
    pushShadow: a
  };
}
function Fp(i) {
  let e = /* @__PURE__ */ new WeakMap();
  function t(r, s = 0) {
    const a = e.get(r);
    let o;
    return a === void 0 ? (o = new Mo(i), e.set(r, [o])) : s >= a.length ? (o = new Mo(i), a.push(o)) : o = a[s], o;
  }
  function n() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: t,
    dispose: n
  };
}
const Op = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, Bp = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`, zp = [
  /* @__PURE__ */ new I(1, 0, 0),
  /* @__PURE__ */ new I(-1, 0, 0),
  /* @__PURE__ */ new I(0, 1, 0),
  /* @__PURE__ */ new I(0, -1, 0),
  /* @__PURE__ */ new I(0, 0, 1),
  /* @__PURE__ */ new I(0, 0, -1)
], Vp = [
  /* @__PURE__ */ new I(0, -1, 0),
  /* @__PURE__ */ new I(0, -1, 0),
  /* @__PURE__ */ new I(0, 0, 1),
  /* @__PURE__ */ new I(0, 0, -1),
  /* @__PURE__ */ new I(0, -1, 0),
  /* @__PURE__ */ new I(0, -1, 0)
], So = /* @__PURE__ */ new tt(), Ei = /* @__PURE__ */ new I(), as = /* @__PURE__ */ new I();
function Gp(i, e, t) {
  let n = new ua();
  const r = new be(), s = new be(), a = new st(), o = new jc(), c = new Qc(), l = {}, h = t.maxTextureSize, m = { [An]: wt, [wt]: An, [Ft]: Ft }, u = new tn({
    defines: {
      VSM_SAMPLES: 8
    },
    uniforms: {
      shadow_pass: { value: null },
      resolution: { value: new be() },
      radius: { value: 4 }
    },
    vertexShader: Op,
    fragmentShader: Bp
  }), d = u.clone();
  d.defines.HORIZONTAL_PASS = 1;
  const _ = new kt();
  _.setAttribute(
    "position",
    new jt(
      new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]),
      3
    )
  );
  const M = new bt(_, u), p = this;
  this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = lr;
  let f = this.type;
  this.render = function(A, L, v) {
    if (p.enabled === !1 || p.autoUpdate === !1 && p.needsUpdate === !1 || A.length === 0) return;
    this.type === Al && (Ce("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."), this.type = lr);
    const T = i.getRenderTarget(), q = i.getActiveCubeFace(), C = i.getActiveMipmapLevel(), G = i.state;
    G.setBlending(hn), G.buffers.depth.getReversed() === !0 ? G.buffers.color.setClear(0, 0, 0, 0) : G.buffers.color.setClear(1, 1, 1, 1), G.buffers.depth.setTest(!0), G.setScissorTest(!1);
    const z = f !== this.type;
    z && L.traverse(function(k) {
      k.material && (Array.isArray(k.material) ? k.material.forEach((H) => H.needsUpdate = !0) : k.material.needsUpdate = !0);
    });
    for (let k = 0, H = A.length; k < H; k++) {
      const B = A[k], O = B.shadow;
      if (O === void 0) {
        Ce("WebGLShadowMap:", B, "has no shadow.");
        continue;
      }
      if (O.autoUpdate === !1 && O.needsUpdate === !1) continue;
      r.copy(O.mapSize);
      const Q = O.getFrameExtents();
      r.multiply(Q), s.copy(O.mapSize), (r.x > h || r.y > h) && (r.x > h && (s.x = Math.floor(h / Q.x), r.x = s.x * Q.x, O.mapSize.x = s.x), r.y > h && (s.y = Math.floor(h / Q.y), r.y = s.y * Q.y, O.mapSize.y = s.y));
      const K = i.state.buffers.depth.getReversed();
      if (O.camera._reversedDepth = K, O.map === null || z === !0) {
        if (O.map !== null && (O.map.depthTexture !== null && (O.map.depthTexture.dispose(), O.map.depthTexture = null), O.map.dispose()), this.type === yi) {
          if (B.isPointLight) {
            Ce("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");
            continue;
          }
          O.map = new $t(r.x, r.y, {
            format: li,
            type: dn,
            minFilter: Et,
            magFilter: Et,
            generateMipmaps: !1
          }), O.map.texture.name = B.name + ".shadowMap", O.map.depthTexture = new Pi(r.x, r.y, Zt), O.map.depthTexture.name = B.name + ".shadowMapDepth", O.map.depthTexture.format = pn, O.map.depthTexture.compareFunction = null, O.map.depthTexture.minFilter = vt, O.map.depthTexture.magFilter = vt;
        } else
          B.isPointLight ? (O.map = new sl(r.x), O.map.depthTexture = new Lc(r.x, Qt)) : (O.map = new $t(r.x, r.y), O.map.depthTexture = new Pi(r.x, r.y, Qt)), O.map.depthTexture.name = B.name + ".shadowMap", O.map.depthTexture.format = pn, this.type === lr ? (O.map.depthTexture.compareFunction = K ? oa : aa, O.map.depthTexture.minFilter = Et, O.map.depthTexture.magFilter = Et) : (O.map.depthTexture.compareFunction = null, O.map.depthTexture.minFilter = vt, O.map.depthTexture.magFilter = vt);
        O.camera.updateProjectionMatrix();
      }
      const ce = O.map.isWebGLCubeRenderTarget ? 6 : 1;
      for (let pe = 0; pe < ce; pe++) {
        if (O.map.isWebGLCubeRenderTarget)
          i.setRenderTarget(O.map, pe), i.clear();
        else {
          pe === 0 && (i.setRenderTarget(O.map), i.clear());
          const he = O.getViewport(pe);
          a.set(
            s.x * he.x,
            s.y * he.y,
            s.x * he.z,
            s.y * he.w
          ), G.viewport(a);
        }
        if (B.isPointLight) {
          const he = O.camera, Ue = O.matrix, it = B.distance || he.far;
          it !== he.far && (he.far = it, he.updateProjectionMatrix()), Ei.setFromMatrixPosition(B.matrixWorld), he.position.copy(Ei), as.copy(he.position), as.add(zp[pe]), he.up.copy(Vp[pe]), he.lookAt(as), he.updateMatrixWorld(), Ue.makeTranslation(-Ei.x, -Ei.y, -Ei.z), So.multiplyMatrices(he.projectionMatrix, he.matrixWorldInverse), O._frustum.setFromProjectionMatrix(So, he.coordinateSystem, he.reversedDepth);
        } else
          O.updateMatrices(B);
        n = O.getFrustum(), E(L, v, O.camera, B, this.type);
      }
      O.isPointLightShadow !== !0 && this.type === yi && S(O, v), O.needsUpdate = !1;
    }
    f = this.type, p.needsUpdate = !1, i.setRenderTarget(T, q, C);
  };
  function S(A, L) {
    const v = e.update(M);
    u.defines.VSM_SAMPLES !== A.blurSamples && (u.defines.VSM_SAMPLES = A.blurSamples, d.defines.VSM_SAMPLES = A.blurSamples, u.needsUpdate = !0, d.needsUpdate = !0), A.mapPass === null && (A.mapPass = new $t(r.x, r.y, {
      format: li,
      type: dn
    })), u.uniforms.shadow_pass.value = A.map.depthTexture, u.uniforms.resolution.value = A.mapSize, u.uniforms.radius.value = A.radius, i.setRenderTarget(A.mapPass), i.clear(), i.renderBufferDirect(L, null, v, u, M, null), d.uniforms.shadow_pass.value = A.mapPass.texture, d.uniforms.resolution.value = A.mapSize, d.uniforms.radius.value = A.radius, i.setRenderTarget(A.map), i.clear(), i.renderBufferDirect(L, null, v, d, M, null);
  }
  function b(A, L, v, T) {
    let q = null;
    const C = v.isPointLight === !0 ? A.customDistanceMaterial : A.customDepthMaterial;
    if (C !== void 0)
      q = C;
    else if (q = v.isPointLight === !0 ? c : o, i.localClippingEnabled && L.clipShadows === !0 && Array.isArray(L.clippingPlanes) && L.clippingPlanes.length !== 0 || L.displacementMap && L.displacementScale !== 0 || L.alphaMap && L.alphaTest > 0 || L.map && L.alphaTest > 0 || L.alphaToCoverage === !0) {
      const G = q.uuid, z = L.uuid;
      let k = l[G];
      k === void 0 && (k = {}, l[G] = k);
      let H = k[z];
      H === void 0 && (H = q.clone(), k[z] = H, L.addEventListener("dispose", R)), q = H;
    }
    if (q.visible = L.visible, q.wireframe = L.wireframe, T === yi ? q.side = L.shadowSide !== null ? L.shadowSide : L.side : q.side = L.shadowSide !== null ? L.shadowSide : m[L.side], q.alphaMap = L.alphaMap, q.alphaTest = L.alphaToCoverage === !0 ? 0.5 : L.alphaTest, q.map = L.map, q.clipShadows = L.clipShadows, q.clippingPlanes = L.clippingPlanes, q.clipIntersection = L.clipIntersection, q.displacementMap = L.displacementMap, q.displacementScale = L.displacementScale, q.displacementBias = L.displacementBias, q.wireframeLinewidth = L.wireframeLinewidth, q.linewidth = L.linewidth, v.isPointLight === !0 && q.isMeshDistanceMaterial === !0) {
      const G = i.properties.get(q);
      G.light = v;
    }
    return q;
  }
  function E(A, L, v, T, q) {
    if (A.visible === !1) return;
    if (A.layers.test(L.layers) && (A.isMesh || A.isLine || A.isPoints) && (A.castShadow || A.receiveShadow && q === yi) && (!A.frustumCulled || n.intersectsObject(A))) {
      A.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse, A.matrixWorld);
      const z = e.update(A), k = A.material;
      if (Array.isArray(k)) {
        const H = z.groups;
        for (let B = 0, O = H.length; B < O; B++) {
          const Q = H[B], K = k[Q.materialIndex];
          if (K && K.visible) {
            const ce = b(A, K, T, q);
            A.onBeforeShadow(i, A, L, v, z, ce, Q), i.renderBufferDirect(v, null, z, ce, A, Q), A.onAfterShadow(i, A, L, v, z, ce, Q);
          }
        }
      } else if (k.visible) {
        const H = b(A, k, T, q);
        A.onBeforeShadow(i, A, L, v, z, H, null), i.renderBufferDirect(v, null, z, H, A, null), A.onAfterShadow(i, A, L, v, z, H, null);
      }
    }
    const G = A.children;
    for (let z = 0, k = G.length; z < k; z++)
      E(G[z], L, v, T, q);
  }
  function R(A) {
    A.target.removeEventListener("dispose", R);
    for (const v in l) {
      const T = l[v], q = A.target.uuid;
      q in T && (T[q].dispose(), delete T[q]);
    }
  }
}
function Hp(i, e) {
  function t() {
    let P = !1;
    const re = new st();
    let te = null;
    const de = new st(0, 0, 0, 0);
    return {
      setMask: function(j) {
        te !== j && !P && (i.colorMask(j, j, j, j), te = j);
      },
      setLocked: function(j) {
        P = j;
      },
      setClear: function(j, W, ge, Pe, et) {
        et === !0 && (j *= Pe, W *= Pe, ge *= Pe), re.set(j, W, ge, Pe), de.equals(re) === !1 && (i.clearColor(j, W, ge, Pe), de.copy(re));
      },
      reset: function() {
        P = !1, te = null, de.set(-1, 0, 0, 0);
      }
    };
  }
  function n() {
    let P = !1, re = !1, te = null, de = null, j = null;
    return {
      setReversed: function(W) {
        if (re !== W) {
          const ge = e.get("EXT_clip_control");
          W ? ge.clipControlEXT(ge.LOWER_LEFT_EXT, ge.ZERO_TO_ONE_EXT) : ge.clipControlEXT(ge.LOWER_LEFT_EXT, ge.NEGATIVE_ONE_TO_ONE_EXT), re = W;
          const Pe = j;
          j = null, this.setClear(Pe);
        }
      },
      getReversed: function() {
        return re;
      },
      setTest: function(W) {
        W ? ne(i.DEPTH_TEST) : se(i.DEPTH_TEST);
      },
      setMask: function(W) {
        te !== W && !P && (i.depthMask(W), te = W);
      },
      setFunc: function(W) {
        if (re && (W = sc[W]), de !== W) {
          switch (W) {
            case cs:
              i.depthFunc(i.NEVER);
              break;
            case us:
              i.depthFunc(i.ALWAYS);
              break;
            case hs:
              i.depthFunc(i.LESS);
              break;
            case ai:
              i.depthFunc(i.LEQUAL);
              break;
            case fs:
              i.depthFunc(i.EQUAL);
              break;
            case ds:
              i.depthFunc(i.GEQUAL);
              break;
            case ps:
              i.depthFunc(i.GREATER);
              break;
            case ms:
              i.depthFunc(i.NOTEQUAL);
              break;
            default:
              i.depthFunc(i.LEQUAL);
          }
          de = W;
        }
      },
      setLocked: function(W) {
        P = W;
      },
      setClear: function(W) {
        j !== W && (j = W, re && (W = 1 - W), i.clearDepth(W));
      },
      reset: function() {
        P = !1, te = null, de = null, j = null, re = !1;
      }
    };
  }
  function r() {
    let P = !1, re = null, te = null, de = null, j = null, W = null, ge = null, Pe = null, et = null;
    return {
      setTest: function(qe) {
        P || (qe ? ne(i.STENCIL_TEST) : se(i.STENCIL_TEST));
      },
      setMask: function(qe) {
        re !== qe && !P && (i.stencilMask(qe), re = qe);
      },
      setFunc: function(qe, nn, rn) {
        (te !== qe || de !== nn || j !== rn) && (i.stencilFunc(qe, nn, rn), te = qe, de = nn, j = rn);
      },
      setOp: function(qe, nn, rn) {
        (W !== qe || ge !== nn || Pe !== rn) && (i.stencilOp(qe, nn, rn), W = qe, ge = nn, Pe = rn);
      },
      setLocked: function(qe) {
        P = qe;
      },
      setClear: function(qe) {
        et !== qe && (i.clearStencil(qe), et = qe);
      },
      reset: function() {
        P = !1, re = null, te = null, de = null, j = null, W = null, ge = null, Pe = null, et = null;
      }
    };
  }
  const s = new t(), a = new n(), o = new r(), c = /* @__PURE__ */ new WeakMap(), l = /* @__PURE__ */ new WeakMap();
  let h = {}, m = {}, u = /* @__PURE__ */ new WeakMap(), d = [], _ = null, M = !1, p = null, f = null, S = null, b = null, E = null, R = null, A = null, L = new Ve(0, 0, 0), v = 0, T = !1, q = null, C = null, G = null, z = null, k = null;
  const H = i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let B = !1, O = 0;
  const Q = i.getParameter(i.VERSION);
  Q.indexOf("WebGL") !== -1 ? (O = parseFloat(/^WebGL (\d)/.exec(Q)[1]), B = O >= 1) : Q.indexOf("OpenGL ES") !== -1 && (O = parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]), B = O >= 2);
  let K = null, ce = {};
  const pe = i.getParameter(i.SCISSOR_BOX), he = i.getParameter(i.VIEWPORT), Ue = new st().fromArray(pe), it = new st().fromArray(he);
  function nt(P, re, te, de) {
    const j = new Uint8Array(4), W = i.createTexture();
    i.bindTexture(P, W), i.texParameteri(P, i.TEXTURE_MIN_FILTER, i.NEAREST), i.texParameteri(P, i.TEXTURE_MAG_FILTER, i.NEAREST);
    for (let ge = 0; ge < te; ge++)
      P === i.TEXTURE_3D || P === i.TEXTURE_2D_ARRAY ? i.texImage3D(re, 0, i.RGBA, 1, 1, de, 0, i.RGBA, i.UNSIGNED_BYTE, j) : i.texImage2D(re + ge, 0, i.RGBA, 1, 1, 0, i.RGBA, i.UNSIGNED_BYTE, j);
    return W;
  }
  const Z = {};
  Z[i.TEXTURE_2D] = nt(i.TEXTURE_2D, i.TEXTURE_2D, 1), Z[i.TEXTURE_CUBE_MAP] = nt(i.TEXTURE_CUBE_MAP, i.TEXTURE_CUBE_MAP_POSITIVE_X, 6), Z[i.TEXTURE_2D_ARRAY] = nt(i.TEXTURE_2D_ARRAY, i.TEXTURE_2D_ARRAY, 1, 1), Z[i.TEXTURE_3D] = nt(i.TEXTURE_3D, i.TEXTURE_3D, 1, 1), s.setClear(0, 0, 0, 1), a.setClear(1), o.setClear(0), ne(i.DEPTH_TEST), a.setFunc(ai), Fe(!1), at(ya), ne(i.CULL_FACE), Ye(hn);
  function ne(P) {
    h[P] !== !0 && (i.enable(P), h[P] = !0);
  }
  function se(P) {
    h[P] !== !1 && (i.disable(P), h[P] = !1);
  }
  function De(P, re) {
    return m[P] !== re ? (i.bindFramebuffer(P, re), m[P] = re, P === i.DRAW_FRAMEBUFFER && (m[i.FRAMEBUFFER] = re), P === i.FRAMEBUFFER && (m[i.DRAW_FRAMEBUFFER] = re), !0) : !1;
  }
  function Ae(P, re) {
    let te = d, de = !1;
    if (P) {
      te = u.get(re), te === void 0 && (te = [], u.set(re, te));
      const j = P.textures;
      if (te.length !== j.length || te[0] !== i.COLOR_ATTACHMENT0) {
        for (let W = 0, ge = j.length; W < ge; W++)
          te[W] = i.COLOR_ATTACHMENT0 + W;
        te.length = j.length, de = !0;
      }
    } else
      te[0] !== i.BACK && (te[0] = i.BACK, de = !0);
    de && i.drawBuffers(te);
  }
  function Re(P) {
    return _ !== P ? (i.useProgram(P), _ = P, !0) : !1;
  }
  const dt = {
    [Fn]: i.FUNC_ADD,
    [Rl]: i.FUNC_SUBTRACT,
    [Cl]: i.FUNC_REVERSE_SUBTRACT
  };
  dt[Pl] = i.MIN, dt[Ll] = i.MAX;
  const Ge = {
    [Dl]: i.ZERO,
    [Il]: i.ONE,
    [Ul]: i.SRC_COLOR,
    [os]: i.SRC_ALPHA,
    [Vl]: i.SRC_ALPHA_SATURATE,
    [Bl]: i.DST_COLOR,
    [Fl]: i.DST_ALPHA,
    [Nl]: i.ONE_MINUS_SRC_COLOR,
    [ls]: i.ONE_MINUS_SRC_ALPHA,
    [zl]: i.ONE_MINUS_DST_COLOR,
    [Ol]: i.ONE_MINUS_DST_ALPHA,
    [Gl]: i.CONSTANT_COLOR,
    [Hl]: i.ONE_MINUS_CONSTANT_COLOR,
    [kl]: i.CONSTANT_ALPHA,
    [Wl]: i.ONE_MINUS_CONSTANT_ALPHA
  };
  function Ye(P, re, te, de, j, W, ge, Pe, et, qe) {
    if (P === hn) {
      M === !0 && (se(i.BLEND), M = !1);
      return;
    }
    if (M === !1 && (ne(i.BLEND), M = !0), P !== wl) {
      if (P !== p || qe !== T) {
        if ((f !== Fn || E !== Fn) && (i.blendEquation(i.FUNC_ADD), f = Fn, E = Fn), qe)
          switch (P) {
            case ri:
              i.blendFuncSeparate(i.ONE, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA);
              break;
            case Ta:
              i.blendFunc(i.ONE, i.ONE);
              break;
            case ba:
              i.blendFuncSeparate(i.ZERO, i.ONE_MINUS_SRC_COLOR, i.ZERO, i.ONE);
              break;
            case Aa:
              i.blendFuncSeparate(i.DST_COLOR, i.ONE_MINUS_SRC_ALPHA, i.ZERO, i.ONE);
              break;
            default:
              We("WebGLState: Invalid blending: ", P);
              break;
          }
        else
          switch (P) {
            case ri:
              i.blendFuncSeparate(i.SRC_ALPHA, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA);
              break;
            case Ta:
              i.blendFuncSeparate(i.SRC_ALPHA, i.ONE, i.ONE, i.ONE);
              break;
            case ba:
              We("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");
              break;
            case Aa:
              We("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");
              break;
            default:
              We("WebGLState: Invalid blending: ", P);
              break;
          }
        S = null, b = null, R = null, A = null, L.set(0, 0, 0), v = 0, p = P, T = qe;
      }
      return;
    }
    j = j || re, W = W || te, ge = ge || de, (re !== f || j !== E) && (i.blendEquationSeparate(dt[re], dt[j]), f = re, E = j), (te !== S || de !== b || W !== R || ge !== A) && (i.blendFuncSeparate(Ge[te], Ge[de], Ge[W], Ge[ge]), S = te, b = de, R = W, A = ge), (Pe.equals(L) === !1 || et !== v) && (i.blendColor(Pe.r, Pe.g, Pe.b, et), L.copy(Pe), v = et), p = P, T = !1;
  }
  function $e(P, re) {
    P.side === Ft ? se(i.CULL_FACE) : ne(i.CULL_FACE);
    let te = P.side === wt;
    re && (te = !te), Fe(te), P.blending === ri && P.transparent === !1 ? Ye(hn) : Ye(P.blending, P.blendEquation, P.blendSrc, P.blendDst, P.blendEquationAlpha, P.blendSrcAlpha, P.blendDstAlpha, P.blendColor, P.blendAlpha, P.premultipliedAlpha), a.setFunc(P.depthFunc), a.setTest(P.depthTest), a.setMask(P.depthWrite), s.setMask(P.colorWrite);
    const de = P.stencilWrite;
    o.setTest(de), de && (o.setMask(P.stencilWriteMask), o.setFunc(P.stencilFunc, P.stencilRef, P.stencilFuncMask), o.setOp(P.stencilFail, P.stencilZFail, P.stencilZPass)), lt(P.polygonOffset, P.polygonOffsetFactor, P.polygonOffsetUnits), P.alphaToCoverage === !0 ? ne(i.SAMPLE_ALPHA_TO_COVERAGE) : se(i.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function Fe(P) {
    q !== P && (P ? i.frontFace(i.CW) : i.frontFace(i.CCW), q = P);
  }
  function at(P) {
    P !== Tl ? (ne(i.CULL_FACE), P !== C && (P === ya ? i.cullFace(i.BACK) : P === bl ? i.cullFace(i.FRONT) : i.cullFace(i.FRONT_AND_BACK))) : se(i.CULL_FACE), C = P;
  }
  function w(P) {
    P !== G && (B && i.lineWidth(P), G = P);
  }
  function lt(P, re, te) {
    P ? (ne(i.POLYGON_OFFSET_FILL), (z !== re || k !== te) && (z = re, k = te, a.getReversed() && (re = -re), i.polygonOffset(re, te))) : se(i.POLYGON_OFFSET_FILL);
  }
  function Xe(P) {
    P ? ne(i.SCISSOR_TEST) : se(i.SCISSOR_TEST);
  }
  function Qe(P) {
    P === void 0 && (P = i.TEXTURE0 + H - 1), K !== P && (i.activeTexture(P), K = P);
  }
  function Me(P, re, te) {
    te === void 0 && (K === null ? te = i.TEXTURE0 + H - 1 : te = K);
    let de = ce[te];
    de === void 0 && (de = { type: void 0, texture: void 0 }, ce[te] = de), (de.type !== P || de.texture !== re) && (K !== te && (i.activeTexture(te), K = te), i.bindTexture(P, re || Z[P]), de.type = P, de.texture = re);
  }
  function y() {
    const P = ce[K];
    P !== void 0 && P.type !== void 0 && (i.bindTexture(P.type, null), P.type = void 0, P.texture = void 0);
  }
  function g() {
    try {
      i.compressedTexImage2D(...arguments);
    } catch (P) {
      We("WebGLState:", P);
    }
  }
  function D() {
    try {
      i.compressedTexImage3D(...arguments);
    } catch (P) {
      We("WebGLState:", P);
    }
  }
  function Y() {
    try {
      i.texSubImage2D(...arguments);
    } catch (P) {
      We("WebGLState:", P);
    }
  }
  function J() {
    try {
      i.texSubImage3D(...arguments);
    } catch (P) {
      We("WebGLState:", P);
    }
  }
  function X() {
    try {
      i.compressedTexSubImage2D(...arguments);
    } catch (P) {
      We("WebGLState:", P);
    }
  }
  function me() {
    try {
      i.compressedTexSubImage3D(...arguments);
    } catch (P) {
      We("WebGLState:", P);
    }
  }
  function ie() {
    try {
      i.texStorage2D(...arguments);
    } catch (P) {
      We("WebGLState:", P);
    }
  }
  function Te() {
    try {
      i.texStorage3D(...arguments);
    } catch (P) {
      We("WebGLState:", P);
    }
  }
  function we() {
    try {
      i.texImage2D(...arguments);
    } catch (P) {
      We("WebGLState:", P);
    }
  }
  function $() {
    try {
      i.texImage3D(...arguments);
    } catch (P) {
      We("WebGLState:", P);
    }
  }
  function ee(P) {
    Ue.equals(P) === !1 && (i.scissor(P.x, P.y, P.z, P.w), Ue.copy(P));
  }
  function _e(P) {
    it.equals(P) === !1 && (i.viewport(P.x, P.y, P.z, P.w), it.copy(P));
  }
  function ve(P, re) {
    let te = l.get(re);
    te === void 0 && (te = /* @__PURE__ */ new WeakMap(), l.set(re, te));
    let de = te.get(P);
    de === void 0 && (de = i.getUniformBlockIndex(re, P.name), te.set(P, de));
  }
  function ue(P, re) {
    const de = l.get(re).get(P);
    c.get(re) !== de && (i.uniformBlockBinding(re, de, P.__bindingPointIndex), c.set(re, de));
  }
  function Oe() {
    i.disable(i.BLEND), i.disable(i.CULL_FACE), i.disable(i.DEPTH_TEST), i.disable(i.POLYGON_OFFSET_FILL), i.disable(i.SCISSOR_TEST), i.disable(i.STENCIL_TEST), i.disable(i.SAMPLE_ALPHA_TO_COVERAGE), i.blendEquation(i.FUNC_ADD), i.blendFunc(i.ONE, i.ZERO), i.blendFuncSeparate(i.ONE, i.ZERO, i.ONE, i.ZERO), i.blendColor(0, 0, 0, 0), i.colorMask(!0, !0, !0, !0), i.clearColor(0, 0, 0, 0), i.depthMask(!0), i.depthFunc(i.LESS), a.setReversed(!1), i.clearDepth(1), i.stencilMask(4294967295), i.stencilFunc(i.ALWAYS, 0, 4294967295), i.stencilOp(i.KEEP, i.KEEP, i.KEEP), i.clearStencil(0), i.cullFace(i.BACK), i.frontFace(i.CCW), i.polygonOffset(0, 0), i.activeTexture(i.TEXTURE0), i.bindFramebuffer(i.FRAMEBUFFER, null), i.bindFramebuffer(i.DRAW_FRAMEBUFFER, null), i.bindFramebuffer(i.READ_FRAMEBUFFER, null), i.useProgram(null), i.lineWidth(1), i.scissor(0, 0, i.canvas.width, i.canvas.height), i.viewport(0, 0, i.canvas.width, i.canvas.height), h = {}, K = null, ce = {}, m = {}, u = /* @__PURE__ */ new WeakMap(), d = [], _ = null, M = !1, p = null, f = null, S = null, b = null, E = null, R = null, A = null, L = new Ve(0, 0, 0), v = 0, T = !1, q = null, C = null, G = null, z = null, k = null, Ue.set(0, 0, i.canvas.width, i.canvas.height), it.set(0, 0, i.canvas.width, i.canvas.height), s.reset(), a.reset(), o.reset();
  }
  return {
    buffers: {
      color: s,
      depth: a,
      stencil: o
    },
    enable: ne,
    disable: se,
    bindFramebuffer: De,
    drawBuffers: Ae,
    useProgram: Re,
    setBlending: Ye,
    setMaterial: $e,
    setFlipSided: Fe,
    setCullFace: at,
    setLineWidth: w,
    setPolygonOffset: lt,
    setScissorTest: Xe,
    activeTexture: Qe,
    bindTexture: Me,
    unbindTexture: y,
    compressedTexImage2D: g,
    compressedTexImage3D: D,
    texImage2D: we,
    texImage3D: $,
    updateUBOMapping: ve,
    uniformBlockBinding: ue,
    texStorage2D: ie,
    texStorage3D: Te,
    texSubImage2D: Y,
    texSubImage3D: J,
    compressedTexSubImage2D: X,
    compressedTexSubImage3D: me,
    scissor: ee,
    viewport: _e,
    reset: Oe
  };
}
function kp(i, e, t, n, r, s, a) {
  const o = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null, c = typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent), l = new be(), h = /* @__PURE__ */ new WeakMap();
  let m;
  const u = /* @__PURE__ */ new WeakMap();
  let d = !1;
  try {
    d = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {
  }
  function _(y, g) {
    return d ? new OffscreenCanvas(y, g) : mr("canvas");
  }
  function M(y, g, D) {
    let Y = 1;
    const J = Me(y);
    if ((J.width > D || J.height > D) && (Y = D / Math.max(J.width, J.height)), Y < 1)
      if (typeof HTMLImageElement < "u" && y instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && y instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && y instanceof ImageBitmap || typeof VideoFrame < "u" && y instanceof VideoFrame) {
        const X = Math.floor(Y * J.width), me = Math.floor(Y * J.height);
        m === void 0 && (m = _(X, me));
        const ie = g ? _(X, me) : m;
        return ie.width = X, ie.height = me, ie.getContext("2d").drawImage(y, 0, 0, X, me), Ce("WebGLRenderer: Texture has been resized from (" + J.width + "x" + J.height + ") to (" + X + "x" + me + ")."), ie;
      } else
        return "data" in y && Ce("WebGLRenderer: Image in DataTexture is too big (" + J.width + "x" + J.height + ")."), y;
    return y;
  }
  function p(y) {
    return y.generateMipmaps;
  }
  function f(y) {
    i.generateMipmap(y);
  }
  function S(y) {
    return y.isWebGLCubeRenderTarget ? i.TEXTURE_CUBE_MAP : y.isWebGL3DRenderTarget ? i.TEXTURE_3D : y.isWebGLArrayRenderTarget || y.isCompressedArrayTexture ? i.TEXTURE_2D_ARRAY : i.TEXTURE_2D;
  }
  function b(y, g, D, Y, J = !1) {
    if (y !== null) {
      if (i[y] !== void 0) return i[y];
      Ce("WebGLRenderer: Attempt to use non-existing WebGL internal format '" + y + "'");
    }
    let X = g;
    if (g === i.RED && (D === i.FLOAT && (X = i.R32F), D === i.HALF_FLOAT && (X = i.R16F), D === i.UNSIGNED_BYTE && (X = i.R8)), g === i.RED_INTEGER && (D === i.UNSIGNED_BYTE && (X = i.R8UI), D === i.UNSIGNED_SHORT && (X = i.R16UI), D === i.UNSIGNED_INT && (X = i.R32UI), D === i.BYTE && (X = i.R8I), D === i.SHORT && (X = i.R16I), D === i.INT && (X = i.R32I)), g === i.RG && (D === i.FLOAT && (X = i.RG32F), D === i.HALF_FLOAT && (X = i.RG16F), D === i.UNSIGNED_BYTE && (X = i.RG8)), g === i.RG_INTEGER && (D === i.UNSIGNED_BYTE && (X = i.RG8UI), D === i.UNSIGNED_SHORT && (X = i.RG16UI), D === i.UNSIGNED_INT && (X = i.RG32UI), D === i.BYTE && (X = i.RG8I), D === i.SHORT && (X = i.RG16I), D === i.INT && (X = i.RG32I)), g === i.RGB_INTEGER && (D === i.UNSIGNED_BYTE && (X = i.RGB8UI), D === i.UNSIGNED_SHORT && (X = i.RGB16UI), D === i.UNSIGNED_INT && (X = i.RGB32UI), D === i.BYTE && (X = i.RGB8I), D === i.SHORT && (X = i.RGB16I), D === i.INT && (X = i.RGB32I)), g === i.RGBA_INTEGER && (D === i.UNSIGNED_BYTE && (X = i.RGBA8UI), D === i.UNSIGNED_SHORT && (X = i.RGBA16UI), D === i.UNSIGNED_INT && (X = i.RGBA32UI), D === i.BYTE && (X = i.RGBA8I), D === i.SHORT && (X = i.RGBA16I), D === i.INT && (X = i.RGBA32I)), g === i.RGB && (D === i.UNSIGNED_INT_5_9_9_9_REV && (X = i.RGB9_E5), D === i.UNSIGNED_INT_10F_11F_11F_REV && (X = i.R11F_G11F_B10F)), g === i.RGBA) {
      const me = J ? pr : He.getTransfer(Y);
      D === i.FLOAT && (X = i.RGBA32F), D === i.HALF_FLOAT && (X = i.RGBA16F), D === i.UNSIGNED_BYTE && (X = me === Ze ? i.SRGB8_ALPHA8 : i.RGBA8), D === i.UNSIGNED_SHORT_4_4_4_4 && (X = i.RGBA4), D === i.UNSIGNED_SHORT_5_5_5_1 && (X = i.RGB5_A1);
    }
    return (X === i.R16F || X === i.R32F || X === i.RG16F || X === i.RG32F || X === i.RGBA16F || X === i.RGBA32F) && e.get("EXT_color_buffer_float"), X;
  }
  function E(y, g) {
    let D;
    return y ? g === null || g === Qt || g === Ri ? D = i.DEPTH24_STENCIL8 : g === Zt ? D = i.DEPTH32F_STENCIL8 : g === wi && (D = i.DEPTH24_STENCIL8, Ce("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")) : g === null || g === Qt || g === Ri ? D = i.DEPTH_COMPONENT24 : g === Zt ? D = i.DEPTH_COMPONENT32F : g === wi && (D = i.DEPTH_COMPONENT16), D;
  }
  function R(y, g) {
    return p(y) === !0 || y.isFramebufferTexture && y.minFilter !== vt && y.minFilter !== Et ? Math.log2(Math.max(g.width, g.height)) + 1 : y.mipmaps !== void 0 && y.mipmaps.length > 0 ? y.mipmaps.length : y.isCompressedTexture && Array.isArray(y.image) ? g.mipmaps.length : 1;
  }
  function A(y) {
    const g = y.target;
    g.removeEventListener("dispose", A), v(g), g.isVideoTexture && h.delete(g);
  }
  function L(y) {
    const g = y.target;
    g.removeEventListener("dispose", L), q(g);
  }
  function v(y) {
    const g = n.get(y);
    if (g.__webglInit === void 0) return;
    const D = y.source, Y = u.get(D);
    if (Y) {
      const J = Y[g.__cacheKey];
      J.usedTimes--, J.usedTimes === 0 && T(y), Object.keys(Y).length === 0 && u.delete(D);
    }
    n.remove(y);
  }
  function T(y) {
    const g = n.get(y);
    i.deleteTexture(g.__webglTexture);
    const D = y.source, Y = u.get(D);
    delete Y[g.__cacheKey], a.memory.textures--;
  }
  function q(y) {
    const g = n.get(y);
    if (y.depthTexture && (y.depthTexture.dispose(), n.remove(y.depthTexture)), y.isWebGLCubeRenderTarget)
      for (let Y = 0; Y < 6; Y++) {
        if (Array.isArray(g.__webglFramebuffer[Y]))
          for (let J = 0; J < g.__webglFramebuffer[Y].length; J++) i.deleteFramebuffer(g.__webglFramebuffer[Y][J]);
        else
          i.deleteFramebuffer(g.__webglFramebuffer[Y]);
        g.__webglDepthbuffer && i.deleteRenderbuffer(g.__webglDepthbuffer[Y]);
      }
    else {
      if (Array.isArray(g.__webglFramebuffer))
        for (let Y = 0; Y < g.__webglFramebuffer.length; Y++) i.deleteFramebuffer(g.__webglFramebuffer[Y]);
      else
        i.deleteFramebuffer(g.__webglFramebuffer);
      if (g.__webglDepthbuffer && i.deleteRenderbuffer(g.__webglDepthbuffer), g.__webglMultisampledFramebuffer && i.deleteFramebuffer(g.__webglMultisampledFramebuffer), g.__webglColorRenderbuffer)
        for (let Y = 0; Y < g.__webglColorRenderbuffer.length; Y++)
          g.__webglColorRenderbuffer[Y] && i.deleteRenderbuffer(g.__webglColorRenderbuffer[Y]);
      g.__webglDepthRenderbuffer && i.deleteRenderbuffer(g.__webglDepthRenderbuffer);
    }
    const D = y.textures;
    for (let Y = 0, J = D.length; Y < J; Y++) {
      const X = n.get(D[Y]);
      X.__webglTexture && (i.deleteTexture(X.__webglTexture), a.memory.textures--), n.remove(D[Y]);
    }
    n.remove(y);
  }
  let C = 0;
  function G() {
    C = 0;
  }
  function z() {
    const y = C;
    return y >= r.maxTextures && Ce("WebGLTextures: Trying to use " + y + " texture units while this GPU supports only " + r.maxTextures), C += 1, y;
  }
  function k(y) {
    const g = [];
    return g.push(y.wrapS), g.push(y.wrapT), g.push(y.wrapR || 0), g.push(y.magFilter), g.push(y.minFilter), g.push(y.anisotropy), g.push(y.internalFormat), g.push(y.format), g.push(y.type), g.push(y.generateMipmaps), g.push(y.premultiplyAlpha), g.push(y.flipY), g.push(y.unpackAlignment), g.push(y.colorSpace), g.join();
  }
  function H(y, g) {
    const D = n.get(y);
    if (y.isVideoTexture && Xe(y), y.isRenderTargetTexture === !1 && y.isExternalTexture !== !0 && y.version > 0 && D.__version !== y.version) {
      const Y = y.image;
      if (Y === null)
        Ce("WebGLRenderer: Texture marked for update but no image data found.");
      else if (Y.complete === !1)
        Ce("WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        Z(D, y, g);
        return;
      }
    } else y.isExternalTexture && (D.__webglTexture = y.sourceTexture ? y.sourceTexture : null);
    t.bindTexture(i.TEXTURE_2D, D.__webglTexture, i.TEXTURE0 + g);
  }
  function B(y, g) {
    const D = n.get(y);
    if (y.isRenderTargetTexture === !1 && y.version > 0 && D.__version !== y.version) {
      Z(D, y, g);
      return;
    } else y.isExternalTexture && (D.__webglTexture = y.sourceTexture ? y.sourceTexture : null);
    t.bindTexture(i.TEXTURE_2D_ARRAY, D.__webglTexture, i.TEXTURE0 + g);
  }
  function O(y, g) {
    const D = n.get(y);
    if (y.isRenderTargetTexture === !1 && y.version > 0 && D.__version !== y.version) {
      Z(D, y, g);
      return;
    }
    t.bindTexture(i.TEXTURE_3D, D.__webglTexture, i.TEXTURE0 + g);
  }
  function Q(y, g) {
    const D = n.get(y);
    if (y.isCubeDepthTexture !== !0 && y.version > 0 && D.__version !== y.version) {
      ne(D, y, g);
      return;
    }
    t.bindTexture(i.TEXTURE_CUBE_MAP, D.__webglTexture, i.TEXTURE0 + g);
  }
  const K = {
    [_s]: i.REPEAT,
    [un]: i.CLAMP_TO_EDGE,
    [gs]: i.MIRRORED_REPEAT
  }, ce = {
    [vt]: i.NEAREST,
    [ql]: i.NEAREST_MIPMAP_NEAREST,
    [Oi]: i.NEAREST_MIPMAP_LINEAR,
    [Et]: i.LINEAR,
    [Ar]: i.LINEAR_MIPMAP_NEAREST,
    [Bn]: i.LINEAR_MIPMAP_LINEAR
  }, pe = {
    [Kl]: i.NEVER,
    [tc]: i.ALWAYS,
    [$l]: i.LESS,
    [aa]: i.LEQUAL,
    [jl]: i.EQUAL,
    [oa]: i.GEQUAL,
    [Ql]: i.GREATER,
    [ec]: i.NOTEQUAL
  };
  function he(y, g) {
    if (g.type === Zt && e.has("OES_texture_float_linear") === !1 && (g.magFilter === Et || g.magFilter === Ar || g.magFilter === Oi || g.magFilter === Bn || g.minFilter === Et || g.minFilter === Ar || g.minFilter === Oi || g.minFilter === Bn) && Ce("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."), i.texParameteri(y, i.TEXTURE_WRAP_S, K[g.wrapS]), i.texParameteri(y, i.TEXTURE_WRAP_T, K[g.wrapT]), (y === i.TEXTURE_3D || y === i.TEXTURE_2D_ARRAY) && i.texParameteri(y, i.TEXTURE_WRAP_R, K[g.wrapR]), i.texParameteri(y, i.TEXTURE_MAG_FILTER, ce[g.magFilter]), i.texParameteri(y, i.TEXTURE_MIN_FILTER, ce[g.minFilter]), g.compareFunction && (i.texParameteri(y, i.TEXTURE_COMPARE_MODE, i.COMPARE_REF_TO_TEXTURE), i.texParameteri(y, i.TEXTURE_COMPARE_FUNC, pe[g.compareFunction])), e.has("EXT_texture_filter_anisotropic") === !0) {
      if (g.magFilter === vt || g.minFilter !== Oi && g.minFilter !== Bn || g.type === Zt && e.has("OES_texture_float_linear") === !1) return;
      if (g.anisotropy > 1 || n.get(g).__currentAnisotropy) {
        const D = e.get("EXT_texture_filter_anisotropic");
        i.texParameterf(y, D.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(g.anisotropy, r.getMaxAnisotropy())), n.get(g).__currentAnisotropy = g.anisotropy;
      }
    }
  }
  function Ue(y, g) {
    let D = !1;
    y.__webglInit === void 0 && (y.__webglInit = !0, g.addEventListener("dispose", A));
    const Y = g.source;
    let J = u.get(Y);
    J === void 0 && (J = {}, u.set(Y, J));
    const X = k(g);
    if (X !== y.__cacheKey) {
      J[X] === void 0 && (J[X] = {
        texture: i.createTexture(),
        usedTimes: 0
      }, a.memory.textures++, D = !0), J[X].usedTimes++;
      const me = J[y.__cacheKey];
      me !== void 0 && (J[y.__cacheKey].usedTimes--, me.usedTimes === 0 && T(g)), y.__cacheKey = X, y.__webglTexture = J[X].texture;
    }
    return D;
  }
  function it(y, g, D) {
    return Math.floor(Math.floor(y / D) / g);
  }
  function nt(y, g, D, Y) {
    const X = y.updateRanges;
    if (X.length === 0)
      t.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, g.width, g.height, D, Y, g.data);
    else {
      X.sort(($, ee) => $.start - ee.start);
      let me = 0;
      for (let $ = 1; $ < X.length; $++) {
        const ee = X[me], _e = X[$], ve = ee.start + ee.count, ue = it(_e.start, g.width, 4), Oe = it(ee.start, g.width, 4);
        _e.start <= ve + 1 && ue === Oe && it(_e.start + _e.count - 1, g.width, 4) === ue ? ee.count = Math.max(
          ee.count,
          _e.start + _e.count - ee.start
        ) : (++me, X[me] = _e);
      }
      X.length = me + 1;
      const ie = i.getParameter(i.UNPACK_ROW_LENGTH), Te = i.getParameter(i.UNPACK_SKIP_PIXELS), we = i.getParameter(i.UNPACK_SKIP_ROWS);
      i.pixelStorei(i.UNPACK_ROW_LENGTH, g.width);
      for (let $ = 0, ee = X.length; $ < ee; $++) {
        const _e = X[$], ve = Math.floor(_e.start / 4), ue = Math.ceil(_e.count / 4), Oe = ve % g.width, P = Math.floor(ve / g.width), re = ue, te = 1;
        i.pixelStorei(i.UNPACK_SKIP_PIXELS, Oe), i.pixelStorei(i.UNPACK_SKIP_ROWS, P), t.texSubImage2D(i.TEXTURE_2D, 0, Oe, P, re, te, D, Y, g.data);
      }
      y.clearUpdateRanges(), i.pixelStorei(i.UNPACK_ROW_LENGTH, ie), i.pixelStorei(i.UNPACK_SKIP_PIXELS, Te), i.pixelStorei(i.UNPACK_SKIP_ROWS, we);
    }
  }
  function Z(y, g, D) {
    let Y = i.TEXTURE_2D;
    (g.isDataArrayTexture || g.isCompressedArrayTexture) && (Y = i.TEXTURE_2D_ARRAY), g.isData3DTexture && (Y = i.TEXTURE_3D);
    const J = Ue(y, g), X = g.source;
    t.bindTexture(Y, y.__webglTexture, i.TEXTURE0 + D);
    const me = n.get(X);
    if (X.version !== me.__version || J === !0) {
      t.activeTexture(i.TEXTURE0 + D);
      const ie = He.getPrimaries(He.workingColorSpace), Te = g.colorSpace === Tn ? null : He.getPrimaries(g.colorSpace), we = g.colorSpace === Tn || ie === Te ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
      i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, g.flipY), i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, g.premultiplyAlpha), i.pixelStorei(i.UNPACK_ALIGNMENT, g.unpackAlignment), i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, we);
      let $ = M(g.image, !1, r.maxTextureSize);
      $ = Qe(g, $);
      const ee = s.convert(g.format, g.colorSpace), _e = s.convert(g.type);
      let ve = b(g.internalFormat, ee, _e, g.colorSpace, g.isVideoTexture);
      he(Y, g);
      let ue;
      const Oe = g.mipmaps, P = g.isVideoTexture !== !0, re = me.__version === void 0 || J === !0, te = X.dataReady, de = R(g, $);
      if (g.isDepthTexture)
        ve = E(g.format === zn, g.type), re && (P ? t.texStorage2D(i.TEXTURE_2D, 1, ve, $.width, $.height) : t.texImage2D(i.TEXTURE_2D, 0, ve, $.width, $.height, 0, ee, _e, null));
      else if (g.isDataTexture)
        if (Oe.length > 0) {
          P && re && t.texStorage2D(i.TEXTURE_2D, de, ve, Oe[0].width, Oe[0].height);
          for (let j = 0, W = Oe.length; j < W; j++)
            ue = Oe[j], P ? te && t.texSubImage2D(i.TEXTURE_2D, j, 0, 0, ue.width, ue.height, ee, _e, ue.data) : t.texImage2D(i.TEXTURE_2D, j, ve, ue.width, ue.height, 0, ee, _e, ue.data);
          g.generateMipmaps = !1;
        } else
          P ? (re && t.texStorage2D(i.TEXTURE_2D, de, ve, $.width, $.height), te && nt(g, $, ee, _e)) : t.texImage2D(i.TEXTURE_2D, 0, ve, $.width, $.height, 0, ee, _e, $.data);
      else if (g.isCompressedTexture)
        if (g.isCompressedArrayTexture) {
          P && re && t.texStorage3D(i.TEXTURE_2D_ARRAY, de, ve, Oe[0].width, Oe[0].height, $.depth);
          for (let j = 0, W = Oe.length; j < W; j++)
            if (ue = Oe[j], g.format !== Ht)
              if (ee !== null)
                if (P) {
                  if (te)
                    if (g.layerUpdates.size > 0) {
                      const ge = $a(ue.width, ue.height, g.format, g.type);
                      for (const Pe of g.layerUpdates) {
                        const et = ue.data.subarray(
                          Pe * ge / ue.data.BYTES_PER_ELEMENT,
                          (Pe + 1) * ge / ue.data.BYTES_PER_ELEMENT
                        );
                        t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY, j, 0, 0, Pe, ue.width, ue.height, 1, ee, et);
                      }
                      g.clearLayerUpdates();
                    } else
                      t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY, j, 0, 0, 0, ue.width, ue.height, $.depth, ee, ue.data);
                } else
                  t.compressedTexImage3D(i.TEXTURE_2D_ARRAY, j, ve, ue.width, ue.height, $.depth, 0, ue.data, 0, 0);
              else
                Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");
            else
              P ? te && t.texSubImage3D(i.TEXTURE_2D_ARRAY, j, 0, 0, 0, ue.width, ue.height, $.depth, ee, _e, ue.data) : t.texImage3D(i.TEXTURE_2D_ARRAY, j, ve, ue.width, ue.height, $.depth, 0, ee, _e, ue.data);
        } else {
          P && re && t.texStorage2D(i.TEXTURE_2D, de, ve, Oe[0].width, Oe[0].height);
          for (let j = 0, W = Oe.length; j < W; j++)
            ue = Oe[j], g.format !== Ht ? ee !== null ? P ? te && t.compressedTexSubImage2D(i.TEXTURE_2D, j, 0, 0, ue.width, ue.height, ee, ue.data) : t.compressedTexImage2D(i.TEXTURE_2D, j, ve, ue.width, ue.height, 0, ue.data) : Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : P ? te && t.texSubImage2D(i.TEXTURE_2D, j, 0, 0, ue.width, ue.height, ee, _e, ue.data) : t.texImage2D(i.TEXTURE_2D, j, ve, ue.width, ue.height, 0, ee, _e, ue.data);
        }
      else if (g.isDataArrayTexture)
        if (P) {
          if (re && t.texStorage3D(i.TEXTURE_2D_ARRAY, de, ve, $.width, $.height, $.depth), te)
            if (g.layerUpdates.size > 0) {
              const j = $a($.width, $.height, g.format, g.type);
              for (const W of g.layerUpdates) {
                const ge = $.data.subarray(
                  W * j / $.data.BYTES_PER_ELEMENT,
                  (W + 1) * j / $.data.BYTES_PER_ELEMENT
                );
                t.texSubImage3D(i.TEXTURE_2D_ARRAY, 0, 0, 0, W, $.width, $.height, 1, ee, _e, ge);
              }
              g.clearLayerUpdates();
            } else
              t.texSubImage3D(i.TEXTURE_2D_ARRAY, 0, 0, 0, 0, $.width, $.height, $.depth, ee, _e, $.data);
        } else
          t.texImage3D(i.TEXTURE_2D_ARRAY, 0, ve, $.width, $.height, $.depth, 0, ee, _e, $.data);
      else if (g.isData3DTexture)
        P ? (re && t.texStorage3D(i.TEXTURE_3D, de, ve, $.width, $.height, $.depth), te && t.texSubImage3D(i.TEXTURE_3D, 0, 0, 0, 0, $.width, $.height, $.depth, ee, _e, $.data)) : t.texImage3D(i.TEXTURE_3D, 0, ve, $.width, $.height, $.depth, 0, ee, _e, $.data);
      else if (g.isFramebufferTexture) {
        if (re)
          if (P)
            t.texStorage2D(i.TEXTURE_2D, de, ve, $.width, $.height);
          else {
            let j = $.width, W = $.height;
            for (let ge = 0; ge < de; ge++)
              t.texImage2D(i.TEXTURE_2D, ge, ve, j, W, 0, ee, _e, null), j >>= 1, W >>= 1;
          }
      } else if (Oe.length > 0) {
        if (P && re) {
          const j = Me(Oe[0]);
          t.texStorage2D(i.TEXTURE_2D, de, ve, j.width, j.height);
        }
        for (let j = 0, W = Oe.length; j < W; j++)
          ue = Oe[j], P ? te && t.texSubImage2D(i.TEXTURE_2D, j, 0, 0, ee, _e, ue) : t.texImage2D(i.TEXTURE_2D, j, ve, ee, _e, ue);
        g.generateMipmaps = !1;
      } else if (P) {
        if (re) {
          const j = Me($);
          t.texStorage2D(i.TEXTURE_2D, de, ve, j.width, j.height);
        }
        te && t.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, ee, _e, $);
      } else
        t.texImage2D(i.TEXTURE_2D, 0, ve, ee, _e, $);
      p(g) && f(Y), me.__version = X.version, g.onUpdate && g.onUpdate(g);
    }
    y.__version = g.version;
  }
  function ne(y, g, D) {
    if (g.image.length !== 6) return;
    const Y = Ue(y, g), J = g.source;
    t.bindTexture(i.TEXTURE_CUBE_MAP, y.__webglTexture, i.TEXTURE0 + D);
    const X = n.get(J);
    if (J.version !== X.__version || Y === !0) {
      t.activeTexture(i.TEXTURE0 + D);
      const me = He.getPrimaries(He.workingColorSpace), ie = g.colorSpace === Tn ? null : He.getPrimaries(g.colorSpace), Te = g.colorSpace === Tn || me === ie ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
      i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, g.flipY), i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, g.premultiplyAlpha), i.pixelStorei(i.UNPACK_ALIGNMENT, g.unpackAlignment), i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, Te);
      const we = g.isCompressedTexture || g.image[0].isCompressedTexture, $ = g.image[0] && g.image[0].isDataTexture, ee = [];
      for (let W = 0; W < 6; W++)
        !we && !$ ? ee[W] = M(g.image[W], !0, r.maxCubemapSize) : ee[W] = $ ? g.image[W].image : g.image[W], ee[W] = Qe(g, ee[W]);
      const _e = ee[0], ve = s.convert(g.format, g.colorSpace), ue = s.convert(g.type), Oe = b(g.internalFormat, ve, ue, g.colorSpace), P = g.isVideoTexture !== !0, re = X.__version === void 0 || Y === !0, te = J.dataReady;
      let de = R(g, _e);
      he(i.TEXTURE_CUBE_MAP, g);
      let j;
      if (we) {
        P && re && t.texStorage2D(i.TEXTURE_CUBE_MAP, de, Oe, _e.width, _e.height);
        for (let W = 0; W < 6; W++) {
          j = ee[W].mipmaps;
          for (let ge = 0; ge < j.length; ge++) {
            const Pe = j[ge];
            g.format !== Ht ? ve !== null ? P ? te && t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + W, ge, 0, 0, Pe.width, Pe.height, ve, Pe.data) : t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + W, ge, Oe, Pe.width, Pe.height, 0, Pe.data) : Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : P ? te && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + W, ge, 0, 0, Pe.width, Pe.height, ve, ue, Pe.data) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + W, ge, Oe, Pe.width, Pe.height, 0, ve, ue, Pe.data);
          }
        }
      } else {
        if (j = g.mipmaps, P && re) {
          j.length > 0 && de++;
          const W = Me(ee[0]);
          t.texStorage2D(i.TEXTURE_CUBE_MAP, de, Oe, W.width, W.height);
        }
        for (let W = 0; W < 6; W++)
          if ($) {
            P ? te && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + W, 0, 0, 0, ee[W].width, ee[W].height, ve, ue, ee[W].data) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + W, 0, Oe, ee[W].width, ee[W].height, 0, ve, ue, ee[W].data);
            for (let ge = 0; ge < j.length; ge++) {
              const et = j[ge].image[W].image;
              P ? te && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + W, ge + 1, 0, 0, et.width, et.height, ve, ue, et.data) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + W, ge + 1, Oe, et.width, et.height, 0, ve, ue, et.data);
            }
          } else {
            P ? te && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + W, 0, 0, 0, ve, ue, ee[W]) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + W, 0, Oe, ve, ue, ee[W]);
            for (let ge = 0; ge < j.length; ge++) {
              const Pe = j[ge];
              P ? te && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + W, ge + 1, 0, 0, ve, ue, Pe.image[W]) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + W, ge + 1, Oe, ve, ue, Pe.image[W]);
            }
          }
      }
      p(g) && f(i.TEXTURE_CUBE_MAP), X.__version = J.version, g.onUpdate && g.onUpdate(g);
    }
    y.__version = g.version;
  }
  function se(y, g, D, Y, J, X) {
    const me = s.convert(D.format, D.colorSpace), ie = s.convert(D.type), Te = b(D.internalFormat, me, ie, D.colorSpace), we = n.get(g), $ = n.get(D);
    if ($.__renderTarget = g, !we.__hasExternalTextures) {
      const ee = Math.max(1, g.width >> X), _e = Math.max(1, g.height >> X);
      J === i.TEXTURE_3D || J === i.TEXTURE_2D_ARRAY ? t.texImage3D(J, X, Te, ee, _e, g.depth, 0, me, ie, null) : t.texImage2D(J, X, Te, ee, _e, 0, me, ie, null);
    }
    t.bindFramebuffer(i.FRAMEBUFFER, y), lt(g) ? o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, Y, J, $.__webglTexture, 0, w(g)) : (J === i.TEXTURE_2D || J >= i.TEXTURE_CUBE_MAP_POSITIVE_X && J <= i.TEXTURE_CUBE_MAP_NEGATIVE_Z) && i.framebufferTexture2D(i.FRAMEBUFFER, Y, J, $.__webglTexture, X), t.bindFramebuffer(i.FRAMEBUFFER, null);
  }
  function De(y, g, D) {
    if (i.bindRenderbuffer(i.RENDERBUFFER, y), g.depthBuffer) {
      const Y = g.depthTexture, J = Y && Y.isDepthTexture ? Y.type : null, X = E(g.stencilBuffer, J), me = g.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT;
      lt(g) ? o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, w(g), X, g.width, g.height) : D ? i.renderbufferStorageMultisample(i.RENDERBUFFER, w(g), X, g.width, g.height) : i.renderbufferStorage(i.RENDERBUFFER, X, g.width, g.height), i.framebufferRenderbuffer(i.FRAMEBUFFER, me, i.RENDERBUFFER, y);
    } else {
      const Y = g.textures;
      for (let J = 0; J < Y.length; J++) {
        const X = Y[J], me = s.convert(X.format, X.colorSpace), ie = s.convert(X.type), Te = b(X.internalFormat, me, ie, X.colorSpace);
        lt(g) ? o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, w(g), Te, g.width, g.height) : D ? i.renderbufferStorageMultisample(i.RENDERBUFFER, w(g), Te, g.width, g.height) : i.renderbufferStorage(i.RENDERBUFFER, Te, g.width, g.height);
      }
    }
    i.bindRenderbuffer(i.RENDERBUFFER, null);
  }
  function Ae(y, g, D) {
    const Y = g.isWebGLCubeRenderTarget === !0;
    if (t.bindFramebuffer(i.FRAMEBUFFER, y), !(g.depthTexture && g.depthTexture.isDepthTexture))
      throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
    const J = n.get(g.depthTexture);
    if (J.__renderTarget = g, (!J.__webglTexture || g.depthTexture.image.width !== g.width || g.depthTexture.image.height !== g.height) && (g.depthTexture.image.width = g.width, g.depthTexture.image.height = g.height, g.depthTexture.needsUpdate = !0), Y) {
      if (J.__webglInit === void 0 && (J.__webglInit = !0, g.depthTexture.addEventListener("dispose", A)), J.__webglTexture === void 0) {
        J.__webglTexture = i.createTexture(), t.bindTexture(i.TEXTURE_CUBE_MAP, J.__webglTexture), he(i.TEXTURE_CUBE_MAP, g.depthTexture);
        const we = s.convert(g.depthTexture.format), $ = s.convert(g.depthTexture.type);
        let ee;
        g.depthTexture.format === pn ? ee = i.DEPTH_COMPONENT24 : g.depthTexture.format === zn && (ee = i.DEPTH24_STENCIL8);
        for (let _e = 0; _e < 6; _e++)
          i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + _e, 0, ee, g.width, g.height, 0, we, $, null);
      }
    } else
      H(g.depthTexture, 0);
    const X = J.__webglTexture, me = w(g), ie = Y ? i.TEXTURE_CUBE_MAP_POSITIVE_X + D : i.TEXTURE_2D, Te = g.depthTexture.format === zn ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT;
    if (g.depthTexture.format === pn)
      lt(g) ? o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, Te, ie, X, 0, me) : i.framebufferTexture2D(i.FRAMEBUFFER, Te, ie, X, 0);
    else if (g.depthTexture.format === zn)
      lt(g) ? o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, Te, ie, X, 0, me) : i.framebufferTexture2D(i.FRAMEBUFFER, Te, ie, X, 0);
    else
      throw new Error("Unknown depthTexture format");
  }
  function Re(y) {
    const g = n.get(y), D = y.isWebGLCubeRenderTarget === !0;
    if (g.__boundDepthTexture !== y.depthTexture) {
      const Y = y.depthTexture;
      if (g.__depthDisposeCallback && g.__depthDisposeCallback(), Y) {
        const J = () => {
          delete g.__boundDepthTexture, delete g.__depthDisposeCallback, Y.removeEventListener("dispose", J);
        };
        Y.addEventListener("dispose", J), g.__depthDisposeCallback = J;
      }
      g.__boundDepthTexture = Y;
    }
    if (y.depthTexture && !g.__autoAllocateDepthBuffer)
      if (D)
        for (let Y = 0; Y < 6; Y++)
          Ae(g.__webglFramebuffer[Y], y, Y);
      else {
        const Y = y.texture.mipmaps;
        Y && Y.length > 0 ? Ae(g.__webglFramebuffer[0], y, 0) : Ae(g.__webglFramebuffer, y, 0);
      }
    else if (D) {
      g.__webglDepthbuffer = [];
      for (let Y = 0; Y < 6; Y++)
        if (t.bindFramebuffer(i.FRAMEBUFFER, g.__webglFramebuffer[Y]), g.__webglDepthbuffer[Y] === void 0)
          g.__webglDepthbuffer[Y] = i.createRenderbuffer(), De(g.__webglDepthbuffer[Y], y, !1);
        else {
          const J = y.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, X = g.__webglDepthbuffer[Y];
          i.bindRenderbuffer(i.RENDERBUFFER, X), i.framebufferRenderbuffer(i.FRAMEBUFFER, J, i.RENDERBUFFER, X);
        }
    } else {
      const Y = y.texture.mipmaps;
      if (Y && Y.length > 0 ? t.bindFramebuffer(i.FRAMEBUFFER, g.__webglFramebuffer[0]) : t.bindFramebuffer(i.FRAMEBUFFER, g.__webglFramebuffer), g.__webglDepthbuffer === void 0)
        g.__webglDepthbuffer = i.createRenderbuffer(), De(g.__webglDepthbuffer, y, !1);
      else {
        const J = y.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, X = g.__webglDepthbuffer;
        i.bindRenderbuffer(i.RENDERBUFFER, X), i.framebufferRenderbuffer(i.FRAMEBUFFER, J, i.RENDERBUFFER, X);
      }
    }
    t.bindFramebuffer(i.FRAMEBUFFER, null);
  }
  function dt(y, g, D) {
    const Y = n.get(y);
    g !== void 0 && se(Y.__webglFramebuffer, y, y.texture, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, 0), D !== void 0 && Re(y);
  }
  function Ge(y) {
    const g = y.texture, D = n.get(y), Y = n.get(g);
    y.addEventListener("dispose", L);
    const J = y.textures, X = y.isWebGLCubeRenderTarget === !0, me = J.length > 1;
    if (me || (Y.__webglTexture === void 0 && (Y.__webglTexture = i.createTexture()), Y.__version = g.version, a.memory.textures++), X) {
      D.__webglFramebuffer = [];
      for (let ie = 0; ie < 6; ie++)
        if (g.mipmaps && g.mipmaps.length > 0) {
          D.__webglFramebuffer[ie] = [];
          for (let Te = 0; Te < g.mipmaps.length; Te++)
            D.__webglFramebuffer[ie][Te] = i.createFramebuffer();
        } else
          D.__webglFramebuffer[ie] = i.createFramebuffer();
    } else {
      if (g.mipmaps && g.mipmaps.length > 0) {
        D.__webglFramebuffer = [];
        for (let ie = 0; ie < g.mipmaps.length; ie++)
          D.__webglFramebuffer[ie] = i.createFramebuffer();
      } else
        D.__webglFramebuffer = i.createFramebuffer();
      if (me)
        for (let ie = 0, Te = J.length; ie < Te; ie++) {
          const we = n.get(J[ie]);
          we.__webglTexture === void 0 && (we.__webglTexture = i.createTexture(), a.memory.textures++);
        }
      if (y.samples > 0 && lt(y) === !1) {
        D.__webglMultisampledFramebuffer = i.createFramebuffer(), D.__webglColorRenderbuffer = [], t.bindFramebuffer(i.FRAMEBUFFER, D.__webglMultisampledFramebuffer);
        for (let ie = 0; ie < J.length; ie++) {
          const Te = J[ie];
          D.__webglColorRenderbuffer[ie] = i.createRenderbuffer(), i.bindRenderbuffer(i.RENDERBUFFER, D.__webglColorRenderbuffer[ie]);
          const we = s.convert(Te.format, Te.colorSpace), $ = s.convert(Te.type), ee = b(Te.internalFormat, we, $, Te.colorSpace, y.isXRRenderTarget === !0), _e = w(y);
          i.renderbufferStorageMultisample(i.RENDERBUFFER, _e, ee, y.width, y.height), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + ie, i.RENDERBUFFER, D.__webglColorRenderbuffer[ie]);
        }
        i.bindRenderbuffer(i.RENDERBUFFER, null), y.depthBuffer && (D.__webglDepthRenderbuffer = i.createRenderbuffer(), De(D.__webglDepthRenderbuffer, y, !0)), t.bindFramebuffer(i.FRAMEBUFFER, null);
      }
    }
    if (X) {
      t.bindTexture(i.TEXTURE_CUBE_MAP, Y.__webglTexture), he(i.TEXTURE_CUBE_MAP, g);
      for (let ie = 0; ie < 6; ie++)
        if (g.mipmaps && g.mipmaps.length > 0)
          for (let Te = 0; Te < g.mipmaps.length; Te++)
            se(D.__webglFramebuffer[ie][Te], y, g, i.COLOR_ATTACHMENT0, i.TEXTURE_CUBE_MAP_POSITIVE_X + ie, Te);
        else
          se(D.__webglFramebuffer[ie], y, g, i.COLOR_ATTACHMENT0, i.TEXTURE_CUBE_MAP_POSITIVE_X + ie, 0);
      p(g) && f(i.TEXTURE_CUBE_MAP), t.unbindTexture();
    } else if (me) {
      for (let ie = 0, Te = J.length; ie < Te; ie++) {
        const we = J[ie], $ = n.get(we);
        let ee = i.TEXTURE_2D;
        (y.isWebGL3DRenderTarget || y.isWebGLArrayRenderTarget) && (ee = y.isWebGL3DRenderTarget ? i.TEXTURE_3D : i.TEXTURE_2D_ARRAY), t.bindTexture(ee, $.__webglTexture), he(ee, we), se(D.__webglFramebuffer, y, we, i.COLOR_ATTACHMENT0 + ie, ee, 0), p(we) && f(ee);
      }
      t.unbindTexture();
    } else {
      let ie = i.TEXTURE_2D;
      if ((y.isWebGL3DRenderTarget || y.isWebGLArrayRenderTarget) && (ie = y.isWebGL3DRenderTarget ? i.TEXTURE_3D : i.TEXTURE_2D_ARRAY), t.bindTexture(ie, Y.__webglTexture), he(ie, g), g.mipmaps && g.mipmaps.length > 0)
        for (let Te = 0; Te < g.mipmaps.length; Te++)
          se(D.__webglFramebuffer[Te], y, g, i.COLOR_ATTACHMENT0, ie, Te);
      else
        se(D.__webglFramebuffer, y, g, i.COLOR_ATTACHMENT0, ie, 0);
      p(g) && f(ie), t.unbindTexture();
    }
    y.depthBuffer && Re(y);
  }
  function Ye(y) {
    const g = y.textures;
    for (let D = 0, Y = g.length; D < Y; D++) {
      const J = g[D];
      if (p(J)) {
        const X = S(y), me = n.get(J).__webglTexture;
        t.bindTexture(X, me), f(X), t.unbindTexture();
      }
    }
  }
  const $e = [], Fe = [];
  function at(y) {
    if (y.samples > 0) {
      if (lt(y) === !1) {
        const g = y.textures, D = y.width, Y = y.height;
        let J = i.COLOR_BUFFER_BIT;
        const X = y.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, me = n.get(y), ie = g.length > 1;
        if (ie)
          for (let we = 0; we < g.length; we++)
            t.bindFramebuffer(i.FRAMEBUFFER, me.__webglMultisampledFramebuffer), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + we, i.RENDERBUFFER, null), t.bindFramebuffer(i.FRAMEBUFFER, me.__webglFramebuffer), i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0 + we, i.TEXTURE_2D, null, 0);
        t.bindFramebuffer(i.READ_FRAMEBUFFER, me.__webglMultisampledFramebuffer);
        const Te = y.texture.mipmaps;
        Te && Te.length > 0 ? t.bindFramebuffer(i.DRAW_FRAMEBUFFER, me.__webglFramebuffer[0]) : t.bindFramebuffer(i.DRAW_FRAMEBUFFER, me.__webglFramebuffer);
        for (let we = 0; we < g.length; we++) {
          if (y.resolveDepthBuffer && (y.depthBuffer && (J |= i.DEPTH_BUFFER_BIT), y.stencilBuffer && y.resolveStencilBuffer && (J |= i.STENCIL_BUFFER_BIT)), ie) {
            i.framebufferRenderbuffer(i.READ_FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.RENDERBUFFER, me.__webglColorRenderbuffer[we]);
            const $ = n.get(g[we]).__webglTexture;
            i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, $, 0);
          }
          i.blitFramebuffer(0, 0, D, Y, 0, 0, D, Y, J, i.NEAREST), c === !0 && ($e.length = 0, Fe.length = 0, $e.push(i.COLOR_ATTACHMENT0 + we), y.depthBuffer && y.resolveDepthBuffer === !1 && ($e.push(X), Fe.push(X), i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, Fe)), i.invalidateFramebuffer(i.READ_FRAMEBUFFER, $e));
        }
        if (t.bindFramebuffer(i.READ_FRAMEBUFFER, null), t.bindFramebuffer(i.DRAW_FRAMEBUFFER, null), ie)
          for (let we = 0; we < g.length; we++) {
            t.bindFramebuffer(i.FRAMEBUFFER, me.__webglMultisampledFramebuffer), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + we, i.RENDERBUFFER, me.__webglColorRenderbuffer[we]);
            const $ = n.get(g[we]).__webglTexture;
            t.bindFramebuffer(i.FRAMEBUFFER, me.__webglFramebuffer), i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0 + we, i.TEXTURE_2D, $, 0);
          }
        t.bindFramebuffer(i.DRAW_FRAMEBUFFER, me.__webglMultisampledFramebuffer);
      } else if (y.depthBuffer && y.resolveDepthBuffer === !1 && c) {
        const g = y.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT;
        i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, [g]);
      }
    }
  }
  function w(y) {
    return Math.min(r.maxSamples, y.samples);
  }
  function lt(y) {
    const g = n.get(y);
    return y.samples > 0 && e.has("WEBGL_multisampled_render_to_texture") === !0 && g.__useRenderToTexture !== !1;
  }
  function Xe(y) {
    const g = a.render.frame;
    h.get(y) !== g && (h.set(y, g), y.update());
  }
  function Qe(y, g) {
    const D = y.colorSpace, Y = y.format, J = y.type;
    return y.isCompressedTexture === !0 || y.isVideoTexture === !0 || D !== ci && D !== Tn && (He.getTransfer(D) === Ze ? (Y !== Ht || J !== Lt) && Ce("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : We("WebGLTextures: Unsupported texture color space:", D)), g;
  }
  function Me(y) {
    return typeof HTMLImageElement < "u" && y instanceof HTMLImageElement ? (l.width = y.naturalWidth || y.width, l.height = y.naturalHeight || y.height) : typeof VideoFrame < "u" && y instanceof VideoFrame ? (l.width = y.displayWidth, l.height = y.displayHeight) : (l.width = y.width, l.height = y.height), l;
  }
  this.allocateTextureUnit = z, this.resetTextureUnits = G, this.setTexture2D = H, this.setTexture2DArray = B, this.setTexture3D = O, this.setTextureCube = Q, this.rebindTextures = dt, this.setupRenderTarget = Ge, this.updateRenderTargetMipmap = Ye, this.updateMultisampleRenderTarget = at, this.setupDepthRenderbuffer = Re, this.setupFrameBufferTexture = se, this.useMultisampledRTT = lt, this.isReversedDepthBuffer = function() {
    return t.buffers.depth.getReversed();
  };
}
function Wp(i, e) {
  function t(n, r = Tn) {
    let s;
    const a = He.getTransfer(r);
    if (n === Lt) return i.UNSIGNED_BYTE;
    if (n === ta) return i.UNSIGNED_SHORT_4_4_4_4;
    if (n === na) return i.UNSIGNED_SHORT_5_5_5_1;
    if (n === Oo) return i.UNSIGNED_INT_5_9_9_9_REV;
    if (n === Bo) return i.UNSIGNED_INT_10F_11F_11F_REV;
    if (n === No) return i.BYTE;
    if (n === Fo) return i.SHORT;
    if (n === wi) return i.UNSIGNED_SHORT;
    if (n === ea) return i.INT;
    if (n === Qt) return i.UNSIGNED_INT;
    if (n === Zt) return i.FLOAT;
    if (n === dn) return i.HALF_FLOAT;
    if (n === zo) return i.ALPHA;
    if (n === Vo) return i.RGB;
    if (n === Ht) return i.RGBA;
    if (n === pn) return i.DEPTH_COMPONENT;
    if (n === zn) return i.DEPTH_STENCIL;
    if (n === Go) return i.RED;
    if (n === ia) return i.RED_INTEGER;
    if (n === li) return i.RG;
    if (n === ra) return i.RG_INTEGER;
    if (n === sa) return i.RGBA_INTEGER;
    if (n === cr || n === ur || n === hr || n === fr)
      if (a === Ze)
        if (s = e.get("WEBGL_compressed_texture_s3tc_srgb"), s !== null) {
          if (n === cr) return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (n === ur) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (n === hr) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (n === fr) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else
          return null;
      else if (s = e.get("WEBGL_compressed_texture_s3tc"), s !== null) {
        if (n === cr) return s.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (n === ur) return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (n === hr) return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (n === fr) return s.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else
        return null;
    if (n === vs || n === xs || n === Ms || n === Ss)
      if (s = e.get("WEBGL_compressed_texture_pvrtc"), s !== null) {
        if (n === vs) return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (n === xs) return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (n === Ms) return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (n === Ss) return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else
        return null;
    if (n === Es || n === ys || n === Ts || n === bs || n === As || n === ws || n === Rs)
      if (s = e.get("WEBGL_compressed_texture_etc"), s !== null) {
        if (n === Es || n === ys) return a === Ze ? s.COMPRESSED_SRGB8_ETC2 : s.COMPRESSED_RGB8_ETC2;
        if (n === Ts) return a === Ze ? s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : s.COMPRESSED_RGBA8_ETC2_EAC;
        if (n === bs) return s.COMPRESSED_R11_EAC;
        if (n === As) return s.COMPRESSED_SIGNED_R11_EAC;
        if (n === ws) return s.COMPRESSED_RG11_EAC;
        if (n === Rs) return s.COMPRESSED_SIGNED_RG11_EAC;
      } else
        return null;
    if (n === Cs || n === Ps || n === Ls || n === Ds || n === Is || n === Us || n === Ns || n === Fs || n === Os || n === Bs || n === zs || n === Vs || n === Gs || n === Hs)
      if (s = e.get("WEBGL_compressed_texture_astc"), s !== null) {
        if (n === Cs) return a === Ze ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : s.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (n === Ps) return a === Ze ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : s.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (n === Ls) return a === Ze ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : s.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (n === Ds) return a === Ze ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : s.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (n === Is) return a === Ze ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : s.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (n === Us) return a === Ze ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : s.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (n === Ns) return a === Ze ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : s.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (n === Fs) return a === Ze ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : s.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (n === Os) return a === Ze ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : s.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (n === Bs) return a === Ze ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : s.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (n === zs) return a === Ze ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : s.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (n === Vs) return a === Ze ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : s.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (n === Gs) return a === Ze ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : s.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (n === Hs) return a === Ze ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : s.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else
        return null;
    if (n === ks || n === Ws || n === Xs)
      if (s = e.get("EXT_texture_compression_bptc"), s !== null) {
        if (n === ks) return a === Ze ? s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : s.COMPRESSED_RGBA_BPTC_UNORM_EXT;
        if (n === Ws) return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
        if (n === Xs) return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
      } else
        return null;
    if (n === Ys || n === qs || n === Zs || n === Js)
      if (s = e.get("EXT_texture_compression_rgtc"), s !== null) {
        if (n === Ys) return s.COMPRESSED_RED_RGTC1_EXT;
        if (n === qs) return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;
        if (n === Zs) return s.COMPRESSED_RED_GREEN_RGTC2_EXT;
        if (n === Js) return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
      } else
        return null;
    return n === Ri ? i.UNSIGNED_INT_24_8 : i[n] !== void 0 ? i[n] : null;
  }
  return { convert: t };
}
const Xp = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`, Yp = `
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;
class qp {
  /**
   * Constructs a new depth sensing module.
   */
  constructor() {
    this.texture = null, this.mesh = null, this.depthNear = 0, this.depthFar = 0;
  }
  /**
   * Inits the depth sensing module
   *
   * @param {XRWebGLDepthInformation} depthData - The XR depth data.
   * @param {XRRenderState} renderState - The XR render state.
   */
  init(e, t) {
    if (this.texture === null) {
      const n = new $o(e.texture);
      (e.depthNear !== t.depthNear || e.depthFar !== t.depthFar) && (this.depthNear = e.depthNear, this.depthFar = e.depthFar), this.texture = n;
    }
  }
  /**
   * Returns a plane mesh that visualizes the depth texture.
   *
   * @param {ArrayCamera} cameraXR - The XR camera.
   * @return {?Mesh} The plane mesh.
   */
  getMesh(e) {
    if (this.texture !== null && this.mesh === null) {
      const t = e.cameras[0].viewport, n = new tn({
        vertexShader: Xp,
        fragmentShader: Yp,
        uniforms: {
          depthColor: { value: this.texture },
          depthWidth: { value: t.z },
          depthHeight: { value: t.w }
        }
      });
      this.mesh = new bt(new Ui(20, 20), n);
    }
    return this.mesh;
  }
  /**
   * Resets the module
   */
  reset() {
    this.texture = null, this.mesh = null;
  }
  /**
   * Returns a texture representing the depth of the user's environment.
   *
   * @return {?ExternalTexture} The depth texture.
   */
  getDepthTexture() {
    return this.texture;
  }
}
class Zp extends fi {
  /**
   * Constructs a new WebGL renderer.
   *
   * @param {WebGLRenderer} renderer - The renderer.
   * @param {WebGL2RenderingContext} gl - The rendering context.
   */
  constructor(e, t) {
    super();
    const n = this;
    let r = null, s = 1, a = null, o = "local-floor", c = 1, l = null, h = null, m = null, u = null, d = null, _ = null;
    const M = typeof XRWebGLBinding < "u", p = new qp(), f = {}, S = t.getContextAttributes();
    let b = null, E = null;
    const R = [], A = [], L = new be();
    let v = null;
    const T = new Nt();
    T.viewport = new st();
    const q = new Nt();
    q.viewport = new st();
    const C = [T, q], G = new su();
    let z = null, k = null;
    this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(Z) {
      let ne = R[Z];
      return ne === void 0 && (ne = new Ur(), R[Z] = ne), ne.getTargetRaySpace();
    }, this.getControllerGrip = function(Z) {
      let ne = R[Z];
      return ne === void 0 && (ne = new Ur(), R[Z] = ne), ne.getGripSpace();
    }, this.getHand = function(Z) {
      let ne = R[Z];
      return ne === void 0 && (ne = new Ur(), R[Z] = ne), ne.getHandSpace();
    };
    function H(Z) {
      const ne = A.indexOf(Z.inputSource);
      if (ne === -1)
        return;
      const se = R[ne];
      se !== void 0 && (se.update(Z.inputSource, Z.frame, l || a), se.dispatchEvent({ type: Z.type, data: Z.inputSource }));
    }
    function B() {
      r.removeEventListener("select", H), r.removeEventListener("selectstart", H), r.removeEventListener("selectend", H), r.removeEventListener("squeeze", H), r.removeEventListener("squeezestart", H), r.removeEventListener("squeezeend", H), r.removeEventListener("end", B), r.removeEventListener("inputsourceschange", O);
      for (let Z = 0; Z < R.length; Z++) {
        const ne = A[Z];
        ne !== null && (A[Z] = null, R[Z].disconnect(ne));
      }
      z = null, k = null, p.reset();
      for (const Z in f)
        delete f[Z];
      e.setRenderTarget(b), d = null, u = null, m = null, r = null, E = null, nt.stop(), n.isPresenting = !1, e.setPixelRatio(v), e.setSize(L.width, L.height, !1), n.dispatchEvent({ type: "sessionend" });
    }
    this.setFramebufferScaleFactor = function(Z) {
      s = Z, n.isPresenting === !0 && Ce("WebXRManager: Cannot change framebuffer scale while presenting.");
    }, this.setReferenceSpaceType = function(Z) {
      o = Z, n.isPresenting === !0 && Ce("WebXRManager: Cannot change reference space type while presenting.");
    }, this.getReferenceSpace = function() {
      return l || a;
    }, this.setReferenceSpace = function(Z) {
      l = Z;
    }, this.getBaseLayer = function() {
      return u !== null ? u : d;
    }, this.getBinding = function() {
      return m === null && M && (m = new XRWebGLBinding(r, t)), m;
    }, this.getFrame = function() {
      return _;
    }, this.getSession = function() {
      return r;
    }, this.setSession = async function(Z) {
      if (r = Z, r !== null) {
        if (b = e.getRenderTarget(), r.addEventListener("select", H), r.addEventListener("selectstart", H), r.addEventListener("selectend", H), r.addEventListener("squeeze", H), r.addEventListener("squeezestart", H), r.addEventListener("squeezeend", H), r.addEventListener("end", B), r.addEventListener("inputsourceschange", O), S.xrCompatible !== !0 && await t.makeXRCompatible(), v = e.getPixelRatio(), e.getSize(L), M && "createProjectionLayer" in XRWebGLBinding.prototype) {
          let se = null, De = null, Ae = null;
          S.depth && (Ae = S.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24, se = S.stencil ? zn : pn, De = S.stencil ? Ri : Qt);
          const Re = {
            colorFormat: t.RGBA8,
            depthFormat: Ae,
            scaleFactor: s
          };
          m = this.getBinding(), u = m.createProjectionLayer(Re), r.updateRenderState({ layers: [u] }), e.setPixelRatio(1), e.setSize(u.textureWidth, u.textureHeight, !1), E = new $t(
            u.textureWidth,
            u.textureHeight,
            {
              format: Ht,
              type: Lt,
              depthTexture: new Pi(u.textureWidth, u.textureHeight, De, void 0, void 0, void 0, void 0, void 0, void 0, se),
              stencilBuffer: S.stencil,
              colorSpace: e.outputColorSpace,
              samples: S.antialias ? 4 : 0,
              resolveDepthBuffer: u.ignoreDepthValues === !1,
              resolveStencilBuffer: u.ignoreDepthValues === !1
            }
          );
        } else {
          const se = {
            antialias: S.antialias,
            alpha: !0,
            depth: S.depth,
            stencil: S.stencil,
            framebufferScaleFactor: s
          };
          d = new XRWebGLLayer(r, t, se), r.updateRenderState({ baseLayer: d }), e.setPixelRatio(1), e.setSize(d.framebufferWidth, d.framebufferHeight, !1), E = new $t(
            d.framebufferWidth,
            d.framebufferHeight,
            {
              format: Ht,
              type: Lt,
              colorSpace: e.outputColorSpace,
              stencilBuffer: S.stencil,
              resolveDepthBuffer: d.ignoreDepthValues === !1,
              resolveStencilBuffer: d.ignoreDepthValues === !1
            }
          );
        }
        E.isXRRenderTarget = !0, this.setFoveation(c), l = null, a = await r.requestReferenceSpace(o), nt.setContext(r), nt.start(), n.isPresenting = !0, n.dispatchEvent({ type: "sessionstart" });
      }
    }, this.getEnvironmentBlendMode = function() {
      if (r !== null)
        return r.environmentBlendMode;
    }, this.getDepthTexture = function() {
      return p.getDepthTexture();
    };
    function O(Z) {
      for (let ne = 0; ne < Z.removed.length; ne++) {
        const se = Z.removed[ne], De = A.indexOf(se);
        De >= 0 && (A[De] = null, R[De].disconnect(se));
      }
      for (let ne = 0; ne < Z.added.length; ne++) {
        const se = Z.added[ne];
        let De = A.indexOf(se);
        if (De === -1) {
          for (let Re = 0; Re < R.length; Re++)
            if (Re >= A.length) {
              A.push(se), De = Re;
              break;
            } else if (A[Re] === null) {
              A[Re] = se, De = Re;
              break;
            }
          if (De === -1) break;
        }
        const Ae = R[De];
        Ae && Ae.connect(se);
      }
    }
    const Q = new I(), K = new I();
    function ce(Z, ne, se) {
      Q.setFromMatrixPosition(ne.matrixWorld), K.setFromMatrixPosition(se.matrixWorld);
      const De = Q.distanceTo(K), Ae = ne.projectionMatrix.elements, Re = se.projectionMatrix.elements, dt = Ae[14] / (Ae[10] - 1), Ge = Ae[14] / (Ae[10] + 1), Ye = (Ae[9] + 1) / Ae[5], $e = (Ae[9] - 1) / Ae[5], Fe = (Ae[8] - 1) / Ae[0], at = (Re[8] + 1) / Re[0], w = dt * Fe, lt = dt * at, Xe = De / (-Fe + at), Qe = Xe * -Fe;
      if (ne.matrixWorld.decompose(Z.position, Z.quaternion, Z.scale), Z.translateX(Qe), Z.translateZ(Xe), Z.matrixWorld.compose(Z.position, Z.quaternion, Z.scale), Z.matrixWorldInverse.copy(Z.matrixWorld).invert(), Ae[10] === -1)
        Z.projectionMatrix.copy(ne.projectionMatrix), Z.projectionMatrixInverse.copy(ne.projectionMatrixInverse);
      else {
        const Me = dt + Xe, y = Ge + Xe, g = w - Qe, D = lt + (De - Qe), Y = Ye * Ge / y * Me, J = $e * Ge / y * Me;
        Z.projectionMatrix.makePerspective(g, D, Y, J, Me, y), Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert();
      }
    }
    function pe(Z, ne) {
      ne === null ? Z.matrixWorld.copy(Z.matrix) : Z.matrixWorld.multiplyMatrices(ne.matrixWorld, Z.matrix), Z.matrixWorldInverse.copy(Z.matrixWorld).invert();
    }
    this.updateCamera = function(Z) {
      if (r === null) return;
      let ne = Z.near, se = Z.far;
      p.texture !== null && (p.depthNear > 0 && (ne = p.depthNear), p.depthFar > 0 && (se = p.depthFar)), G.near = q.near = T.near = ne, G.far = q.far = T.far = se, (z !== G.near || k !== G.far) && (r.updateRenderState({
        depthNear: G.near,
        depthFar: G.far
      }), z = G.near, k = G.far), G.layers.mask = Z.layers.mask | 6, T.layers.mask = G.layers.mask & -5, q.layers.mask = G.layers.mask & -3;
      const De = Z.parent, Ae = G.cameras;
      pe(G, De);
      for (let Re = 0; Re < Ae.length; Re++)
        pe(Ae[Re], De);
      Ae.length === 2 ? ce(G, T, q) : G.projectionMatrix.copy(T.projectionMatrix), he(Z, G, De);
    };
    function he(Z, ne, se) {
      se === null ? Z.matrix.copy(ne.matrixWorld) : (Z.matrix.copy(se.matrixWorld), Z.matrix.invert(), Z.matrix.multiply(ne.matrixWorld)), Z.matrix.decompose(Z.position, Z.quaternion, Z.scale), Z.updateMatrixWorld(!0), Z.projectionMatrix.copy(ne.projectionMatrix), Z.projectionMatrixInverse.copy(ne.projectionMatrixInverse), Z.isPerspectiveCamera && (Z.fov = Ks * 2 * Math.atan(1 / Z.projectionMatrix.elements[5]), Z.zoom = 1);
    }
    this.getCamera = function() {
      return G;
    }, this.getFoveation = function() {
      if (!(u === null && d === null))
        return c;
    }, this.setFoveation = function(Z) {
      c = Z, u !== null && (u.fixedFoveation = Z), d !== null && d.fixedFoveation !== void 0 && (d.fixedFoveation = Z);
    }, this.hasDepthSensing = function() {
      return p.texture !== null;
    }, this.getDepthSensingMesh = function() {
      return p.getMesh(G);
    }, this.getCameraTexture = function(Z) {
      return f[Z];
    };
    let Ue = null;
    function it(Z, ne) {
      if (h = ne.getViewerPose(l || a), _ = ne, h !== null) {
        const se = h.views;
        d !== null && (e.setRenderTargetFramebuffer(E, d.framebuffer), e.setRenderTarget(E));
        let De = !1;
        se.length !== G.cameras.length && (G.cameras.length = 0, De = !0);
        for (let Ge = 0; Ge < se.length; Ge++) {
          const Ye = se[Ge];
          let $e = null;
          if (d !== null)
            $e = d.getViewport(Ye);
          else {
            const at = m.getViewSubImage(u, Ye);
            $e = at.viewport, Ge === 0 && (e.setRenderTargetTextures(
              E,
              at.colorTexture,
              at.depthStencilTexture
            ), e.setRenderTarget(E));
          }
          let Fe = C[Ge];
          Fe === void 0 && (Fe = new Nt(), Fe.layers.enable(Ge), Fe.viewport = new st(), C[Ge] = Fe), Fe.matrix.fromArray(Ye.transform.matrix), Fe.matrix.decompose(Fe.position, Fe.quaternion, Fe.scale), Fe.projectionMatrix.fromArray(Ye.projectionMatrix), Fe.projectionMatrixInverse.copy(Fe.projectionMatrix).invert(), Fe.viewport.set($e.x, $e.y, $e.width, $e.height), Ge === 0 && (G.matrix.copy(Fe.matrix), G.matrix.decompose(G.position, G.quaternion, G.scale)), De === !0 && G.cameras.push(Fe);
        }
        const Ae = r.enabledFeatures;
        if (Ae && Ae.includes("depth-sensing") && r.depthUsage == "gpu-optimized" && M) {
          m = n.getBinding();
          const Ge = m.getDepthInformation(se[0]);
          Ge && Ge.isValid && Ge.texture && p.init(Ge, r.renderState);
        }
        if (Ae && Ae.includes("camera-access") && M) {
          e.state.unbindTexture(), m = n.getBinding();
          for (let Ge = 0; Ge < se.length; Ge++) {
            const Ye = se[Ge].camera;
            if (Ye) {
              let $e = f[Ye];
              $e || ($e = new $o(), f[Ye] = $e);
              const Fe = m.getCameraImage(Ye);
              $e.sourceTexture = Fe;
            }
          }
        }
      }
      for (let se = 0; se < R.length; se++) {
        const De = A[se], Ae = R[se];
        De !== null && Ae !== void 0 && Ae.update(De, ne, l || a);
      }
      Ue && Ue(Z, ne), ne.detectedPlanes && n.dispatchEvent({ type: "planesdetected", data: ne }), _ = null;
    }
    const nt = new rl();
    nt.setAnimationLoop(it), this.setAnimationLoop = function(Z) {
      Ue = Z;
    }, this.dispose = function() {
    };
  }
}
const Un = /* @__PURE__ */ new en(), Jp = /* @__PURE__ */ new tt();
function Kp(i, e) {
  function t(p, f) {
    p.matrixAutoUpdate === !0 && p.updateMatrix(), f.value.copy(p.matrix);
  }
  function n(p, f) {
    f.color.getRGB(p.fogColor.value, tl(i)), f.isFog ? (p.fogNear.value = f.near, p.fogFar.value = f.far) : f.isFogExp2 && (p.fogDensity.value = f.density);
  }
  function r(p, f, S, b, E) {
    f.isMeshBasicMaterial ? s(p, f) : f.isMeshLambertMaterial ? (s(p, f), f.envMap && (p.envMapIntensity.value = f.envMapIntensity)) : f.isMeshToonMaterial ? (s(p, f), m(p, f)) : f.isMeshPhongMaterial ? (s(p, f), h(p, f), f.envMap && (p.envMapIntensity.value = f.envMapIntensity)) : f.isMeshStandardMaterial ? (s(p, f), u(p, f), f.isMeshPhysicalMaterial && d(p, f, E)) : f.isMeshMatcapMaterial ? (s(p, f), _(p, f)) : f.isMeshDepthMaterial ? s(p, f) : f.isMeshDistanceMaterial ? (s(p, f), M(p, f)) : f.isMeshNormalMaterial ? s(p, f) : f.isLineBasicMaterial ? (a(p, f), f.isLineDashedMaterial && o(p, f)) : f.isPointsMaterial ? c(p, f, S, b) : f.isSpriteMaterial ? l(p, f) : f.isShadowMaterial ? (p.color.value.copy(f.color), p.opacity.value = f.opacity) : f.isShaderMaterial && (f.uniformsNeedUpdate = !1);
  }
  function s(p, f) {
    p.opacity.value = f.opacity, f.color && p.diffuse.value.copy(f.color), f.emissive && p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity), f.map && (p.map.value = f.map, t(f.map, p.mapTransform)), f.alphaMap && (p.alphaMap.value = f.alphaMap, t(f.alphaMap, p.alphaMapTransform)), f.bumpMap && (p.bumpMap.value = f.bumpMap, t(f.bumpMap, p.bumpMapTransform), p.bumpScale.value = f.bumpScale, f.side === wt && (p.bumpScale.value *= -1)), f.normalMap && (p.normalMap.value = f.normalMap, t(f.normalMap, p.normalMapTransform), p.normalScale.value.copy(f.normalScale), f.side === wt && p.normalScale.value.negate()), f.displacementMap && (p.displacementMap.value = f.displacementMap, t(f.displacementMap, p.displacementMapTransform), p.displacementScale.value = f.displacementScale, p.displacementBias.value = f.displacementBias), f.emissiveMap && (p.emissiveMap.value = f.emissiveMap, t(f.emissiveMap, p.emissiveMapTransform)), f.specularMap && (p.specularMap.value = f.specularMap, t(f.specularMap, p.specularMapTransform)), f.alphaTest > 0 && (p.alphaTest.value = f.alphaTest);
    const S = e.get(f), b = S.envMap, E = S.envMapRotation;
    b && (p.envMap.value = b, Un.copy(E), Un.x *= -1, Un.y *= -1, Un.z *= -1, b.isCubeTexture && b.isRenderTargetTexture === !1 && (Un.y *= -1, Un.z *= -1), p.envMapRotation.value.setFromMatrix4(Jp.makeRotationFromEuler(Un)), p.flipEnvMap.value = b.isCubeTexture && b.isRenderTargetTexture === !1 ? -1 : 1, p.reflectivity.value = f.reflectivity, p.ior.value = f.ior, p.refractionRatio.value = f.refractionRatio), f.lightMap && (p.lightMap.value = f.lightMap, p.lightMapIntensity.value = f.lightMapIntensity, t(f.lightMap, p.lightMapTransform)), f.aoMap && (p.aoMap.value = f.aoMap, p.aoMapIntensity.value = f.aoMapIntensity, t(f.aoMap, p.aoMapTransform));
  }
  function a(p, f) {
    p.diffuse.value.copy(f.color), p.opacity.value = f.opacity, f.map && (p.map.value = f.map, t(f.map, p.mapTransform));
  }
  function o(p, f) {
    p.dashSize.value = f.dashSize, p.totalSize.value = f.dashSize + f.gapSize, p.scale.value = f.scale;
  }
  function c(p, f, S, b) {
    p.diffuse.value.copy(f.color), p.opacity.value = f.opacity, p.size.value = f.size * S, p.scale.value = b * 0.5, f.map && (p.map.value = f.map, t(f.map, p.uvTransform)), f.alphaMap && (p.alphaMap.value = f.alphaMap, t(f.alphaMap, p.alphaMapTransform)), f.alphaTest > 0 && (p.alphaTest.value = f.alphaTest);
  }
  function l(p, f) {
    p.diffuse.value.copy(f.color), p.opacity.value = f.opacity, p.rotation.value = f.rotation, f.map && (p.map.value = f.map, t(f.map, p.mapTransform)), f.alphaMap && (p.alphaMap.value = f.alphaMap, t(f.alphaMap, p.alphaMapTransform)), f.alphaTest > 0 && (p.alphaTest.value = f.alphaTest);
  }
  function h(p, f) {
    p.specular.value.copy(f.specular), p.shininess.value = Math.max(f.shininess, 1e-4);
  }
  function m(p, f) {
    f.gradientMap && (p.gradientMap.value = f.gradientMap);
  }
  function u(p, f) {
    p.metalness.value = f.metalness, f.metalnessMap && (p.metalnessMap.value = f.metalnessMap, t(f.metalnessMap, p.metalnessMapTransform)), p.roughness.value = f.roughness, f.roughnessMap && (p.roughnessMap.value = f.roughnessMap, t(f.roughnessMap, p.roughnessMapTransform)), f.envMap && (p.envMapIntensity.value = f.envMapIntensity);
  }
  function d(p, f, S) {
    p.ior.value = f.ior, f.sheen > 0 && (p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen), p.sheenRoughness.value = f.sheenRoughness, f.sheenColorMap && (p.sheenColorMap.value = f.sheenColorMap, t(f.sheenColorMap, p.sheenColorMapTransform)), f.sheenRoughnessMap && (p.sheenRoughnessMap.value = f.sheenRoughnessMap, t(f.sheenRoughnessMap, p.sheenRoughnessMapTransform))), f.clearcoat > 0 && (p.clearcoat.value = f.clearcoat, p.clearcoatRoughness.value = f.clearcoatRoughness, f.clearcoatMap && (p.clearcoatMap.value = f.clearcoatMap, t(f.clearcoatMap, p.clearcoatMapTransform)), f.clearcoatRoughnessMap && (p.clearcoatRoughnessMap.value = f.clearcoatRoughnessMap, t(f.clearcoatRoughnessMap, p.clearcoatRoughnessMapTransform)), f.clearcoatNormalMap && (p.clearcoatNormalMap.value = f.clearcoatNormalMap, t(f.clearcoatNormalMap, p.clearcoatNormalMapTransform), p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale), f.side === wt && p.clearcoatNormalScale.value.negate())), f.dispersion > 0 && (p.dispersion.value = f.dispersion), f.iridescence > 0 && (p.iridescence.value = f.iridescence, p.iridescenceIOR.value = f.iridescenceIOR, p.iridescenceThicknessMinimum.value = f.iridescenceThicknessRange[0], p.iridescenceThicknessMaximum.value = f.iridescenceThicknessRange[1], f.iridescenceMap && (p.iridescenceMap.value = f.iridescenceMap, t(f.iridescenceMap, p.iridescenceMapTransform)), f.iridescenceThicknessMap && (p.iridescenceThicknessMap.value = f.iridescenceThicknessMap, t(f.iridescenceThicknessMap, p.iridescenceThicknessMapTransform))), f.transmission > 0 && (p.transmission.value = f.transmission, p.transmissionSamplerMap.value = S.texture, p.transmissionSamplerSize.value.set(S.width, S.height), f.transmissionMap && (p.transmissionMap.value = f.transmissionMap, t(f.transmissionMap, p.transmissionMapTransform)), p.thickness.value = f.thickness, f.thicknessMap && (p.thicknessMap.value = f.thicknessMap, t(f.thicknessMap, p.thicknessMapTransform)), p.attenuationDistance.value = f.attenuationDistance, p.attenuationColor.value.copy(f.attenuationColor)), f.anisotropy > 0 && (p.anisotropyVector.value.set(f.anisotropy * Math.cos(f.anisotropyRotation), f.anisotropy * Math.sin(f.anisotropyRotation)), f.anisotropyMap && (p.anisotropyMap.value = f.anisotropyMap, t(f.anisotropyMap, p.anisotropyMapTransform))), p.specularIntensity.value = f.specularIntensity, p.specularColor.value.copy(f.specularColor), f.specularColorMap && (p.specularColorMap.value = f.specularColorMap, t(f.specularColorMap, p.specularColorMapTransform)), f.specularIntensityMap && (p.specularIntensityMap.value = f.specularIntensityMap, t(f.specularIntensityMap, p.specularIntensityMapTransform));
  }
  function _(p, f) {
    f.matcap && (p.matcap.value = f.matcap);
  }
  function M(p, f) {
    const S = e.get(f).light;
    p.referencePosition.value.setFromMatrixPosition(S.matrixWorld), p.nearDistance.value = S.shadow.camera.near, p.farDistance.value = S.shadow.camera.far;
  }
  return {
    refreshFogUniforms: n,
    refreshMaterialUniforms: r
  };
}
function $p(i, e, t, n) {
  let r = {}, s = {}, a = [];
  const o = i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);
  function c(S, b) {
    const E = b.program;
    n.uniformBlockBinding(S, E);
  }
  function l(S, b) {
    let E = r[S.id];
    E === void 0 && (_(S), E = h(S), r[S.id] = E, S.addEventListener("dispose", p));
    const R = b.program;
    n.updateUBOMapping(S, R);
    const A = e.render.frame;
    s[S.id] !== A && (u(S), s[S.id] = A);
  }
  function h(S) {
    const b = m();
    S.__bindingPointIndex = b;
    const E = i.createBuffer(), R = S.__size, A = S.usage;
    return i.bindBuffer(i.UNIFORM_BUFFER, E), i.bufferData(i.UNIFORM_BUFFER, R, A), i.bindBuffer(i.UNIFORM_BUFFER, null), i.bindBufferBase(i.UNIFORM_BUFFER, b, E), E;
  }
  function m() {
    for (let S = 0; S < o; S++)
      if (a.indexOf(S) === -1)
        return a.push(S), S;
    return We("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
  }
  function u(S) {
    const b = r[S.id], E = S.uniforms, R = S.__cache;
    i.bindBuffer(i.UNIFORM_BUFFER, b);
    for (let A = 0, L = E.length; A < L; A++) {
      const v = Array.isArray(E[A]) ? E[A] : [E[A]];
      for (let T = 0, q = v.length; T < q; T++) {
        const C = v[T];
        if (d(C, A, T, R) === !0) {
          const G = C.__offset, z = Array.isArray(C.value) ? C.value : [C.value];
          let k = 0;
          for (let H = 0; H < z.length; H++) {
            const B = z[H], O = M(B);
            typeof B == "number" || typeof B == "boolean" ? (C.__data[0] = B, i.bufferSubData(i.UNIFORM_BUFFER, G + k, C.__data)) : B.isMatrix3 ? (C.__data[0] = B.elements[0], C.__data[1] = B.elements[1], C.__data[2] = B.elements[2], C.__data[3] = 0, C.__data[4] = B.elements[3], C.__data[5] = B.elements[4], C.__data[6] = B.elements[5], C.__data[7] = 0, C.__data[8] = B.elements[6], C.__data[9] = B.elements[7], C.__data[10] = B.elements[8], C.__data[11] = 0) : (B.toArray(C.__data, k), k += O.storage / Float32Array.BYTES_PER_ELEMENT);
          }
          i.bufferSubData(i.UNIFORM_BUFFER, G, C.__data);
        }
      }
    }
    i.bindBuffer(i.UNIFORM_BUFFER, null);
  }
  function d(S, b, E, R) {
    const A = S.value, L = b + "_" + E;
    if (R[L] === void 0)
      return typeof A == "number" || typeof A == "boolean" ? R[L] = A : R[L] = A.clone(), !0;
    {
      const v = R[L];
      if (typeof A == "number" || typeof A == "boolean") {
        if (v !== A)
          return R[L] = A, !0;
      } else if (v.equals(A) === !1)
        return v.copy(A), !0;
    }
    return !1;
  }
  function _(S) {
    const b = S.uniforms;
    let E = 0;
    const R = 16;
    for (let L = 0, v = b.length; L < v; L++) {
      const T = Array.isArray(b[L]) ? b[L] : [b[L]];
      for (let q = 0, C = T.length; q < C; q++) {
        const G = T[q], z = Array.isArray(G.value) ? G.value : [G.value];
        for (let k = 0, H = z.length; k < H; k++) {
          const B = z[k], O = M(B), Q = E % R, K = Q % O.boundary, ce = Q + K;
          E += K, ce !== 0 && R - ce < O.storage && (E += R - ce), G.__data = new Float32Array(O.storage / Float32Array.BYTES_PER_ELEMENT), G.__offset = E, E += O.storage;
        }
      }
    }
    const A = E % R;
    return A > 0 && (E += R - A), S.__size = E, S.__cache = {}, this;
  }
  function M(S) {
    const b = {
      boundary: 0,
      // bytes
      storage: 0
      // bytes
    };
    return typeof S == "number" || typeof S == "boolean" ? (b.boundary = 4, b.storage = 4) : S.isVector2 ? (b.boundary = 8, b.storage = 8) : S.isVector3 || S.isColor ? (b.boundary = 16, b.storage = 12) : S.isVector4 ? (b.boundary = 16, b.storage = 16) : S.isMatrix3 ? (b.boundary = 48, b.storage = 48) : S.isMatrix4 ? (b.boundary = 64, b.storage = 64) : S.isTexture ? Ce("WebGLRenderer: Texture samplers can not be part of an uniforms group.") : Ce("WebGLRenderer: Unsupported uniform value type.", S), b;
  }
  function p(S) {
    const b = S.target;
    b.removeEventListener("dispose", p);
    const E = a.indexOf(b.__bindingPointIndex);
    a.splice(E, 1), i.deleteBuffer(r[b.id]), delete r[b.id], delete s[b.id];
  }
  function f() {
    for (const S in r)
      i.deleteBuffer(r[S]);
    a = [], r = {}, s = {};
  }
  return {
    bind: c,
    update: l,
    dispose: f
  };
}
const jp = new Uint16Array([
  12469,
  15057,
  12620,
  14925,
  13266,
  14620,
  13807,
  14376,
  14323,
  13990,
  14545,
  13625,
  14713,
  13328,
  14840,
  12882,
  14931,
  12528,
  14996,
  12233,
  15039,
  11829,
  15066,
  11525,
  15080,
  11295,
  15085,
  10976,
  15082,
  10705,
  15073,
  10495,
  13880,
  14564,
  13898,
  14542,
  13977,
  14430,
  14158,
  14124,
  14393,
  13732,
  14556,
  13410,
  14702,
  12996,
  14814,
  12596,
  14891,
  12291,
  14937,
  11834,
  14957,
  11489,
  14958,
  11194,
  14943,
  10803,
  14921,
  10506,
  14893,
  10278,
  14858,
  9960,
  14484,
  14039,
  14487,
  14025,
  14499,
  13941,
  14524,
  13740,
  14574,
  13468,
  14654,
  13106,
  14743,
  12678,
  14818,
  12344,
  14867,
  11893,
  14889,
  11509,
  14893,
  11180,
  14881,
  10751,
  14852,
  10428,
  14812,
  10128,
  14765,
  9754,
  14712,
  9466,
  14764,
  13480,
  14764,
  13475,
  14766,
  13440,
  14766,
  13347,
  14769,
  13070,
  14786,
  12713,
  14816,
  12387,
  14844,
  11957,
  14860,
  11549,
  14868,
  11215,
  14855,
  10751,
  14825,
  10403,
  14782,
  10044,
  14729,
  9651,
  14666,
  9352,
  14599,
  9029,
  14967,
  12835,
  14966,
  12831,
  14963,
  12804,
  14954,
  12723,
  14936,
  12564,
  14917,
  12347,
  14900,
  11958,
  14886,
  11569,
  14878,
  11247,
  14859,
  10765,
  14828,
  10401,
  14784,
  10011,
  14727,
  9600,
  14660,
  9289,
  14586,
  8893,
  14508,
  8533,
  15111,
  12234,
  15110,
  12234,
  15104,
  12216,
  15092,
  12156,
  15067,
  12010,
  15028,
  11776,
  14981,
  11500,
  14942,
  11205,
  14902,
  10752,
  14861,
  10393,
  14812,
  9991,
  14752,
  9570,
  14682,
  9252,
  14603,
  8808,
  14519,
  8445,
  14431,
  8145,
  15209,
  11449,
  15208,
  11451,
  15202,
  11451,
  15190,
  11438,
  15163,
  11384,
  15117,
  11274,
  15055,
  10979,
  14994,
  10648,
  14932,
  10343,
  14871,
  9936,
  14803,
  9532,
  14729,
  9218,
  14645,
  8742,
  14556,
  8381,
  14461,
  8020,
  14365,
  7603,
  15273,
  10603,
  15272,
  10607,
  15267,
  10619,
  15256,
  10631,
  15231,
  10614,
  15182,
  10535,
  15118,
  10389,
  15042,
  10167,
  14963,
  9787,
  14883,
  9447,
  14800,
  9115,
  14710,
  8665,
  14615,
  8318,
  14514,
  7911,
  14411,
  7507,
  14279,
  7198,
  15314,
  9675,
  15313,
  9683,
  15309,
  9712,
  15298,
  9759,
  15277,
  9797,
  15229,
  9773,
  15166,
  9668,
  15084,
  9487,
  14995,
  9274,
  14898,
  8910,
  14800,
  8539,
  14697,
  8234,
  14590,
  7790,
  14479,
  7409,
  14367,
  7067,
  14178,
  6621,
  15337,
  8619,
  15337,
  8631,
  15333,
  8677,
  15325,
  8769,
  15305,
  8871,
  15264,
  8940,
  15202,
  8909,
  15119,
  8775,
  15022,
  8565,
  14916,
  8328,
  14804,
  8009,
  14688,
  7614,
  14569,
  7287,
  14448,
  6888,
  14321,
  6483,
  14088,
  6171,
  15350,
  7402,
  15350,
  7419,
  15347,
  7480,
  15340,
  7613,
  15322,
  7804,
  15287,
  7973,
  15229,
  8057,
  15148,
  8012,
  15046,
  7846,
  14933,
  7611,
  14810,
  7357,
  14682,
  7069,
  14552,
  6656,
  14421,
  6316,
  14251,
  5948,
  14007,
  5528,
  15356,
  5942,
  15356,
  5977,
  15353,
  6119,
  15348,
  6294,
  15332,
  6551,
  15302,
  6824,
  15249,
  7044,
  15171,
  7122,
  15070,
  7050,
  14949,
  6861,
  14818,
  6611,
  14679,
  6349,
  14538,
  6067,
  14398,
  5651,
  14189,
  5311,
  13935,
  4958,
  15359,
  4123,
  15359,
  4153,
  15356,
  4296,
  15353,
  4646,
  15338,
  5160,
  15311,
  5508,
  15263,
  5829,
  15188,
  6042,
  15088,
  6094,
  14966,
  6001,
  14826,
  5796,
  14678,
  5543,
  14527,
  5287,
  14377,
  4985,
  14133,
  4586,
  13869,
  4257,
  15360,
  1563,
  15360,
  1642,
  15358,
  2076,
  15354,
  2636,
  15341,
  3350,
  15317,
  4019,
  15273,
  4429,
  15203,
  4732,
  15105,
  4911,
  14981,
  4932,
  14836,
  4818,
  14679,
  4621,
  14517,
  4386,
  14359,
  4156,
  14083,
  3795,
  13808,
  3437,
  15360,
  122,
  15360,
  137,
  15358,
  285,
  15355,
  636,
  15344,
  1274,
  15322,
  2177,
  15281,
  2765,
  15215,
  3223,
  15120,
  3451,
  14995,
  3569,
  14846,
  3567,
  14681,
  3466,
  14511,
  3305,
  14344,
  3121,
  14037,
  2800,
  13753,
  2467,
  15360,
  0,
  15360,
  1,
  15359,
  21,
  15355,
  89,
  15346,
  253,
  15325,
  479,
  15287,
  796,
  15225,
  1148,
  15133,
  1492,
  15008,
  1749,
  14856,
  1882,
  14685,
  1886,
  14506,
  1783,
  14324,
  1608,
  13996,
  1398,
  13702,
  1183
]);
let Yt = null;
function Qp() {
  return Yt === null && (Yt = new wc(jp, 16, 16, li, dn), Yt.name = "DFG_LUT", Yt.minFilter = Et, Yt.magFilter = Et, Yt.wrapS = un, Yt.wrapT = un, Yt.generateMipmaps = !1, Yt.needsUpdate = !0), Yt;
}
class em {
  /**
   * Constructs a new WebGL renderer.
   *
   * @param {WebGLRenderer~Options} [parameters] - The configuration parameter.
   */
  constructor(e = {}) {
    const {
      canvas: t = ic(),
      context: n = null,
      depth: r = !0,
      stencil: s = !1,
      alpha: a = !1,
      antialias: o = !1,
      premultipliedAlpha: c = !0,
      preserveDrawingBuffer: l = !1,
      powerPreference: h = "default",
      failIfMajorPerformanceCaveat: m = !1,
      reversedDepthBuffer: u = !1,
      outputBufferType: d = Lt
    } = e;
    this.isWebGLRenderer = !0;
    let _;
    if (n !== null) {
      if (typeof WebGLRenderingContext < "u" && n instanceof WebGLRenderingContext)
        throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");
      _ = n.getContextAttributes().alpha;
    } else
      _ = a;
    const M = d, p = /* @__PURE__ */ new Set([
      sa,
      ra,
      ia
    ]), f = /* @__PURE__ */ new Set([
      Lt,
      Qt,
      wi,
      Ri,
      ta,
      na
    ]), S = new Uint32Array(4), b = new Int32Array(4);
    let E = null, R = null;
    const A = [], L = [];
    let v = null;
    this.domElement = t, this.debug = {
      /**
       * Enables error checking and reporting when shader programs are being compiled.
       * @type {boolean}
       */
      checkShaderErrors: !0,
      /**
       * Callback for custom error reporting.
       * @type {?Function}
       */
      onShaderError: null
    }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.toneMapping = Kt, this.toneMappingExposure = 1, this.transmissionResolutionScale = 1;
    const T = this;
    let q = !1;
    this._outputColorSpace = Ut;
    let C = 0, G = 0, z = null, k = -1, H = null;
    const B = new st(), O = new st();
    let Q = null;
    const K = new Ve(0);
    let ce = 0, pe = t.width, he = t.height, Ue = 1, it = null, nt = null;
    const Z = new st(0, 0, pe, he), ne = new st(0, 0, pe, he);
    let se = !1;
    const De = new ua();
    let Ae = !1, Re = !1;
    const dt = new tt(), Ge = new I(), Ye = new st(), $e = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: !0 };
    let Fe = !1;
    function at() {
      return z === null ? Ue : 1;
    }
    let w = n;
    function lt(x, U) {
      return t.getContext(x, U);
    }
    try {
      const x = {
        alpha: !0,
        depth: r,
        stencil: s,
        antialias: o,
        premultipliedAlpha: c,
        preserveDrawingBuffer: l,
        powerPreference: h,
        failIfMajorPerformanceCaveat: m
      };
      if ("setAttribute" in t && t.setAttribute("data-engine", `three.js r${Qs}`), t.addEventListener("webglcontextlost", ge, !1), t.addEventListener("webglcontextrestored", Pe, !1), t.addEventListener("webglcontextcreationerror", et, !1), w === null) {
        const U = "webgl2";
        if (w = lt(U, x), w === null)
          throw lt(U) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
      }
    } catch (x) {
      throw We("WebGLRenderer: " + x.message), x;
    }
    let Xe, Qe, Me, y, g, D, Y, J, X, me, ie, Te, we, $, ee, _e, ve, ue, Oe, P, re, te, de;
    function j() {
      Xe = new ed(w), Xe.init(), re = new Wp(w, Xe), Qe = new Yf(w, Xe, e, re), Me = new Hp(w, Xe), Qe.reversedDepthBuffer && u && Me.buffers.depth.setReversed(!0), y = new id(w), g = new Rp(), D = new kp(w, Xe, Me, g, Qe, re, y), Y = new Qf(T), J = new ou(w), te = new Wf(w, J), X = new td(w, J, y, te), me = new sd(w, X, J, te, y), ue = new rd(w, Qe, D), ee = new qf(g), ie = new wp(T, Y, Xe, Qe, te, ee), Te = new Kp(T, g), we = new Pp(), $ = new Fp(Xe), ve = new kf(T, Y, Me, me, _, c), _e = new Gp(T, me, Qe), de = new $p(w, y, Qe, Me), Oe = new Xf(w, Xe, y), P = new nd(w, Xe, y), y.programs = ie.programs, T.capabilities = Qe, T.extensions = Xe, T.properties = g, T.renderLists = we, T.shadowMap = _e, T.state = Me, T.info = y;
    }
    j(), M !== Lt && (v = new od(M, t.width, t.height, r, s));
    const W = new Zp(T, w);
    this.xr = W, this.getContext = function() {
      return w;
    }, this.getContextAttributes = function() {
      return w.getContextAttributes();
    }, this.forceContextLoss = function() {
      const x = Xe.get("WEBGL_lose_context");
      x && x.loseContext();
    }, this.forceContextRestore = function() {
      const x = Xe.get("WEBGL_lose_context");
      x && x.restoreContext();
    }, this.getPixelRatio = function() {
      return Ue;
    }, this.setPixelRatio = function(x) {
      x !== void 0 && (Ue = x, this.setSize(pe, he, !1));
    }, this.getSize = function(x) {
      return x.set(pe, he);
    }, this.setSize = function(x, U, V = !0) {
      if (W.isPresenting) {
        Ce("WebGLRenderer: Can't change size while VR device is presenting.");
        return;
      }
      pe = x, he = U, t.width = Math.floor(x * Ue), t.height = Math.floor(U * Ue), V === !0 && (t.style.width = x + "px", t.style.height = U + "px"), v !== null && v.setSize(t.width, t.height), this.setViewport(0, 0, x, U);
    }, this.getDrawingBufferSize = function(x) {
      return x.set(pe * Ue, he * Ue).floor();
    }, this.setDrawingBufferSize = function(x, U, V) {
      pe = x, he = U, Ue = V, t.width = Math.floor(x * V), t.height = Math.floor(U * V), this.setViewport(0, 0, x, U);
    }, this.setEffects = function(x) {
      if (M === Lt) {
        console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");
        return;
      }
      if (x) {
        for (let U = 0; U < x.length; U++)
          if (x[U].isOutputPass === !0) {
            console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");
            break;
          }
      }
      v.setEffects(x || []);
    }, this.getCurrentViewport = function(x) {
      return x.copy(B);
    }, this.getViewport = function(x) {
      return x.copy(Z);
    }, this.setViewport = function(x, U, V, F) {
      x.isVector4 ? Z.set(x.x, x.y, x.z, x.w) : Z.set(x, U, V, F), Me.viewport(B.copy(Z).multiplyScalar(Ue).round());
    }, this.getScissor = function(x) {
      return x.copy(ne);
    }, this.setScissor = function(x, U, V, F) {
      x.isVector4 ? ne.set(x.x, x.y, x.z, x.w) : ne.set(x, U, V, F), Me.scissor(O.copy(ne).multiplyScalar(Ue).round());
    }, this.getScissorTest = function() {
      return se;
    }, this.setScissorTest = function(x) {
      Me.setScissorTest(se = x);
    }, this.setOpaqueSort = function(x) {
      it = x;
    }, this.setTransparentSort = function(x) {
      nt = x;
    }, this.getClearColor = function(x) {
      return x.copy(ve.getClearColor());
    }, this.setClearColor = function() {
      ve.setClearColor(...arguments);
    }, this.getClearAlpha = function() {
      return ve.getClearAlpha();
    }, this.setClearAlpha = function() {
      ve.setClearAlpha(...arguments);
    }, this.clear = function(x = !0, U = !0, V = !0) {
      let F = 0;
      if (x) {
        let N = !1;
        if (z !== null) {
          const oe = z.texture.format;
          N = p.has(oe);
        }
        if (N) {
          const oe = z.texture.type, fe = f.has(oe), le = ve.getClearColor(), xe = ve.getClearAlpha(), Ee = le.r, Le = le.g, Be = le.b;
          fe ? (S[0] = Ee, S[1] = Le, S[2] = Be, S[3] = xe, w.clearBufferuiv(w.COLOR, 0, S)) : (b[0] = Ee, b[1] = Le, b[2] = Be, b[3] = xe, w.clearBufferiv(w.COLOR, 0, b));
        } else
          F |= w.COLOR_BUFFER_BIT;
      }
      U && (F |= w.DEPTH_BUFFER_BIT), V && (F |= w.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), F !== 0 && w.clear(F);
    }, this.clearColor = function() {
      this.clear(!0, !1, !1);
    }, this.clearDepth = function() {
      this.clear(!1, !0, !1);
    }, this.clearStencil = function() {
      this.clear(!1, !1, !0);
    }, this.dispose = function() {
      t.removeEventListener("webglcontextlost", ge, !1), t.removeEventListener("webglcontextrestored", Pe, !1), t.removeEventListener("webglcontextcreationerror", et, !1), ve.dispose(), we.dispose(), $.dispose(), g.dispose(), Y.dispose(), me.dispose(), te.dispose(), de.dispose(), ie.dispose(), W.dispose(), W.removeEventListener("sessionstart", ma), W.removeEventListener("sessionend", _a), wn.stop();
    };
    function ge(x) {
      x.preventDefault(), La("WebGLRenderer: Context Lost."), q = !0;
    }
    function Pe() {
      La("WebGLRenderer: Context Restored."), q = !1;
      const x = y.autoReset, U = _e.enabled, V = _e.autoUpdate, F = _e.needsUpdate, N = _e.type;
      j(), y.autoReset = x, _e.enabled = U, _e.autoUpdate = V, _e.needsUpdate = F, _e.type = N;
    }
    function et(x) {
      We("WebGLRenderer: A WebGL context could not be created. Reason: ", x.statusMessage);
    }
    function qe(x) {
      const U = x.target;
      U.removeEventListener("dispose", qe), nn(U);
    }
    function nn(x) {
      rn(x), g.remove(x);
    }
    function rn(x) {
      const U = g.get(x).programs;
      U !== void 0 && (U.forEach(function(V) {
        ie.releaseProgram(V);
      }), x.isShaderMaterial && ie.releaseShaderCache(x));
    }
    this.renderBufferDirect = function(x, U, V, F, N, oe) {
      U === null && (U = $e);
      const fe = N.isMesh && N.matrixWorld.determinant() < 0, le = fl(x, U, V, F, N);
      Me.setMaterial(F, fe);
      let xe = V.index, Ee = 1;
      if (F.wireframe === !0) {
        if (xe = X.getWireframeAttribute(V), xe === void 0) return;
        Ee = 2;
      }
      const Le = V.drawRange, Be = V.attributes.position;
      let ye = Le.start * Ee, Je = (Le.start + Le.count) * Ee;
      oe !== null && (ye = Math.max(ye, oe.start * Ee), Je = Math.min(Je, (oe.start + oe.count) * Ee)), xe !== null ? (ye = Math.max(ye, 0), Je = Math.min(Je, xe.count)) : Be != null && (ye = Math.max(ye, 0), Je = Math.min(Je, Be.count));
      const ot = Je - ye;
      if (ot < 0 || ot === 1 / 0) return;
      te.setup(N, F, le, V, xe);
      let rt, Ke = Oe;
      if (xe !== null && (rt = J.get(xe), Ke = P, Ke.setIndex(rt)), N.isMesh)
        F.wireframe === !0 ? (Me.setLineWidth(F.wireframeLinewidth * at()), Ke.setMode(w.LINES)) : Ke.setMode(w.TRIANGLES);
      else if (N.isLine) {
        let xt = F.linewidth;
        xt === void 0 && (xt = 1), Me.setLineWidth(xt * at()), N.isLineSegments ? Ke.setMode(w.LINES) : N.isLineLoop ? Ke.setMode(w.LINE_LOOP) : Ke.setMode(w.LINE_STRIP);
      } else N.isPoints ? Ke.setMode(w.POINTS) : N.isSprite && Ke.setMode(w.TRIANGLES);
      if (N.isBatchedMesh)
        if (N._multiDrawInstances !== null)
          _r("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."), Ke.renderMultiDrawInstances(N._multiDrawStarts, N._multiDrawCounts, N._multiDrawCount, N._multiDrawInstances);
        else if (Xe.get("WEBGL_multi_draw"))
          Ke.renderMultiDraw(N._multiDrawStarts, N._multiDrawCounts, N._multiDrawCount);
        else {
          const xt = N._multiDrawStarts, Se = N._multiDrawCounts, Rt = N._multiDrawCount, ke = xe ? J.get(xe).bytesPerElement : 1, Ot = g.get(F).currentProgram.getUniforms();
          for (let Wt = 0; Wt < Rt; Wt++)
            Ot.setValue(w, "_gl_DrawID", Wt), Ke.render(xt[Wt] / ke, Se[Wt]);
        }
      else if (N.isInstancedMesh)
        Ke.renderInstances(ye, ot, N.count);
      else if (V.isInstancedBufferGeometry) {
        const xt = V._maxInstanceCount !== void 0 ? V._maxInstanceCount : 1 / 0, Se = Math.min(V.instanceCount, xt);
        Ke.renderInstances(ye, ot, Se);
      } else
        Ke.render(ye, ot);
    };
    function pa(x, U, V) {
      x.transparent === !0 && x.side === Ft && x.forceSinglePass === !1 ? (x.side = wt, x.needsUpdate = !0, Fi(x, U, V), x.side = An, x.needsUpdate = !0, Fi(x, U, V), x.side = Ft) : Fi(x, U, V);
    }
    this.compile = function(x, U, V = null) {
      V === null && (V = x), R = $.get(V), R.init(U), L.push(R), V.traverseVisible(function(N) {
        N.isLight && N.layers.test(U.layers) && (R.pushLight(N), N.castShadow && R.pushShadow(N));
      }), x !== V && x.traverseVisible(function(N) {
        N.isLight && N.layers.test(U.layers) && (R.pushLight(N), N.castShadow && R.pushShadow(N));
      }), R.setupLights();
      const F = /* @__PURE__ */ new Set();
      return x.traverse(function(N) {
        if (!(N.isMesh || N.isPoints || N.isLine || N.isSprite))
          return;
        const oe = N.material;
        if (oe)
          if (Array.isArray(oe))
            for (let fe = 0; fe < oe.length; fe++) {
              const le = oe[fe];
              pa(le, V, N), F.add(le);
            }
          else
            pa(oe, V, N), F.add(oe);
      }), R = L.pop(), F;
    }, this.compileAsync = function(x, U, V = null) {
      const F = this.compile(x, U, V);
      return new Promise((N) => {
        function oe() {
          if (F.forEach(function(fe) {
            g.get(fe).currentProgram.isReady() && F.delete(fe);
          }), F.size === 0) {
            N(x);
            return;
          }
          setTimeout(oe, 10);
        }
        Xe.get("KHR_parallel_shader_compile") !== null ? oe() : setTimeout(oe, 10);
      });
    };
    let Er = null;
    function hl(x) {
      Er && Er(x);
    }
    function ma() {
      wn.stop();
    }
    function _a() {
      wn.start();
    }
    const wn = new rl();
    wn.setAnimationLoop(hl), typeof self < "u" && wn.setContext(self), this.setAnimationLoop = function(x) {
      Er = x, W.setAnimationLoop(x), x === null ? wn.stop() : wn.start();
    }, W.addEventListener("sessionstart", ma), W.addEventListener("sessionend", _a), this.render = function(x, U) {
      if (U !== void 0 && U.isCamera !== !0) {
        We("WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        return;
      }
      if (q === !0) return;
      const V = W.enabled === !0 && W.isPresenting === !0, F = v !== null && (z === null || V) && v.begin(T, z);
      if (x.matrixWorldAutoUpdate === !0 && x.updateMatrixWorld(), U.parent === null && U.matrixWorldAutoUpdate === !0 && U.updateMatrixWorld(), W.enabled === !0 && W.isPresenting === !0 && (v === null || v.isCompositing() === !1) && (W.cameraAutoUpdate === !0 && W.updateCamera(U), U = W.getCamera()), x.isScene === !0 && x.onBeforeRender(T, x, U, z), R = $.get(x, L.length), R.init(U), L.push(R), dt.multiplyMatrices(U.projectionMatrix, U.matrixWorldInverse), De.setFromProjectionMatrix(dt, Jt, U.reversedDepth), Re = this.localClippingEnabled, Ae = ee.init(this.clippingPlanes, Re), E = we.get(x, A.length), E.init(), A.push(E), W.enabled === !0 && W.isPresenting === !0) {
        const fe = T.xr.getDepthSensingMesh();
        fe !== null && yr(fe, U, -1 / 0, T.sortObjects);
      }
      yr(x, U, 0, T.sortObjects), E.finish(), T.sortObjects === !0 && E.sort(it, nt), Fe = W.enabled === !1 || W.isPresenting === !1 || W.hasDepthSensing() === !1, Fe && ve.addToRenderList(E, x), this.info.render.frame++, Ae === !0 && ee.beginShadows();
      const N = R.state.shadowsArray;
      if (_e.render(N, x, U), Ae === !0 && ee.endShadows(), this.info.autoReset === !0 && this.info.reset(), (F && v.hasRenderPass()) === !1) {
        const fe = E.opaque, le = E.transmissive;
        if (R.setupLights(), U.isArrayCamera) {
          const xe = U.cameras;
          if (le.length > 0)
            for (let Ee = 0, Le = xe.length; Ee < Le; Ee++) {
              const Be = xe[Ee];
              va(fe, le, x, Be);
            }
          Fe && ve.render(x);
          for (let Ee = 0, Le = xe.length; Ee < Le; Ee++) {
            const Be = xe[Ee];
            ga(E, x, Be, Be.viewport);
          }
        } else
          le.length > 0 && va(fe, le, x, U), Fe && ve.render(x), ga(E, x, U);
      }
      z !== null && G === 0 && (D.updateMultisampleRenderTarget(z), D.updateRenderTargetMipmap(z)), F && v.end(T), x.isScene === !0 && x.onAfterRender(T, x, U), te.resetDefaultState(), k = -1, H = null, L.pop(), L.length > 0 ? (R = L[L.length - 1], Ae === !0 && ee.setGlobalState(T.clippingPlanes, R.state.camera)) : R = null, A.pop(), A.length > 0 ? E = A[A.length - 1] : E = null;
    };
    function yr(x, U, V, F) {
      if (x.visible === !1) return;
      if (x.layers.test(U.layers)) {
        if (x.isGroup)
          V = x.renderOrder;
        else if (x.isLOD)
          x.autoUpdate === !0 && x.update(U);
        else if (x.isLight)
          R.pushLight(x), x.castShadow && R.pushShadow(x);
        else if (x.isSprite) {
          if (!x.frustumCulled || De.intersectsSprite(x)) {
            F && Ye.setFromMatrixPosition(x.matrixWorld).applyMatrix4(dt);
            const fe = me.update(x), le = x.material;
            le.visible && E.push(x, fe, le, V, Ye.z, null);
          }
        } else if ((x.isMesh || x.isLine || x.isPoints) && (!x.frustumCulled || De.intersectsObject(x))) {
          const fe = me.update(x), le = x.material;
          if (F && (x.boundingSphere !== void 0 ? (x.boundingSphere === null && x.computeBoundingSphere(), Ye.copy(x.boundingSphere.center)) : (fe.boundingSphere === null && fe.computeBoundingSphere(), Ye.copy(fe.boundingSphere.center)), Ye.applyMatrix4(x.matrixWorld).applyMatrix4(dt)), Array.isArray(le)) {
            const xe = fe.groups;
            for (let Ee = 0, Le = xe.length; Ee < Le; Ee++) {
              const Be = xe[Ee], ye = le[Be.materialIndex];
              ye && ye.visible && E.push(x, fe, ye, V, Ye.z, Be);
            }
          } else le.visible && E.push(x, fe, le, V, Ye.z, null);
        }
      }
      const oe = x.children;
      for (let fe = 0, le = oe.length; fe < le; fe++)
        yr(oe[fe], U, V, F);
    }
    function ga(x, U, V, F) {
      const { opaque: N, transmissive: oe, transparent: fe } = x;
      R.setupLightsView(V), Ae === !0 && ee.setGlobalState(T.clippingPlanes, V), F && Me.viewport(B.copy(F)), N.length > 0 && Ni(N, U, V), oe.length > 0 && Ni(oe, U, V), fe.length > 0 && Ni(fe, U, V), Me.buffers.depth.setTest(!0), Me.buffers.depth.setMask(!0), Me.buffers.color.setMask(!0), Me.setPolygonOffset(!1);
    }
    function va(x, U, V, F) {
      if ((V.isScene === !0 ? V.overrideMaterial : null) !== null)
        return;
      if (R.state.transmissionRenderTarget[F.id] === void 0) {
        const ye = Xe.has("EXT_color_buffer_half_float") || Xe.has("EXT_color_buffer_float");
        R.state.transmissionRenderTarget[F.id] = new $t(1, 1, {
          generateMipmaps: !0,
          type: ye ? dn : Lt,
          minFilter: Bn,
          samples: Math.max(4, Qe.samples),
          // to avoid feedback loops, the transmission render target requires a resolve, see #26177
          stencilBuffer: s,
          resolveDepthBuffer: !1,
          resolveStencilBuffer: !1,
          colorSpace: He.workingColorSpace
        });
      }
      const oe = R.state.transmissionRenderTarget[F.id], fe = F.viewport || B;
      oe.setSize(fe.z * T.transmissionResolutionScale, fe.w * T.transmissionResolutionScale);
      const le = T.getRenderTarget(), xe = T.getActiveCubeFace(), Ee = T.getActiveMipmapLevel();
      T.setRenderTarget(oe), T.getClearColor(K), ce = T.getClearAlpha(), ce < 1 && T.setClearColor(16777215, 0.5), T.clear(), Fe && ve.render(V);
      const Le = T.toneMapping;
      T.toneMapping = Kt;
      const Be = F.viewport;
      if (F.viewport !== void 0 && (F.viewport = void 0), R.setupLightsView(F), Ae === !0 && ee.setGlobalState(T.clippingPlanes, F), Ni(x, V, F), D.updateMultisampleRenderTarget(oe), D.updateRenderTargetMipmap(oe), Xe.has("WEBGL_multisampled_render_to_texture") === !1) {
        let ye = !1;
        for (let Je = 0, ot = U.length; Je < ot; Je++) {
          const rt = U[Je], { object: Ke, geometry: xt, material: Se, group: Rt } = rt;
          if (Se.side === Ft && Ke.layers.test(F.layers)) {
            const ke = Se.side;
            Se.side = wt, Se.needsUpdate = !0, xa(Ke, V, F, xt, Se, Rt), Se.side = ke, Se.needsUpdate = !0, ye = !0;
          }
        }
        ye === !0 && (D.updateMultisampleRenderTarget(oe), D.updateRenderTargetMipmap(oe));
      }
      T.setRenderTarget(le, xe, Ee), T.setClearColor(K, ce), Be !== void 0 && (F.viewport = Be), T.toneMapping = Le;
    }
    function Ni(x, U, V) {
      const F = U.isScene === !0 ? U.overrideMaterial : null;
      for (let N = 0, oe = x.length; N < oe; N++) {
        const fe = x[N], { object: le, geometry: xe, group: Ee } = fe;
        let Le = fe.material;
        Le.allowOverride === !0 && F !== null && (Le = F), le.layers.test(V.layers) && xa(le, U, V, xe, Le, Ee);
      }
    }
    function xa(x, U, V, F, N, oe) {
      x.onBeforeRender(T, U, V, F, N, oe), x.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse, x.matrixWorld), x.normalMatrix.getNormalMatrix(x.modelViewMatrix), N.onBeforeRender(T, U, V, F, x, oe), N.transparent === !0 && N.side === Ft && N.forceSinglePass === !1 ? (N.side = wt, N.needsUpdate = !0, T.renderBufferDirect(V, U, F, N, x, oe), N.side = An, N.needsUpdate = !0, T.renderBufferDirect(V, U, F, N, x, oe), N.side = Ft) : T.renderBufferDirect(V, U, F, N, x, oe), x.onAfterRender(T, U, V, F, N, oe);
    }
    function Fi(x, U, V) {
      U.isScene !== !0 && (U = $e);
      const F = g.get(x), N = R.state.lights, oe = R.state.shadowsArray, fe = N.state.version, le = ie.getParameters(x, N.state, oe, U, V), xe = ie.getProgramCacheKey(le);
      let Ee = F.programs;
      F.environment = x.isMeshStandardMaterial || x.isMeshLambertMaterial || x.isMeshPhongMaterial ? U.environment : null, F.fog = U.fog;
      const Le = x.isMeshStandardMaterial || x.isMeshLambertMaterial && !x.envMap || x.isMeshPhongMaterial && !x.envMap;
      F.envMap = Y.get(x.envMap || F.environment, Le), F.envMapRotation = F.environment !== null && x.envMap === null ? U.environmentRotation : x.envMapRotation, Ee === void 0 && (x.addEventListener("dispose", qe), Ee = /* @__PURE__ */ new Map(), F.programs = Ee);
      let Be = Ee.get(xe);
      if (Be !== void 0) {
        if (F.currentProgram === Be && F.lightsStateVersion === fe)
          return Sa(x, le), Be;
      } else
        le.uniforms = ie.getUniforms(x), x.onBeforeCompile(le, T), Be = ie.acquireProgram(le, xe), Ee.set(xe, Be), F.uniforms = le.uniforms;
      const ye = F.uniforms;
      return (!x.isShaderMaterial && !x.isRawShaderMaterial || x.clipping === !0) && (ye.clippingPlanes = ee.uniform), Sa(x, le), F.needsLights = pl(x), F.lightsStateVersion = fe, F.needsLights && (ye.ambientLightColor.value = N.state.ambient, ye.lightProbe.value = N.state.probe, ye.directionalLights.value = N.state.directional, ye.directionalLightShadows.value = N.state.directionalShadow, ye.spotLights.value = N.state.spot, ye.spotLightShadows.value = N.state.spotShadow, ye.rectAreaLights.value = N.state.rectArea, ye.ltc_1.value = N.state.rectAreaLTC1, ye.ltc_2.value = N.state.rectAreaLTC2, ye.pointLights.value = N.state.point, ye.pointLightShadows.value = N.state.pointShadow, ye.hemisphereLights.value = N.state.hemi, ye.directionalShadowMatrix.value = N.state.directionalShadowMatrix, ye.spotLightMatrix.value = N.state.spotLightMatrix, ye.spotLightMap.value = N.state.spotLightMap, ye.pointShadowMatrix.value = N.state.pointShadowMatrix), F.currentProgram = Be, F.uniformsList = null, Be;
    }
    function Ma(x) {
      if (x.uniformsList === null) {
        const U = x.currentProgram.getUniforms();
        x.uniformsList = dr.seqWithValue(U.seq, x.uniforms);
      }
      return x.uniformsList;
    }
    function Sa(x, U) {
      const V = g.get(x);
      V.outputColorSpace = U.outputColorSpace, V.batching = U.batching, V.batchingColor = U.batchingColor, V.instancing = U.instancing, V.instancingColor = U.instancingColor, V.instancingMorph = U.instancingMorph, V.skinning = U.skinning, V.morphTargets = U.morphTargets, V.morphNormals = U.morphNormals, V.morphColors = U.morphColors, V.morphTargetsCount = U.morphTargetsCount, V.numClippingPlanes = U.numClippingPlanes, V.numIntersection = U.numClipIntersection, V.vertexAlphas = U.vertexAlphas, V.vertexTangents = U.vertexTangents, V.toneMapping = U.toneMapping;
    }
    function fl(x, U, V, F, N) {
      U.isScene !== !0 && (U = $e), D.resetTextureUnits();
      const oe = U.fog, fe = F.isMeshStandardMaterial || F.isMeshLambertMaterial || F.isMeshPhongMaterial ? U.environment : null, le = z === null ? T.outputColorSpace : z.isXRRenderTarget === !0 ? z.texture.colorSpace : ci, xe = F.isMeshStandardMaterial || F.isMeshLambertMaterial && !F.envMap || F.isMeshPhongMaterial && !F.envMap, Ee = Y.get(F.envMap || fe, xe), Le = F.vertexColors === !0 && !!V.attributes.color && V.attributes.color.itemSize === 4, Be = !!V.attributes.tangent && (!!F.normalMap || F.anisotropy > 0), ye = !!V.morphAttributes.position, Je = !!V.morphAttributes.normal, ot = !!V.morphAttributes.color;
      let rt = Kt;
      F.toneMapped && (z === null || z.isXRRenderTarget === !0) && (rt = T.toneMapping);
      const Ke = V.morphAttributes.position || V.morphAttributes.normal || V.morphAttributes.color, xt = Ke !== void 0 ? Ke.length : 0, Se = g.get(F), Rt = R.state.lights;
      if (Ae === !0 && (Re === !0 || x !== H)) {
        const pt = x === H && F.id === k;
        ee.setState(F, x, pt);
      }
      let ke = !1;
      F.version === Se.__version ? (Se.needsLights && Se.lightsStateVersion !== Rt.state.version || Se.outputColorSpace !== le || N.isBatchedMesh && Se.batching === !1 || !N.isBatchedMesh && Se.batching === !0 || N.isBatchedMesh && Se.batchingColor === !0 && N.colorTexture === null || N.isBatchedMesh && Se.batchingColor === !1 && N.colorTexture !== null || N.isInstancedMesh && Se.instancing === !1 || !N.isInstancedMesh && Se.instancing === !0 || N.isSkinnedMesh && Se.skinning === !1 || !N.isSkinnedMesh && Se.skinning === !0 || N.isInstancedMesh && Se.instancingColor === !0 && N.instanceColor === null || N.isInstancedMesh && Se.instancingColor === !1 && N.instanceColor !== null || N.isInstancedMesh && Se.instancingMorph === !0 && N.morphTexture === null || N.isInstancedMesh && Se.instancingMorph === !1 && N.morphTexture !== null || Se.envMap !== Ee || F.fog === !0 && Se.fog !== oe || Se.numClippingPlanes !== void 0 && (Se.numClippingPlanes !== ee.numPlanes || Se.numIntersection !== ee.numIntersection) || Se.vertexAlphas !== Le || Se.vertexTangents !== Be || Se.morphTargets !== ye || Se.morphNormals !== Je || Se.morphColors !== ot || Se.toneMapping !== rt || Se.morphTargetsCount !== xt) && (ke = !0) : (ke = !0, Se.__version = F.version);
      let Ot = Se.currentProgram;
      ke === !0 && (Ot = Fi(F, U, N));
      let Wt = !1, Rn = !1, Gn = !1;
      const je = Ot.getUniforms(), gt = Se.uniforms;
      if (Me.useProgram(Ot.program) && (Wt = !0, Rn = !0, Gn = !0), F.id !== k && (k = F.id, Rn = !0), Wt || H !== x) {
        Me.buffers.depth.getReversed() && x.reversedDepth !== !0 && (x._reversedDepth = !0, x.updateProjectionMatrix()), je.setValue(w, "projectionMatrix", x.projectionMatrix), je.setValue(w, "viewMatrix", x.matrixWorldInverse);
        const gn = je.map.cameraPosition;
        gn !== void 0 && gn.setValue(w, Ge.setFromMatrixPosition(x.matrixWorld)), Qe.logarithmicDepthBuffer && je.setValue(
          w,
          "logDepthBufFC",
          2 / (Math.log(x.far + 1) / Math.LN2)
        ), (F.isMeshPhongMaterial || F.isMeshToonMaterial || F.isMeshLambertMaterial || F.isMeshBasicMaterial || F.isMeshStandardMaterial || F.isShaderMaterial) && je.setValue(w, "isOrthographic", x.isOrthographicCamera === !0), H !== x && (H = x, Rn = !0, Gn = !0);
      }
      if (Se.needsLights && (Rt.state.directionalShadowMap.length > 0 && je.setValue(w, "directionalShadowMap", Rt.state.directionalShadowMap, D), Rt.state.spotShadowMap.length > 0 && je.setValue(w, "spotShadowMap", Rt.state.spotShadowMap, D), Rt.state.pointShadowMap.length > 0 && je.setValue(w, "pointShadowMap", Rt.state.pointShadowMap, D)), N.isSkinnedMesh) {
        je.setOptional(w, N, "bindMatrix"), je.setOptional(w, N, "bindMatrixInverse");
        const pt = N.skeleton;
        pt && (pt.boneTexture === null && pt.computeBoneTexture(), je.setValue(w, "boneTexture", pt.boneTexture, D));
      }
      N.isBatchedMesh && (je.setOptional(w, N, "batchingTexture"), je.setValue(w, "batchingTexture", N._matricesTexture, D), je.setOptional(w, N, "batchingIdTexture"), je.setValue(w, "batchingIdTexture", N._indirectTexture, D), je.setOptional(w, N, "batchingColorTexture"), N._colorsTexture !== null && je.setValue(w, "batchingColorTexture", N._colorsTexture, D));
      const _n = V.morphAttributes;
      if ((_n.position !== void 0 || _n.normal !== void 0 || _n.color !== void 0) && ue.update(N, V, Ot), (Rn || Se.receiveShadow !== N.receiveShadow) && (Se.receiveShadow = N.receiveShadow, je.setValue(w, "receiveShadow", N.receiveShadow)), (F.isMeshStandardMaterial || F.isMeshLambertMaterial || F.isMeshPhongMaterial) && F.envMap === null && U.environment !== null && (gt.envMapIntensity.value = U.environmentIntensity), gt.dfgLUT !== void 0 && (gt.dfgLUT.value = Qp()), Rn && (je.setValue(w, "toneMappingExposure", T.toneMappingExposure), Se.needsLights && dl(gt, Gn), oe && F.fog === !0 && Te.refreshFogUniforms(gt, oe), Te.refreshMaterialUniforms(gt, F, Ue, he, R.state.transmissionRenderTarget[x.id]), dr.upload(w, Ma(Se), gt, D)), F.isShaderMaterial && F.uniformsNeedUpdate === !0 && (dr.upload(w, Ma(Se), gt, D), F.uniformsNeedUpdate = !1), F.isSpriteMaterial && je.setValue(w, "center", N.center), je.setValue(w, "modelViewMatrix", N.modelViewMatrix), je.setValue(w, "normalMatrix", N.normalMatrix), je.setValue(w, "modelMatrix", N.matrixWorld), F.isShaderMaterial || F.isRawShaderMaterial) {
        const pt = F.uniformsGroups;
        for (let gn = 0, Hn = pt.length; gn < Hn; gn++) {
          const Ea = pt[gn];
          de.update(Ea, Ot), de.bind(Ea, Ot);
        }
      }
      return Ot;
    }
    function dl(x, U) {
      x.ambientLightColor.needsUpdate = U, x.lightProbe.needsUpdate = U, x.directionalLights.needsUpdate = U, x.directionalLightShadows.needsUpdate = U, x.pointLights.needsUpdate = U, x.pointLightShadows.needsUpdate = U, x.spotLights.needsUpdate = U, x.spotLightShadows.needsUpdate = U, x.rectAreaLights.needsUpdate = U, x.hemisphereLights.needsUpdate = U;
    }
    function pl(x) {
      return x.isMeshLambertMaterial || x.isMeshToonMaterial || x.isMeshPhongMaterial || x.isMeshStandardMaterial || x.isShadowMaterial || x.isShaderMaterial && x.lights === !0;
    }
    this.getActiveCubeFace = function() {
      return C;
    }, this.getActiveMipmapLevel = function() {
      return G;
    }, this.getRenderTarget = function() {
      return z;
    }, this.setRenderTargetTextures = function(x, U, V) {
      const F = g.get(x);
      F.__autoAllocateDepthBuffer = x.resolveDepthBuffer === !1, F.__autoAllocateDepthBuffer === !1 && (F.__useRenderToTexture = !1), g.get(x.texture).__webglTexture = U, g.get(x.depthTexture).__webglTexture = F.__autoAllocateDepthBuffer ? void 0 : V, F.__hasExternalTextures = !0;
    }, this.setRenderTargetFramebuffer = function(x, U) {
      const V = g.get(x);
      V.__webglFramebuffer = U, V.__useDefaultFramebuffer = U === void 0;
    };
    const ml = w.createFramebuffer();
    this.setRenderTarget = function(x, U = 0, V = 0) {
      z = x, C = U, G = V;
      let F = null, N = !1, oe = !1;
      if (x) {
        const le = g.get(x);
        if (le.__useDefaultFramebuffer !== void 0) {
          Me.bindFramebuffer(w.FRAMEBUFFER, le.__webglFramebuffer), B.copy(x.viewport), O.copy(x.scissor), Q = x.scissorTest, Me.viewport(B), Me.scissor(O), Me.setScissorTest(Q), k = -1;
          return;
        } else if (le.__webglFramebuffer === void 0)
          D.setupRenderTarget(x);
        else if (le.__hasExternalTextures)
          D.rebindTextures(x, g.get(x.texture).__webglTexture, g.get(x.depthTexture).__webglTexture);
        else if (x.depthBuffer) {
          const Le = x.depthTexture;
          if (le.__boundDepthTexture !== Le) {
            if (Le !== null && g.has(Le) && (x.width !== Le.image.width || x.height !== Le.image.height))
              throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");
            D.setupDepthRenderbuffer(x);
          }
        }
        const xe = x.texture;
        (xe.isData3DTexture || xe.isDataArrayTexture || xe.isCompressedArrayTexture) && (oe = !0);
        const Ee = g.get(x).__webglFramebuffer;
        x.isWebGLCubeRenderTarget ? (Array.isArray(Ee[U]) ? F = Ee[U][V] : F = Ee[U], N = !0) : x.samples > 0 && D.useMultisampledRTT(x) === !1 ? F = g.get(x).__webglMultisampledFramebuffer : Array.isArray(Ee) ? F = Ee[V] : F = Ee, B.copy(x.viewport), O.copy(x.scissor), Q = x.scissorTest;
      } else
        B.copy(Z).multiplyScalar(Ue).floor(), O.copy(ne).multiplyScalar(Ue).floor(), Q = se;
      if (V !== 0 && (F = ml), Me.bindFramebuffer(w.FRAMEBUFFER, F) && Me.drawBuffers(x, F), Me.viewport(B), Me.scissor(O), Me.setScissorTest(Q), N) {
        const le = g.get(x.texture);
        w.framebufferTexture2D(w.FRAMEBUFFER, w.COLOR_ATTACHMENT0, w.TEXTURE_CUBE_MAP_POSITIVE_X + U, le.__webglTexture, V);
      } else if (oe) {
        const le = U;
        for (let xe = 0; xe < x.textures.length; xe++) {
          const Ee = g.get(x.textures[xe]);
          w.framebufferTextureLayer(w.FRAMEBUFFER, w.COLOR_ATTACHMENT0 + xe, Ee.__webglTexture, V, le);
        }
      } else if (x !== null && V !== 0) {
        const le = g.get(x.texture);
        w.framebufferTexture2D(w.FRAMEBUFFER, w.COLOR_ATTACHMENT0, w.TEXTURE_2D, le.__webglTexture, V);
      }
      k = -1;
    }, this.readRenderTargetPixels = function(x, U, V, F, N, oe, fe, le = 0) {
      if (!(x && x.isWebGLRenderTarget)) {
        We("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        return;
      }
      let xe = g.get(x).__webglFramebuffer;
      if (x.isWebGLCubeRenderTarget && fe !== void 0 && (xe = xe[fe]), xe) {
        Me.bindFramebuffer(w.FRAMEBUFFER, xe);
        try {
          const Ee = x.textures[le], Le = Ee.format, Be = Ee.type;
          if (x.textures.length > 1 && w.readBuffer(w.COLOR_ATTACHMENT0 + le), !Qe.textureFormatReadable(Le)) {
            We("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            return;
          }
          if (!Qe.textureTypeReadable(Be)) {
            We("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            return;
          }
          U >= 0 && U <= x.width - F && V >= 0 && V <= x.height - N && w.readPixels(U, V, F, N, re.convert(Le), re.convert(Be), oe);
        } finally {
          const Ee = z !== null ? g.get(z).__webglFramebuffer : null;
          Me.bindFramebuffer(w.FRAMEBUFFER, Ee);
        }
      }
    }, this.readRenderTargetPixelsAsync = async function(x, U, V, F, N, oe, fe, le = 0) {
      if (!(x && x.isWebGLRenderTarget))
        throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
      let xe = g.get(x).__webglFramebuffer;
      if (x.isWebGLCubeRenderTarget && fe !== void 0 && (xe = xe[fe]), xe)
        if (U >= 0 && U <= x.width - F && V >= 0 && V <= x.height - N) {
          Me.bindFramebuffer(w.FRAMEBUFFER, xe);
          const Ee = x.textures[le], Le = Ee.format, Be = Ee.type;
          if (x.textures.length > 1 && w.readBuffer(w.COLOR_ATTACHMENT0 + le), !Qe.textureFormatReadable(Le))
            throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");
          if (!Qe.textureTypeReadable(Be))
            throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");
          const ye = w.createBuffer();
          w.bindBuffer(w.PIXEL_PACK_BUFFER, ye), w.bufferData(w.PIXEL_PACK_BUFFER, oe.byteLength, w.STREAM_READ), w.readPixels(U, V, F, N, re.convert(Le), re.convert(Be), 0);
          const Je = z !== null ? g.get(z).__webglFramebuffer : null;
          Me.bindFramebuffer(w.FRAMEBUFFER, Je);
          const ot = w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE, 0);
          return w.flush(), await rc(w, ot, 4), w.bindBuffer(w.PIXEL_PACK_BUFFER, ye), w.getBufferSubData(w.PIXEL_PACK_BUFFER, 0, oe), w.deleteBuffer(ye), w.deleteSync(ot), oe;
        } else
          throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.");
    }, this.copyFramebufferToTexture = function(x, U = null, V = 0) {
      const F = Math.pow(2, -V), N = Math.floor(x.image.width * F), oe = Math.floor(x.image.height * F), fe = U !== null ? U.x : 0, le = U !== null ? U.y : 0;
      D.setTexture2D(x, 0), w.copyTexSubImage2D(w.TEXTURE_2D, V, 0, 0, fe, le, N, oe), Me.unbindTexture();
    };
    const _l = w.createFramebuffer(), gl = w.createFramebuffer();
    this.copyTextureToTexture = function(x, U, V = null, F = null, N = 0, oe = 0) {
      let fe, le, xe, Ee, Le, Be, ye, Je, ot;
      const rt = x.isCompressedTexture ? x.mipmaps[oe] : x.image;
      if (V !== null)
        fe = V.max.x - V.min.x, le = V.max.y - V.min.y, xe = V.isBox3 ? V.max.z - V.min.z : 1, Ee = V.min.x, Le = V.min.y, Be = V.isBox3 ? V.min.z : 0;
      else {
        const gt = Math.pow(2, -N);
        fe = Math.floor(rt.width * gt), le = Math.floor(rt.height * gt), x.isDataArrayTexture ? xe = rt.depth : x.isData3DTexture ? xe = Math.floor(rt.depth * gt) : xe = 1, Ee = 0, Le = 0, Be = 0;
      }
      F !== null ? (ye = F.x, Je = F.y, ot = F.z) : (ye = 0, Je = 0, ot = 0);
      const Ke = re.convert(U.format), xt = re.convert(U.type);
      let Se;
      U.isData3DTexture ? (D.setTexture3D(U, 0), Se = w.TEXTURE_3D) : U.isDataArrayTexture || U.isCompressedArrayTexture ? (D.setTexture2DArray(U, 0), Se = w.TEXTURE_2D_ARRAY) : (D.setTexture2D(U, 0), Se = w.TEXTURE_2D), w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL, U.flipY), w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL, U.premultiplyAlpha), w.pixelStorei(w.UNPACK_ALIGNMENT, U.unpackAlignment);
      const Rt = w.getParameter(w.UNPACK_ROW_LENGTH), ke = w.getParameter(w.UNPACK_IMAGE_HEIGHT), Ot = w.getParameter(w.UNPACK_SKIP_PIXELS), Wt = w.getParameter(w.UNPACK_SKIP_ROWS), Rn = w.getParameter(w.UNPACK_SKIP_IMAGES);
      w.pixelStorei(w.UNPACK_ROW_LENGTH, rt.width), w.pixelStorei(w.UNPACK_IMAGE_HEIGHT, rt.height), w.pixelStorei(w.UNPACK_SKIP_PIXELS, Ee), w.pixelStorei(w.UNPACK_SKIP_ROWS, Le), w.pixelStorei(w.UNPACK_SKIP_IMAGES, Be);
      const Gn = x.isDataArrayTexture || x.isData3DTexture, je = U.isDataArrayTexture || U.isData3DTexture;
      if (x.isDepthTexture) {
        const gt = g.get(x), _n = g.get(U), pt = g.get(gt.__renderTarget), gn = g.get(_n.__renderTarget);
        Me.bindFramebuffer(w.READ_FRAMEBUFFER, pt.__webglFramebuffer), Me.bindFramebuffer(w.DRAW_FRAMEBUFFER, gn.__webglFramebuffer);
        for (let Hn = 0; Hn < xe; Hn++)
          Gn && (w.framebufferTextureLayer(w.READ_FRAMEBUFFER, w.COLOR_ATTACHMENT0, g.get(x).__webglTexture, N, Be + Hn), w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER, w.COLOR_ATTACHMENT0, g.get(U).__webglTexture, oe, ot + Hn)), w.blitFramebuffer(Ee, Le, fe, le, ye, Je, fe, le, w.DEPTH_BUFFER_BIT, w.NEAREST);
        Me.bindFramebuffer(w.READ_FRAMEBUFFER, null), Me.bindFramebuffer(w.DRAW_FRAMEBUFFER, null);
      } else if (N !== 0 || x.isRenderTargetTexture || g.has(x)) {
        const gt = g.get(x), _n = g.get(U);
        Me.bindFramebuffer(w.READ_FRAMEBUFFER, _l), Me.bindFramebuffer(w.DRAW_FRAMEBUFFER, gl);
        for (let pt = 0; pt < xe; pt++)
          Gn ? w.framebufferTextureLayer(w.READ_FRAMEBUFFER, w.COLOR_ATTACHMENT0, gt.__webglTexture, N, Be + pt) : w.framebufferTexture2D(w.READ_FRAMEBUFFER, w.COLOR_ATTACHMENT0, w.TEXTURE_2D, gt.__webglTexture, N), je ? w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER, w.COLOR_ATTACHMENT0, _n.__webglTexture, oe, ot + pt) : w.framebufferTexture2D(w.DRAW_FRAMEBUFFER, w.COLOR_ATTACHMENT0, w.TEXTURE_2D, _n.__webglTexture, oe), N !== 0 ? w.blitFramebuffer(Ee, Le, fe, le, ye, Je, fe, le, w.COLOR_BUFFER_BIT, w.NEAREST) : je ? w.copyTexSubImage3D(Se, oe, ye, Je, ot + pt, Ee, Le, fe, le) : w.copyTexSubImage2D(Se, oe, ye, Je, Ee, Le, fe, le);
        Me.bindFramebuffer(w.READ_FRAMEBUFFER, null), Me.bindFramebuffer(w.DRAW_FRAMEBUFFER, null);
      } else
        je ? x.isDataTexture || x.isData3DTexture ? w.texSubImage3D(Se, oe, ye, Je, ot, fe, le, xe, Ke, xt, rt.data) : U.isCompressedArrayTexture ? w.compressedTexSubImage3D(Se, oe, ye, Je, ot, fe, le, xe, Ke, rt.data) : w.texSubImage3D(Se, oe, ye, Je, ot, fe, le, xe, Ke, xt, rt) : x.isDataTexture ? w.texSubImage2D(w.TEXTURE_2D, oe, ye, Je, fe, le, Ke, xt, rt.data) : x.isCompressedTexture ? w.compressedTexSubImage2D(w.TEXTURE_2D, oe, ye, Je, rt.width, rt.height, Ke, rt.data) : w.texSubImage2D(w.TEXTURE_2D, oe, ye, Je, fe, le, Ke, xt, rt);
      w.pixelStorei(w.UNPACK_ROW_LENGTH, Rt), w.pixelStorei(w.UNPACK_IMAGE_HEIGHT, ke), w.pixelStorei(w.UNPACK_SKIP_PIXELS, Ot), w.pixelStorei(w.UNPACK_SKIP_ROWS, Wt), w.pixelStorei(w.UNPACK_SKIP_IMAGES, Rn), oe === 0 && U.generateMipmaps && w.generateMipmap(Se), Me.unbindTexture();
    }, this.initRenderTarget = function(x) {
      g.get(x).__webglFramebuffer === void 0 && D.setupRenderTarget(x);
    }, this.initTexture = function(x) {
      x.isCubeTexture ? D.setTextureCube(x, 0) : x.isData3DTexture ? D.setTexture3D(x, 0) : x.isDataArrayTexture || x.isCompressedArrayTexture ? D.setTexture2DArray(x, 0) : D.setTexture2D(x, 0), Me.unbindTexture();
    }, this.resetState = function() {
      C = 0, G = 0, z = null, Me.reset(), te.reset();
    }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  /**
   * Defines the coordinate system of the renderer.
   *
   * In `WebGLRenderer`, the value is always `WebGLCoordinateSystem`.
   *
   * @type {WebGLCoordinateSystem|WebGPUCoordinateSystem}
   * @default WebGLCoordinateSystem
   * @readonly
   */
  get coordinateSystem() {
    return Jt;
  }
  /**
   * Defines the output color space of the renderer.
   *
   * @type {SRGBColorSpace|LinearSRGBColorSpace}
   * @default SRGBColorSpace
   */
  get outputColorSpace() {
    return this._outputColorSpace;
  }
  set outputColorSpace(e) {
    this._outputColorSpace = e;
    const t = this.getContext();
    t.drawingBufferColorSpace = He._getDrawingBufferColorSpace(e), t.unpackColorSpace = He._getUnpackColorSpace();
  }
}
class hi extends ut {
  /**
   * Constructs a new CSS2D object.
   *
   * @param {HTMLElement} [element] - The DOM element.
   */
  constructor(e = document.createElement("div")) {
    super(), this.isCSS2DObject = !0, this.element = e, this.element.style.position = "absolute", this.element.style.userSelect = "none", this.element.setAttribute("draggable", !1), this.center = new be(0.5, 0.5), this.addEventListener("removed", function() {
      this.traverse(function(t) {
        t.element && t.element instanceof t.element.ownerDocument.defaultView.Element && t.element.parentNode !== null && t.element.remove();
      });
    });
  }
  copy(e, t) {
    return super.copy(e, t), this.element = e.element.cloneNode(!0), this.center = e.center, this;
  }
}
const ii = new I(), Eo = new tt(), yo = new tt(), To = new I(), bo = new I();
class tm {
  /**
   * Constructs a new CSS2D renderer.
   *
   * @param {CSS2DRenderer~Parameters} [parameters] - The parameters.
   */
  constructor(e = {}) {
    const t = this;
    let n, r, s, a;
    const o = {
      objects: /* @__PURE__ */ new WeakMap()
    }, c = e.element !== void 0 ? e.element : document.createElement("div");
    c.style.overflow = "hidden", this.domElement = c, this.sortObjects = !0, this.getSize = function() {
      return {
        width: n,
        height: r
      };
    }, this.render = function(_, M) {
      _.matrixWorldAutoUpdate === !0 && _.updateMatrixWorld(), M.parent === null && M.matrixWorldAutoUpdate === !0 && M.updateMatrixWorld(), Eo.copy(M.matrixWorldInverse), yo.multiplyMatrices(M.projectionMatrix, Eo), h(_, _, M), this.sortObjects && d(_);
    }, this.setSize = function(_, M) {
      n = _, r = M, s = n / 2, a = r / 2, c.style.width = _ + "px", c.style.height = M + "px";
    };
    function l(_) {
      _.isCSS2DObject && (_.element.style.display = "none");
      for (let M = 0, p = _.children.length; M < p; M++)
        l(_.children[M]);
    }
    function h(_, M, p) {
      if (_.visible === !1) {
        l(_);
        return;
      }
      if (_.isCSS2DObject) {
        ii.setFromMatrixPosition(_.matrixWorld), ii.applyMatrix4(yo);
        const f = ii.z >= -1 && ii.z <= 1 && _.layers.test(p.layers) === !0, S = _.element;
        S.style.display = f === !0 ? "" : "none", f === !0 && (_.onBeforeRender(t, M, p), S.style.transform = "translate(" + -100 * _.center.x + "%," + -100 * _.center.y + "%)translate(" + (ii.x * s + s) + "px," + (-ii.y * a + a) + "px)", S.parentNode !== c && c.appendChild(S), _.onAfterRender(t, M, p));
        const b = {
          distanceToCameraSquared: m(p, _)
        };
        o.objects.set(_, b);
      }
      for (let f = 0, S = _.children.length; f < S; f++)
        h(_.children[f], M, p);
    }
    function m(_, M) {
      return To.setFromMatrixPosition(_.matrixWorld), bo.setFromMatrixPosition(M.matrixWorld), To.distanceToSquared(bo);
    }
    function u(_) {
      const M = [];
      return _.traverseVisible(function(p) {
        p.isCSS2DObject && M.push(p);
      }), M;
    }
    function d(_) {
      const M = u(_).sort(function(f, S) {
        if (f.renderOrder !== S.renderOrder)
          return S.renderOrder - f.renderOrder;
        const b = o.objects.get(f).distanceToCameraSquared, E = o.objects.get(S).distanceToCameraSquared;
        return b - E;
      }), p = M.length;
      for (let f = 0, S = M.length; f < S; f++)
        M[f].element.style.zIndex = p - f;
    }
  }
}
const vr = {
  Bar3D: "Bar3D",
  Line3D: "Line3D"
};
class nm {
  constructor(e, t, n, r, s) {
    mt(this, "scene");
    mt(this, "labelRenderer");
    mt(this, "cubes");
    mt(this, "options");
    mt(this, "position");
    this.scene = e, this.labelRenderer = t, this.cubes = n, this.options = r, this.position = s;
  }
}
class ul extends nm {
  constructor(t, n, r, s, a) {
    super(t, n, r, s, a);
    mt(this, "SPACING", 30);
    mt(this, "labelsToZoom", []);
    mt(this, "scaleFactor", 1);
    this.initialize();
  }
  initialize() {
    this.normalizeData(), this.onInit(), this.onPlot(), this.createValueAxis(), this.createTitles();
  }
  normalizeData() {
    const t = this.options.data || [];
    if (t.length === 0) {
      this.scaleFactor = 1;
      return;
    }
    const n = t.map((a) => Math.abs(a.value)), r = Math.max(...n), s = 100;
    r > 0 ? this.scaleFactor = s / r : this.scaleFactor = 1;
  }
  onInit() {
  }
  onDestroy() {
  }
  onPlot() {
    console.log("[ChartTypeBase] Plotando gráfico de barras");
  }
  createValueAxis() {
    const t = this.options.data || [];
    if (t.length < 1) return;
    const n = t.map((S) => S.value), r = Math.max(...n, 0), s = Math.min(...n, 0), a = this.getAxisOffsetX(t.length), o = s * this.scaleFactor, c = r * this.scaleFactor, l = o < 0 ? o * 1.1 : 0, m = (c > 0 ? c * 1.1 : 0) - l, u = 40, d = new Ui(m, u), _ = new gr({
      color: 10066329,
      transparent: !0,
      opacity: 0.25,
      side: Ft
    }), M = new bt(d, _);
    M.rotation.y = Math.PI / 2, M.position.set(a, 0, l + m / 2), this.scene.add(M);
    const p = 5, f = r - s;
    for (let S = 0; S <= p; S++) {
      const b = s + f / p * S, E = b * this.scaleFactor, R = document.createElement("div");
      R.className = "chart-axis-label", R.textContent = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
      }).format(b);
      const A = new hi(R);
      A.position.set(a - 20, 0, E), this.scene.add(A);
    }
  }
  getOffsetX(t, n) {
    return this.SPACING * n / 2 - t * this.SPACING;
  }
  getAxisOffsetX(t) {
    return -(this.SPACING * (t - 1) / 2 + this.SPACING / 2) + this.SPACING;
  }
  createTitles() {
    const t = this.options.type === vr.Line3D ? "Gráfico de Linhas 3Ds" : "Gráfico de Barras 3Ds", n = this.options.type === vr.Line3D ? "Subtítulo do Gráfico de Linhas 3D" : "Subtítulo do Gráfico de Barras 3D", r = document.createElement("div");
    r.className = "chart-title-container";
    const s = document.createElement("div");
    s.className = "chart-title", s.textContent = t;
    const a = document.createElement("div");
    a.className = "chart-subtitle", a.textContent = n, r.appendChild(s), r.appendChild(a);
    const o = new hi(r);
    o.position.set(0, 0, this.getMaxHeight() + 20), o.userData.title = !0, this.labelsToZoom.push(o), this.scene.add(o);
  }
  getMaxHeight() {
    const n = (this.options.data || []).map((r) => r.value);
    return Math.max(...n) * this.scaleFactor;
  }
  updateLabelScale(t) {
    const s = (t.getZoom() ?? 10) / 12;
    this.labelsToZoom.forEach((a) => {
      const o = a.element;
      o.style.transform = `translate(-50%, -100%) scale(${s})`;
    });
  }
}
const or = 25, im = 25;
class rm extends ul {
  constructor(e, t, n, r, s) {
    super(e, t, n, r, s);
  }
  onPlot() {
    super.onPlot();
    const e = this.options.data || [];
    e.forEach((t, n) => {
      const r = Math.floor(Math.random() * 16777215), s = new gr({
        color: r,
        roughness: 0.5,
        metalness: 0.5,
        emissive: new Ve(r).multiplyScalar(0.6),
        emissiveIntensity: 0.5,
        side: Ft,
        transparent: !0,
        opacity: 0.8
      }), a = new bt(
        new pi(
          im,
          or,
          Math.abs(t.value) * this.scaleFactor
        ),
        s
      ), o = this.getOffsetX(n, e.length), c = t.value * this.scaleFactor;
      a.position.set(o, or / 2, c / 2), a.userData.offsetX = o, a.userData.height = c;
      const l = document.createElement("div");
      l.className = "chart-label", l.textContent = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
      }).format(t.value);
      const h = new hi(l), m = (Math.abs(c) / 2 + 5) * Math.sign(t.value);
      h.position.set(0, 0, m), a.add(h), this.scene.add(a), this.cubes.push({
        mesh: a,
        latLng: new google.maps.LatLng(
          this.position.lat(),
          this.position.lng()
        )
      });
    });
  }
  getAxisOffsetX(e) {
    return -(this.SPACING * (e - 1) / 2 + this.SPACING / 2) + this.SPACING - or / 2;
  }
  getAxisWidth() {
    return or;
  }
}
class sm extends ul {
  constructor(e, t, n, r, s) {
    super(e, t, n, r, s);
  }
  onPlot() {
    super.onPlot();
    const e = this.options.data || [];
    if (e.length < 1) return;
    const t = [];
    if (e.forEach((o, c) => {
      const l = this.getOffsetX(c, e.length), h = o.value * this.scaleFactor, m = new I(l, 0, h);
      t.push(m);
      const u = new ut();
      u.position.copy(m);
      const d = document.createElement("div");
      d.className = "chart-label", d.textContent = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
      }).format(o.value);
      const _ = new hi(d);
      _.position.set(0, 0, 5), u.add(_), this.scene.add(u), this.cubes.push({
        mesh: new bt(),
        latLng: new google.maps.LatLng(
          this.position.lat(),
          this.position.lng()
        )
      });
    }), t.length < 2) return;
    const n = new Qo(t), r = new fa(n, 64, 2, 8, !1), s = new gr({
      color: this.options.color || 16777215,
      roughness: 0.5,
      metalness: 0.5,
      emissive: new Ve(this.options.color || 16777215).multiplyScalar(
        0.6
      ),
      emissiveIntensity: 0.5
    }), a = new bt(r, s);
    if (this.scene.add(a), this.options.fill) {
      const o = n.getPoints(64), c = [], l = [];
      o.forEach((d) => {
        c.push(d.x, d.y, d.z), c.push(d.x, d.y, 0);
      });
      for (let d = 0; d < o.length - 1; d++) {
        const _ = d * 2, M = d * 2 + 1, p = (d + 1) * 2, f = (d + 1) * 2 + 1;
        l.push(_, M, p), l.push(M, f, p);
      }
      const h = new kt();
      h.setAttribute(
        "position",
        new Dt(c, 3)
      ), h.setIndex(l), h.computeVertexNormals();
      const m = new gr({
        color: this.options.color || 16777215,
        transparent: !0,
        opacity: 0.35,
        side: Ft,
        roughness: 0.6,
        metalness: 0.1
      }), u = new bt(h, m);
      this.scene.add(u);
    }
  }
}
class am {
  constructor(e) {
    this.configureLights(e);
  }
  configureLights(e) {
    const t = new eu(16777215, 4473924, 1.6);
    e.add(t);
    const n = new iu(16777215, 0.8);
    n.position.set(1e3, -100, 1e3), e.add(n);
  }
}
function om(i, e, t, n, r) {
  const s = i.getDiv();
  let a = !1, o = null;
  s.addEventListener("mousedown", (l) => {
    const h = i.getDiv().getBoundingClientRect(), m = t().lat() + (l.clientY - h.height / 2) * (1 / Math.pow(2, i.getZoom())), u = t().lng() + (l.clientX - h.width / 2) * (1 / Math.pow(2, i.getZoom())), d = new google.maps.LatLng(m, u), _ = 5e-4;
    let M = null, p = 1 / 0;
    for (const f of e) {
      const S = f.latLng.lat() - d.lat(), b = f.latLng.lng() - d.lng(), E = Math.sqrt(S * S + b * b);
      E < p && (p = E, M = f);
    }
    !M || p > _ || (a = !0, o = { mouseX: l.clientX, mouseY: l.clientY }, i.setOptions({ draggable: !1 }));
  }), s.addEventListener("mousemove", (l) => {
    if (!a || !o) return;
    const h = l.clientX - o.mouseX, m = l.clientY - o.mouseY, u = i.getZoom(), d = 1 / Math.pow(2, u), _ = t(), M = _.lat() - m * d, p = _.lng() + h * d;
    n(new google.maps.LatLng(M, p)), e.forEach((f) => {
      const S = f.latLng.lat() - m * d, b = f.latLng.lng() + h * d;
      f.latLng = new google.maps.LatLng(S, b);
    }), o = { mouseX: l.clientX, mouseY: l.clientY }, r();
  });
  const c = () => {
    a = !1, o = null, i.setOptions({ draggable: !0 });
  };
  s.addEventListener("mouseup", c), s.addEventListener("mouseleave", c);
}
function lm(i, e) {
  i.addListener("click", (t) => {
    if (!t.latLng) return;
    const n = t.latLng.lat(), r = t.latLng.lng();
    let s = null, a = 1 / 0;
    for (const c of e) {
      const l = c.latLng.lat() - n, h = c.latLng.lng() - r, m = Math.sqrt(l * l + h * h);
      m < a && (a = m, s = c);
    }
    s && a < 5e-4 && console.log("Cubo clicado:", s.mesh);
  });
}
class hm extends google.maps.WebGLOverlayView {
  constructor({
    map: t,
    data: n = [],
    options: r = {}
  }) {
    super();
    mt(this, "map");
    mt(this, "data");
    mt(this, "options");
    mt(this, "position");
    mt(this, "scene");
    mt(this, "camera");
    mt(this, "renderer");
    mt(this, "labelRenderer");
    mt(this, "cubes", []);
    this.printWelcomeMessage(), this.map = t, this.data = n, this.options = r, this.position = this.map.getCenter(), this.setMap(t);
  }
  onAdd() {
    this.scene = new Mc(), this.camera = new Nt(), new am(this.scene), om(
      this.map,
      this.cubes,
      () => this.position,
      (t) => this.position = t,
      () => this.requestRedraw()
    ), this.renderChart(), lm(this.map, this.cubes);
  }
  onContextRestored({ gl: t }) {
    this.renderer = new em({
      canvas: t.canvas,
      context: t,
      antialias: !0,
      ...t.getContextAttributes()
    }), this.renderer.autoClear = !1;
  }
  clearScene() {
    this.cubes.length = 0, this.scene.children = this.scene.children.filter(
      (t) => !(t instanceof bt || t instanceof hi || t instanceof ut)
    );
  }
  renderChart() {
    this.options.type === vr.Bar3D ? (this.labelRenderer || this.createLabelRenderer(), new rm(
      this.scene,
      this.labelRenderer,
      this.cubes,
      this.options,
      this.position
    )) : this.options.type === vr.Line3D && (this.labelRenderer || this.createLabelRenderer(), this.clearScene(), new sm(
      this.scene,
      this.labelRenderer,
      this.cubes,
      this.options,
      this.position
    ));
  }
  onDraw({ gl: t, transformer: n }) {
    if (!this.renderer) return;
    const r = this.position.toJSON(), s = n.fromLatLngAltitude({
      lat: r.lat,
      lng: r.lng,
      altitude: 0
    });
    this.camera.projectionMatrix = new tt().fromArray(s), this.cubes.forEach((o) => {
      o.mesh.position.set(
        o.mesh.userData.offsetX,
        0,
        o.mesh.userData.height / 2
      );
    }), this.renderer.render(this.scene, this.camera);
    const a = this.map.getZoom();
    this.scene.traverse((o) => {
      if (o instanceof hi) {
        const c = Math.max(0.5, a / 20);
        if (o.scale.set(c, c, 1), o.visible = a >= 18, o.userData.title) {
          const h = a / 12, m = o.element;
          m.style.transform = `translate(-50%, -100%) scale(${h})`;
        }
      }
    }), this.labelRenderer && (this.labelRenderer.setSize(
      this.map.getDiv().offsetWidth,
      this.map.getDiv().offsetHeight
    ), this.labelRenderer.render(this.scene, this.camera)), this.renderer.resetState();
  }
  createLabelRenderer() {
    const t = document.createElement("div");
    t.style.position = "absolute", t.style.top = "0", t.style.width = "100%", t.style.height = "100%", t.style.pointerEvents = "none", this.map.getDiv().appendChild(t), this.labelRenderer = new tm({ element: t }), this.labelRenderer.setSize(
      this.map.getDiv().offsetWidth,
      this.map.getDiv().offsetHeight
    );
  }
  printWelcomeMessage() {
    console.log(
      `%c GeoChart v${Sl.version} - Gráficos 3D para Google Maps`,
      "color: #4033b3; font-size: 16px; font-weight: bold;"
    ), console.log(
      "%c Desenvolvido por Maurício Mudryk",
      "color: #2196F3; font-size: 14px;"
    ), console.log(
      "%c Repositório: https://github.com/mauriciomudryk/geo-chart",
      "color: #607D8B; font-size: 14px;"
    ), console.log(`
______▄██✿███▄
_______▄██▀██████▄
______██▀__███▒████
_____██____███░░ٮ░▀
______██____██░░░░░
_______██____██░░♥  (❀✿❀)
________█_____█▒    (✿ ☼ ✿)
_________█___▓▓░▓   (❀▐ ❀)
____█❀ _█_ ▓▓▓▒░▒▓__█_▐__▄
_____▀█▀_ ▓▓_▓▓▒░▒▓ ▀█▐_█
_________▓▓_▓▓▓▓▓▓____▐▀
_________▓▓_▓▓▓▓▓______▐
_______▓▓__▓▓▓▓_▓▓____▐░
______▓▓__▓▓▓▓▓___▓___▒▒
_____▓▓_▓███❋██▓__▓▓▓
___▒▒___▓██▒███▒▓
___░___▓██▒███▒██▓
______▓██▒███▒███▒▓
_____▓██▒███▒███▒██▓
_____▓█▒███▒███▒███▒▓
▓___▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
▓________▒░░░▒░░░▒
▓________▒░░░▒░░░▒
▓________▒░░▒_▒░░░▒
▓________▒░░▒__▒░░░▒
▓________▒░░▒__▒░░░▒
▓________▒░░▒__▒░░░▒
▓________▒░░▒▒░░░▒
▓▄▄▄▄▄▄▒░░▒░░▒
▓██████▒░░▒▒
▓_█❤█___███
▓███____███
▓█_______███
▓________██❥█
▓________██▀██▄
`), console.log(`
░██████╗░███████╗░█████╗░░█████╗░██╗░░██╗░█████╗░██████╗░████████╗
██╔════╝░██╔════╝██╔══██╗██╔══██╗██║░░██║██╔══██╗██╔══██╗╚══██╔══╝
██║░░██╗░█████╗░░██║░░██║██║░░╚═╝███████║███████║██████╔╝░░░██║░░░
██║░░╚██╗██╔══╝░░██║░░██║██║░░██╗██╔══██║██╔══██║██╔══██╗░░░██║░░░
╚██████╔╝███████╗╚█████╔╝╚█████╔╝██║░░██║██║░░██║██║░░██║░░░██║░░░
░╚═════╝░╚══════╝░╚════╝░░╚════╝░╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░░╚═╝░░░╚═╝░░░`);
  }
}
async function cm() {
  if (document.getElementById("geo-chart-style")) return;
  const e = await (await fetch(new URL("data:text/css;base64,LmNoYXJ0LWxhYmVsLAouY2hhcnQtYXhpcy1sYWJlbCB7CiAgY29sb3I6ICNmZmZmZmY7CiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjcpOwogIHBhZGRpbmc6IDRweCA4cHg7CiAgYm9yZGVyLXJhZGl1czogNHB4OwogIGZvbnQtc2l6ZTogMTBweDsKICBmb250LWZhbWlseTogc2Fucy1zZXJpZjsKICB3aGl0ZS1zcGFjZTogbm93cmFwOwogIHBvaW50ZXItZXZlbnRzOiBub25lOyAvKiBJbXBlZGUgcXVlIG9zIGxhYmVscyBibG9xdWVpZW0gZXZlbnRvcyBkbyBtb3VzZSBubyBtYXBhICovCn0KLmNoYXJ0LXRpdGxlLWNvbnRhaW5lciB7CiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTEwMCUpOwogIHRleHQtYWxpZ246IGxlZnQ7CiAgd2hpdGUtc3BhY2U6IG5vd3JhcDsKfQoKLmNoYXJ0LXRpdGxlIHsKICBmb250LXNpemU6IDE4cHg7CiAgZm9udC13ZWlnaHQ6IGJvbGQ7CiAgY29sb3I6IHdoaXRlOwp9CgouY2hhcnQtc3VidGl0bGUgewogIGZvbnQtc2l6ZTogMTJweDsKICBjb2xvcjogI2NjY2NjYzsKfQo=", import.meta.url))).text(), t = document.createElement("style");
  t.id = "geo-chart-style", t.textContent = e, document.head.appendChild(t);
}
cm();
export {
  vr as ChartType,
  hm as GeoChart
};
