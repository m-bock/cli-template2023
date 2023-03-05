// output/App.Types/index.js
var CmdVersion = /* @__PURE__ */ function() {
  function CmdVersion2() {
  }
  ;
  CmdVersion2.value = new CmdVersion2();
  return CmdVersion2;
}();
var CmdHello = /* @__PURE__ */ function() {
  function CmdHello2(value0) {
    this.value0 = value0;
  }
  ;
  CmdHello2.create = function(value0) {
    return new CmdHello2(value0);
  };
  return CmdHello2;
}();

// output/Control.Apply/foreign.js
var arrayApply = function(fs) {
  return function(xs) {
    var l = fs.length;
    var k = xs.length;
    var result = new Array(l * k);
    var n = 0;
    for (var i = 0; i < l; i++) {
      var f = fs[i];
      for (var j = 0; j < k; j++) {
        result[n++] = f(xs[j]);
      }
    }
    return result;
  };
};

// output/Control.Semigroupoid/index.js
var semigroupoidFn = {
  compose: function(f) {
    return function(g) {
      return function(x) {
        return f(g(x));
      };
    };
  }
};

// output/Control.Category/index.js
var identity = function(dict) {
  return dict.identity;
};
var categoryFn = {
  identity: function(x) {
    return x;
  },
  Semigroupoid0: function() {
    return semigroupoidFn;
  }
};

// output/Data.Boolean/index.js
var otherwise = true;

// output/Data.Function/index.js
var on = function(f) {
  return function(g) {
    return function(x) {
      return function(y) {
        return f(g(x))(g(y));
      };
    };
  };
};
var flip = function(f) {
  return function(b) {
    return function(a) {
      return f(a)(b);
    };
  };
};
var $$const = function(a) {
  return function(v) {
    return a;
  };
};
var applyFlipped = function(x) {
  return function(f) {
    return f(x);
  };
};

// output/Data.Functor/foreign.js
var arrayMap = function(f) {
  return function(arr) {
    var l = arr.length;
    var result = new Array(l);
    for (var i = 0; i < l; i++) {
      result[i] = f(arr[i]);
    }
    return result;
  };
};

// output/Data.Unit/foreign.js
var unit = void 0;

// output/Type.Proxy/index.js
var $$Proxy = /* @__PURE__ */ function() {
  function $$Proxy2() {
  }
  ;
  $$Proxy2.value = new $$Proxy2();
  return $$Proxy2;
}();

// output/Data.Functor/index.js
var map = function(dict) {
  return dict.map;
};
var mapFlipped = function(dictFunctor) {
  var map110 = map(dictFunctor);
  return function(fa) {
    return function(f) {
      return map110(f)(fa);
    };
  };
};
var $$void = function(dictFunctor) {
  return map(dictFunctor)($$const(unit));
};
var voidLeft = function(dictFunctor) {
  var map110 = map(dictFunctor);
  return function(f) {
    return function(x) {
      return map110($$const(x))(f);
    };
  };
};
var voidRight = function(dictFunctor) {
  var map110 = map(dictFunctor);
  return function(x) {
    return map110($$const(x));
  };
};
var functorArray = {
  map: arrayMap
};

// output/Control.Apply/index.js
var identity2 = /* @__PURE__ */ identity(categoryFn);
var applyArray = {
  apply: arrayApply,
  Functor0: function() {
    return functorArray;
  }
};
var apply = function(dict) {
  return dict.apply;
};
var applyFirst = function(dictApply) {
  var apply14 = apply(dictApply);
  var map21 = map(dictApply.Functor0());
  return function(a) {
    return function(b) {
      return apply14(map21($$const)(a))(b);
    };
  };
};
var applySecond = function(dictApply) {
  var apply14 = apply(dictApply);
  var map21 = map(dictApply.Functor0());
  return function(a) {
    return function(b) {
      return apply14(map21($$const(identity2))(a))(b);
    };
  };
};
var lift2 = function(dictApply) {
  var apply14 = apply(dictApply);
  var map21 = map(dictApply.Functor0());
  return function(f) {
    return function(a) {
      return function(b) {
        return apply14(map21(f)(a))(b);
      };
    };
  };
};

// output/Control.Applicative/index.js
var pure = function(dict) {
  return dict.pure;
};
var when = function(dictApplicative) {
  var pure19 = pure(dictApplicative);
  return function(v) {
    return function(v1) {
      if (v) {
        return v1;
      }
      ;
      if (!v) {
        return pure19(unit);
      }
      ;
      throw new Error("Failed pattern match at Control.Applicative (line 63, column 1 - line 63, column 63): " + [v.constructor.name, v1.constructor.name]);
    };
  };
};
var liftA1 = function(dictApplicative) {
  var apply9 = apply(dictApplicative.Apply0());
  var pure19 = pure(dictApplicative);
  return function(f) {
    return function(a) {
      return apply9(pure19(f))(a);
    };
  };
};
var applicativeArray = {
  pure: function(x) {
    return [x];
  },
  Apply0: function() {
    return applyArray;
  }
};

// output/Data.Foldable/foreign.js
var foldrArray = function(f) {
  return function(init3) {
    return function(xs) {
      var acc = init3;
      var len = xs.length;
      for (var i = len - 1; i >= 0; i--) {
        acc = f(xs[i])(acc);
      }
      return acc;
    };
  };
};
var foldlArray = function(f) {
  return function(init3) {
    return function(xs) {
      var acc = init3;
      var len = xs.length;
      for (var i = 0; i < len; i++) {
        acc = f(acc)(xs[i]);
      }
      return acc;
    };
  };
};

// output/Data.Semigroup/foreign.js
var concatString = function(s1) {
  return function(s2) {
    return s1 + s2;
  };
};
var concatArray = function(xs) {
  return function(ys) {
    if (xs.length === 0)
      return ys;
    if (ys.length === 0)
      return xs;
    return xs.concat(ys);
  };
};

// output/Data.Symbol/index.js
var reflectSymbol = function(dict) {
  return dict.reflectSymbol;
};

// output/Record.Unsafe/foreign.js
var unsafeGet = function(label) {
  return function(rec) {
    return rec[label];
  };
};
var unsafeSet = function(label) {
  return function(value3) {
    return function(rec) {
      var copy3 = {};
      for (var key in rec) {
        if ({}.hasOwnProperty.call(rec, key)) {
          copy3[key] = rec[key];
        }
      }
      copy3[label] = value3;
      return copy3;
    };
  };
};

// output/Data.Semigroup/index.js
var semigroupUnit = {
  append: function(v) {
    return function(v1) {
      return unit;
    };
  }
};
var semigroupString = {
  append: concatString
};
var semigroupRecordNil = {
  appendRecord: function(v) {
    return function(v1) {
      return function(v2) {
        return {};
      };
    };
  }
};
var semigroupArray = {
  append: concatArray
};
var appendRecord = function(dict) {
  return dict.appendRecord;
};
var semigroupRecord = function() {
  return function(dictSemigroupRecord) {
    return {
      append: appendRecord(dictSemigroupRecord)($$Proxy.value)
    };
  };
};
var append = function(dict) {
  return dict.append;
};
var semigroupFn = function(dictSemigroup) {
  var append16 = append(dictSemigroup);
  return {
    append: function(f) {
      return function(g) {
        return function(x) {
          return append16(f(x))(g(x));
        };
      };
    }
  };
};
var semigroupRecordCons = function(dictIsSymbol) {
  var reflectSymbol2 = reflectSymbol(dictIsSymbol);
  return function() {
    return function(dictSemigroupRecord) {
      var appendRecord1 = appendRecord(dictSemigroupRecord);
      return function(dictSemigroup) {
        var append16 = append(dictSemigroup);
        return {
          appendRecord: function(v) {
            return function(ra) {
              return function(rb) {
                var tail2 = appendRecord1($$Proxy.value)(ra)(rb);
                var key = reflectSymbol2($$Proxy.value);
                var insert2 = unsafeSet(key);
                var get2 = unsafeGet(key);
                return insert2(append16(get2(ra))(get2(rb)))(tail2);
              };
            };
          }
        };
      };
    };
  };
};

// output/Control.Alt/index.js
var alt = function(dict) {
  return dict.alt;
};

// output/Control.Bind/foreign.js
var arrayBind = function(arr) {
  return function(f) {
    var result = [];
    for (var i = 0, l = arr.length; i < l; i++) {
      Array.prototype.push.apply(result, f(arr[i]));
    }
    return result;
  };
};

// output/Control.Bind/index.js
var discard = function(dict) {
  return dict.discard;
};
var bindArray = {
  bind: arrayBind,
  Apply0: function() {
    return applyArray;
  }
};
var bind = function(dict) {
  return dict.bind;
};
var bindFlipped = function(dictBind) {
  return flip(bind(dictBind));
};
var discardUnit = {
  discard: function(dictBind) {
    return bind(dictBind);
  }
};

// output/Control.Plus/index.js
var empty = function(dict) {
  return dict.empty;
};

// output/Data.Bounded/foreign.js
var topInt = 2147483647;
var bottomInt = -2147483648;
var topChar = String.fromCharCode(65535);
var bottomChar = String.fromCharCode(0);
var topNumber = Number.POSITIVE_INFINITY;
var bottomNumber = Number.NEGATIVE_INFINITY;

// output/Data.Ord/foreign.js
var unsafeCompareImpl = function(lt) {
  return function(eq4) {
    return function(gt) {
      return function(x) {
        return function(y) {
          return x < y ? lt : x === y ? eq4 : gt;
        };
      };
    };
  };
};
var ordIntImpl = unsafeCompareImpl;
var ordStringImpl = unsafeCompareImpl;
var ordCharImpl = unsafeCompareImpl;

// output/Data.Eq/foreign.js
var refEq = function(r1) {
  return function(r2) {
    return r1 === r2;
  };
};
var eqBooleanImpl = refEq;
var eqIntImpl = refEq;
var eqCharImpl = refEq;
var eqStringImpl = refEq;

// output/Data.Eq/index.js
var eqString = {
  eq: eqStringImpl
};
var eqInt = {
  eq: eqIntImpl
};
var eqChar = {
  eq: eqCharImpl
};
var eqBoolean = {
  eq: eqBooleanImpl
};
var eq = function(dict) {
  return dict.eq;
};
var eq2 = /* @__PURE__ */ eq(eqBoolean);
var notEq = function(dictEq) {
  var eq32 = eq(dictEq);
  return function(x) {
    return function(y) {
      return eq2(eq32(x)(y))(false);
    };
  };
};

// output/Data.Ordering/index.js
var LT = /* @__PURE__ */ function() {
  function LT2() {
  }
  ;
  LT2.value = new LT2();
  return LT2;
}();
var GT = /* @__PURE__ */ function() {
  function GT2() {
  }
  ;
  GT2.value = new GT2();
  return GT2;
}();
var EQ = /* @__PURE__ */ function() {
  function EQ2() {
  }
  ;
  EQ2.value = new EQ2();
  return EQ2;
}();

// output/Data.Ord/index.js
var ordString = /* @__PURE__ */ function() {
  return {
    compare: ordStringImpl(LT.value)(EQ.value)(GT.value),
    Eq0: function() {
      return eqString;
    }
  };
}();
var ordInt = /* @__PURE__ */ function() {
  return {
    compare: ordIntImpl(LT.value)(EQ.value)(GT.value),
    Eq0: function() {
      return eqInt;
    }
  };
}();
var ordChar = /* @__PURE__ */ function() {
  return {
    compare: ordCharImpl(LT.value)(EQ.value)(GT.value),
    Eq0: function() {
      return eqChar;
    }
  };
}();
var compare = function(dict) {
  return dict.compare;
};
var greaterThan = function(dictOrd) {
  var compare3 = compare(dictOrd);
  return function(a1) {
    return function(a2) {
      var v = compare3(a1)(a2);
      if (v instanceof GT) {
        return true;
      }
      ;
      return false;
    };
  };
};
var max = function(dictOrd) {
  var compare3 = compare(dictOrd);
  return function(x) {
    return function(y) {
      var v = compare3(x)(y);
      if (v instanceof LT) {
        return y;
      }
      ;
      if (v instanceof EQ) {
        return x;
      }
      ;
      if (v instanceof GT) {
        return x;
      }
      ;
      throw new Error("Failed pattern match at Data.Ord (line 181, column 3 - line 184, column 12): " + [v.constructor.name]);
    };
  };
};
var min = function(dictOrd) {
  var compare3 = compare(dictOrd);
  return function(x) {
    return function(y) {
      var v = compare3(x)(y);
      if (v instanceof LT) {
        return x;
      }
      ;
      if (v instanceof EQ) {
        return x;
      }
      ;
      if (v instanceof GT) {
        return y;
      }
      ;
      throw new Error("Failed pattern match at Data.Ord (line 172, column 3 - line 175, column 12): " + [v.constructor.name]);
    };
  };
};

// output/Data.Bounded/index.js
var top = function(dict) {
  return dict.top;
};
var boundedInt = {
  top: topInt,
  bottom: bottomInt,
  Ord0: function() {
    return ordInt;
  }
};
var boundedChar = {
  top: topChar,
  bottom: bottomChar,
  Ord0: function() {
    return ordChar;
  }
};
var bottom = function(dict) {
  return dict.bottom;
};

// output/Data.Show/foreign.js
var showStringImpl = function(s) {
  var l = s.length;
  return '"' + s.replace(
    /[\0-\x1F\x7F"\\]/g,
    // eslint-disable-line no-control-regex
    function(c, i) {
      switch (c) {
        case '"':
        case "\\":
          return "\\" + c;
        case "\x07":
          return "\\a";
        case "\b":
          return "\\b";
        case "\f":
          return "\\f";
        case "\n":
          return "\\n";
        case "\r":
          return "\\r";
        case "	":
          return "\\t";
        case "\v":
          return "\\v";
      }
      var k = i + 1;
      var empty6 = k < l && s[k] >= "0" && s[k] <= "9" ? "\\&" : "";
      return "\\" + c.charCodeAt(0).toString(10) + empty6;
    }
  ) + '"';
};

// output/Data.Show/index.js
var showString = {
  show: showStringImpl
};
var show = function(dict) {
  return dict.show;
};

// output/Data.Maybe/index.js
var identity3 = /* @__PURE__ */ identity(categoryFn);
var Nothing = /* @__PURE__ */ function() {
  function Nothing2() {
  }
  ;
  Nothing2.value = new Nothing2();
  return Nothing2;
}();
var Just = /* @__PURE__ */ function() {
  function Just2(value0) {
    this.value0 = value0;
  }
  ;
  Just2.create = function(value0) {
    return new Just2(value0);
  };
  return Just2;
}();
var semigroupMaybe = function(dictSemigroup) {
  var append16 = append(dictSemigroup);
  return {
    append: function(v) {
      return function(v1) {
        if (v instanceof Nothing) {
          return v1;
        }
        ;
        if (v1 instanceof Nothing) {
          return v;
        }
        ;
        if (v instanceof Just && v1 instanceof Just) {
          return new Just(append16(v.value0)(v1.value0));
        }
        ;
        throw new Error("Failed pattern match at Data.Maybe (line 182, column 1 - line 185, column 43): " + [v.constructor.name, v1.constructor.name]);
      };
    }
  };
};
var monoidMaybe = function(dictSemigroup) {
  var semigroupMaybe1 = semigroupMaybe(dictSemigroup);
  return {
    mempty: Nothing.value,
    Semigroup0: function() {
      return semigroupMaybe1;
    }
  };
};
var maybe = function(v) {
  return function(v1) {
    return function(v2) {
      if (v2 instanceof Nothing) {
        return v;
      }
      ;
      if (v2 instanceof Just) {
        return v1(v2.value0);
      }
      ;
      throw new Error("Failed pattern match at Data.Maybe (line 237, column 1 - line 237, column 51): " + [v.constructor.name, v1.constructor.name, v2.constructor.name]);
    };
  };
};
var isNothing = /* @__PURE__ */ maybe(true)(/* @__PURE__ */ $$const(false));
var isJust = /* @__PURE__ */ maybe(false)(/* @__PURE__ */ $$const(true));
var functorMaybe = {
  map: function(v) {
    return function(v1) {
      if (v1 instanceof Just) {
        return new Just(v(v1.value0));
      }
      ;
      return Nothing.value;
    };
  }
};
var map2 = /* @__PURE__ */ map(functorMaybe);
var fromMaybe = function(a) {
  return maybe(a)(identity3);
};
var fromJust = function() {
  return function(v) {
    if (v instanceof Just) {
      return v.value0;
    }
    ;
    throw new Error("Failed pattern match at Data.Maybe (line 288, column 1 - line 288, column 46): " + [v.constructor.name]);
  };
};
var eqMaybe = function(dictEq) {
  var eq4 = eq(dictEq);
  return {
    eq: function(x) {
      return function(y) {
        if (x instanceof Nothing && y instanceof Nothing) {
          return true;
        }
        ;
        if (x instanceof Just && y instanceof Just) {
          return eq4(x.value0)(y.value0);
        }
        ;
        return false;
      };
    }
  };
};
var applyMaybe = {
  apply: function(v) {
    return function(v1) {
      if (v instanceof Just) {
        return map2(v.value0)(v1);
      }
      ;
      if (v instanceof Nothing) {
        return Nothing.value;
      }
      ;
      throw new Error("Failed pattern match at Data.Maybe (line 67, column 1 - line 69, column 30): " + [v.constructor.name, v1.constructor.name]);
    };
  },
  Functor0: function() {
    return functorMaybe;
  }
};
var bindMaybe = {
  bind: function(v) {
    return function(v1) {
      if (v instanceof Just) {
        return v1(v.value0);
      }
      ;
      if (v instanceof Nothing) {
        return Nothing.value;
      }
      ;
      throw new Error("Failed pattern match at Data.Maybe (line 125, column 1 - line 127, column 28): " + [v.constructor.name, v1.constructor.name]);
    };
  },
  Apply0: function() {
    return applyMaybe;
  }
};
var applicativeMaybe = /* @__PURE__ */ function() {
  return {
    pure: Just.create,
    Apply0: function() {
      return applyMaybe;
    }
  };
}();
var altMaybe = {
  alt: function(v) {
    return function(v1) {
      if (v instanceof Nothing) {
        return v1;
      }
      ;
      return v;
    };
  },
  Functor0: function() {
    return functorMaybe;
  }
};
var plusMaybe = /* @__PURE__ */ function() {
  return {
    empty: Nothing.value,
    Alt0: function() {
      return altMaybe;
    }
  };
}();
var alternativeMaybe = {
  Applicative0: function() {
    return applicativeMaybe;
  },
  Plus1: function() {
    return plusMaybe;
  }
};

// output/Data.Either/index.js
var Left = /* @__PURE__ */ function() {
  function Left2(value0) {
    this.value0 = value0;
  }
  ;
  Left2.create = function(value0) {
    return new Left2(value0);
  };
  return Left2;
}();
var Right = /* @__PURE__ */ function() {
  function Right2(value0) {
    this.value0 = value0;
  }
  ;
  Right2.create = function(value0) {
    return new Right2(value0);
  };
  return Right2;
}();
var functorEither = {
  map: function(f) {
    return function(m) {
      if (m instanceof Left) {
        return new Left(m.value0);
      }
      ;
      if (m instanceof Right) {
        return new Right(f(m.value0));
      }
      ;
      throw new Error("Failed pattern match at Data.Either (line 0, column 0 - line 0, column 0): " + [m.constructor.name]);
    };
  }
};
var either = function(v) {
  return function(v1) {
    return function(v2) {
      if (v2 instanceof Left) {
        return v(v2.value0);
      }
      ;
      if (v2 instanceof Right) {
        return v1(v2.value0);
      }
      ;
      throw new Error("Failed pattern match at Data.Either (line 208, column 1 - line 208, column 64): " + [v.constructor.name, v1.constructor.name, v2.constructor.name]);
    };
  };
};

// output/Data.HeytingAlgebra/foreign.js
var boolConj = function(b1) {
  return function(b2) {
    return b1 && b2;
  };
};
var boolDisj = function(b1) {
  return function(b2) {
    return b1 || b2;
  };
};
var boolNot = function(b) {
  return !b;
};

// output/Data.HeytingAlgebra/index.js
var not = function(dict) {
  return dict.not;
};
var ff = function(dict) {
  return dict.ff;
};
var disj = function(dict) {
  return dict.disj;
};
var heytingAlgebraBoolean = {
  ff: false,
  tt: true,
  implies: function(a) {
    return function(b) {
      return disj(heytingAlgebraBoolean)(not(heytingAlgebraBoolean)(a))(b);
    };
  },
  conj: boolConj,
  disj: boolDisj,
  not: boolNot
};

// output/Data.Monoid/index.js
var semigroupRecord2 = /* @__PURE__ */ semigroupRecord();
var monoidUnit = {
  mempty: unit,
  Semigroup0: function() {
    return semigroupUnit;
  }
};
var monoidString = {
  mempty: "",
  Semigroup0: function() {
    return semigroupString;
  }
};
var monoidRecordNil = {
  memptyRecord: function(v) {
    return {};
  },
  SemigroupRecord0: function() {
    return semigroupRecordNil;
  }
};
var monoidArray = {
  mempty: [],
  Semigroup0: function() {
    return semigroupArray;
  }
};
var memptyRecord = function(dict) {
  return dict.memptyRecord;
};
var monoidRecord = function() {
  return function(dictMonoidRecord) {
    var semigroupRecord1 = semigroupRecord2(dictMonoidRecord.SemigroupRecord0());
    return {
      mempty: memptyRecord(dictMonoidRecord)($$Proxy.value),
      Semigroup0: function() {
        return semigroupRecord1;
      }
    };
  };
};
var mempty = function(dict) {
  return dict.mempty;
};
var monoidFn = function(dictMonoid) {
  var mempty15 = mempty(dictMonoid);
  var semigroupFn2 = semigroupFn(dictMonoid.Semigroup0());
  return {
    mempty: function(v) {
      return mempty15;
    },
    Semigroup0: function() {
      return semigroupFn2;
    }
  };
};
var monoidRecordCons = function(dictIsSymbol) {
  var reflectSymbol2 = reflectSymbol(dictIsSymbol);
  var semigroupRecordCons2 = semigroupRecordCons(dictIsSymbol)();
  return function(dictMonoid) {
    var mempty15 = mempty(dictMonoid);
    var Semigroup0 = dictMonoid.Semigroup0();
    return function() {
      return function(dictMonoidRecord) {
        var memptyRecord1 = memptyRecord(dictMonoidRecord);
        var semigroupRecordCons1 = semigroupRecordCons2(dictMonoidRecord.SemigroupRecord0())(Semigroup0);
        return {
          memptyRecord: function(v) {
            var tail2 = memptyRecord1($$Proxy.value);
            var key = reflectSymbol2($$Proxy.value);
            var insert2 = unsafeSet(key);
            return insert2(mempty15)(tail2);
          },
          SemigroupRecord0: function() {
            return semigroupRecordCons1;
          }
        };
      };
    };
  };
};

// output/Data.Tuple/index.js
var Tuple = /* @__PURE__ */ function() {
  function Tuple2(value0, value12) {
    this.value0 = value0;
    this.value1 = value12;
  }
  ;
  Tuple2.create = function(value0) {
    return function(value12) {
      return new Tuple2(value0, value12);
    };
  };
  return Tuple2;
}();
var uncurry = function(f) {
  return function(v) {
    return f(v.value0)(v.value1);
  };
};
var snd = function(v) {
  return v.value1;
};
var semigroupTuple = function(dictSemigroup) {
  var append16 = append(dictSemigroup);
  return function(dictSemigroup1) {
    var append22 = append(dictSemigroup1);
    return {
      append: function(v) {
        return function(v1) {
          return new Tuple(append16(v.value0)(v1.value0), append22(v.value1)(v1.value1));
        };
      }
    };
  };
};
var monoidTuple = function(dictMonoid) {
  var mempty8 = mempty(dictMonoid);
  var semigroupTuple1 = semigroupTuple(dictMonoid.Semigroup0());
  return function(dictMonoid1) {
    var semigroupTuple2 = semigroupTuple1(dictMonoid1.Semigroup0());
    return {
      mempty: new Tuple(mempty8, mempty(dictMonoid1)),
      Semigroup0: function() {
        return semigroupTuple2;
      }
    };
  };
};
var fst = function(v) {
  return v.value0;
};
var curry = function(f) {
  return function(a) {
    return function(b) {
      return f(new Tuple(a, b));
    };
  };
};

// output/Data.Bifunctor/index.js
var bimap = function(dict) {
  return dict.bimap;
};

// output/Data.Maybe.First/index.js
var semigroupFirst = {
  append: function(v) {
    return function(v1) {
      if (v instanceof Just) {
        return v;
      }
      ;
      return v1;
    };
  }
};
var monoidFirst = /* @__PURE__ */ function() {
  return {
    mempty: Nothing.value,
    Semigroup0: function() {
      return semigroupFirst;
    }
  };
}();

// output/Data.Monoid.Disj/index.js
var Disj = function(x) {
  return x;
};
var semigroupDisj = function(dictHeytingAlgebra) {
  var disj2 = disj(dictHeytingAlgebra);
  return {
    append: function(v) {
      return function(v1) {
        return disj2(v)(v1);
      };
    }
  };
};
var monoidDisj = function(dictHeytingAlgebra) {
  var semigroupDisj1 = semigroupDisj(dictHeytingAlgebra);
  return {
    mempty: ff(dictHeytingAlgebra),
    Semigroup0: function() {
      return semigroupDisj1;
    }
  };
};

// output/Unsafe.Coerce/foreign.js
var unsafeCoerce2 = function(x) {
  return x;
};

// output/Safe.Coerce/index.js
var coerce = function() {
  return unsafeCoerce2;
};

// output/Data.Newtype/index.js
var coerce2 = /* @__PURE__ */ coerce();
var wrap = function() {
  return coerce2;
};
var wrap1 = /* @__PURE__ */ wrap();
var unwrap = function() {
  return coerce2;
};
var unwrap1 = /* @__PURE__ */ unwrap();
var un = function() {
  return function(v) {
    return unwrap1;
  };
};
var over = function() {
  return function() {
    return function(v) {
      return coerce2;
    };
  };
};
var alaF = function() {
  return function() {
    return function() {
      return function() {
        return function(v) {
          return coerce2;
        };
      };
    };
  };
};
var ala = function() {
  return function() {
    return function() {
      return function(v) {
        return function(f) {
          return coerce2(f(wrap1));
        };
      };
    };
  };
};

// output/Data.Foldable/index.js
var identity4 = /* @__PURE__ */ identity(categoryFn);
var unwrap2 = /* @__PURE__ */ unwrap();
var alaF2 = /* @__PURE__ */ alaF()()()();
var foldr = function(dict) {
  return dict.foldr;
};
var oneOf = function(dictFoldable) {
  var foldr22 = foldr(dictFoldable);
  return function(dictPlus) {
    return foldr22(alt(dictPlus.Alt0()))(empty(dictPlus));
  };
};
var foldl = function(dict) {
  return dict.foldl;
};
var intercalate = function(dictFoldable) {
  var foldl2 = foldl(dictFoldable);
  return function(dictMonoid) {
    var append9 = append(dictMonoid.Semigroup0());
    var mempty8 = mempty(dictMonoid);
    return function(sep) {
      return function(xs) {
        var go = function(v) {
          return function(v1) {
            if (v.init) {
              return {
                init: false,
                acc: v1
              };
            }
            ;
            return {
              init: false,
              acc: append9(v.acc)(append9(sep)(v1))
            };
          };
        };
        return foldl2(go)({
          init: true,
          acc: mempty8
        })(xs).acc;
      };
    };
  };
};
var foldMapDefaultR = function(dictFoldable) {
  var foldr22 = foldr(dictFoldable);
  return function(dictMonoid) {
    var append9 = append(dictMonoid.Semigroup0());
    var mempty8 = mempty(dictMonoid);
    return function(f) {
      return foldr22(function(x) {
        return function(acc) {
          return append9(f(x))(acc);
        };
      })(mempty8);
    };
  };
};
var foldableArray = {
  foldr: foldrArray,
  foldl: foldlArray,
  foldMap: function(dictMonoid) {
    return foldMapDefaultR(foldableArray)(dictMonoid);
  }
};
var foldMap = function(dict) {
  return dict.foldMap;
};
var lookup = function(dictFoldable) {
  var foldMap2 = foldMap(dictFoldable)(monoidFirst);
  return function(dictEq) {
    var eq23 = eq(dictEq);
    return function(a) {
      var $460 = foldMap2(function(v) {
        var $444 = eq23(a)(v.value0);
        if ($444) {
          return new Just(v.value1);
        }
        ;
        return Nothing.value;
      });
      return function($461) {
        return unwrap2($460($461));
      };
    };
  };
};
var fold = function(dictFoldable) {
  var foldMap2 = foldMap(dictFoldable);
  return function(dictMonoid) {
    return foldMap2(dictMonoid)(identity4);
  };
};
var any = function(dictFoldable) {
  var foldMap2 = foldMap(dictFoldable);
  return function(dictHeytingAlgebra) {
    return alaF2(Disj)(foldMap2(monoidDisj(dictHeytingAlgebra)));
  };
};
var elem = function(dictFoldable) {
  var any1 = any(dictFoldable)(heytingAlgebraBoolean);
  return function(dictEq) {
    var $462 = eq(dictEq);
    return function($463) {
      return any1($462($463));
    };
  };
};

// output/Data.Int/foreign.js
var fromNumberImpl = function(just) {
  return function(nothing) {
    return function(n) {
      return (n | 0) === n ? just(n) : nothing;
    };
  };
};
var toNumber = function(n) {
  return n;
};
var fromStringAsImpl = function(just) {
  return function(nothing) {
    return function(radix) {
      var digits;
      if (radix < 11) {
        digits = "[0-" + (radix - 1).toString() + "]";
      } else if (radix === 11) {
        digits = "[0-9a]";
      } else {
        digits = "[0-9a-" + String.fromCharCode(86 + radix) + "]";
      }
      var pattern = new RegExp("^[\\+\\-]?" + digits + "+$", "i");
      return function(s) {
        if (pattern.test(s)) {
          var i = parseInt(s, radix);
          return (i | 0) === i ? just(i) : nothing;
        } else {
          return nothing;
        }
      };
    };
  };
};

// output/Data.Number/foreign.js
var isFiniteImpl = isFinite;
var round = Math.round;

// output/Data.Int/index.js
var top2 = /* @__PURE__ */ top(boundedInt);
var bottom2 = /* @__PURE__ */ bottom(boundedInt);
var fromStringAs = /* @__PURE__ */ function() {
  return fromStringAsImpl(Just.create)(Nothing.value);
}();
var fromString = /* @__PURE__ */ fromStringAs(10);
var fromNumber = /* @__PURE__ */ function() {
  return fromNumberImpl(Just.create)(Nothing.value);
}();
var unsafeClamp = function(x) {
  if (!isFiniteImpl(x)) {
    return 0;
  }
  ;
  if (x >= toNumber(top2)) {
    return top2;
  }
  ;
  if (x <= toNumber(bottom2)) {
    return bottom2;
  }
  ;
  if (otherwise) {
    return fromMaybe(0)(fromNumber(x));
  }
  ;
  throw new Error("Failed pattern match at Data.Int (line 72, column 1 - line 72, column 29): " + [x.constructor.name]);
};
var round2 = function($37) {
  return unsafeClamp(round($37));
};

// output/Data.String.Common/foreign.js
var split = function(sep) {
  return function(s) {
    return s.split(sep);
  };
};

// output/ExitCodes/index.js
var Success = /* @__PURE__ */ function() {
  function Success3() {
  }
  ;
  Success3.value = new Success3();
  return Success3;
}();
var $$Error = /* @__PURE__ */ function() {
  function $$Error2() {
  }
  ;
  $$Error2.value = new $$Error2();
  return $$Error2;
}();
var MisuseOfShellBuiltins = /* @__PURE__ */ function() {
  function MisuseOfShellBuiltins2() {
  }
  ;
  MisuseOfShellBuiltins2.value = new MisuseOfShellBuiltins2();
  return MisuseOfShellBuiltins2;
}();
var CLIUsageError = /* @__PURE__ */ function() {
  function CLIUsageError2() {
  }
  ;
  CLIUsageError2.value = new CLIUsageError2();
  return CLIUsageError2;
}();
var DataFormatError = /* @__PURE__ */ function() {
  function DataFormatError2() {
  }
  ;
  DataFormatError2.value = new DataFormatError2();
  return DataFormatError2;
}();
var CannotOpenInput = /* @__PURE__ */ function() {
  function CannotOpenInput2() {
  }
  ;
  CannotOpenInput2.value = new CannotOpenInput2();
  return CannotOpenInput2;
}();
var AddresseeUnknown = /* @__PURE__ */ function() {
  function AddresseeUnknown2() {
  }
  ;
  AddresseeUnknown2.value = new AddresseeUnknown2();
  return AddresseeUnknown2;
}();
var HostNameUnknown = /* @__PURE__ */ function() {
  function HostNameUnknown2() {
  }
  ;
  HostNameUnknown2.value = new HostNameUnknown2();
  return HostNameUnknown2;
}();
var ServiceUnavailable = /* @__PURE__ */ function() {
  function ServiceUnavailable2() {
  }
  ;
  ServiceUnavailable2.value = new ServiceUnavailable2();
  return ServiceUnavailable2;
}();
var InternalSoftwareError = /* @__PURE__ */ function() {
  function InternalSoftwareError2() {
  }
  ;
  InternalSoftwareError2.value = new InternalSoftwareError2();
  return InternalSoftwareError2;
}();
var SystemError = /* @__PURE__ */ function() {
  function SystemError2() {
  }
  ;
  SystemError2.value = new SystemError2();
  return SystemError2;
}();
var CriticalOSFileMissing = /* @__PURE__ */ function() {
  function CriticalOSFileMissing2() {
  }
  ;
  CriticalOSFileMissing2.value = new CriticalOSFileMissing2();
  return CriticalOSFileMissing2;
}();
var CannotCreateOutputFile = /* @__PURE__ */ function() {
  function CannotCreateOutputFile2() {
  }
  ;
  CannotCreateOutputFile2.value = new CannotCreateOutputFile2();
  return CannotCreateOutputFile2;
}();
var IOError = /* @__PURE__ */ function() {
  function IOError2() {
  }
  ;
  IOError2.value = new IOError2();
  return IOError2;
}();
var TemporaryFailure = /* @__PURE__ */ function() {
  function TemporaryFailure2() {
  }
  ;
  TemporaryFailure2.value = new TemporaryFailure2();
  return TemporaryFailure2;
}();
var RemoteError = /* @__PURE__ */ function() {
  function RemoteError2() {
  }
  ;
  RemoteError2.value = new RemoteError2();
  return RemoteError2;
}();
var PermissionDenied = /* @__PURE__ */ function() {
  function PermissionDenied2() {
  }
  ;
  PermissionDenied2.value = new PermissionDenied2();
  return PermissionDenied2;
}();
var ConfigurationError = /* @__PURE__ */ function() {
  function ConfigurationError2() {
  }
  ;
  ConfigurationError2.value = new ConfigurationError2();
  return ConfigurationError2;
}();
var CannotExecute = /* @__PURE__ */ function() {
  function CannotExecute2() {
  }
  ;
  CannotExecute2.value = new CannotExecute2();
  return CannotExecute2;
}();
var CommandNotFound = /* @__PURE__ */ function() {
  function CommandNotFound2() {
  }
  ;
  CommandNotFound2.value = new CommandNotFound2();
  return CommandNotFound2;
}();
var InvalidExitArgument = /* @__PURE__ */ function() {
  function InvalidExitArgument2() {
  }
  ;
  InvalidExitArgument2.value = new InvalidExitArgument2();
  return InvalidExitArgument2;
}();
var SIGHUP = /* @__PURE__ */ function() {
  function SIGHUP2() {
  }
  ;
  SIGHUP2.value = new SIGHUP2();
  return SIGHUP2;
}();
var SIGINT = /* @__PURE__ */ function() {
  function SIGINT2() {
  }
  ;
  SIGINT2.value = new SIGINT2();
  return SIGINT2;
}();
var SIGQUIT = /* @__PURE__ */ function() {
  function SIGQUIT2() {
  }
  ;
  SIGQUIT2.value = new SIGQUIT2();
  return SIGQUIT2;
}();
var SIGILL = /* @__PURE__ */ function() {
  function SIGILL2() {
  }
  ;
  SIGILL2.value = new SIGILL2();
  return SIGILL2;
}();
var SIGABRT = /* @__PURE__ */ function() {
  function SIGABRT2() {
  }
  ;
  SIGABRT2.value = new SIGABRT2();
  return SIGABRT2;
}();
var SIGFPE = /* @__PURE__ */ function() {
  function SIGFPE2() {
  }
  ;
  SIGFPE2.value = new SIGFPE2();
  return SIGFPE2;
}();
var SIGKILL = /* @__PURE__ */ function() {
  function SIGKILL2() {
  }
  ;
  SIGKILL2.value = new SIGKILL2();
  return SIGKILL2;
}();
var SIGSEGV = /* @__PURE__ */ function() {
  function SIGSEGV2() {
  }
  ;
  SIGSEGV2.value = new SIGSEGV2();
  return SIGSEGV2;
}();
var SIGPIPE = /* @__PURE__ */ function() {
  function SIGPIPE2() {
  }
  ;
  SIGPIPE2.value = new SIGPIPE2();
  return SIGPIPE2;
}();
var SIGALRM = /* @__PURE__ */ function() {
  function SIGALRM2() {
  }
  ;
  SIGALRM2.value = new SIGALRM2();
  return SIGALRM2;
}();
var SIGTERM = /* @__PURE__ */ function() {
  function SIGTERM2() {
  }
  ;
  SIGTERM2.value = new SIGTERM2();
  return SIGTERM2;
}();
var eqExitCode = {
  eq: function(x) {
    return function(y) {
      if (x instanceof Success && y instanceof Success) {
        return true;
      }
      ;
      if (x instanceof $$Error && y instanceof $$Error) {
        return true;
      }
      ;
      if (x instanceof MisuseOfShellBuiltins && y instanceof MisuseOfShellBuiltins) {
        return true;
      }
      ;
      if (x instanceof CLIUsageError && y instanceof CLIUsageError) {
        return true;
      }
      ;
      if (x instanceof DataFormatError && y instanceof DataFormatError) {
        return true;
      }
      ;
      if (x instanceof CannotOpenInput && y instanceof CannotOpenInput) {
        return true;
      }
      ;
      if (x instanceof AddresseeUnknown && y instanceof AddresseeUnknown) {
        return true;
      }
      ;
      if (x instanceof HostNameUnknown && y instanceof HostNameUnknown) {
        return true;
      }
      ;
      if (x instanceof ServiceUnavailable && y instanceof ServiceUnavailable) {
        return true;
      }
      ;
      if (x instanceof InternalSoftwareError && y instanceof InternalSoftwareError) {
        return true;
      }
      ;
      if (x instanceof SystemError && y instanceof SystemError) {
        return true;
      }
      ;
      if (x instanceof CriticalOSFileMissing && y instanceof CriticalOSFileMissing) {
        return true;
      }
      ;
      if (x instanceof CannotCreateOutputFile && y instanceof CannotCreateOutputFile) {
        return true;
      }
      ;
      if (x instanceof IOError && y instanceof IOError) {
        return true;
      }
      ;
      if (x instanceof TemporaryFailure && y instanceof TemporaryFailure) {
        return true;
      }
      ;
      if (x instanceof RemoteError && y instanceof RemoteError) {
        return true;
      }
      ;
      if (x instanceof PermissionDenied && y instanceof PermissionDenied) {
        return true;
      }
      ;
      if (x instanceof ConfigurationError && y instanceof ConfigurationError) {
        return true;
      }
      ;
      if (x instanceof CannotExecute && y instanceof CannotExecute) {
        return true;
      }
      ;
      if (x instanceof CommandNotFound && y instanceof CommandNotFound) {
        return true;
      }
      ;
      if (x instanceof InvalidExitArgument && y instanceof InvalidExitArgument) {
        return true;
      }
      ;
      if (x instanceof SIGHUP && y instanceof SIGHUP) {
        return true;
      }
      ;
      if (x instanceof SIGINT && y instanceof SIGINT) {
        return true;
      }
      ;
      if (x instanceof SIGQUIT && y instanceof SIGQUIT) {
        return true;
      }
      ;
      if (x instanceof SIGILL && y instanceof SIGILL) {
        return true;
      }
      ;
      if (x instanceof SIGABRT && y instanceof SIGABRT) {
        return true;
      }
      ;
      if (x instanceof SIGFPE && y instanceof SIGFPE) {
        return true;
      }
      ;
      if (x instanceof SIGKILL && y instanceof SIGKILL) {
        return true;
      }
      ;
      if (x instanceof SIGSEGV && y instanceof SIGSEGV) {
        return true;
      }
      ;
      if (x instanceof SIGPIPE && y instanceof SIGPIPE) {
        return true;
      }
      ;
      if (x instanceof SIGALRM && y instanceof SIGALRM) {
        return true;
      }
      ;
      if (x instanceof SIGTERM && y instanceof SIGTERM) {
        return true;
      }
      ;
      return false;
    };
  }
};
var ordExitCode = {
  compare: function(x) {
    return function(y) {
      if (x instanceof Success && y instanceof Success) {
        return EQ.value;
      }
      ;
      if (x instanceof Success) {
        return LT.value;
      }
      ;
      if (y instanceof Success) {
        return GT.value;
      }
      ;
      if (x instanceof $$Error && y instanceof $$Error) {
        return EQ.value;
      }
      ;
      if (x instanceof $$Error) {
        return LT.value;
      }
      ;
      if (y instanceof $$Error) {
        return GT.value;
      }
      ;
      if (x instanceof MisuseOfShellBuiltins && y instanceof MisuseOfShellBuiltins) {
        return EQ.value;
      }
      ;
      if (x instanceof MisuseOfShellBuiltins) {
        return LT.value;
      }
      ;
      if (y instanceof MisuseOfShellBuiltins) {
        return GT.value;
      }
      ;
      if (x instanceof CLIUsageError && y instanceof CLIUsageError) {
        return EQ.value;
      }
      ;
      if (x instanceof CLIUsageError) {
        return LT.value;
      }
      ;
      if (y instanceof CLIUsageError) {
        return GT.value;
      }
      ;
      if (x instanceof DataFormatError && y instanceof DataFormatError) {
        return EQ.value;
      }
      ;
      if (x instanceof DataFormatError) {
        return LT.value;
      }
      ;
      if (y instanceof DataFormatError) {
        return GT.value;
      }
      ;
      if (x instanceof CannotOpenInput && y instanceof CannotOpenInput) {
        return EQ.value;
      }
      ;
      if (x instanceof CannotOpenInput) {
        return LT.value;
      }
      ;
      if (y instanceof CannotOpenInput) {
        return GT.value;
      }
      ;
      if (x instanceof AddresseeUnknown && y instanceof AddresseeUnknown) {
        return EQ.value;
      }
      ;
      if (x instanceof AddresseeUnknown) {
        return LT.value;
      }
      ;
      if (y instanceof AddresseeUnknown) {
        return GT.value;
      }
      ;
      if (x instanceof HostNameUnknown && y instanceof HostNameUnknown) {
        return EQ.value;
      }
      ;
      if (x instanceof HostNameUnknown) {
        return LT.value;
      }
      ;
      if (y instanceof HostNameUnknown) {
        return GT.value;
      }
      ;
      if (x instanceof ServiceUnavailable && y instanceof ServiceUnavailable) {
        return EQ.value;
      }
      ;
      if (x instanceof ServiceUnavailable) {
        return LT.value;
      }
      ;
      if (y instanceof ServiceUnavailable) {
        return GT.value;
      }
      ;
      if (x instanceof InternalSoftwareError && y instanceof InternalSoftwareError) {
        return EQ.value;
      }
      ;
      if (x instanceof InternalSoftwareError) {
        return LT.value;
      }
      ;
      if (y instanceof InternalSoftwareError) {
        return GT.value;
      }
      ;
      if (x instanceof SystemError && y instanceof SystemError) {
        return EQ.value;
      }
      ;
      if (x instanceof SystemError) {
        return LT.value;
      }
      ;
      if (y instanceof SystemError) {
        return GT.value;
      }
      ;
      if (x instanceof CriticalOSFileMissing && y instanceof CriticalOSFileMissing) {
        return EQ.value;
      }
      ;
      if (x instanceof CriticalOSFileMissing) {
        return LT.value;
      }
      ;
      if (y instanceof CriticalOSFileMissing) {
        return GT.value;
      }
      ;
      if (x instanceof CannotCreateOutputFile && y instanceof CannotCreateOutputFile) {
        return EQ.value;
      }
      ;
      if (x instanceof CannotCreateOutputFile) {
        return LT.value;
      }
      ;
      if (y instanceof CannotCreateOutputFile) {
        return GT.value;
      }
      ;
      if (x instanceof IOError && y instanceof IOError) {
        return EQ.value;
      }
      ;
      if (x instanceof IOError) {
        return LT.value;
      }
      ;
      if (y instanceof IOError) {
        return GT.value;
      }
      ;
      if (x instanceof TemporaryFailure && y instanceof TemporaryFailure) {
        return EQ.value;
      }
      ;
      if (x instanceof TemporaryFailure) {
        return LT.value;
      }
      ;
      if (y instanceof TemporaryFailure) {
        return GT.value;
      }
      ;
      if (x instanceof RemoteError && y instanceof RemoteError) {
        return EQ.value;
      }
      ;
      if (x instanceof RemoteError) {
        return LT.value;
      }
      ;
      if (y instanceof RemoteError) {
        return GT.value;
      }
      ;
      if (x instanceof PermissionDenied && y instanceof PermissionDenied) {
        return EQ.value;
      }
      ;
      if (x instanceof PermissionDenied) {
        return LT.value;
      }
      ;
      if (y instanceof PermissionDenied) {
        return GT.value;
      }
      ;
      if (x instanceof ConfigurationError && y instanceof ConfigurationError) {
        return EQ.value;
      }
      ;
      if (x instanceof ConfigurationError) {
        return LT.value;
      }
      ;
      if (y instanceof ConfigurationError) {
        return GT.value;
      }
      ;
      if (x instanceof CannotExecute && y instanceof CannotExecute) {
        return EQ.value;
      }
      ;
      if (x instanceof CannotExecute) {
        return LT.value;
      }
      ;
      if (y instanceof CannotExecute) {
        return GT.value;
      }
      ;
      if (x instanceof CommandNotFound && y instanceof CommandNotFound) {
        return EQ.value;
      }
      ;
      if (x instanceof CommandNotFound) {
        return LT.value;
      }
      ;
      if (y instanceof CommandNotFound) {
        return GT.value;
      }
      ;
      if (x instanceof InvalidExitArgument && y instanceof InvalidExitArgument) {
        return EQ.value;
      }
      ;
      if (x instanceof InvalidExitArgument) {
        return LT.value;
      }
      ;
      if (y instanceof InvalidExitArgument) {
        return GT.value;
      }
      ;
      if (x instanceof SIGHUP && y instanceof SIGHUP) {
        return EQ.value;
      }
      ;
      if (x instanceof SIGHUP) {
        return LT.value;
      }
      ;
      if (y instanceof SIGHUP) {
        return GT.value;
      }
      ;
      if (x instanceof SIGINT && y instanceof SIGINT) {
        return EQ.value;
      }
      ;
      if (x instanceof SIGINT) {
        return LT.value;
      }
      ;
      if (y instanceof SIGINT) {
        return GT.value;
      }
      ;
      if (x instanceof SIGQUIT && y instanceof SIGQUIT) {
        return EQ.value;
      }
      ;
      if (x instanceof SIGQUIT) {
        return LT.value;
      }
      ;
      if (y instanceof SIGQUIT) {
        return GT.value;
      }
      ;
      if (x instanceof SIGILL && y instanceof SIGILL) {
        return EQ.value;
      }
      ;
      if (x instanceof SIGILL) {
        return LT.value;
      }
      ;
      if (y instanceof SIGILL) {
        return GT.value;
      }
      ;
      if (x instanceof SIGABRT && y instanceof SIGABRT) {
        return EQ.value;
      }
      ;
      if (x instanceof SIGABRT) {
        return LT.value;
      }
      ;
      if (y instanceof SIGABRT) {
        return GT.value;
      }
      ;
      if (x instanceof SIGFPE && y instanceof SIGFPE) {
        return EQ.value;
      }
      ;
      if (x instanceof SIGFPE) {
        return LT.value;
      }
      ;
      if (y instanceof SIGFPE) {
        return GT.value;
      }
      ;
      if (x instanceof SIGKILL && y instanceof SIGKILL) {
        return EQ.value;
      }
      ;
      if (x instanceof SIGKILL) {
        return LT.value;
      }
      ;
      if (y instanceof SIGKILL) {
        return GT.value;
      }
      ;
      if (x instanceof SIGSEGV && y instanceof SIGSEGV) {
        return EQ.value;
      }
      ;
      if (x instanceof SIGSEGV) {
        return LT.value;
      }
      ;
      if (y instanceof SIGSEGV) {
        return GT.value;
      }
      ;
      if (x instanceof SIGPIPE && y instanceof SIGPIPE) {
        return EQ.value;
      }
      ;
      if (x instanceof SIGPIPE) {
        return LT.value;
      }
      ;
      if (y instanceof SIGPIPE) {
        return GT.value;
      }
      ;
      if (x instanceof SIGALRM && y instanceof SIGALRM) {
        return EQ.value;
      }
      ;
      if (x instanceof SIGALRM) {
        return LT.value;
      }
      ;
      if (y instanceof SIGALRM) {
        return GT.value;
      }
      ;
      if (x instanceof SIGTERM && y instanceof SIGTERM) {
        return EQ.value;
      }
      ;
      throw new Error("Failed pattern match at ExitCodes (line 0, column 0 - line 0, column 0): " + [x.constructor.name, y.constructor.name]);
    };
  },
  Eq0: function() {
    return eqExitCode;
  }
};
var enumExitCode = {
  succ: function(v) {
    if (v instanceof Success) {
      return new Just($$Error.value);
    }
    ;
    if (v instanceof $$Error) {
      return new Just(MisuseOfShellBuiltins.value);
    }
    ;
    if (v instanceof MisuseOfShellBuiltins) {
      return new Just(CLIUsageError.value);
    }
    ;
    if (v instanceof CLIUsageError) {
      return new Just(DataFormatError.value);
    }
    ;
    if (v instanceof DataFormatError) {
      return new Just(CannotOpenInput.value);
    }
    ;
    if (v instanceof CannotOpenInput) {
      return new Just(AddresseeUnknown.value);
    }
    ;
    if (v instanceof AddresseeUnknown) {
      return new Just(HostNameUnknown.value);
    }
    ;
    if (v instanceof HostNameUnknown) {
      return new Just(ServiceUnavailable.value);
    }
    ;
    if (v instanceof ServiceUnavailable) {
      return new Just(InternalSoftwareError.value);
    }
    ;
    if (v instanceof InternalSoftwareError) {
      return new Just(SystemError.value);
    }
    ;
    if (v instanceof SystemError) {
      return new Just(CriticalOSFileMissing.value);
    }
    ;
    if (v instanceof CriticalOSFileMissing) {
      return new Just(CannotCreateOutputFile.value);
    }
    ;
    if (v instanceof CannotCreateOutputFile) {
      return new Just(IOError.value);
    }
    ;
    if (v instanceof IOError) {
      return new Just(TemporaryFailure.value);
    }
    ;
    if (v instanceof TemporaryFailure) {
      return new Just(RemoteError.value);
    }
    ;
    if (v instanceof RemoteError) {
      return new Just(PermissionDenied.value);
    }
    ;
    if (v instanceof PermissionDenied) {
      return new Just(ConfigurationError.value);
    }
    ;
    if (v instanceof ConfigurationError) {
      return new Just(CannotExecute.value);
    }
    ;
    if (v instanceof CannotExecute) {
      return new Just(CommandNotFound.value);
    }
    ;
    if (v instanceof CommandNotFound) {
      return new Just(InvalidExitArgument.value);
    }
    ;
    if (v instanceof InvalidExitArgument) {
      return new Just(SIGHUP.value);
    }
    ;
    if (v instanceof SIGHUP) {
      return new Just(SIGINT.value);
    }
    ;
    if (v instanceof SIGINT) {
      return new Just(SIGQUIT.value);
    }
    ;
    if (v instanceof SIGQUIT) {
      return new Just(SIGILL.value);
    }
    ;
    if (v instanceof SIGILL) {
      return new Just(SIGABRT.value);
    }
    ;
    if (v instanceof SIGABRT) {
      return new Just(SIGFPE.value);
    }
    ;
    if (v instanceof SIGFPE) {
      return new Just(SIGKILL.value);
    }
    ;
    if (v instanceof SIGKILL) {
      return new Just(SIGSEGV.value);
    }
    ;
    if (v instanceof SIGSEGV) {
      return new Just(SIGPIPE.value);
    }
    ;
    if (v instanceof SIGPIPE) {
      return new Just(SIGALRM.value);
    }
    ;
    if (v instanceof SIGALRM) {
      return new Just(SIGTERM.value);
    }
    ;
    if (v instanceof SIGTERM) {
      return Nothing.value;
    }
    ;
    throw new Error("Failed pattern match at ExitCodes (line 87, column 1 - line 151, column 30): " + [v.constructor.name]);
  },
  pred: function(v) {
    if (v instanceof Success) {
      return Nothing.value;
    }
    ;
    if (v instanceof $$Error) {
      return new Just(Success.value);
    }
    ;
    if (v instanceof MisuseOfShellBuiltins) {
      return new Just($$Error.value);
    }
    ;
    if (v instanceof CLIUsageError) {
      return new Just(MisuseOfShellBuiltins.value);
    }
    ;
    if (v instanceof DataFormatError) {
      return new Just(CLIUsageError.value);
    }
    ;
    if (v instanceof CannotOpenInput) {
      return new Just(DataFormatError.value);
    }
    ;
    if (v instanceof AddresseeUnknown) {
      return new Just(CannotOpenInput.value);
    }
    ;
    if (v instanceof HostNameUnknown) {
      return new Just(AddresseeUnknown.value);
    }
    ;
    if (v instanceof ServiceUnavailable) {
      return new Just(HostNameUnknown.value);
    }
    ;
    if (v instanceof InternalSoftwareError) {
      return new Just(ServiceUnavailable.value);
    }
    ;
    if (v instanceof SystemError) {
      return new Just(InternalSoftwareError.value);
    }
    ;
    if (v instanceof CriticalOSFileMissing) {
      return new Just(SystemError.value);
    }
    ;
    if (v instanceof CannotCreateOutputFile) {
      return new Just(CriticalOSFileMissing.value);
    }
    ;
    if (v instanceof IOError) {
      return new Just(CannotCreateOutputFile.value);
    }
    ;
    if (v instanceof TemporaryFailure) {
      return new Just(IOError.value);
    }
    ;
    if (v instanceof RemoteError) {
      return new Just(TemporaryFailure.value);
    }
    ;
    if (v instanceof PermissionDenied) {
      return new Just(RemoteError.value);
    }
    ;
    if (v instanceof ConfigurationError) {
      return new Just(PermissionDenied.value);
    }
    ;
    if (v instanceof CannotExecute) {
      return new Just(ConfigurationError.value);
    }
    ;
    if (v instanceof CommandNotFound) {
      return new Just(CannotExecute.value);
    }
    ;
    if (v instanceof InvalidExitArgument) {
      return new Just(CommandNotFound.value);
    }
    ;
    if (v instanceof SIGHUP) {
      return new Just(InvalidExitArgument.value);
    }
    ;
    if (v instanceof SIGINT) {
      return new Just(SIGHUP.value);
    }
    ;
    if (v instanceof SIGQUIT) {
      return new Just(SIGINT.value);
    }
    ;
    if (v instanceof SIGILL) {
      return new Just(SIGQUIT.value);
    }
    ;
    if (v instanceof SIGABRT) {
      return new Just(SIGILL.value);
    }
    ;
    if (v instanceof SIGFPE) {
      return new Just(SIGABRT.value);
    }
    ;
    if (v instanceof SIGKILL) {
      return new Just(SIGFPE.value);
    }
    ;
    if (v instanceof SIGSEGV) {
      return new Just(SIGKILL.value);
    }
    ;
    if (v instanceof SIGPIPE) {
      return new Just(SIGSEGV.value);
    }
    ;
    if (v instanceof SIGALRM) {
      return new Just(SIGPIPE.value);
    }
    ;
    if (v instanceof SIGTERM) {
      return new Just(SIGALRM.value);
    }
    ;
    throw new Error("Failed pattern match at ExitCodes (line 87, column 1 - line 151, column 30): " + [v.constructor.name]);
  },
  Ord0: function() {
    return ordExitCode;
  }
};
var boundedExitCode = /* @__PURE__ */ function() {
  return {
    bottom: Success.value,
    top: SIGTERM.value,
    Ord0: function() {
      return ordExitCode;
    }
  };
}();
var boundedEnumExitCode = {
  cardinality: 32,
  toEnum: function(v) {
    if (v === 0) {
      return new Just(Success.value);
    }
    ;
    if (v === 1) {
      return new Just($$Error.value);
    }
    ;
    if (v === 2) {
      return new Just(MisuseOfShellBuiltins.value);
    }
    ;
    if (v === 64) {
      return new Just(CLIUsageError.value);
    }
    ;
    if (v === 65) {
      return new Just(DataFormatError.value);
    }
    ;
    if (v === 66) {
      return new Just(CannotOpenInput.value);
    }
    ;
    if (v === 67) {
      return new Just(AddresseeUnknown.value);
    }
    ;
    if (v === 68) {
      return new Just(HostNameUnknown.value);
    }
    ;
    if (v === 69) {
      return new Just(ServiceUnavailable.value);
    }
    ;
    if (v === 70) {
      return new Just(InternalSoftwareError.value);
    }
    ;
    if (v === 71) {
      return new Just(SystemError.value);
    }
    ;
    if (v === 72) {
      return new Just(CriticalOSFileMissing.value);
    }
    ;
    if (v === 73) {
      return new Just(CannotCreateOutputFile.value);
    }
    ;
    if (v === 74) {
      return new Just(IOError.value);
    }
    ;
    if (v === 75) {
      return new Just(TemporaryFailure.value);
    }
    ;
    if (v === 76) {
      return new Just(RemoteError.value);
    }
    ;
    if (v === 77) {
      return new Just(PermissionDenied.value);
    }
    ;
    if (v === 78) {
      return new Just(ConfigurationError.value);
    }
    ;
    if (v === 126) {
      return new Just(CannotExecute.value);
    }
    ;
    if (v === 127) {
      return new Just(CommandNotFound.value);
    }
    ;
    if (v === 128) {
      return new Just(InvalidExitArgument.value);
    }
    ;
    if (v === 129) {
      return new Just(SIGHUP.value);
    }
    ;
    if (v === 130) {
      return new Just(SIGINT.value);
    }
    ;
    if (v === 131) {
      return new Just(SIGQUIT.value);
    }
    ;
    if (v === 132) {
      return new Just(SIGILL.value);
    }
    ;
    if (v === 134) {
      return new Just(SIGABRT.value);
    }
    ;
    if (v === 136) {
      return new Just(SIGFPE.value);
    }
    ;
    if (v === 137) {
      return new Just(SIGKILL.value);
    }
    ;
    if (v === 139) {
      return new Just(SIGSEGV.value);
    }
    ;
    if (v === 141) {
      return new Just(SIGPIPE.value);
    }
    ;
    if (v === 142) {
      return new Just(SIGALRM.value);
    }
    ;
    if (v === 143) {
      return new Just(SIGTERM.value);
    }
    ;
    return Nothing.value;
  },
  fromEnum: function(v) {
    if (v instanceof Success) {
      return 0;
    }
    ;
    if (v instanceof $$Error) {
      return 1;
    }
    ;
    if (v instanceof MisuseOfShellBuiltins) {
      return 2;
    }
    ;
    if (v instanceof CLIUsageError) {
      return 64;
    }
    ;
    if (v instanceof DataFormatError) {
      return 65;
    }
    ;
    if (v instanceof CannotOpenInput) {
      return 66;
    }
    ;
    if (v instanceof AddresseeUnknown) {
      return 67;
    }
    ;
    if (v instanceof HostNameUnknown) {
      return 68;
    }
    ;
    if (v instanceof ServiceUnavailable) {
      return 69;
    }
    ;
    if (v instanceof InternalSoftwareError) {
      return 70;
    }
    ;
    if (v instanceof SystemError) {
      return 71;
    }
    ;
    if (v instanceof CriticalOSFileMissing) {
      return 72;
    }
    ;
    if (v instanceof CannotCreateOutputFile) {
      return 73;
    }
    ;
    if (v instanceof IOError) {
      return 74;
    }
    ;
    if (v instanceof TemporaryFailure) {
      return 75;
    }
    ;
    if (v instanceof RemoteError) {
      return 76;
    }
    ;
    if (v instanceof PermissionDenied) {
      return 77;
    }
    ;
    if (v instanceof ConfigurationError) {
      return 78;
    }
    ;
    if (v instanceof CannotExecute) {
      return 126;
    }
    ;
    if (v instanceof CommandNotFound) {
      return 127;
    }
    ;
    if (v instanceof InvalidExitArgument) {
      return 128;
    }
    ;
    if (v instanceof SIGHUP) {
      return 128 + 1 | 0;
    }
    ;
    if (v instanceof SIGINT) {
      return 128 + 2 | 0;
    }
    ;
    if (v instanceof SIGQUIT) {
      return 128 + 3 | 0;
    }
    ;
    if (v instanceof SIGILL) {
      return 128 + 4 | 0;
    }
    ;
    if (v instanceof SIGABRT) {
      return 128 + 6 | 0;
    }
    ;
    if (v instanceof SIGFPE) {
      return 128 + 8 | 0;
    }
    ;
    if (v instanceof SIGKILL) {
      return 128 + 9 | 0;
    }
    ;
    if (v instanceof SIGSEGV) {
      return 128 + 11 | 0;
    }
    ;
    if (v instanceof SIGPIPE) {
      return 128 + 13 | 0;
    }
    ;
    if (v instanceof SIGALRM) {
      return 128 + 14 | 0;
    }
    ;
    if (v instanceof SIGTERM) {
      return 128 + 15 | 0;
    }
    ;
    throw new Error("Failed pattern match at ExitCodes (line 153, column 1 - line 219, column 30): " + [v.constructor.name]);
  },
  Bounded0: function() {
    return boundedExitCode;
  },
  Enum1: function() {
    return enumExitCode;
  }
};

// output/Effect/foreign.js
var pureE = function(a) {
  return function() {
    return a;
  };
};
var bindE = function(a) {
  return function(f) {
    return function() {
      return f(a())();
    };
  };
};

// output/Control.Monad/index.js
var liftM1 = function(dictMonad) {
  var bind11 = bind(dictMonad.Bind1());
  var pure19 = pure(dictMonad.Applicative0());
  return function(f) {
    return function(a) {
      return bind11(a)(function(a$prime) {
        return pure19(f(a$prime));
      });
    };
  };
};
var ap = function(dictMonad) {
  var bind11 = bind(dictMonad.Bind1());
  var pure19 = pure(dictMonad.Applicative0());
  return function(f) {
    return function(a) {
      return bind11(f)(function(f$prime) {
        return bind11(a)(function(a$prime) {
          return pure19(f$prime(a$prime));
        });
      });
    };
  };
};

// output/Effect/index.js
var $runtime_lazy = function(name3, moduleName, init3) {
  var state2 = 0;
  var val;
  return function(lineNumber) {
    if (state2 === 2)
      return val;
    if (state2 === 1)
      throw new ReferenceError(name3 + " was needed before it finished initializing (module " + moduleName + ", line " + lineNumber + ")", moduleName, lineNumber);
    state2 = 1;
    val = init3();
    state2 = 2;
    return val;
  };
};
var monadEffect = {
  Applicative0: function() {
    return applicativeEffect;
  },
  Bind1: function() {
    return bindEffect;
  }
};
var bindEffect = {
  bind: bindE,
  Apply0: function() {
    return $lazy_applyEffect(0);
  }
};
var applicativeEffect = {
  pure: pureE,
  Apply0: function() {
    return $lazy_applyEffect(0);
  }
};
var $lazy_functorEffect = /* @__PURE__ */ $runtime_lazy("functorEffect", "Effect", function() {
  return {
    map: liftA1(applicativeEffect)
  };
});
var $lazy_applyEffect = /* @__PURE__ */ $runtime_lazy("applyEffect", "Effect", function() {
  return {
    apply: ap(monadEffect),
    Functor0: function() {
      return $lazy_functorEffect(0);
    }
  };
});
var functorEffect = /* @__PURE__ */ $lazy_functorEffect(20);
var applyEffect = /* @__PURE__ */ $lazy_applyEffect(23);
var lift22 = /* @__PURE__ */ lift2(applyEffect);
var semigroupEffect = function(dictSemigroup) {
  return {
    append: lift22(append(dictSemigroup))
  };
};
var monoidEffect = function(dictMonoid) {
  var semigroupEffect1 = semigroupEffect(dictMonoid.Semigroup0());
  return {
    mempty: pureE(mempty(dictMonoid)),
    Semigroup0: function() {
      return semigroupEffect1;
    }
  };
};

// output/Control.Monad.Error.Class/index.js
var throwError = function(dict) {
  return dict.throwError;
};
var catchError = function(dict) {
  return dict.catchError;
};
var $$try = function(dictMonadError) {
  var catchError1 = catchError(dictMonadError);
  var Monad0 = dictMonadError.MonadThrow0().Monad0();
  var map21 = map(Monad0.Bind1().Apply0().Functor0());
  var pure19 = pure(Monad0.Applicative0());
  return function(a) {
    return catchError1(map21(Right.create)(a))(function($52) {
      return pure19(Left.create($52));
    });
  };
};

// output/Data.Array/foreign.js
var replicateFill = function(count) {
  return function(value3) {
    if (count < 1) {
      return [];
    }
    var result = new Array(count);
    return result.fill(value3);
  };
};
var replicatePolyfill = function(count) {
  return function(value3) {
    var result = [];
    var n = 0;
    for (var i = 0; i < count; i++) {
      result[n++] = value3;
    }
    return result;
  };
};
var replicate = typeof Array.prototype.fill === "function" ? replicateFill : replicatePolyfill;
var fromFoldableImpl = function() {
  function Cons4(head3, tail2) {
    this.head = head3;
    this.tail = tail2;
  }
  var emptyList = {};
  function curryCons(head3) {
    return function(tail2) {
      return new Cons4(head3, tail2);
    };
  }
  function listToArray(list) {
    var result = [];
    var count = 0;
    var xs = list;
    while (xs !== emptyList) {
      result[count++] = xs.head;
      xs = xs.tail;
    }
    return result;
  }
  return function(foldr6) {
    return function(xs) {
      return listToArray(foldr6(curryCons)(emptyList)(xs));
    };
  };
}();
var length = function(xs) {
  return xs.length;
};
var unconsImpl = function(empty6) {
  return function(next2) {
    return function(xs) {
      return xs.length === 0 ? empty6({}) : next2(xs[0])(xs.slice(1));
    };
  };
};
var indexImpl = function(just) {
  return function(nothing) {
    return function(xs) {
      return function(i) {
        return i < 0 || i >= xs.length ? nothing : just(xs[i]);
      };
    };
  };
};
var reverse = function(l) {
  return l.slice().reverse();
};
var filter = function(f) {
  return function(xs) {
    return xs.filter(f);
  };
};
var sortByImpl = function() {
  function mergeFromTo(compare3, fromOrdering, xs1, xs2, from3, to2) {
    var mid;
    var i;
    var j;
    var k;
    var x;
    var y;
    var c;
    mid = from3 + (to2 - from3 >> 1);
    if (mid - from3 > 1)
      mergeFromTo(compare3, fromOrdering, xs2, xs1, from3, mid);
    if (to2 - mid > 1)
      mergeFromTo(compare3, fromOrdering, xs2, xs1, mid, to2);
    i = from3;
    j = mid;
    k = from3;
    while (i < mid && j < to2) {
      x = xs2[i];
      y = xs2[j];
      c = fromOrdering(compare3(x)(y));
      if (c > 0) {
        xs1[k++] = y;
        ++j;
      } else {
        xs1[k++] = x;
        ++i;
      }
    }
    while (i < mid) {
      xs1[k++] = xs2[i++];
    }
    while (j < to2) {
      xs1[k++] = xs2[j++];
    }
  }
  return function(compare3) {
    return function(fromOrdering) {
      return function(xs) {
        var out;
        if (xs.length < 2)
          return xs;
        out = xs.slice(0);
        mergeFromTo(compare3, fromOrdering, out, xs.slice(0), 0, xs.length);
        return out;
      };
    };
  };
}();
var slice = function(s) {
  return function(e) {
    return function(l) {
      return l.slice(s, e);
    };
  };
};
var unsafeIndexImpl = function(xs) {
  return function(n) {
    return xs[n];
  };
};

// output/Data.Identity/index.js
var Identity = function(x) {
  return x;
};
var functorIdentity = {
  map: function(f) {
    return function(m) {
      return f(m);
    };
  }
};
var applyIdentity = {
  apply: function(v) {
    return function(v1) {
      return v(v1);
    };
  },
  Functor0: function() {
    return functorIdentity;
  }
};
var bindIdentity = {
  bind: function(v) {
    return function(f) {
      return f(v);
    };
  },
  Apply0: function() {
    return applyIdentity;
  }
};
var applicativeIdentity = {
  pure: Identity,
  Apply0: function() {
    return applyIdentity;
  }
};
var monadIdentity = {
  Applicative0: function() {
    return applicativeIdentity;
  },
  Bind1: function() {
    return bindIdentity;
  }
};

// output/Control.Monad.Rec.Class/index.js
var Loop = /* @__PURE__ */ function() {
  function Loop2(value0) {
    this.value0 = value0;
  }
  ;
  Loop2.create = function(value0) {
    return new Loop2(value0);
  };
  return Loop2;
}();
var Done = /* @__PURE__ */ function() {
  function Done2(value0) {
    this.value0 = value0;
  }
  ;
  Done2.create = function(value0) {
    return new Done2(value0);
  };
  return Done2;
}();
var tailRecM = function(dict) {
  return dict.tailRecM;
};
var bifunctorStep = {
  bimap: function(v) {
    return function(v1) {
      return function(v2) {
        if (v2 instanceof Loop) {
          return new Loop(v(v2.value0));
        }
        ;
        if (v2 instanceof Done) {
          return new Done(v1(v2.value0));
        }
        ;
        throw new Error("Failed pattern match at Control.Monad.Rec.Class (line 33, column 1 - line 35, column 34): " + [v.constructor.name, v1.constructor.name, v2.constructor.name]);
      };
    };
  }
};

// output/Control.Monad.ST.Internal/foreign.js
var map_ = function(f) {
  return function(a) {
    return function() {
      return f(a());
    };
  };
};
function newSTRef(val) {
  return function() {
    return { value: val };
  };
}
var read2 = function(ref) {
  return function() {
    return ref.value;
  };
};
var modifyImpl2 = function(f) {
  return function(ref) {
    return function() {
      var t = f(ref.value);
      ref.value = t.state;
      return t.value;
    };
  };
};
var write2 = function(a) {
  return function(ref) {
    return function() {
      return ref.value = a;
    };
  };
};

// output/Control.Monad.ST.Internal/index.js
var modify$prime = modifyImpl2;
var modify = function(f) {
  return modify$prime(function(s) {
    var s$prime = f(s);
    return {
      state: s$prime,
      value: s$prime
    };
  });
};
var functorST = {
  map: map_
};

// output/Data.Array.ST/foreign.js
function newSTArray() {
  return [];
}
var pushAll = function(as) {
  return function(xs) {
    return function() {
      return xs.push.apply(xs, as);
    };
  };
};
var unsafeFreeze = function(xs) {
  return function() {
    return xs;
  };
};
var sortByImpl2 = function() {
  function mergeFromTo(compare3, fromOrdering, xs1, xs2, from3, to2) {
    var mid;
    var i;
    var j;
    var k;
    var x;
    var y;
    var c;
    mid = from3 + (to2 - from3 >> 1);
    if (mid - from3 > 1)
      mergeFromTo(compare3, fromOrdering, xs2, xs1, from3, mid);
    if (to2 - mid > 1)
      mergeFromTo(compare3, fromOrdering, xs2, xs1, mid, to2);
    i = from3;
    j = mid;
    k = from3;
    while (i < mid && j < to2) {
      x = xs2[i];
      y = xs2[j];
      c = fromOrdering(compare3(x)(y));
      if (c > 0) {
        xs1[k++] = y;
        ++j;
      } else {
        xs1[k++] = x;
        ++i;
      }
    }
    while (i < mid) {
      xs1[k++] = xs2[i++];
    }
    while (j < to2) {
      xs1[k++] = xs2[j++];
    }
  }
  return function(compare3) {
    return function(fromOrdering) {
      return function(xs) {
        return function() {
          if (xs.length < 2)
            return xs;
          mergeFromTo(compare3, fromOrdering, xs, xs.slice(0), 0, xs.length);
          return xs;
        };
      };
    };
  };
}();

// output/Data.Array.ST/index.js
var push = function(a) {
  return pushAll([a]);
};

// output/Data.Array.ST.Iterator/index.js
var map3 = /* @__PURE__ */ map(functorST);
var not2 = /* @__PURE__ */ not(heytingAlgebraBoolean);
var $$void2 = /* @__PURE__ */ $$void(functorST);
var Iterator = /* @__PURE__ */ function() {
  function Iterator2(value0, value12) {
    this.value0 = value0;
    this.value1 = value12;
  }
  ;
  Iterator2.create = function(value0) {
    return function(value12) {
      return new Iterator2(value0, value12);
    };
  };
  return Iterator2;
}();
var peek = function(v) {
  return function __do2() {
    var i = read2(v.value1)();
    return v.value0(i);
  };
};
var next = function(v) {
  return function __do2() {
    var i = read2(v.value1)();
    modify(function(v1) {
      return v1 + 1 | 0;
    })(v.value1)();
    return v.value0(i);
  };
};
var pushWhile = function(p) {
  return function(iter) {
    return function(array) {
      return function __do2() {
        var $$break = newSTRef(false)();
        while (map3(not2)(read2($$break))()) {
          (function __do3() {
            var mx = peek(iter)();
            if (mx instanceof Just && p(mx.value0)) {
              push(mx.value0)(array)();
              return $$void2(next(iter))();
            }
            ;
            return $$void2(write2(true)($$break))();
          })();
        }
        ;
        return {};
      };
    };
  };
};
var iterator = function(f) {
  return map3(Iterator.create(f))(newSTRef(0));
};
var iterate = function(iter) {
  return function(f) {
    return function __do2() {
      var $$break = newSTRef(false)();
      while (map3(not2)(read2($$break))()) {
        (function __do3() {
          var mx = next(iter)();
          if (mx instanceof Just) {
            return f(mx.value0)();
          }
          ;
          if (mx instanceof Nothing) {
            return $$void2(write2(true)($$break))();
          }
          ;
          throw new Error("Failed pattern match at Data.Array.ST.Iterator (line 42, column 5 - line 44, column 47): " + [mx.constructor.name]);
        })();
      }
      ;
      return {};
    };
  };
};

// output/Data.FunctorWithIndex/foreign.js
var mapWithIndexArray = function(f) {
  return function(xs) {
    var l = xs.length;
    var result = Array(l);
    for (var i = 0; i < l; i++) {
      result[i] = f(i)(xs[i]);
    }
    return result;
  };
};

// output/Data.FunctorWithIndex/index.js
var mapWithIndex = function(dict) {
  return dict.mapWithIndex;
};
var functorWithIndexArray = {
  mapWithIndex: mapWithIndexArray,
  Functor0: function() {
    return functorArray;
  }
};

// output/Data.Traversable/foreign.js
var traverseArrayImpl = function() {
  function array1(a) {
    return [a];
  }
  function array2(a) {
    return function(b) {
      return [a, b];
    };
  }
  function array3(a) {
    return function(b) {
      return function(c) {
        return [a, b, c];
      };
    };
  }
  function concat22(xs) {
    return function(ys) {
      return xs.concat(ys);
    };
  }
  return function(apply9) {
    return function(map21) {
      return function(pure19) {
        return function(f) {
          return function(array) {
            function go(bot, top3) {
              switch (top3 - bot) {
                case 0:
                  return pure19([]);
                case 1:
                  return map21(array1)(f(array[bot]));
                case 2:
                  return apply9(map21(array2)(f(array[bot])))(f(array[bot + 1]));
                case 3:
                  return apply9(apply9(map21(array3)(f(array[bot])))(f(array[bot + 1])))(f(array[bot + 2]));
                default:
                  var pivot = bot + Math.floor((top3 - bot) / 4) * 2;
                  return apply9(map21(concat22)(go(bot, pivot)))(go(pivot, top3));
              }
            }
            return go(0, array.length);
          };
        };
      };
    };
  };
}();

// output/Data.Traversable/index.js
var identity5 = /* @__PURE__ */ identity(categoryFn);
var traverse = function(dict) {
  return dict.traverse;
};
var sequenceDefault = function(dictTraversable) {
  var traverse2 = traverse(dictTraversable);
  return function(dictApplicative) {
    return traverse2(dictApplicative)(identity5);
  };
};
var traversableArray = {
  traverse: function(dictApplicative) {
    var Apply0 = dictApplicative.Apply0();
    return traverseArrayImpl(apply(Apply0))(map(Apply0.Functor0()))(pure(dictApplicative));
  },
  sequence: function(dictApplicative) {
    return sequenceDefault(traversableArray)(dictApplicative);
  },
  Functor0: function() {
    return functorArray;
  },
  Foldable1: function() {
    return foldableArray;
  }
};
var sequence = function(dict) {
  return dict.sequence;
};

// output/Data.Unfoldable/foreign.js
var unfoldrArrayImpl = function(isNothing2) {
  return function(fromJust5) {
    return function(fst2) {
      return function(snd2) {
        return function(f) {
          return function(b) {
            var result = [];
            var value3 = b;
            while (true) {
              var maybe2 = f(value3);
              if (isNothing2(maybe2))
                return result;
              var tuple = fromJust5(maybe2);
              result.push(fst2(tuple));
              value3 = snd2(tuple);
            }
          };
        };
      };
    };
  };
};

// output/Data.Unfoldable1/foreign.js
var unfoldr1ArrayImpl = function(isNothing2) {
  return function(fromJust5) {
    return function(fst2) {
      return function(snd2) {
        return function(f) {
          return function(b) {
            var result = [];
            var value3 = b;
            while (true) {
              var tuple = f(value3);
              result.push(fst2(tuple));
              var maybe2 = snd2(tuple);
              if (isNothing2(maybe2))
                return result;
              value3 = fromJust5(maybe2);
            }
          };
        };
      };
    };
  };
};

// output/Data.Ord.Min/index.js
var Min = function(x) {
  return x;
};
var semigroupMin = function(dictOrd) {
  var min5 = min(dictOrd);
  return {
    append: function(v) {
      return function(v1) {
        return min5(v)(v1);
      };
    }
  };
};

// output/Data.Semigroup.Foldable/index.js
var ala2 = /* @__PURE__ */ ala()()();
var foldMap1 = function(dict) {
  return dict.foldMap1;
};
var minimum2 = function(dictOrd) {
  var semigroupMin2 = semigroupMin(dictOrd);
  return function(dictFoldable1) {
    return ala2(Min)(foldMap1(dictFoldable1)(semigroupMin2));
  };
};

// output/Data.Unfoldable1/index.js
var fromJust2 = /* @__PURE__ */ fromJust();
var unfoldable1Array = {
  unfoldr1: /* @__PURE__ */ unfoldr1ArrayImpl(isNothing)(fromJust2)(fst)(snd)
};

// output/Data.Unfoldable/index.js
var fromJust3 = /* @__PURE__ */ fromJust();
var unfoldr = function(dict) {
  return dict.unfoldr;
};
var unfoldableArray = {
  unfoldr: /* @__PURE__ */ unfoldrArrayImpl(isNothing)(fromJust3)(fst)(snd),
  Unfoldable10: function() {
    return unfoldable1Array;
  }
};

// output/Data.Array/index.js
var $$void3 = /* @__PURE__ */ $$void(functorST);
var apply2 = /* @__PURE__ */ apply(applyMaybe);
var map1 = /* @__PURE__ */ map(functorMaybe);
var fold1 = /* @__PURE__ */ fold(foldableArray);
var append2 = /* @__PURE__ */ append(semigroupArray);
var unsafeIndex = function() {
  return unsafeIndexImpl;
};
var uncons = /* @__PURE__ */ function() {
  return unconsImpl($$const(Nothing.value))(function(x) {
    return function(xs) {
      return new Just({
        head: x,
        tail: xs
      });
    };
  });
}();
var sortBy = function(comp) {
  return sortByImpl(comp)(function(v) {
    if (v instanceof GT) {
      return 1;
    }
    ;
    if (v instanceof EQ) {
      return 0;
    }
    ;
    if (v instanceof LT) {
      return -1 | 0;
    }
    ;
    throw new Error("Failed pattern match at Data.Array (line 870, column 31 - line 873, column 11): " + [v.constructor.name]);
  });
};
var sort = function(dictOrd) {
  var compare3 = compare(dictOrd);
  return function(xs) {
    return sortBy(compare3)(xs);
  };
};
var singleton2 = function(a) {
  return [a];
};
var $$null = function(xs) {
  return length(xs) === 0;
};
var mapWithIndex2 = /* @__PURE__ */ mapWithIndex(functorWithIndexArray);
var init = function(xs) {
  if ($$null(xs)) {
    return Nothing.value;
  }
  ;
  if (otherwise) {
    return new Just(slice(0)(length(xs) - 1 | 0)(xs));
  }
  ;
  throw new Error("Failed pattern match at Data.Array (line 340, column 1 - line 340, column 45): " + [xs.constructor.name]);
};
var index = /* @__PURE__ */ function() {
  return indexImpl(Just.create)(Nothing.value);
}();
var last = function(xs) {
  return index(xs)(length(xs) - 1 | 0);
};
var unsnoc = function(xs) {
  return apply2(map1(function(v) {
    return function(v1) {
      return {
        init: v,
        last: v1
      };
    };
  })(init(xs)))(last(xs));
};
var head = function(xs) {
  return index(xs)(0);
};
var groupBy = function(op) {
  return function(xs) {
    return function __do2() {
      var result = newSTArray();
      var iter = iterator(function(v) {
        return index(xs)(v);
      })();
      iterate(iter)(function(x) {
        return $$void3(function __do3() {
          var sub1 = newSTArray();
          push(x)(sub1)();
          pushWhile(op(x))(iter)(sub1)();
          var grp = unsafeFreeze(sub1)();
          return push(grp)(result)();
        });
      })();
      return unsafeFreeze(result)();
    }();
  };
};
var fromFoldable = function(dictFoldable) {
  return fromFoldableImpl(foldr(dictFoldable));
};
var foldr2 = /* @__PURE__ */ foldr(foldableArray);
var fold2 = function(dictMonoid) {
  return fold1(dictMonoid);
};
var drop = function(n) {
  return function(xs) {
    var $173 = n < 1;
    if ($173) {
      return xs;
    }
    ;
    return slice(n)(length(xs))(xs);
  };
};
var cons = function(x) {
  return function(xs) {
    return append2([x])(xs);
  };
};
var concatMap = /* @__PURE__ */ flip(/* @__PURE__ */ bind(bindArray));
var mapMaybe = function(f) {
  return concatMap(function() {
    var $191 = maybe([])(singleton2);
    return function($192) {
      return $191(f($192));
    };
  }());
};
var catMaybes = /* @__PURE__ */ mapMaybe(/* @__PURE__ */ identity(categoryFn));

// output/Data.NonEmpty/index.js
var NonEmpty = /* @__PURE__ */ function() {
  function NonEmpty2(value0, value12) {
    this.value0 = value0;
    this.value1 = value12;
  }
  ;
  NonEmpty2.create = function(value0) {
    return function(value12) {
      return new NonEmpty2(value0, value12);
    };
  };
  return NonEmpty2;
}();
var foldableNonEmpty = function(dictFoldable) {
  var foldMap2 = foldMap(dictFoldable);
  var foldl2 = foldl(dictFoldable);
  var foldr6 = foldr(dictFoldable);
  return {
    foldMap: function(dictMonoid) {
      var append16 = append(dictMonoid.Semigroup0());
      var foldMap12 = foldMap2(dictMonoid);
      return function(f) {
        return function(v) {
          return append16(f(v.value0))(foldMap12(f)(v.value1));
        };
      };
    },
    foldl: function(f) {
      return function(b) {
        return function(v) {
          return foldl2(f)(f(b)(v.value0))(v.value1);
        };
      };
    },
    foldr: function(f) {
      return function(b) {
        return function(v) {
          return f(v.value0)(foldr6(f)(b)(v.value1));
        };
      };
    }
  };
};
var foldable1NonEmpty = function(dictFoldable) {
  var foldl2 = foldl(dictFoldable);
  var foldr6 = foldr(dictFoldable);
  var foldableNonEmpty1 = foldableNonEmpty(dictFoldable);
  return {
    foldMap1: function(dictSemigroup) {
      var append16 = append(dictSemigroup);
      return function(f) {
        return function(v) {
          return foldl2(function(s) {
            return function(a1) {
              return append16(s)(f(a1));
            };
          })(f(v.value0))(v.value1);
        };
      };
    },
    foldr1: function(f) {
      return function(v) {
        return maybe(v.value0)(f(v.value0))(foldr6(function(a1) {
          var $250 = maybe(a1)(f(a1));
          return function($251) {
            return Just.create($250($251));
          };
        })(Nothing.value)(v.value1));
      };
    },
    foldl1: function(f) {
      return function(v) {
        return foldl2(f)(v.value0)(v.value1);
      };
    },
    Foldable0: function() {
      return foldableNonEmpty1;
    }
  };
};

// output/Data.List.Types/index.js
var Nil = /* @__PURE__ */ function() {
  function Nil4() {
  }
  ;
  Nil4.value = new Nil4();
  return Nil4;
}();
var Cons = /* @__PURE__ */ function() {
  function Cons4(value0, value12) {
    this.value0 = value0;
    this.value1 = value12;
  }
  ;
  Cons4.create = function(value0) {
    return function(value12) {
      return new Cons4(value0, value12);
    };
  };
  return Cons4;
}();
var foldableList = {
  foldr: function(f) {
    return function(b) {
      var rev = function() {
        var go = function($copy_v) {
          return function($copy_v1) {
            var $tco_var_v = $copy_v;
            var $tco_done = false;
            var $tco_result;
            function $tco_loop(v, v1) {
              if (v1 instanceof Nil) {
                $tco_done = true;
                return v;
              }
              ;
              if (v1 instanceof Cons) {
                $tco_var_v = new Cons(v1.value0, v);
                $copy_v1 = v1.value1;
                return;
              }
              ;
              throw new Error("Failed pattern match at Data.List.Types (line 107, column 7 - line 107, column 23): " + [v.constructor.name, v1.constructor.name]);
            }
            ;
            while (!$tco_done) {
              $tco_result = $tco_loop($tco_var_v, $copy_v1);
            }
            ;
            return $tco_result;
          };
        };
        return go(Nil.value);
      }();
      var $284 = foldl(foldableList)(flip(f))(b);
      return function($285) {
        return $284(rev($285));
      };
    };
  },
  foldl: function(f) {
    var go = function($copy_b) {
      return function($copy_v) {
        var $tco_var_b = $copy_b;
        var $tco_done1 = false;
        var $tco_result;
        function $tco_loop(b, v) {
          if (v instanceof Nil) {
            $tco_done1 = true;
            return b;
          }
          ;
          if (v instanceof Cons) {
            $tco_var_b = f(b)(v.value0);
            $copy_v = v.value1;
            return;
          }
          ;
          throw new Error("Failed pattern match at Data.List.Types (line 111, column 12 - line 113, column 30): " + [v.constructor.name]);
        }
        ;
        while (!$tco_done1) {
          $tco_result = $tco_loop($tco_var_b, $copy_v);
        }
        ;
        return $tco_result;
      };
    };
    return go;
  },
  foldMap: function(dictMonoid) {
    var append22 = append(dictMonoid.Semigroup0());
    var mempty8 = mempty(dictMonoid);
    return function(f) {
      return foldl(foldableList)(function(acc) {
        var $286 = append22(acc);
        return function($287) {
          return $286(f($287));
        };
      })(mempty8);
    };
  }
};

// output/Data.List/index.js
var span = function(v) {
  return function(v1) {
    if (v1 instanceof Cons && v(v1.value0)) {
      var v2 = span(v)(v1.value1);
      return {
        init: new Cons(v1.value0, v2.init),
        rest: v2.rest
      };
    }
    ;
    return {
      init: Nil.value,
      rest: v1
    };
  };
};
var reverse2 = /* @__PURE__ */ function() {
  var go = function($copy_v) {
    return function($copy_v1) {
      var $tco_var_v = $copy_v;
      var $tco_done = false;
      var $tco_result;
      function $tco_loop(v, v1) {
        if (v1 instanceof Nil) {
          $tco_done = true;
          return v;
        }
        ;
        if (v1 instanceof Cons) {
          $tco_var_v = new Cons(v1.value0, v);
          $copy_v1 = v1.value1;
          return;
        }
        ;
        throw new Error("Failed pattern match at Data.List (line 368, column 3 - line 368, column 19): " + [v.constructor.name, v1.constructor.name]);
      }
      ;
      while (!$tco_done) {
        $tco_result = $tco_loop($tco_var_v, $copy_v1);
      }
      ;
      return $tco_result;
    };
  };
  return go(Nil.value);
}();
var $$null2 = function(v) {
  if (v instanceof Nil) {
    return true;
  }
  ;
  return false;
};
var fromFoldable2 = function(dictFoldable) {
  return foldr(dictFoldable)(Cons.create)(Nil.value);
};

// output/Data.String.CodeUnits/foreign.js
var fromCharArray = function(a) {
  return a.join("");
};
var toCharArray = function(s) {
  return s.split("");
};
var length3 = function(s) {
  return s.length;
};
var _indexOf = function(just) {
  return function(nothing) {
    return function(x) {
      return function(s) {
        var i = s.indexOf(x);
        return i === -1 ? nothing : just(i);
      };
    };
  };
};
var take = function(n) {
  return function(s) {
    return s.substr(0, n);
  };
};
var drop2 = function(n) {
  return function(s) {
    return s.substring(n);
  };
};

// output/Data.String.Unsafe/foreign.js
var charAt = function(i) {
  return function(s) {
    if (i >= 0 && i < s.length)
      return s.charAt(i);
    throw new Error("Data.String.Unsafe.charAt: Invalid index.");
  };
};

// output/Data.String.CodeUnits/index.js
var indexOf = /* @__PURE__ */ function() {
  return _indexOf(Just.create)(Nothing.value);
}();

// output/Data.String.CodePoints/foreign.js
var hasArrayFrom = typeof Array.from === "function";
var hasStringIterator = typeof Symbol !== "undefined" && Symbol != null && typeof Symbol.iterator !== "undefined" && typeof String.prototype[Symbol.iterator] === "function";
var hasFromCodePoint = typeof String.prototype.fromCodePoint === "function";
var hasCodePointAt = typeof String.prototype.codePointAt === "function";
var _unsafeCodePointAt0 = function(fallback) {
  return hasCodePointAt ? function(str2) {
    return str2.codePointAt(0);
  } : fallback;
};
var _toCodePointArray = function(fallback) {
  return function(unsafeCodePointAt02) {
    if (hasArrayFrom) {
      return function(str2) {
        return Array.from(str2, unsafeCodePointAt02);
      };
    }
    return fallback;
  };
};

// output/Data.Enum/foreign.js
function toCharCode(c) {
  return c.charCodeAt(0);
}
function fromCharCode(c) {
  return String.fromCharCode(c);
}

// output/Control.Alternative/index.js
var guard = function(dictAlternative) {
  var pure19 = pure(dictAlternative.Applicative0());
  var empty6 = empty(dictAlternative.Plus1());
  return function(v) {
    if (v) {
      return pure19(unit);
    }
    ;
    if (!v) {
      return empty6;
    }
    ;
    throw new Error("Failed pattern match at Control.Alternative (line 48, column 1 - line 48, column 54): " + [v.constructor.name]);
  };
};

// output/Data.Enum/index.js
var bottom1 = /* @__PURE__ */ bottom(boundedChar);
var top1 = /* @__PURE__ */ top(boundedChar);
var fromEnum = function(dict) {
  return dict.fromEnum;
};
var defaultSucc = function(toEnum$prime) {
  return function(fromEnum$prime) {
    return function(a) {
      return toEnum$prime(fromEnum$prime(a) + 1 | 0);
    };
  };
};
var defaultPred = function(toEnum$prime) {
  return function(fromEnum$prime) {
    return function(a) {
      return toEnum$prime(fromEnum$prime(a) - 1 | 0);
    };
  };
};
var charToEnum = function(v) {
  if (v >= toCharCode(bottom1) && v <= toCharCode(top1)) {
    return new Just(fromCharCode(v));
  }
  ;
  return Nothing.value;
};
var enumChar = {
  succ: /* @__PURE__ */ defaultSucc(charToEnum)(toCharCode),
  pred: /* @__PURE__ */ defaultPred(charToEnum)(toCharCode),
  Ord0: function() {
    return ordChar;
  }
};
var boundedEnumChar = /* @__PURE__ */ function() {
  return {
    cardinality: toCharCode(top1) - toCharCode(bottom1) | 0,
    toEnum: charToEnum,
    fromEnum: toCharCode,
    Bounded0: function() {
      return boundedChar;
    },
    Enum1: function() {
      return enumChar;
    }
  };
}();

// output/Data.String.CodePoints/index.js
var fromEnum2 = /* @__PURE__ */ fromEnum(boundedEnumChar);
var map4 = /* @__PURE__ */ map(functorMaybe);
var unfoldr2 = /* @__PURE__ */ unfoldr(unfoldableArray);
var unsurrogate = function(lead) {
  return function(trail) {
    return (((lead - 55296 | 0) * 1024 | 0) + (trail - 56320 | 0) | 0) + 65536 | 0;
  };
};
var isTrail = function(cu) {
  return 56320 <= cu && cu <= 57343;
};
var isLead = function(cu) {
  return 55296 <= cu && cu <= 56319;
};
var uncons2 = function(s) {
  var v = length3(s);
  if (v === 0) {
    return Nothing.value;
  }
  ;
  if (v === 1) {
    return new Just({
      head: fromEnum2(charAt(0)(s)),
      tail: ""
    });
  }
  ;
  var cu1 = fromEnum2(charAt(1)(s));
  var cu0 = fromEnum2(charAt(0)(s));
  var $43 = isLead(cu0) && isTrail(cu1);
  if ($43) {
    return new Just({
      head: unsurrogate(cu0)(cu1),
      tail: drop2(2)(s)
    });
  }
  ;
  return new Just({
    head: cu0,
    tail: drop2(1)(s)
  });
};
var unconsButWithTuple = function(s) {
  return map4(function(v) {
    return new Tuple(v.head, v.tail);
  })(uncons2(s));
};
var toCodePointArrayFallback = function(s) {
  return unfoldr2(unconsButWithTuple)(s);
};
var unsafeCodePointAt0Fallback = function(s) {
  var cu0 = fromEnum2(charAt(0)(s));
  var $47 = isLead(cu0) && length3(s) > 1;
  if ($47) {
    var cu1 = fromEnum2(charAt(1)(s));
    var $48 = isTrail(cu1);
    if ($48) {
      return unsurrogate(cu0)(cu1);
    }
    ;
    return cu0;
  }
  ;
  return cu0;
};
var unsafeCodePointAt0 = /* @__PURE__ */ _unsafeCodePointAt0(unsafeCodePointAt0Fallback);
var toCodePointArray = /* @__PURE__ */ _toCodePointArray(toCodePointArrayFallback)(unsafeCodePointAt0);
var length4 = function($74) {
  return length(toCodePointArray($74));
};
var indexOf2 = function(p) {
  return function(s) {
    return map4(function(i) {
      return length4(take(i)(s));
    })(indexOf(p)(s));
  };
};

// output/Data.String.Regex/foreign.js
var regexImpl = function(left) {
  return function(right) {
    return function(s1) {
      return function(s2) {
        try {
          return right(new RegExp(s1, s2));
        } catch (e) {
          return left(e.message);
        }
      };
    };
  };
};
var split2 = function(r) {
  return function(s) {
    return s.split(r);
  };
};

// output/Data.String.Regex.Flags/index.js
var noFlags = {
  global: false,
  ignoreCase: false,
  multiline: false,
  dotAll: false,
  sticky: false,
  unicode: false
};

// output/Data.String.Regex/index.js
var renderFlags = function(v) {
  return function() {
    if (v.global) {
      return "g";
    }
    ;
    return "";
  }() + (function() {
    if (v.ignoreCase) {
      return "i";
    }
    ;
    return "";
  }() + (function() {
    if (v.multiline) {
      return "m";
    }
    ;
    return "";
  }() + (function() {
    if (v.dotAll) {
      return "s";
    }
    ;
    return "";
  }() + (function() {
    if (v.sticky) {
      return "y";
    }
    ;
    return "";
  }() + function() {
    if (v.unicode) {
      return "u";
    }
    ;
    return "";
  }()))));
};
var regex = function(s) {
  return function(f) {
    return regexImpl(Left.create)(Right.create)(s)(renderFlags(f));
  };
};

// output/Partial.Unsafe/foreign.js
var _unsafePartial = function(f) {
  return f();
};

// output/Partial/foreign.js
var _crashWith = function(msg) {
  throw new Error(msg);
};

// output/Partial/index.js
var crashWith = function() {
  return _crashWith;
};

// output/Partial.Unsafe/index.js
var crashWith2 = /* @__PURE__ */ crashWith();
var unsafePartial = _unsafePartial;
var unsafeCrashWith = function(msg) {
  return unsafePartial(function() {
    return crashWith2(msg);
  });
};

// output/Options.Applicative.Internal.Utils/index.js
var eq3 = /* @__PURE__ */ eq(/* @__PURE__ */ eqMaybe(eqInt));
var whitespaceRegex = /* @__PURE__ */ function() {
  var v = regex("\\s+")(noFlags);
  if (v instanceof Left) {
    return unsafeCrashWith("whitespaceRegex: `\\s+` seems to be invlaid, err: " + v.value0);
  }
  ;
  if (v instanceof Right) {
    return v.value0;
  }
  ;
  throw new Error("Failed pattern match at Options.Applicative.Internal.Utils (line 39, column 19 - line 41, column 15): " + [v.constructor.name]);
}();
var words = function(v) {
  if (v === "") {
    return [];
  }
  ;
  return split2(whitespaceRegex)(v);
};
var unWords = function(dictFoldable) {
  return intercalate(dictFoldable)(monoidString)(" ");
};
var unLines = function(dictFoldable) {
  return intercalate(dictFoldable)(monoidString)("\n");
};
var startsWith = function(p) {
  return function(s) {
    return eq3(indexOf2(p)(s))(new Just(0));
  };
};
var lines = function(v) {
  if (v === "") {
    return [];
  }
  ;
  return split("\n")(v);
};
var apApplyFlipped = function(dictApply) {
  return lift2(dictApply)(applyFlipped);
};

// output/Control.Monad.Reader.Class/index.js
var ask = function(dict) {
  return dict.ask;
};

// output/Control.Monad.State.Class/index.js
var state = function(dict) {
  return dict.state;
};
var put = function(dictMonadState) {
  var state1 = state(dictMonadState);
  return function(s) {
    return state1(function(v) {
      return new Tuple(unit, s);
    });
  };
};
var modify_ = function(dictMonadState) {
  var state1 = state(dictMonadState);
  return function(f) {
    return state1(function(s) {
      return new Tuple(unit, f(s));
    });
  };
};
var get = function(dictMonadState) {
  return state(dictMonadState)(function(s) {
    return new Tuple(s, s);
  });
};

// output/Control.Monad.Trans.Class/index.js
var lift = function(dict) {
  return dict.lift;
};

// output/Effect.Class/index.js
var liftEffect = function(dict) {
  return dict.liftEffect;
};

// output/Control.Monad.Except.Trans/index.js
var map5 = /* @__PURE__ */ map(functorEither);
var ExceptT = function(x) {
  return x;
};
var withExceptT = function(dictFunctor) {
  var map110 = map(dictFunctor);
  return function(f) {
    return function(v) {
      var mapLeft = function(v1) {
        return function(v2) {
          if (v2 instanceof Right) {
            return new Right(v2.value0);
          }
          ;
          if (v2 instanceof Left) {
            return new Left(v1(v2.value0));
          }
          ;
          throw new Error("Failed pattern match at Control.Monad.Except.Trans (line 42, column 3 - line 42, column 32): " + [v1.constructor.name, v2.constructor.name]);
        };
      };
      return map110(mapLeft(f))(v);
    };
  };
};
var runExceptT = function(v) {
  return v;
};
var monadTransExceptT = {
  lift: function(dictMonad) {
    var bind11 = bind(dictMonad.Bind1());
    var pure19 = pure(dictMonad.Applicative0());
    return function(m) {
      return bind11(m)(function(a) {
        return pure19(new Right(a));
      });
    };
  }
};
var lift3 = /* @__PURE__ */ lift(monadTransExceptT);
var mapExceptT = function(f) {
  return function(v) {
    return f(v);
  };
};
var functorExceptT = function(dictFunctor) {
  var map110 = map(dictFunctor);
  return {
    map: function(f) {
      return mapExceptT(map110(map5(f)));
    }
  };
};
var monadExceptT = function(dictMonad) {
  return {
    Applicative0: function() {
      return applicativeExceptT(dictMonad);
    },
    Bind1: function() {
      return bindExceptT(dictMonad);
    }
  };
};
var bindExceptT = function(dictMonad) {
  var bind11 = bind(dictMonad.Bind1());
  var pure19 = pure(dictMonad.Applicative0());
  return {
    bind: function(v) {
      return function(k) {
        return bind11(v)(either(function($187) {
          return pure19(Left.create($187));
        })(function(a) {
          var v1 = k(a);
          return v1;
        }));
      };
    },
    Apply0: function() {
      return applyExceptT(dictMonad);
    }
  };
};
var applyExceptT = function(dictMonad) {
  var functorExceptT1 = functorExceptT(dictMonad.Bind1().Apply0().Functor0());
  return {
    apply: ap(monadExceptT(dictMonad)),
    Functor0: function() {
      return functorExceptT1;
    }
  };
};
var applicativeExceptT = function(dictMonad) {
  return {
    pure: function() {
      var $188 = pure(dictMonad.Applicative0());
      return function($189) {
        return ExceptT($188(Right.create($189)));
      };
    }(),
    Apply0: function() {
      return applyExceptT(dictMonad);
    }
  };
};
var monadEffectExceptT = function(dictMonadEffect) {
  var Monad0 = dictMonadEffect.Monad0();
  var monadExceptT1 = monadExceptT(Monad0);
  return {
    liftEffect: function() {
      var $190 = lift3(Monad0);
      var $191 = liftEffect(dictMonadEffect);
      return function($192) {
        return $190($191($192));
      };
    }(),
    Monad0: function() {
      return monadExceptT1;
    }
  };
};
var monadThrowExceptT = function(dictMonad) {
  var monadExceptT1 = monadExceptT(dictMonad);
  return {
    throwError: function() {
      var $198 = pure(dictMonad.Applicative0());
      return function($199) {
        return ExceptT($198(Left.create($199)));
      };
    }(),
    Monad0: function() {
      return monadExceptT1;
    }
  };
};
var monadErrorExceptT = function(dictMonad) {
  var bind11 = bind(dictMonad.Bind1());
  var pure19 = pure(dictMonad.Applicative0());
  var monadThrowExceptT1 = monadThrowExceptT(dictMonad);
  return {
    catchError: function(v) {
      return function(k) {
        return bind11(v)(either(function(a) {
          var v1 = k(a);
          return v1;
        })(function($200) {
          return pure19(Right.create($200));
        }));
      };
    },
    MonadThrow0: function() {
      return monadThrowExceptT1;
    }
  };
};
var altExceptT = function(dictSemigroup) {
  var append9 = append(dictSemigroup);
  return function(dictMonad) {
    var Bind1 = dictMonad.Bind1();
    var bind11 = bind(Bind1);
    var pure19 = pure(dictMonad.Applicative0());
    var functorExceptT1 = functorExceptT(Bind1.Apply0().Functor0());
    return {
      alt: function(v) {
        return function(v1) {
          return bind11(v)(function(rm2) {
            if (rm2 instanceof Right) {
              return pure19(new Right(rm2.value0));
            }
            ;
            if (rm2 instanceof Left) {
              return bind11(v1)(function(rn) {
                if (rn instanceof Right) {
                  return pure19(new Right(rn.value0));
                }
                ;
                if (rn instanceof Left) {
                  return pure19(new Left(append9(rm2.value0)(rn.value0)));
                }
                ;
                throw new Error("Failed pattern match at Control.Monad.Except.Trans (line 86, column 9 - line 88, column 49): " + [rn.constructor.name]);
              });
            }
            ;
            throw new Error("Failed pattern match at Control.Monad.Except.Trans (line 82, column 5 - line 88, column 49): " + [rm2.constructor.name]);
          });
        };
      },
      Functor0: function() {
        return functorExceptT1;
      }
    };
  };
};

// output/Data.CatQueue/index.js
var CatQueue = /* @__PURE__ */ function() {
  function CatQueue2(value0, value12) {
    this.value0 = value0;
    this.value1 = value12;
  }
  ;
  CatQueue2.create = function(value0) {
    return function(value12) {
      return new CatQueue2(value0, value12);
    };
  };
  return CatQueue2;
}();
var uncons3 = function($copy_v) {
  var $tco_done = false;
  var $tco_result;
  function $tco_loop(v) {
    if (v.value0 instanceof Nil && v.value1 instanceof Nil) {
      $tco_done = true;
      return Nothing.value;
    }
    ;
    if (v.value0 instanceof Nil) {
      $copy_v = new CatQueue(reverse2(v.value1), Nil.value);
      return;
    }
    ;
    if (v.value0 instanceof Cons) {
      $tco_done = true;
      return new Just(new Tuple(v.value0.value0, new CatQueue(v.value0.value1, v.value1)));
    }
    ;
    throw new Error("Failed pattern match at Data.CatQueue (line 82, column 1 - line 82, column 63): " + [v.constructor.name]);
  }
  ;
  while (!$tco_done) {
    $tco_result = $tco_loop($copy_v);
  }
  ;
  return $tco_result;
};
var snoc = function(v) {
  return function(a) {
    return new CatQueue(v.value0, new Cons(a, v.value1));
  };
};
var $$null3 = function(v) {
  if (v.value0 instanceof Nil && v.value1 instanceof Nil) {
    return true;
  }
  ;
  return false;
};
var empty2 = /* @__PURE__ */ function() {
  return new CatQueue(Nil.value, Nil.value);
}();

// output/Data.CatList/index.js
var CatNil = /* @__PURE__ */ function() {
  function CatNil2() {
  }
  ;
  CatNil2.value = new CatNil2();
  return CatNil2;
}();
var CatCons = /* @__PURE__ */ function() {
  function CatCons2(value0, value12) {
    this.value0 = value0;
    this.value1 = value12;
  }
  ;
  CatCons2.create = function(value0) {
    return function(value12) {
      return new CatCons2(value0, value12);
    };
  };
  return CatCons2;
}();
var link = function(v) {
  return function(v1) {
    if (v instanceof CatNil) {
      return v1;
    }
    ;
    if (v1 instanceof CatNil) {
      return v;
    }
    ;
    if (v instanceof CatCons) {
      return new CatCons(v.value0, snoc(v.value1)(v1));
    }
    ;
    throw new Error("Failed pattern match at Data.CatList (line 108, column 1 - line 108, column 54): " + [v.constructor.name, v1.constructor.name]);
  };
};
var foldr3 = function(k) {
  return function(b) {
    return function(q) {
      var foldl2 = function($copy_v) {
        return function($copy_v1) {
          return function($copy_v2) {
            var $tco_var_v = $copy_v;
            var $tco_var_v1 = $copy_v1;
            var $tco_done = false;
            var $tco_result;
            function $tco_loop(v, v1, v2) {
              if (v2 instanceof Nil) {
                $tco_done = true;
                return v1;
              }
              ;
              if (v2 instanceof Cons) {
                $tco_var_v = v;
                $tco_var_v1 = v(v1)(v2.value0);
                $copy_v2 = v2.value1;
                return;
              }
              ;
              throw new Error("Failed pattern match at Data.CatList (line 124, column 3 - line 124, column 59): " + [v.constructor.name, v1.constructor.name, v2.constructor.name]);
            }
            ;
            while (!$tco_done) {
              $tco_result = $tco_loop($tco_var_v, $tco_var_v1, $copy_v2);
            }
            ;
            return $tco_result;
          };
        };
      };
      var go = function($copy_xs) {
        return function($copy_ys) {
          var $tco_var_xs = $copy_xs;
          var $tco_done1 = false;
          var $tco_result;
          function $tco_loop(xs, ys) {
            var v = uncons3(xs);
            if (v instanceof Nothing) {
              $tco_done1 = true;
              return foldl2(function(x) {
                return function(i) {
                  return i(x);
                };
              })(b)(ys);
            }
            ;
            if (v instanceof Just) {
              $tco_var_xs = v.value0.value1;
              $copy_ys = new Cons(k(v.value0.value0), ys);
              return;
            }
            ;
            throw new Error("Failed pattern match at Data.CatList (line 120, column 14 - line 122, column 67): " + [v.constructor.name]);
          }
          ;
          while (!$tco_done1) {
            $tco_result = $tco_loop($tco_var_xs, $copy_ys);
          }
          ;
          return $tco_result;
        };
      };
      return go(q)(Nil.value);
    };
  };
};
var uncons4 = function(v) {
  if (v instanceof CatNil) {
    return Nothing.value;
  }
  ;
  if (v instanceof CatCons) {
    return new Just(new Tuple(v.value0, function() {
      var $66 = $$null3(v.value1);
      if ($66) {
        return CatNil.value;
      }
      ;
      return foldr3(link)(CatNil.value)(v.value1);
    }()));
  }
  ;
  throw new Error("Failed pattern match at Data.CatList (line 99, column 1 - line 99, column 61): " + [v.constructor.name]);
};
var empty3 = /* @__PURE__ */ function() {
  return CatNil.value;
}();
var append3 = link;
var semigroupCatList = {
  append: append3
};
var snoc2 = function(cat) {
  return function(a) {
    return append3(cat)(new CatCons(a, empty2));
  };
};

// output/Control.Monad.Free/index.js
var $runtime_lazy2 = function(name3, moduleName, init3) {
  var state2 = 0;
  var val;
  return function(lineNumber) {
    if (state2 === 2)
      return val;
    if (state2 === 1)
      throw new ReferenceError(name3 + " was needed before it finished initializing (module " + moduleName + ", line " + lineNumber + ")", moduleName, lineNumber);
    state2 = 1;
    val = init3();
    state2 = 2;
    return val;
  };
};
var append4 = /* @__PURE__ */ append(semigroupCatList);
var Free = /* @__PURE__ */ function() {
  function Free2(value0, value12) {
    this.value0 = value0;
    this.value1 = value12;
  }
  ;
  Free2.create = function(value0) {
    return function(value12) {
      return new Free2(value0, value12);
    };
  };
  return Free2;
}();
var Return = /* @__PURE__ */ function() {
  function Return2(value0) {
    this.value0 = value0;
  }
  ;
  Return2.create = function(value0) {
    return new Return2(value0);
  };
  return Return2;
}();
var Bind = /* @__PURE__ */ function() {
  function Bind2(value0, value12) {
    this.value0 = value0;
    this.value1 = value12;
  }
  ;
  Bind2.create = function(value0) {
    return function(value12) {
      return new Bind2(value0, value12);
    };
  };
  return Bind2;
}();
var toView = function($copy_v) {
  var $tco_done = false;
  var $tco_result;
  function $tco_loop(v) {
    var runExpF = function(v22) {
      return v22;
    };
    var concatF = function(v22) {
      return function(r) {
        return new Free(v22.value0, append4(v22.value1)(r));
      };
    };
    if (v.value0 instanceof Return) {
      var v2 = uncons4(v.value1);
      if (v2 instanceof Nothing) {
        $tco_done = true;
        return new Return(v.value0.value0);
      }
      ;
      if (v2 instanceof Just) {
        $copy_v = concatF(runExpF(v2.value0.value0)(v.value0.value0))(v2.value0.value1);
        return;
      }
      ;
      throw new Error("Failed pattern match at Control.Monad.Free (line 227, column 7 - line 231, column 64): " + [v2.constructor.name]);
    }
    ;
    if (v.value0 instanceof Bind) {
      $tco_done = true;
      return new Bind(v.value0.value0, function(a) {
        return concatF(v.value0.value1(a))(v.value1);
      });
    }
    ;
    throw new Error("Failed pattern match at Control.Monad.Free (line 225, column 3 - line 233, column 56): " + [v.value0.constructor.name]);
  }
  ;
  while (!$tco_done) {
    $tco_result = $tco_loop($copy_v);
  }
  ;
  return $tco_result;
};
var resume$prime = function(k) {
  return function(j) {
    return function(f) {
      var v = toView(f);
      if (v instanceof Return) {
        return j(v.value0);
      }
      ;
      if (v instanceof Bind) {
        return k(v.value0)(v.value1);
      }
      ;
      throw new Error("Failed pattern match at Control.Monad.Free (line 213, column 17 - line 215, column 20): " + [v.constructor.name]);
    };
  };
};
var fromView = function(f) {
  return new Free(f, empty3);
};
var freeMonad = {
  Applicative0: function() {
    return freeApplicative;
  },
  Bind1: function() {
    return freeBind;
  }
};
var freeFunctor = {
  map: function(k) {
    return function(f) {
      return bindFlipped(freeBind)(function() {
        var $189 = pure(freeApplicative);
        return function($190) {
          return $189(k($190));
        };
      }())(f);
    };
  }
};
var freeBind = {
  bind: function(v) {
    return function(k) {
      return new Free(v.value0, snoc2(v.value1)(k));
    };
  },
  Apply0: function() {
    return $lazy_freeApply(0);
  }
};
var freeApplicative = {
  pure: function($191) {
    return fromView(Return.create($191));
  },
  Apply0: function() {
    return $lazy_freeApply(0);
  }
};
var $lazy_freeApply = /* @__PURE__ */ $runtime_lazy2("freeApply", "Control.Monad.Free", function() {
  return {
    apply: ap(freeMonad),
    Functor0: function() {
      return freeFunctor;
    }
  };
});
var bind2 = /* @__PURE__ */ bind(freeBind);
var pure2 = /* @__PURE__ */ pure(freeApplicative);
var freeMonadRec = {
  tailRecM: function(k) {
    return function(a) {
      return bind2(k(a))(function(v) {
        if (v instanceof Loop) {
          return tailRecM(freeMonadRec)(k)(v.value0);
        }
        ;
        if (v instanceof Done) {
          return pure2(v.value0);
        }
        ;
        throw new Error("Failed pattern match at Control.Monad.Free (line 86, column 26 - line 88, column 21): " + [v.constructor.name]);
      });
    };
  },
  Monad0: function() {
    return freeMonad;
  }
};
var liftF = function(f) {
  return fromView(new Bind(f, function($192) {
    return pure2($192);
  }));
};

// output/Control.Monad.Reader.Trans/index.js
var ReaderT = function(x) {
  return x;
};
var runReaderT = function(v) {
  return v;
};
var monadTransReaderT = {
  lift: function(dictMonad) {
    return function($147) {
      return ReaderT($$const($147));
    };
  }
};
var lift4 = /* @__PURE__ */ lift(monadTransReaderT);
var mapReaderT = function(f) {
  return function(v) {
    return function($148) {
      return f(v($148));
    };
  };
};
var functorReaderT = function(dictFunctor) {
  return {
    map: function() {
      var $149 = map(dictFunctor);
      return function($150) {
        return mapReaderT($149($150));
      };
    }()
  };
};
var applyReaderT = function(dictApply) {
  var apply9 = apply(dictApply);
  var functorReaderT1 = functorReaderT(dictApply.Functor0());
  return {
    apply: function(v) {
      return function(v1) {
        return function(r) {
          return apply9(v(r))(v1(r));
        };
      };
    },
    Functor0: function() {
      return functorReaderT1;
    }
  };
};
var bindReaderT = function(dictBind) {
  var bind11 = bind(dictBind);
  var applyReaderT1 = applyReaderT(dictBind.Apply0());
  return {
    bind: function(v) {
      return function(k) {
        return function(r) {
          return bind11(v(r))(function(a) {
            var v1 = k(a);
            return v1(r);
          });
        };
      };
    },
    Apply0: function() {
      return applyReaderT1;
    }
  };
};
var applicativeReaderT = function(dictApplicative) {
  var applyReaderT1 = applyReaderT(dictApplicative.Apply0());
  return {
    pure: function() {
      var $154 = pure(dictApplicative);
      return function($155) {
        return ReaderT($$const($154($155)));
      };
    }(),
    Apply0: function() {
      return applyReaderT1;
    }
  };
};
var monadReaderT = function(dictMonad) {
  var applicativeReaderT1 = applicativeReaderT(dictMonad.Applicative0());
  var bindReaderT1 = bindReaderT(dictMonad.Bind1());
  return {
    Applicative0: function() {
      return applicativeReaderT1;
    },
    Bind1: function() {
      return bindReaderT1;
    }
  };
};
var monadAskReaderT = function(dictMonad) {
  var monadReaderT12 = monadReaderT(dictMonad);
  return {
    ask: pure(dictMonad.Applicative0()),
    Monad0: function() {
      return monadReaderT12;
    }
  };
};
var monadEffectReader = function(dictMonadEffect) {
  var Monad0 = dictMonadEffect.Monad0();
  var monadReaderT12 = monadReaderT(Monad0);
  return {
    liftEffect: function() {
      var $157 = lift4(Monad0);
      var $158 = liftEffect(dictMonadEffect);
      return function($159) {
        return $157($158($159));
      };
    }(),
    Monad0: function() {
      return monadReaderT12;
    }
  };
};
var monadThrowReaderT = function(dictMonadThrow) {
  var Monad0 = dictMonadThrow.Monad0();
  var monadReaderT12 = monadReaderT(Monad0);
  return {
    throwError: function() {
      var $166 = lift4(Monad0);
      var $167 = throwError(dictMonadThrow);
      return function($168) {
        return $166($167($168));
      };
    }(),
    Monad0: function() {
      return monadReaderT12;
    }
  };
};
var monadErrorReaderT = function(dictMonadError) {
  var catchError2 = catchError(dictMonadError);
  var monadThrowReaderT1 = monadThrowReaderT(dictMonadError.MonadThrow0());
  return {
    catchError: function(v) {
      return function(h) {
        return function(r) {
          return catchError2(v(r))(function(e) {
            var v1 = h(e);
            return v1(r);
          });
        };
      };
    },
    MonadThrow0: function() {
      return monadThrowReaderT1;
    }
  };
};

// output/Data.Exists/index.js
var runExists = unsafeCoerce2;
var mkExists = unsafeCoerce2;

// output/Data.Lazy/foreign.js
var defer2 = function(thunk) {
  var v = null;
  return function() {
    if (thunk === void 0)
      return v;
    v = thunk();
    thunk = void 0;
    return v;
  };
};
var force = function(l) {
  return l();
};

// output/Data.Lazy/index.js
var functorLazy = {
  map: function(f) {
    return function(l) {
      return defer2(function(v) {
        return f(force(l));
      });
    };
  }
};
var applyLazy = {
  apply: function(f) {
    return function(x) {
      return defer2(function(v) {
        return force(f)(force(x));
      });
    };
  },
  Functor0: function() {
    return functorLazy;
  }
};
var bindLazy = {
  bind: function(l) {
    return function(f) {
      return defer2(function(v) {
        return force(f(force(l)));
      });
    };
  },
  Apply0: function() {
    return applyLazy;
  }
};

// output/Text.PrettyPrint.Leijen/index.js
var max3 = /* @__PURE__ */ max(ordInt);
var min3 = /* @__PURE__ */ min(ordInt);
var foldr4 = /* @__PURE__ */ foldr(foldableArray);
var SFail = /* @__PURE__ */ function() {
  function SFail2() {
  }
  ;
  SFail2.value = new SFail2();
  return SFail2;
}();
var SEmpty = /* @__PURE__ */ function() {
  function SEmpty2() {
  }
  ;
  SEmpty2.value = new SEmpty2();
  return SEmpty2;
}();
var SChar = /* @__PURE__ */ function() {
  function SChar2(value0, value12) {
    this.value0 = value0;
    this.value1 = value12;
  }
  ;
  SChar2.create = function(value0) {
    return function(value12) {
      return new SChar2(value0, value12);
    };
  };
  return SChar2;
}();
var SText = /* @__PURE__ */ function() {
  function SText2(value0, value12, value22) {
    this.value0 = value0;
    this.value1 = value12;
    this.value2 = value22;
  }
  ;
  SText2.create = function(value0) {
    return function(value12) {
      return function(value22) {
        return new SText2(value0, value12, value22);
      };
    };
  };
  return SText2;
}();
var SLine = /* @__PURE__ */ function() {
  function SLine2(value0, value12) {
    this.value0 = value0;
    this.value1 = value12;
  }
  ;
  SLine2.create = function(value0) {
    return function(value12) {
      return new SLine2(value0, value12);
    };
  };
  return SLine2;
}();
var SFail$prime = /* @__PURE__ */ function() {
  function SFail$prime2() {
  }
  ;
  SFail$prime2.value = new SFail$prime2();
  return SFail$prime2;
}();
var SEmpty$prime = /* @__PURE__ */ function() {
  function SEmpty$prime2() {
  }
  ;
  SEmpty$prime2.value = new SEmpty$prime2();
  return SEmpty$prime2;
}();
var SChar$prime = /* @__PURE__ */ function() {
  function SChar$prime2(value0, value12) {
    this.value0 = value0;
    this.value1 = value12;
  }
  ;
  SChar$prime2.create = function(value0) {
    return function(value12) {
      return new SChar$prime2(value0, value12);
    };
  };
  return SChar$prime2;
}();
var SText$prime = /* @__PURE__ */ function() {
  function SText$prime2(value0, value12, value22) {
    this.value0 = value0;
    this.value1 = value12;
    this.value2 = value22;
  }
  ;
  SText$prime2.create = function(value0) {
    return function(value12) {
      return function(value22) {
        return new SText$prime2(value0, value12, value22);
      };
    };
  };
  return SText$prime2;
}();
var SLine$prime = /* @__PURE__ */ function() {
  function SLine$prime2(value0, value12) {
    this.value0 = value0;
    this.value1 = value12;
  }
  ;
  SLine$prime2.create = function(value0) {
    return function(value12) {
      return new SLine$prime2(value0, value12);
    };
  };
  return SLine$prime2;
}();
var Fail = /* @__PURE__ */ function() {
  function Fail2() {
  }
  ;
  Fail2.value = new Fail2();
  return Fail2;
}();
var Empty = /* @__PURE__ */ function() {
  function Empty2() {
  }
  ;
  Empty2.value = new Empty2();
  return Empty2;
}();
var Char = /* @__PURE__ */ function() {
  function Char2(value0) {
    this.value0 = value0;
  }
  ;
  Char2.create = function(value0) {
    return new Char2(value0);
  };
  return Char2;
}();
var Text = /* @__PURE__ */ function() {
  function Text2(value0, value12) {
    this.value0 = value0;
    this.value1 = value12;
  }
  ;
  Text2.create = function(value0) {
    return function(value12) {
      return new Text2(value0, value12);
    };
  };
  return Text2;
}();
var Line = /* @__PURE__ */ function() {
  function Line2() {
  }
  ;
  Line2.value = new Line2();
  return Line2;
}();
var FlatAlt = /* @__PURE__ */ function() {
  function FlatAlt2(value0, value12) {
    this.value0 = value0;
    this.value1 = value12;
  }
  ;
  FlatAlt2.create = function(value0) {
    return function(value12) {
      return new FlatAlt2(value0, value12);
    };
  };
  return FlatAlt2;
}();
var Cat = /* @__PURE__ */ function() {
  function Cat2(value0, value12) {
    this.value0 = value0;
    this.value1 = value12;
  }
  ;
  Cat2.create = function(value0) {
    return function(value12) {
      return new Cat2(value0, value12);
    };
  };
  return Cat2;
}();
var Nest = /* @__PURE__ */ function() {
  function Nest2(value0, value12) {
    this.value0 = value0;
    this.value1 = value12;
  }
  ;
  Nest2.create = function(value0) {
    return function(value12) {
      return new Nest2(value0, value12);
    };
  };
  return Nest2;
}();
var Union = /* @__PURE__ */ function() {
  function Union2(value0, value12) {
    this.value0 = value0;
    this.value1 = value12;
  }
  ;
  Union2.create = function(value0) {
    return function(value12) {
      return new Union2(value0, value12);
    };
  };
  return Union2;
}();
var Column = /* @__PURE__ */ function() {
  function Column2(value0) {
    this.value0 = value0;
  }
  ;
  Column2.create = function(value0) {
    return new Column2(value0);
  };
  return Column2;
}();
var Columns = /* @__PURE__ */ function() {
  function Columns2(value0) {
    this.value0 = value0;
  }
  ;
  Columns2.create = function(value0) {
    return new Columns2(value0);
  };
  return Columns2;
}();
var Nesting = /* @__PURE__ */ function() {
  function Nesting2(value0) {
    this.value0 = value0;
  }
  ;
  Nesting2.create = function(value0) {
    return new Nesting2(value0);
  };
  return Nesting2;
}();
var Nil3 = /* @__PURE__ */ function() {
  function Nil4() {
  }
  ;
  Nil4.value = new Nil4();
  return Nil4;
}();
var Cons3 = /* @__PURE__ */ function() {
  function Cons4(value0, value12, value22) {
    this.value0 = value0;
    this.value1 = value12;
    this.value2 = value22;
  }
  ;
  Cons4.create = function(value0) {
    return function(value12) {
      return function(value22) {
        return new Cons4(value0, value12, value22);
      };
    };
  };
  return Cons4;
}();
var text = function(v) {
  if (v === "") {
    return Empty.value;
  }
  ;
  return new Text(length4(v), v);
};
var spaces = function(n) {
  if (n <= 0) {
    return "";
  }
  ;
  if (otherwise) {
    return fromCharArray(replicate(n)(" "));
  }
  ;
  throw new Error("Failed pattern match at Text.PrettyPrint.Leijen (line 908, column 1 - line 908, column 24): " + [n.constructor.name]);
};
var space = /* @__PURE__ */ function() {
  return new Char(" ");
}();
var rparen = /* @__PURE__ */ function() {
  return new Char(")");
}();
var rbracket = /* @__PURE__ */ function() {
  return new Char("]");
}();
var nesting = function(f) {
  return new Nesting(f);
};
var nest = function(i) {
  return function(x) {
    return new Nest(i, x);
  };
};
var lparen = /* @__PURE__ */ function() {
  return new Char("(");
}();
var line = /* @__PURE__ */ function() {
  return new FlatAlt(Line.value, space);
}();
var lbracket = /* @__PURE__ */ function() {
  return new Char("[");
}();
var indentation = function(n) {
  return spaces(n);
};
var forceSimpleDoc = function(v) {
  if (v instanceof SFail$prime) {
    return SFail.value;
  }
  ;
  if (v instanceof SEmpty$prime) {
    return SEmpty.value;
  }
  ;
  if (v instanceof SChar$prime) {
    return new SChar(v.value0, forceSimpleDoc(force(v.value1)));
  }
  ;
  if (v instanceof SText$prime) {
    return new SText(v.value0, v.value1, forceSimpleDoc(force(v.value2)));
  }
  ;
  if (v instanceof SLine$prime) {
    return new SLine(v.value0, forceSimpleDoc(force(v.value1)));
  }
  ;
  throw new Error("Failed pattern match at Text.PrettyPrint.Leijen (line 600, column 18 - line 605, column 51): " + [v.constructor.name]);
};
var renderFits = function(fits) {
  return function(rfrac) {
    return function(w) {
      return function(headNode) {
        var r = max3(0)(min3(w)(round2(toNumber(w) * rfrac)));
        var nicest$prime = function(n) {
          return function(k) {
            return function(i) {
              return function(ds) {
                return function(x) {
                  return function(y) {
                    var x$prime = best(n)(k)(new Cons3(i, x, ds));
                    var width$prime = min3(w - k | 0)((r - k | 0) + n | 0);
                    var $221 = fits(w)(min3(n)(k))(width$prime)(x$prime);
                    if ($221) {
                      return x$prime;
                    }
                    ;
                    var y$prime = best(n)(k)(new Cons3(i, y, ds));
                    return y$prime;
                  };
                };
              };
            };
          };
        };
        var best = function(v) {
          return function(v1) {
            return function(v2) {
              if (v2 instanceof Nil3) {
                return SEmpty$prime.value;
              }
              ;
              if (v2 instanceof Cons3) {
                if (v2.value1 instanceof Fail) {
                  return SFail$prime.value;
                }
                ;
                if (v2.value1 instanceof Empty) {
                  return best(v)(v1)(v2.value2);
                }
                ;
                if (v2.value1 instanceof Char) {
                  var k$prime = v1 + 1 | 0;
                  return new SChar$prime(v2.value1.value0, defer2(function(v3) {
                    return best(v)(k$prime)(v2.value2);
                  }));
                }
                ;
                if (v2.value1 instanceof Text) {
                  var k$prime = v1 + v2.value1.value0 | 0;
                  return new SText$prime(v2.value1.value0, v2.value1.value1, defer2(function(v3) {
                    return best(v)(k$prime)(v2.value2);
                  }));
                }
                ;
                if (v2.value1 instanceof Line) {
                  return new SLine$prime(v2.value0, defer2(function(v3) {
                    return best(v2.value0)(v2.value0)(v2.value2);
                  }));
                }
                ;
                if (v2.value1 instanceof FlatAlt) {
                  return best(v)(v1)(new Cons3(v2.value0, v2.value1.value0, v2.value2));
                }
                ;
                if (v2.value1 instanceof Cat) {
                  return best(v)(v1)(new Cons3(v2.value0, v2.value1.value0, new Cons3(v2.value0, v2.value1.value1, v2.value2)));
                }
                ;
                if (v2.value1 instanceof Nest) {
                  var i$prime = v2.value0 + v2.value1.value0 | 0;
                  return best(v)(v1)(new Cons3(i$prime, v2.value1.value1, v2.value2));
                }
                ;
                if (v2.value1 instanceof Union) {
                  return nicest$prime(v)(v1)(v2.value0)(v2.value2)(v2.value1.value0)(v2.value1.value1);
                }
                ;
                if (v2.value1 instanceof Column) {
                  return best(v)(v1)(new Cons3(v2.value0, v2.value1.value0(v1), v2.value2));
                }
                ;
                if (v2.value1 instanceof Columns) {
                  return best(v)(v1)(new Cons3(v2.value0, v2.value1.value0(new Just(w)), v2.value2));
                }
                ;
                if (v2.value1 instanceof Nesting) {
                  return best(v)(v1)(new Cons3(v2.value0, v2.value1.value0(v2.value0), v2.value2));
                }
                ;
                throw new Error("Failed pattern match at Text.PrettyPrint.Leijen (line 788, column 11 - line 802, column 56): " + [v2.value1.constructor.name]);
              }
              ;
              throw new Error("Failed pattern match at Text.PrettyPrint.Leijen (line 785, column 7 - line 785, column 50): " + [v.constructor.name, v1.constructor.name, v2.constructor.name]);
            };
          };
        };
        return forceSimpleDoc(best(0)(0)(new Cons3(0, headNode, Nil3.value)));
      };
    };
  };
};
var foldr1 = function(dictMonoid) {
  var mempty8 = mempty(dictMonoid);
  return function(f) {
    return function($297) {
      return function(v) {
        if (v instanceof Nothing) {
          return mempty8;
        }
        ;
        if (v instanceof Just) {
          return foldr4(f)(v.value0.last)(v.value0.init);
        }
        ;
        throw new Error("Failed pattern match at Text.PrettyPrint.Leijen (line 122, column 29 - line 124, column 43): " + [v.constructor.name]);
      }(unsnoc($297));
    };
  };
};
var flatten = function(v) {
  if (v instanceof FlatAlt) {
    return v.value1;
  }
  ;
  if (v instanceof Cat) {
    return new Cat(flatten(v.value0), flatten(v.value1));
  }
  ;
  if (v instanceof Nest) {
    return new Nest(v.value0, flatten(v.value1));
  }
  ;
  if (v instanceof Line) {
    return Fail.value;
  }
  ;
  if (v instanceof Union) {
    return flatten(v.value0);
  }
  ;
  if (v instanceof Column) {
    return new Column(function($298) {
      return flatten(v.value0($298));
    });
  }
  ;
  if (v instanceof Columns) {
    return new Columns(function($299) {
      return flatten(v.value0($299));
    });
  }
  ;
  if (v instanceof Nesting) {
    return new Nesting(function($300) {
      return flatten(v.value0($300));
    });
  }
  ;
  return v;
};
var group2 = function(x) {
  return new Union(flatten(x), x);
};
var softline = /* @__PURE__ */ group2(line);
var fits1 = function($copy_v) {
  return function($copy_v1) {
    return function($copy_v2) {
      return function($copy_v3) {
        var $tco_var_v = $copy_v;
        var $tco_var_v1 = $copy_v1;
        var $tco_var_v2 = $copy_v2;
        var $tco_done = false;
        var $tco_result;
        function $tco_loop(v, v1, v2, v3) {
          if (v2 < 0) {
            $tco_done = true;
            return false;
          }
          ;
          if (v3 instanceof SFail$prime) {
            $tco_done = true;
            return false;
          }
          ;
          if (v3 instanceof SEmpty$prime) {
            $tco_done = true;
            return true;
          }
          ;
          if (v3 instanceof SChar$prime) {
            $tco_var_v = v;
            $tco_var_v1 = v1;
            $tco_var_v2 = v2 - 1 | 0;
            $copy_v3 = force(v3.value1);
            return;
          }
          ;
          if (v3 instanceof SText$prime) {
            $tco_var_v = v;
            $tco_var_v1 = v1;
            $tco_var_v2 = v2 - v3.value0 | 0;
            $copy_v3 = force(v3.value2);
            return;
          }
          ;
          if (v3 instanceof SLine$prime) {
            $tco_done = true;
            return true;
          }
          ;
          throw new Error("Failed pattern match at Text.PrettyPrint.Leijen (line 819, column 1 - line 819, column 55): " + [v.constructor.name, v1.constructor.name, v2.constructor.name, v3.constructor.name]);
        }
        ;
        while (!$tco_done) {
          $tco_result = $tco_loop($tco_var_v, $tco_var_v1, $tco_var_v2, $copy_v3);
        }
        ;
        return $tco_result;
      };
    };
  };
};
var renderPretty = /* @__PURE__ */ renderFits(fits1);
var empty4 = /* @__PURE__ */ function() {
  return Empty.value;
}();
var linebreak = /* @__PURE__ */ function() {
  return new FlatAlt(Line.value, empty4);
}();
var displayS = function(v) {
  if (v instanceof SFail) {
    return unsafeCrashWith("@SFail@ can not appear uncaught in a rendered @SimpleDoc@");
  }
  ;
  if (v instanceof SEmpty) {
    return "";
  }
  ;
  if (v instanceof SChar) {
    return fromCharArray([v.value0]) + displayS(v.value1);
  }
  ;
  if (v instanceof SText) {
    return v.value1 + displayS(v.value2);
  }
  ;
  if (v instanceof SLine) {
    return "\n" + (indentation(v.value0) + displayS(v.value1));
  }
  ;
  throw new Error("Failed pattern match at Text.PrettyPrint.Leijen (line 893, column 1 - line 893, column 32): " + [v.constructor.name]);
};
var column = function(f) {
  return new Column(f);
};
var $$char = function(v) {
  if (v === "\n") {
    return line;
  }
  ;
  return new Char(v);
};
var beside = function(x) {
  return function(y) {
    return new Cat(x, y);
  };
};
var docSemigroup = {
  append: beside
};
var append1 = /* @__PURE__ */ append(docSemigroup);
var docMonoid = {
  mempty: empty4,
  Semigroup0: function() {
    return docSemigroup;
  }
};
var foldr11 = /* @__PURE__ */ foldr1(docMonoid);
var string = /* @__PURE__ */ function() {
  var $303 = intercalate(foldableArray)(docMonoid)(line);
  var $304 = map(functorArray)(text);
  var $305 = split("\n");
  return function($306) {
    return $303($304($305($306)));
  };
}();
var enclose = function(l) {
  return function(r) {
    return function(x) {
      return append1(l)(append1(x)(r));
    };
  };
};
var brackets = /* @__PURE__ */ enclose(lbracket)(rbracket);
var parens = /* @__PURE__ */ enclose(lparen)(rparen);
var width = function(d) {
  return function(f) {
    return column(function(k1) {
      return append1(d)(column(function(k2) {
        return f(k2 - k1 | 0);
      }));
    });
  };
};
var fillBreak = function(f) {
  return function(x) {
    return width(x)(function(w) {
      var $292 = w > f;
      if ($292) {
        return nest(f)(linebreak);
      }
      ;
      return text(spaces(f - w | 0));
    });
  };
};
var appendWithSpace = function(x) {
  return function(y) {
    return append1(x)(append1(space)(y));
  };
};
var hsep = /* @__PURE__ */ foldr11(appendWithSpace);
var appendWithSoftline = function(x) {
  return function(y) {
    return append1(x)(append1(softline)(y));
  };
};
var appendWithLinebreak = function(x) {
  return function(y) {
    return append1(x)(append1(linebreak)(y));
  };
};
var vcat = /* @__PURE__ */ foldr11(appendWithLinebreak);
var appendWithLine = function(x) {
  return function(y) {
    return append1(x)(append1(line)(y));
  };
};
var align = function(d) {
  return column(function(k) {
    return nesting(function(i) {
      return nest(k - i | 0)(d);
    });
  });
};
var hang = function(i) {
  return function(d) {
    return align(nest(i)(d));
  };
};
var indent = function(i) {
  return function(d) {
    return hang(i)(append1(text(spaces(i)))(d));
  };
};

// output/Options.Applicative.Help.Chunk/index.js
var un2 = /* @__PURE__ */ un();
var foldr5 = /* @__PURE__ */ foldr(foldableArray);
var mempty2 = /* @__PURE__ */ mempty(docMonoid);
var fold3 = /* @__PURE__ */ fold(foldableArray);
var mapFlipped2 = /* @__PURE__ */ mapFlipped(functorArray);
var Chunk = function(x) {
  return x;
};
var chunked = function(v) {
  return function(v1) {
    return function(v2) {
      if (v1 instanceof Nothing) {
        return v2;
      }
      ;
      if (v2 instanceof Nothing) {
        return v1;
      }
      ;
      if (v1 instanceof Just && v2 instanceof Just) {
        return new Just(v(v1.value0)(v2.value0));
      }
      ;
      throw new Error("Failed pattern match at Options.Applicative.Help.Chunk (line 57, column 1 - line 58, column 41): " + [v.constructor.name, v1.constructor.name, v2.constructor.name]);
    };
  };
};
var chunkSemigroup = function(dictSemigroup) {
  return {
    append: chunked(append(dictSemigroup))
  };
};
var extractChunk = function(dictMonoid) {
  var $56 = fromMaybe(mempty(dictMonoid));
  var $57 = un2(Chunk);
  return function($58) {
    return $56($57($58));
  };
};
var isEmpty = /* @__PURE__ */ function() {
  var $59 = un2(Chunk);
  return function($60) {
    return isNothing($59($60));
  };
}();
var chunkMonoid = function(dictSemigroup) {
  var chunkSemigroup1 = chunkSemigroup(dictSemigroup);
  return {
    mempty: Nothing.value,
    Semigroup0: function() {
      return chunkSemigroup1;
    }
  };
};
var mempty1 = /* @__PURE__ */ mempty(/* @__PURE__ */ chunkMonoid(docSemigroup));
var vcatChunks = /* @__PURE__ */ foldr5(/* @__PURE__ */ chunked(appendWithLine))(mempty1);
var vsepChunks = /* @__PURE__ */ foldr5(/* @__PURE__ */ chunked(function(x) {
  return function(y) {
    return appendWithLine(x)(appendWithLine(mempty2)(y));
  };
}))(mempty1);
var chunkFunctor = functorMaybe;
var chunkBesideOrBelow = /* @__PURE__ */ chunked(appendWithSoftline);
var chunkBeside = /* @__PURE__ */ chunked(appendWithSpace);
var chunkApply = applyMaybe;
var chunkApplicative = applicativeMaybe;
var pure3 = /* @__PURE__ */ pure(chunkApplicative);
var listToChunk = function(dictMonoid) {
  var mempty24 = mempty(chunkMonoid(dictMonoid.Semigroup0()));
  var fold14 = fold3(dictMonoid);
  return function(v) {
    if (v.length === 0) {
      return mempty24;
    }
    ;
    return pure3(fold14(v));
  };
};
var stringChunk = function(v) {
  if (v === "") {
    return mempty1;
  }
  ;
  return pure3(text(v));
};
var paragraph = /* @__PURE__ */ function() {
  var $61 = foldr5(function() {
    var $63 = chunked(appendWithSoftline);
    return function($64) {
      return $63(stringChunk($64));
    };
  }())(mempty1);
  return function($62) {
    return $61(words($62));
  };
}();
var tabulate$prime = function(v) {
  return function(v1) {
    if (v1.length === 0) {
      return mempty1;
    }
    ;
    return pure3(vcat(mapFlipped2(v1)(function(v2) {
      return indent(2)(appendWithSpace(fillBreak(v)(v2.value0))(v2.value1));
    })));
  };
};
var tabulate = /* @__PURE__ */ tabulate$prime(24);

// output/Options.Applicative.Help.Types/index.js
var helpBodyIsSymbol = {
  reflectSymbol: function() {
    return "helpBody";
  }
};
var helpErrorIsSymbol = {
  reflectSymbol: function() {
    return "helpError";
  }
};
var helpFooterIsSymbol = {
  reflectSymbol: function() {
    return "helpFooter";
  }
};
var helpHeaderIsSymbol = {
  reflectSymbol: function() {
    return "helpHeader";
  }
};
var helpSuggestionsIsSymbol = {
  reflectSymbol: function() {
    return "helpSuggestions";
  }
};
var helpUsageIsSymbol = {
  reflectSymbol: function() {
    return "helpUsage";
  }
};
var chunkMonoid2 = /* @__PURE__ */ chunkMonoid(docSemigroup);
var extractChunk2 = /* @__PURE__ */ extractChunk(docMonoid);
var ParserHelp = function(x) {
  return x;
};
var parserHelpMonoid = /* @__PURE__ */ monoidRecord()(/* @__PURE__ */ monoidRecordCons(helpBodyIsSymbol)(chunkMonoid2)()(/* @__PURE__ */ monoidRecordCons(helpErrorIsSymbol)(chunkMonoid2)()(/* @__PURE__ */ monoidRecordCons(helpFooterIsSymbol)(chunkMonoid2)()(/* @__PURE__ */ monoidRecordCons(helpHeaderIsSymbol)(chunkMonoid2)()(/* @__PURE__ */ monoidRecordCons(helpSuggestionsIsSymbol)(chunkMonoid2)()(/* @__PURE__ */ monoidRecordCons(helpUsageIsSymbol)(chunkMonoid2)()(monoidRecordNil)))))));
var helpText = function(v) {
  return extractChunk2(vsepChunks([v.helpError, v.helpSuggestions, v.helpHeader, v.helpUsage, v.helpBody, v.helpFooter]));
};
var renderHelp = function(cols) {
  var $65 = renderPretty(1)(cols);
  return function($66) {
    return displayS($65(helpText($66)));
  };
};

// output/Options.Applicative.Types/index.js
var monadExceptT2 = /* @__PURE__ */ monadExceptT(monadIdentity);
var map6 = /* @__PURE__ */ map(/* @__PURE__ */ functorReaderT(/* @__PURE__ */ functorExceptT(functorIdentity)));
var apply3 = /* @__PURE__ */ apply(/* @__PURE__ */ applyReaderT(/* @__PURE__ */ applyExceptT(monadIdentity)));
var bind3 = /* @__PURE__ */ bind(/* @__PURE__ */ bindReaderT(/* @__PURE__ */ bindExceptT(monadIdentity)));
var un3 = /* @__PURE__ */ un();
var map12 = /* @__PURE__ */ map(functorMaybe);
var compare2 = /* @__PURE__ */ compare(ordChar);
var compare12 = /* @__PURE__ */ compare(ordString);
var apply1 = /* @__PURE__ */ apply(applyEffect);
var map22 = /* @__PURE__ */ map(functorEffect);
var append12 = /* @__PURE__ */ append(semigroupArray);
var pure4 = /* @__PURE__ */ pure(applicativeEffect);
var over2 = /* @__PURE__ */ over()();
var map32 = /* @__PURE__ */ map(freeFunctor);
var bimap2 = /* @__PURE__ */ bimap(bifunctorStep);
var ParserFailure = function(x) {
  return x;
};
var Internal = /* @__PURE__ */ function() {
  function Internal2() {
  }
  ;
  Internal2.value = new Internal2();
  return Internal2;
}();
var Hidden = /* @__PURE__ */ function() {
  function Hidden2() {
  }
  ;
  Hidden2.value = new Hidden2();
  return Hidden2;
}();
var Visible = /* @__PURE__ */ function() {
  function Visible2() {
  }
  ;
  Visible2.value = new Visible2();
  return Visible2;
}();
var Leaf = /* @__PURE__ */ function() {
  function Leaf2(value0) {
    this.value0 = value0;
  }
  ;
  Leaf2.create = function(value0) {
    return new Leaf2(value0);
  };
  return Leaf2;
}();
var MultNode = /* @__PURE__ */ function() {
  function MultNode2(value0) {
    this.value0 = value0;
  }
  ;
  MultNode2.create = function(value0) {
    return new MultNode2(value0);
  };
  return MultNode2;
}();
var AltNode = /* @__PURE__ */ function() {
  function AltNode2(value0) {
    this.value0 = value0;
  }
  ;
  AltNode2.create = function(value0) {
    return new AltNode2(value0);
  };
  return AltNode2;
}();
var OptProperties = function(x) {
  return x;
};
var OptShort = /* @__PURE__ */ function() {
  function OptShort2(value0) {
    this.value0 = value0;
  }
  ;
  OptShort2.create = function(value0) {
    return new OptShort2(value0);
  };
  return OptShort2;
}();
var OptLong = /* @__PURE__ */ function() {
  function OptLong2(value0) {
    this.value0 = value0;
  }
  ;
  OptLong2.create = function(value0) {
    return new OptLong2(value0);
  };
  return OptLong2;
}();
var OptHelpInfo = function(x) {
  return x;
};
var CmdStart = /* @__PURE__ */ function() {
  function CmdStart2() {
  }
  ;
  CmdStart2.value = new CmdStart2();
  return CmdStart2;
}();
var CmdCont = /* @__PURE__ */ function() {
  function CmdCont2() {
  }
  ;
  CmdCont2.value = new CmdCont2();
  return CmdCont2;
}();
var CompletionResult = function(x) {
  return x;
};
var Success2 = /* @__PURE__ */ function() {
  function Success3(value0) {
    this.value0 = value0;
  }
  ;
  Success3.create = function(value0) {
    return new Success3(value0);
  };
  return Success3;
}();
var Failure = /* @__PURE__ */ function() {
  function Failure2(value0) {
    this.value0 = value0;
  }
  ;
  Failure2.create = function(value0) {
    return new Failure2(value0);
  };
  return Failure2;
}();
var CompletionInvoked = /* @__PURE__ */ function() {
  function CompletionInvoked2(value0) {
    this.value0 = value0;
  }
  ;
  CompletionInvoked2.create = function(value0) {
    return new CompletionInvoked2(value0);
  };
  return CompletionInvoked2;
}();
var Completer = function(x) {
  return x;
};
var Backtrack = /* @__PURE__ */ function() {
  function Backtrack2() {
  }
  ;
  Backtrack2.value = new Backtrack2();
  return Backtrack2;
}();
var NoBacktrack = /* @__PURE__ */ function() {
  function NoBacktrack2() {
  }
  ;
  NoBacktrack2.value = new NoBacktrack2();
  return NoBacktrack2;
}();
var SubparserInline = /* @__PURE__ */ function() {
  function SubparserInline2() {
  }
  ;
  SubparserInline2.value = new SubparserInline2();
  return SubparserInline2;
}();
var ParserPrefs = function(x) {
  return x;
};
var Intersperse = /* @__PURE__ */ function() {
  function Intersperse2() {
  }
  ;
  Intersperse2.value = new Intersperse2();
  return Intersperse2;
}();
var NoIntersperse = /* @__PURE__ */ function() {
  function NoIntersperse2() {
  }
  ;
  NoIntersperse2.value = new NoIntersperse2();
  return NoIntersperse2;
}();
var AllPositionals = /* @__PURE__ */ function() {
  function AllPositionals2() {
  }
  ;
  AllPositionals2.value = new AllPositionals2();
  return AllPositionals2;
}();
var ForwardOptions = /* @__PURE__ */ function() {
  function ForwardOptions2() {
  }
  ;
  ForwardOptions2.value = new ForwardOptions2();
  return ForwardOptions2;
}();
var ParserInfo = function(x) {
  return x;
};
var NilP = /* @__PURE__ */ function() {
  function NilP2(value0) {
    this.value0 = value0;
  }
  ;
  NilP2.create = function(value0) {
    return new NilP2(value0);
  };
  return NilP2;
}();
var OptP = /* @__PURE__ */ function() {
  function OptP2(value0) {
    this.value0 = value0;
  }
  ;
  OptP2.create = function(value0) {
    return new OptP2(value0);
  };
  return OptP2;
}();
var MultP = /* @__PURE__ */ function() {
  function MultP2(value0) {
    this.value0 = value0;
  }
  ;
  MultP2.create = function(value0) {
    return new MultP2(value0);
  };
  return MultP2;
}();
var AltP = /* @__PURE__ */ function() {
  function AltP2(value0, value12) {
    this.value0 = value0;
    this.value1 = value12;
  }
  ;
  AltP2.create = function(value0) {
    return function(value12) {
      return new AltP2(value0, value12);
    };
  };
  return AltP2;
}();
var BindP = /* @__PURE__ */ function() {
  function BindP2(value0) {
    this.value0 = value0;
  }
  ;
  BindP2.create = function(value0) {
    return new BindP2(value0);
  };
  return BindP2;
}();
var Option = function(x) {
  return x;
};
var OptReader = /* @__PURE__ */ function() {
  function OptReader2(value0, value12, value22) {
    this.value0 = value0;
    this.value1 = value12;
    this.value2 = value22;
  }
  ;
  OptReader2.create = function(value0) {
    return function(value12) {
      return function(value22) {
        return new OptReader2(value0, value12, value22);
      };
    };
  };
  return OptReader2;
}();
var FlagReader = /* @__PURE__ */ function() {
  function FlagReader2(value0, value12) {
    this.value0 = value0;
    this.value1 = value12;
  }
  ;
  FlagReader2.create = function(value0) {
    return function(value12) {
      return new FlagReader2(value0, value12);
    };
  };
  return FlagReader2;
}();
var ArgReader = /* @__PURE__ */ function() {
  function ArgReader2(value0) {
    this.value0 = value0;
  }
  ;
  ArgReader2.create = function(value0) {
    return new ArgReader2(value0);
  };
  return ArgReader2;
}();
var CmdReader = /* @__PURE__ */ function() {
  function CmdReader2(value0, value12, value22) {
    this.value0 = value0;
    this.value1 = value12;
    this.value2 = value22;
  }
  ;
  CmdReader2.create = function(value0) {
    return function(value12) {
      return function(value22) {
        return new CmdReader2(value0, value12, value22);
      };
    };
  };
  return CmdReader2;
}();
var CReader = function(x) {
  return x;
};
var ReadM = function(x) {
  return x;
};
var ErrorMsg = /* @__PURE__ */ function() {
  function ErrorMsg2(value0) {
    this.value0 = value0;
  }
  ;
  ErrorMsg2.create = function(value0) {
    return new ErrorMsg2(value0);
  };
  return ErrorMsg2;
}();
var InfoMsg = /* @__PURE__ */ function() {
  function InfoMsg2(value0) {
    this.value0 = value0;
  }
  ;
  InfoMsg2.create = function(value0) {
    return new InfoMsg2(value0);
  };
  return InfoMsg2;
}();
var ShowHelpText = /* @__PURE__ */ function() {
  function ShowHelpText2() {
  }
  ;
  ShowHelpText2.value = new ShowHelpText2();
  return ShowHelpText2;
}();
var MissingError = /* @__PURE__ */ function() {
  function MissingError2(value0, value12) {
    this.value0 = value0;
    this.value1 = value12;
  }
  ;
  MissingError2.create = function(value0) {
    return function(value12) {
      return new MissingError2(value0, value12);
    };
  };
  return MissingError2;
}();
var ExpectsArgError = /* @__PURE__ */ function() {
  function ExpectsArgError2(value0) {
    this.value0 = value0;
  }
  ;
  ExpectsArgError2.create = function(value0) {
    return new ExpectsArgError2(value0);
  };
  return ExpectsArgError2;
}();
var UnexpectedError = /* @__PURE__ */ function() {
  function UnexpectedError2(value0, value12) {
    this.value0 = value0;
    this.value1 = value12;
  }
  ;
  UnexpectedError2.create = function(value0) {
    return function(value12) {
      return new UnexpectedError2(value0, value12);
    };
  };
  return UnexpectedError2;
}();
var SomeParser = /* @__PURE__ */ function() {
  function SomeParser2(value0) {
    this.value0 = value0;
  }
  ;
  SomeParser2.create = function(value0) {
    return new SomeParser2(value0);
  };
  return SomeParser2;
}();
var MultPE = /* @__PURE__ */ function() {
  function MultPE2(value0, value12) {
    this.value0 = value0;
    this.value1 = value12;
  }
  ;
  MultPE2.create = function(value0) {
    return function(value12) {
      return new MultPE2(value0, value12);
    };
  };
  return MultPE2;
}();
var Context = /* @__PURE__ */ function() {
  function Context2(value0, value12) {
    this.value0 = value0;
    this.value1 = value12;
  }
  ;
  Context2.create = function(value0) {
    return function(value12) {
      return new Context2(value0, value12);
    };
  };
  return Context2;
}();
var ParserM = function(x) {
  return x;
};
var readerAsk = /* @__PURE__ */ ask(/* @__PURE__ */ monadAskReaderT(monadExceptT2));
var readerAbort = /* @__PURE__ */ function() {
  var $478 = lift(monadTransReaderT)(monadExceptT2);
  var $479 = throwError(monadThrowExceptT(monadIdentity));
  return function($480) {
    return ReadM($478($479($480)));
  };
}();
var readerError = function($481) {
  return readerAbort(ErrorMsg.create($481));
};
var readMFunctor = {
  map: function(f) {
    return function(v) {
      return map6(f)(v);
    };
  }
};
var map42 = /* @__PURE__ */ map(readMFunctor);
var readMApply = {
  apply: function(v) {
    return function(v1) {
      return apply3(v)(v1);
    };
  },
  Functor0: function() {
    return readMFunctor;
  }
};
var readMBind = {
  bind: function(v) {
    return function(f) {
      return bind3(v)(function() {
        var $482 = un3(ReadM);
        return function($483) {
          return $482(f($483));
        };
      }());
    };
  },
  Apply0: function() {
    return readMApply;
  }
};
var readMApplicative = {
  pure: /* @__PURE__ */ function() {
    var $484 = pure(applicativeReaderT(applicativeExceptT(monadIdentity)));
    return function($485) {
      return ReadM($484($485));
    };
  }(),
  Apply0: function() {
    return readMApply;
  }
};
var parserMMonadRec = freeMonadRec;
var tailRecM3 = /* @__PURE__ */ tailRecM(parserMMonadRec);
var parserMBind = freeBind;
var bind1 = /* @__PURE__ */ bind(parserMBind);
var parserMApplicative = freeApplicative;
var pure1 = /* @__PURE__ */ pure(parserMApplicative);
var parseErrorSemigroup = {
  append: function(v) {
    return function(m) {
      return m;
    };
  }
};
var optVisibilityEq = {
  eq: function(x) {
    return function(y) {
      if (x instanceof Internal && y instanceof Internal) {
        return true;
      }
      ;
      if (x instanceof Hidden && y instanceof Hidden) {
        return true;
      }
      ;
      if (x instanceof Visible && y instanceof Visible) {
        return true;
      }
      ;
      return false;
    };
  }
};
var optVisibilityOrd = {
  compare: function(x) {
    return function(y) {
      if (x instanceof Internal && y instanceof Internal) {
        return EQ.value;
      }
      ;
      if (x instanceof Internal) {
        return LT.value;
      }
      ;
      if (y instanceof Internal) {
        return GT.value;
      }
      ;
      if (x instanceof Hidden && y instanceof Hidden) {
        return EQ.value;
      }
      ;
      if (x instanceof Hidden) {
        return LT.value;
      }
      ;
      if (y instanceof Hidden) {
        return GT.value;
      }
      ;
      if (x instanceof Visible && y instanceof Visible) {
        return EQ.value;
      }
      ;
      throw new Error("Failed pattern match at Options.Applicative.Types (line 0, column 0 - line 0, column 0): " + [x.constructor.name, y.constructor.name]);
    };
  },
  Eq0: function() {
    return optVisibilityEq;
  }
};
var optShowDefault = /* @__PURE__ */ function() {
  var $486 = un3(OptProperties);
  var $487 = un3(Option);
  return function($488) {
    return function(v) {
      return v.propShowDefault;
    }($486(function(v) {
      return v.optProps;
    }($487($488))));
  };
}();
var optVisibility = /* @__PURE__ */ function() {
  var $489 = un3(OptProperties);
  var $490 = un3(Option);
  return function($491) {
    return function(v) {
      return v.propVisibility;
    }($489(function(v) {
      return v.optProps;
    }($490($491))));
  };
}();
var optNameEq = {
  eq: function(x) {
    return function(y) {
      if (x instanceof OptShort && y instanceof OptShort) {
        return x.value0 === y.value0;
      }
      ;
      if (x instanceof OptLong && y instanceof OptLong) {
        return x.value0 === y.value0;
      }
      ;
      return false;
    };
  }
};
var optNameOrd = {
  compare: function(x) {
    return function(y) {
      if (x instanceof OptShort && y instanceof OptShort) {
        return compare2(x.value0)(y.value0);
      }
      ;
      if (x instanceof OptShort) {
        return LT.value;
      }
      ;
      if (y instanceof OptShort) {
        return GT.value;
      }
      ;
      if (x instanceof OptLong && y instanceof OptLong) {
        return compare12(x.value0)(y.value0);
      }
      ;
      throw new Error("Failed pattern match at Options.Applicative.Types (line 0, column 0 - line 0, column 0): " + [x.constructor.name, y.constructor.name]);
    };
  },
  Eq0: function() {
    return optNameEq;
  }
};
var optMetaVar = /* @__PURE__ */ function() {
  var $492 = un3(OptProperties);
  var $493 = un3(Option);
  return function($494) {
    return function(v) {
      return v.propMetaVar;
    }($492(function(v) {
      return v.optProps;
    }($493($494))));
  };
}();
var optHelp = /* @__PURE__ */ function() {
  var $495 = un3(OptProperties);
  var $496 = un3(Option);
  return function($497) {
    return function(v) {
      return v.propHelp;
    }($495(function(v) {
      return v.optProps;
    }($496($497))));
  };
}();
var optDescMod = /* @__PURE__ */ function() {
  var $498 = un3(OptProperties);
  var $499 = un3(Option);
  return function($500) {
    return function(v) {
      return v.propDescMod;
    }($498(function(v) {
      return v.optProps;
    }($499($500))));
  };
}();
var oneM = function($501) {
  return ParserM(liftF($501));
};
var fromM = function(v) {
  return new BindP(v);
};
var completerSemigroup = {
  append: function(v) {
    return function(v1) {
      return function(s) {
        return apply1(map22(append12)(v(s)))(v1(s));
      };
    };
  }
};
var completerMonoid = {
  mempty: function(v) {
    return pure4([]);
  },
  Semigroup0: function() {
    return completerSemigroup;
  }
};
var cReaderFunctor = {
  map: function(f) {
    return over2(CReader)(function(r) {
      return {
        crReader: map42(f)(r.crReader),
        crCompleter: r.crCompleter
      };
    });
  }
};
var map8 = /* @__PURE__ */ map(cReaderFunctor);
var parserInfoFunctor = {
  map: function(f) {
    return over2(ParserInfo)(function(i) {
      return {
        infoParser: map(parserFunctor)(f)(i.infoParser),
        infoFailureCode: i.infoFailureCode,
        infoFooter: i.infoFooter,
        infoFullDesc: i.infoFullDesc,
        infoHeader: i.infoHeader,
        infoPolicy: i.infoPolicy,
        infoProgDesc: i.infoProgDesc
      };
    });
  }
};
var parserFunctor = {
  map: function(v) {
    return function(v1) {
      if (v1 instanceof NilP) {
        return new NilP(v(v1.value0));
      }
      ;
      if (v1 instanceof OptP) {
        return new OptP(map(optionFunctor)(v)(v1.value0));
      }
      ;
      if (v1 instanceof MultP) {
        return runExists(function(v2) {
          return new MultP(mkExists(new MultPE(map(parserFunctor)(function(v3) {
            return function($502) {
              return v(v3($502));
            };
          })(v2.value0), v2.value1)));
        })(v1.value0);
      }
      ;
      if (v1 instanceof AltP) {
        return new AltP(map(parserFunctor)(v)(v1.value0), map(parserFunctor)(v)(v1.value1));
      }
      ;
      if (v1 instanceof BindP) {
        return new BindP(map32(v)(v1.value0));
      }
      ;
      throw new Error("Failed pattern match at Options.Applicative.Types (line 317, column 1 - line 322, column 36): " + [v.constructor.name, v1.constructor.name]);
    };
  }
};
var optionFunctor = {
  map: function(f) {
    return over2(Option)(function(o) {
      return {
        optMain: map(optReaderFunctor)(f)(o.optMain),
        optProps: o.optProps
      };
    });
  }
};
var optReaderFunctor = {
  map: function(v) {
    return function(v1) {
      if (v1 instanceof OptReader) {
        return new OptReader(v1.value0, map8(v)(v1.value1), v1.value2);
      }
      ;
      if (v1 instanceof FlagReader) {
        return new FlagReader(v1.value0, v(v1.value1));
      }
      ;
      if (v1 instanceof ArgReader) {
        return new ArgReader(map8(v)(v1.value0));
      }
      ;
      if (v1 instanceof CmdReader) {
        return new CmdReader(v1.value0, v1.value1, function() {
          var $503 = map12(map(parserInfoFunctor)(v));
          return function($504) {
            return $503(v1.value2($504));
          };
        }());
      }
      ;
      throw new Error("Failed pattern match at Options.Applicative.Types (line 264, column 1 - line 268, column 68): " + [v.constructor.name, v1.constructor.name]);
    };
  }
};
var map9 = /* @__PURE__ */ map(parserFunctor);
var parserAlt = /* @__PURE__ */ function() {
  return {
    alt: AltP.create,
    Functor0: function() {
      return parserFunctor;
    }
  };
}();
var alt1 = /* @__PURE__ */ alt(parserAlt);
var parserApply = {
  apply: function(a) {
    return function(b) {
      return new MultP(mkExists(new MultPE(a, b)));
    };
  },
  Functor0: function() {
    return parserFunctor;
  }
};
var parserApplicative = /* @__PURE__ */ function() {
  return {
    pure: NilP.create,
    Apply0: function() {
      return parserApply;
    }
  };
}();
var pure22 = /* @__PURE__ */ pure(parserApplicative);
var manyM = function(p) {
  var go = function(acc) {
    return bind1(oneM(alt1(map9(Loop.create)(p))(pure22(new Done(unit)))))(function(aa) {
      return pure1(bimap2(function(v) {
        return new Cons(v, acc);
      })(function(v) {
        return reverse2(acc);
      })(aa));
    });
  };
  return tailRecM3(go)(Nil.value);
};
var many = function($505) {
  return fromM(manyM($505));
};
var argPolicyEq = {
  eq: function(x) {
    return function(y) {
      if (x instanceof Intersperse && y instanceof Intersperse) {
        return true;
      }
      ;
      if (x instanceof NoIntersperse && y instanceof NoIntersperse) {
        return true;
      }
      ;
      if (x instanceof AllPositionals && y instanceof AllPositionals) {
        return true;
      }
      ;
      if (x instanceof ForwardOptions && y instanceof ForwardOptions) {
        return true;
      }
      ;
      return false;
    };
  }
};

// output/Control.Monad.State.Trans/index.js
var StateT = function(x) {
  return x;
};
var runStateT = function(v) {
  return v;
};
var monadTransStateT = {
  lift: function(dictMonad) {
    var bind11 = bind(dictMonad.Bind1());
    var pure19 = pure(dictMonad.Applicative0());
    return function(m) {
      return function(s) {
        return bind11(m)(function(x) {
          return pure19(new Tuple(x, s));
        });
      };
    };
  }
};
var functorStateT = function(dictFunctor) {
  var map21 = map(dictFunctor);
  return {
    map: function(f) {
      return function(v) {
        return function(s) {
          return map21(function(v1) {
            return new Tuple(f(v1.value0), v1.value1);
          })(v(s));
        };
      };
    }
  };
};
var evalStateT = function(dictFunctor) {
  var map21 = map(dictFunctor);
  return function(v) {
    return function(s) {
      return map21(fst)(v(s));
    };
  };
};
var monadStateT = function(dictMonad) {
  return {
    Applicative0: function() {
      return applicativeStateT(dictMonad);
    },
    Bind1: function() {
      return bindStateT(dictMonad);
    }
  };
};
var bindStateT = function(dictMonad) {
  var bind11 = bind(dictMonad.Bind1());
  return {
    bind: function(v) {
      return function(f) {
        return function(s) {
          return bind11(v(s))(function(v1) {
            var v3 = f(v1.value0);
            return v3(v1.value1);
          });
        };
      };
    },
    Apply0: function() {
      return applyStateT(dictMonad);
    }
  };
};
var applyStateT = function(dictMonad) {
  var functorStateT1 = functorStateT(dictMonad.Bind1().Apply0().Functor0());
  return {
    apply: ap(monadStateT(dictMonad)),
    Functor0: function() {
      return functorStateT1;
    }
  };
};
var applicativeStateT = function(dictMonad) {
  var pure19 = pure(dictMonad.Applicative0());
  return {
    pure: function(a) {
      return function(s) {
        return pure19(new Tuple(a, s));
      };
    },
    Apply0: function() {
      return applyStateT(dictMonad);
    }
  };
};
var monadStateStateT = function(dictMonad) {
  var pure19 = pure(dictMonad.Applicative0());
  var monadStateT1 = monadStateT(dictMonad);
  return {
    state: function(f) {
      return function($200) {
        return pure19(f($200));
      };
    },
    Monad0: function() {
      return monadStateT1;
    }
  };
};

// output/Control.Monad.Except/index.js
var unwrap3 = /* @__PURE__ */ unwrap();
var withExcept = /* @__PURE__ */ withExceptT(functorIdentity);
var runExcept = function($3) {
  return unwrap3(runExceptT($3));
};

// output/Control.Monad.Reader/index.js
var unwrap4 = /* @__PURE__ */ unwrap();
var runReader = function(v) {
  return function($4) {
    return unwrap4(v($4));
  };
};

// output/Options.Applicative.Internal/index.js
var $runtime_lazy3 = function(name3, moduleName, init3) {
  var state2 = 0;
  var val;
  return function(lineNumber) {
    if (state2 === 2)
      return val;
    if (state2 === 1)
      throw new ReferenceError(name3 + " was needed before it finished initializing (module " + moduleName + ", line " + lineNumber + ")", moduleName, lineNumber);
    state2 = 1;
    val = init3();
    state2 = 2;
    return val;
  };
};
var un4 = /* @__PURE__ */ un();
var map7 = /* @__PURE__ */ map(/* @__PURE__ */ functorExceptT(/* @__PURE__ */ functorStateT(/* @__PURE__ */ functorReaderT(functorIdentity))));
var monadReaderT2 = /* @__PURE__ */ monadReaderT(monadIdentity);
var monadStateT2 = /* @__PURE__ */ monadStateT(monadReaderT2);
var apply4 = /* @__PURE__ */ apply(/* @__PURE__ */ applyExceptT(monadStateT2));
var bind4 = /* @__PURE__ */ bind(/* @__PURE__ */ bindExceptT(monadStateT2));
var pure5 = /* @__PURE__ */ pure(/* @__PURE__ */ applicativeExceptT(monadStateT2));
var altExceptT2 = /* @__PURE__ */ altExceptT(parseErrorSemigroup);
var alt2 = /* @__PURE__ */ alt(/* @__PURE__ */ altExceptT2(monadStateT2));
var lift5 = /* @__PURE__ */ lift(monadTransExceptT);
var lift1 = /* @__PURE__ */ lift5(monadStateT2);
var modify_2 = /* @__PURE__ */ modify_(/* @__PURE__ */ monadStateStateT(monadReaderT2));
var lift23 = /* @__PURE__ */ lift(monadTransStateT);
var throwError2 = /* @__PURE__ */ throwError(/* @__PURE__ */ monadThrowExceptT(monadStateT2));
var map13 = /* @__PURE__ */ map(functorArray);
var pure12 = /* @__PURE__ */ pure(applicativeArray);
var discard2 = /* @__PURE__ */ discard(discardUnit);
var identity6 = /* @__PURE__ */ identity(categoryFn);
var TNil = /* @__PURE__ */ function() {
  function TNil2() {
  }
  ;
  TNil2.value = new TNil2();
  return TNil2;
}();
var TCons = /* @__PURE__ */ function() {
  function TCons2(value0, value12) {
    this.value0 = value0;
    this.value1 = value12;
  }
  ;
  TCons2.create = function(value0) {
    return function(value12) {
      return new TCons2(value0, value12);
    };
  };
  return TCons2;
}();
var P = function(x) {
  return x;
};
var ListT = function(x) {
  return x;
};
var NondetT = function(x) {
  return x;
};
var ComplParser = /* @__PURE__ */ function() {
  function ComplParser2(value0, value12) {
    this.value0 = value0;
    this.value1 = value12;
  }
  ;
  ComplParser2.create = function(value0) {
    return function(value12) {
      return new ComplParser2(value0, value12);
    };
  };
  return ComplParser2;
}();
var ComplOption = /* @__PURE__ */ function() {
  function ComplOption2(value0) {
    this.value0 = value0;
  }
  ;
  ComplOption2.create = function(value0) {
    return new ComplOption2(value0);
  };
  return ComplOption2;
}();
var ComplResult = /* @__PURE__ */ function() {
  function ComplResult2(value0) {
    this.value0 = value0;
  }
  ;
  ComplResult2.create = function(value0) {
    return new ComplResult2(value0);
  };
  return ComplResult2;
}();
var Completion = function(x) {
  return x;
};
var withReadM = function(f) {
  var f$prime = function(v) {
    if (v instanceof ErrorMsg) {
      return new ErrorMsg(f(v.value0));
    }
    ;
    return v;
  };
  var $298 = mapReaderT(withExcept(f$prime));
  var $299 = un4(ReadM);
  return function($300) {
    return ReadM($298($299($300)));
  };
};
var stepListT = function(v) {
  return v;
};
var runP = function(v) {
  return runReader(flip(runStateT)([])(runExceptT(v)));
};
var runNondetT = function(v) {
  return v;
};
var runListT = function(dictMonad) {
  var bind23 = bind(dictMonad.Bind1());
  var pure42 = pure(dictMonad.Applicative0());
  var liftM12 = liftM1(dictMonad);
  return function(xs) {
    return bind23(stepListT(xs))(function(s) {
      if (s instanceof TNil) {
        return pure42(Nil.value);
      }
      ;
      if (s instanceof TCons) {
        return liftM12(Cons.create(s.value0))(runListT(dictMonad)(s.value1));
      }
      ;
      throw new Error("Failed pattern match at Options.Applicative.Internal (line 200, column 3 - line 202, column 53): " + [s.constructor.name]);
    });
  };
};
var runCompletion = function(v) {
  return function(prefs2) {
    var v1 = runReaderT(runExceptT(v))(prefs2);
    if (v1 instanceof ComplResult) {
      return Nothing.value;
    }
    ;
    if (v1 instanceof ComplParser) {
      return new Just(new Left(new Tuple(v1.value0, v1.value1)));
    }
    ;
    if (v1 instanceof ComplOption) {
      return new Just(new Right(v1.value0));
    }
    ;
    throw new Error("Failed pattern match at Options.Applicative.Internal (line 170, column 38 - line 173, column 42): " + [v1.constructor.name]);
  };
};
var pFunctor = {
  map: function(f) {
    return function(v) {
      return map7(f)(v);
    };
  }
};
var pApply = {
  apply: function(v) {
    return function(v1) {
      return apply4(v)(v1);
    };
  },
  Functor0: function() {
    return pFunctor;
  }
};
var pBind = {
  bind: function(v) {
    return function(k) {
      return bind4(v)(function(a) {
        var v1 = k(a);
        return v1;
      });
    };
  },
  Apply0: function() {
    return pApply;
  }
};
var pApplicative = {
  pure: function(a) {
    return pure5(a);
  },
  Apply0: function() {
    return pApply;
  }
};
var pMonad = {
  Applicative0: function() {
    return pApplicative;
  },
  Bind1: function() {
    return pBind;
  }
};
var pAlt = {
  alt: function(v) {
    return function(v1) {
      return alt2(v)(v1);
    };
  },
  Functor0: function() {
    return pFunctor;
  }
};
var missingArgP = function(dict) {
  return dict.missingArgP;
};
var getPrefs = function(dict) {
  return dict.getPrefs;
};
var exitP = function(dict) {
  return dict.exitP;
};
var exitContext = function(dict) {
  return dict.exitContext;
};
var errorP = function(dict) {
  return dict.errorP;
};
var hoistEither = function(dictMonadP) {
  return either(errorP(dictMonadP))(pure(dictMonadP.Monad0().Applicative0()));
};
var runReadM = function(dictMonadP) {
  var hoistEither1 = hoistEither(dictMonadP);
  return function(v) {
    return function(s) {
      return hoistEither1(runExcept(runReaderT(v)(s)));
    };
  };
};
var hoistMaybe = function(dictMonadP) {
  var errorP1 = errorP(dictMonadP);
  var pure42 = pure(dictMonadP.Monad0().Applicative0());
  return function(err) {
    return maybe(errorP1(err))(pure42);
  };
};
var pMonadP = {
  enterContext: function(name3) {
    return function(pinfo) {
      return lift1(modify_2(cons(new Context(name3, mkExists(pinfo)))));
    };
  },
  exitContext: /* @__PURE__ */ lift1(/* @__PURE__ */ modify_2(/* @__PURE__ */ drop(1))),
  getPrefs: /* @__PURE__ */ P(/* @__PURE__ */ lift1(/* @__PURE__ */ lift23(monadReaderT2)(/* @__PURE__ */ ask(/* @__PURE__ */ monadAskReaderT(monadIdentity))))),
  missingArgP: function(e) {
    return function(v) {
      return errorP(pMonadP)(e);
    };
  },
  exitP: function(i) {
    return function(v) {
      return function(p) {
        var $301 = maybe(throwError2(MissingError.create(i)(SomeParser.create(mkExists(p)))))(pure5);
        return function($302) {
          return P($301($302));
        };
      };
    };
  },
  errorP: function($303) {
    return P(throwError2($303));
  },
  Monad0: function() {
    return pMonad;
  },
  Alt1: function() {
    return pAlt;
  }
};
var enterContext = function(dict) {
  return dict.enterContext;
};
var contextNames = function(ns) {
  var go = function(v) {
    return v.value0;
  };
  return reverse(map13(go)(ns));
};
var complResultMonad = {
  Applicative0: function() {
    return complResultApplicative;
  },
  Bind1: function() {
    return complResultBind;
  }
};
var complResultBind = {
  bind: function(m) {
    return function(f) {
      if (m instanceof ComplResult) {
        return f(m.value0);
      }
      ;
      if (m instanceof ComplParser) {
        return new ComplParser(m.value0, m.value1);
      }
      ;
      if (m instanceof ComplOption) {
        return new ComplOption(m.value0);
      }
      ;
      throw new Error("Failed pattern match at Options.Applicative.Internal (line 134, column 14 - line 137, column 35): " + [m.constructor.name]);
    };
  },
  Apply0: function() {
    return $lazy_complResultApply(0);
  }
};
var complResultApplicative = /* @__PURE__ */ function() {
  return {
    pure: ComplResult.create,
    Apply0: function() {
      return $lazy_complResultApply(0);
    }
  };
}();
var $lazy_complResultFunctor = /* @__PURE__ */ $runtime_lazy3("complResultFunctor", "Options.Applicative.Internal", function() {
  return {
    map: liftM1(complResultMonad)
  };
});
var $lazy_complResultApply = /* @__PURE__ */ $runtime_lazy3("complResultApply", "Options.Applicative.Internal", function() {
  return {
    apply: ap(complResultMonad),
    Functor0: function() {
      return $lazy_complResultFunctor(0);
    }
  };
});
var complResultFunctor = /* @__PURE__ */ $lazy_complResultFunctor(124);
var map23 = /* @__PURE__ */ map(/* @__PURE__ */ functorExceptT(/* @__PURE__ */ functorReaderT(complResultFunctor)));
var monadReaderT1 = /* @__PURE__ */ monadReaderT(complResultMonad);
var alt12 = /* @__PURE__ */ alt(/* @__PURE__ */ altExceptT2(monadReaderT1));
var apply12 = /* @__PURE__ */ apply(/* @__PURE__ */ applyExceptT(monadReaderT1));
var pure23 = /* @__PURE__ */ pure(/* @__PURE__ */ applicativeExceptT(monadReaderT1));
var bind12 = /* @__PURE__ */ bind(/* @__PURE__ */ bindExceptT(monadReaderT1));
var lift32 = /* @__PURE__ */ lift5(monadReaderT1);
var lift42 = /* @__PURE__ */ lift(monadTransReaderT)(complResultMonad);
var completionFunctor = {
  map: function(f) {
    return function(v) {
      return map23(f)(v);
    };
  }
};
var completionAlt = {
  alt: function(v) {
    return function(v1) {
      return alt12(v)(v1);
    };
  },
  Functor0: function() {
    return completionFunctor;
  }
};
var completionApply = {
  apply: function(v) {
    return function(v1) {
      return apply12(v)(v1);
    };
  },
  Functor0: function() {
    return completionFunctor;
  }
};
var completionApplicative = {
  pure: function(a) {
    return pure23(a);
  },
  Apply0: function() {
    return completionApply;
  }
};
var pure32 = /* @__PURE__ */ pure(completionApplicative);
var completionBind = {
  bind: function(v) {
    return function(k) {
      return bind12(v)(function(a) {
        var v1 = k(a);
        return v1;
      });
    };
  },
  Apply0: function() {
    return completionApply;
  }
};
var completionMonad = {
  Applicative0: function() {
    return completionApplicative;
  },
  Bind1: function() {
    return completionBind;
  }
};
var completionMonadP = {
  enterContext: function(v) {
    return function(v1) {
      return pure32(unit);
    };
  },
  exitContext: /* @__PURE__ */ pure32(unit),
  getPrefs: /* @__PURE__ */ lift32(/* @__PURE__ */ ask(/* @__PURE__ */ monadAskReaderT(complResultMonad))),
  missingArgP: function(v) {
    return function($304) {
      return Completion(lift32(lift42(ComplOption.create($304))));
    };
  },
  exitP: function(v) {
    return function(a) {
      return function(p) {
        return function(v1) {
          return Completion(lift32(lift42(new ComplParser(new SomeParser(mkExists(p)), a))));
        };
      };
    };
  },
  errorP: /* @__PURE__ */ function() {
    var $305 = throwError(monadThrowExceptT(monadReaderT1));
    return function($306) {
      return Completion($305($306));
    };
  }(),
  Monad0: function() {
    return completionMonad;
  },
  Alt1: function() {
    return completionAlt;
  }
};
var bimapTStep = function(v) {
  return function(v1) {
    return function(v2) {
      if (v2 instanceof TNil) {
        return TNil.value;
      }
      ;
      if (v2 instanceof TCons) {
        return new TCons(v(v2.value0), v1(v2.value1));
      }
      ;
      throw new Error("Failed pattern match at Options.Applicative.Internal (line 186, column 1 - line 186, column 77): " + [v.constructor.name, v1.constructor.name, v2.constructor.name]);
    };
  };
};
var listTFunctor = function(dictMonad) {
  var liftM12 = liftM1(dictMonad);
  return {
    map: function(f) {
      return function(v) {
        return liftM12(bimapTStep(f)(map(listTFunctor(dictMonad))(f)))(stepListT(v));
      };
    }
  };
};
var listTAlt = function(dictMonad) {
  var bind23 = bind(dictMonad.Bind1());
  var pure42 = pure(dictMonad.Applicative0());
  var listTFunctor1 = listTFunctor(dictMonad);
  return {
    alt: function(xs) {
      return function(ys) {
        return bind23(stepListT(xs))(function(s) {
          if (s instanceof TNil) {
            return stepListT(ys);
          }
          ;
          if (s instanceof TCons) {
            return pure42(new TCons(s.value0, alt(listTAlt(dictMonad))(s.value1)(ys)));
          }
          ;
          throw new Error("Failed pattern match at Options.Applicative.Internal (line 227, column 5 - line 229, column 49): " + [s.constructor.name]);
        });
      };
    },
    Functor0: function() {
      return listTFunctor1;
    }
  };
};
var listTPlus = function(dictMonad) {
  var listTAlt1 = listTAlt(dictMonad);
  return {
    empty: pure(dictMonad.Applicative0())(TNil.value),
    Alt0: function() {
      return listTAlt1;
    }
  };
};
var hoistList = function(dictMonad) {
  var pure42 = pure(dictMonad.Applicative0());
  return foldr2(function(x) {
    return function(xt) {
      return pure42(new TCons(x, xt));
    };
  })(empty(listTPlus(dictMonad)));
};
var listTMonadTrans = {
  lift: function(dictMonad) {
    var empty6 = empty(listTPlus(dictMonad));
    var $307 = liftM1(dictMonad)(function(v) {
      return new TCons(v, empty6);
    });
    return function($308) {
      return ListT($307($308));
    };
  }
};
var lift52 = /* @__PURE__ */ lift(listTMonadTrans);
var cut = function(dictMonad) {
  return lift52(monadStateT(dictMonad))(put(monadStateStateT(dictMonad))(true));
};
var nondetTMonadTrans = {
  lift: function(dictMonad) {
    var $309 = lift52(monadStateT(dictMonad));
    var $310 = lift23(dictMonad);
    return function($311) {
      return NondetT($309($310($311)));
    };
  }
};
var listTMonad = function(dictMonad) {
  return {
    Applicative0: function() {
      return listTApplicative(dictMonad);
    },
    Bind1: function() {
      return listTBind(dictMonad);
    }
  };
};
var listTBind = function(dictMonad) {
  var bind23 = bind(dictMonad.Bind1());
  var pure42 = pure(dictMonad.Applicative0());
  var alt22 = alt(listTAlt(dictMonad));
  return {
    bind: function(xs) {
      return function(f) {
        return bind23(stepListT(xs))(function(s) {
          if (s instanceof TNil) {
            return pure42(TNil.value);
          }
          ;
          if (s instanceof TCons) {
            return stepListT(alt22(f(s.value0))(bind(listTBind(dictMonad))(s.value1)(f)));
          }
          ;
          throw new Error("Failed pattern match at Options.Applicative.Internal (line 218, column 5 - line 220, column 53): " + [s.constructor.name]);
        });
      };
    },
    Apply0: function() {
      return listTApply(dictMonad);
    }
  };
};
var listTApply = function(dictMonad) {
  var listTFunctor1 = listTFunctor(dictMonad);
  return {
    apply: ap(listTMonad(dictMonad)),
    Functor0: function() {
      return listTFunctor1;
    }
  };
};
var listTApplicative = function(dictMonad) {
  return {
    pure: function() {
      var $312 = hoistList(dictMonad);
      return function($313) {
        return $312(pure12($313));
      };
    }(),
    Apply0: function() {
      return listTApply(dictMonad);
    }
  };
};
var listTAlternative = function(dictMonad) {
  var listTApplicative1 = listTApplicative(dictMonad);
  var listTPlus1 = listTPlus(dictMonad);
  return {
    Applicative0: function() {
      return listTApplicative1;
    },
    Plus1: function() {
      return listTPlus1;
    }
  };
};
var nondetTAltOp = function(dictMonad) {
  var monadStateT1 = monadStateT(dictMonad);
  var alt22 = alt(listTAlt(monadStateT1));
  var listTBind1 = listTBind(monadStateT1);
  var bind23 = bind(listTBind1);
  var lift62 = lift52(monadStateT1);
  var get2 = get(monadStateStateT(dictMonad));
  var discard12 = discard2(listTBind1);
  var guard4 = guard(listTAlternative(monadStateT1));
  return function(m1) {
    return function(m2) {
      return NondetT(alt22(runNondetT(m1))(bind23(lift62(get2))(function(s) {
        return discard12(guard4(!s))(function() {
          return runNondetT(m2);
        });
      })));
    };
  };
};
var nondetTFunctor = function(dictMonad) {
  var map35 = map(listTFunctor(monadStateT(dictMonad)));
  return {
    map: function(f) {
      var $314 = map35(f);
      return function($315) {
        return NondetT($314(runNondetT($315)));
      };
    }
  };
};
var nondetTAlt = function(dictMonad) {
  var alt22 = alt(listTAlt(monadStateT(dictMonad)));
  var nondetTFunctor1 = nondetTFunctor(dictMonad);
  return {
    alt: function(v) {
      return function(v1) {
        return alt22(v)(v1);
      };
    },
    Functor0: function() {
      return nondetTFunctor1;
    }
  };
};
var nondetTPlus = function(dictMonad) {
  var nondetTAlt1 = nondetTAlt(dictMonad);
  return {
    empty: empty(listTPlus(monadStateT(dictMonad))),
    Alt0: function() {
      return nondetTAlt1;
    }
  };
};
var nondetTApply = function(dictMonad) {
  var apply22 = apply(listTApply(monadStateT(dictMonad)));
  var nondetTFunctor1 = nondetTFunctor(dictMonad);
  return {
    apply: function(v) {
      return function(v1) {
        return apply22(v)(v1);
      };
    },
    Functor0: function() {
      return nondetTFunctor1;
    }
  };
};
var nondetTApplicative = function(dictMonad) {
  var nondetTApply1 = nondetTApply(dictMonad);
  return {
    pure: function() {
      var $316 = pure(listTApplicative(monadStateT(dictMonad)));
      return function($317) {
        return NondetT($316($317));
      };
    }(),
    Apply0: function() {
      return nondetTApply1;
    }
  };
};
var nondetTBind = function(dictMonad) {
  var bind23 = bind(listTBind(monadStateT(dictMonad)));
  var nondetTApply1 = nondetTApply(dictMonad);
  return {
    bind: function(v) {
      return function(f) {
        return bind23(v)(function($318) {
          return runNondetT(f($318));
        });
      };
    },
    Apply0: function() {
      return nondetTApply1;
    }
  };
};
var takeListT = function(dictMonad) {
  var empty6 = empty(listTPlus(dictMonad));
  var liftM12 = liftM1(dictMonad);
  return function(v) {
    if (v === 0) {
      return $$const(empty6);
    }
    ;
    var $319 = liftM12(bimapTStep(identity6)(takeListT(dictMonad)(v - 1 | 0)));
    return function($320) {
      return ListT($319(stepListT($320)));
    };
  };
};
var disamb = function(dictMonad) {
  var Bind1 = dictMonad.Bind1();
  var bind23 = bind(Bind1);
  var evalStateT2 = evalStateT(Bind1.Apply0().Functor0());
  var monadStateT1 = monadStateT(dictMonad);
  var runListT1 = runListT(monadStateT1);
  var takeListT1 = takeListT(monadStateT1);
  var pure42 = pure(dictMonad.Applicative0());
  return function(allow_amb) {
    return function(xs) {
      return bind23(function(v) {
        return evalStateT2(v)(false);
      }(runListT1(takeListT1(function() {
        if (allow_amb) {
          return 1;
        }
        ;
        return 2;
      }())(runNondetT(xs)))))(function(xs$prime) {
        return pure42(function() {
          if (xs$prime instanceof Cons && xs$prime.value1 instanceof Nil) {
            return new Just(xs$prime.value0);
          }
          ;
          return Nothing.value;
        }());
      });
    };
  };
};

// output/Options.Applicative.Common/index.js
var bind5 = /* @__PURE__ */ bind(bindArray);
var fromFoldable4 = /* @__PURE__ */ fromFoldable(foldableList);
var map10 = /* @__PURE__ */ map(functorMaybe);
var voidRight2 = /* @__PURE__ */ voidRight(functorMaybe);
var guard2 = /* @__PURE__ */ guard(alternativeMaybe);
var any3 = /* @__PURE__ */ any(foldableArray)(heytingAlgebraBoolean);
var elem3 = /* @__PURE__ */ elem(foldableArray)(optNameEq);
var discard3 = /* @__PURE__ */ discard(discardUnit);
var discard1 = /* @__PURE__ */ discard3(bindMaybe);
var un5 = /* @__PURE__ */ un();
var lift6 = /* @__PURE__ */ lift(monadTransStateT);
var apply5 = /* @__PURE__ */ apply(applyMaybe);
var alt3 = /* @__PURE__ */ alt(altMaybe);
var bind13 = /* @__PURE__ */ bind(bindMaybe);
var apply13 = /* @__PURE__ */ apply(parserApply);
var oneOf2 = /* @__PURE__ */ oneOf(foldableArray);
var bind22 = /* @__PURE__ */ bind(freeBind);
var greaterThan2 = /* @__PURE__ */ greaterThan(optVisibilityOrd);
var lift12 = /* @__PURE__ */ lift(nondetTMonadTrans);
var pure6 = /* @__PURE__ */ pure(parserApplicative);
var pure13 = /* @__PURE__ */ pure(applicativeMaybe);
var notEq1 = /* @__PURE__ */ notEq(argPolicyEq);
var OptWord = /* @__PURE__ */ function() {
  function OptWord2(value0, value12) {
    this.value0 = value0;
    this.value1 = value12;
  }
  ;
  OptWord2.create = function(value0) {
    return function(value12) {
      return new OptWord2(value0, value12);
    };
  };
  return OptWord2;
}();
var unexpectedError = function(arg) {
  return function(p) {
    return new UnexpectedError(arg, new SomeParser(mkExists(p)));
  };
};
var simplify = function(v) {
  if (v instanceof Leaf) {
    return new Leaf(v.value0);
  }
  ;
  if (v instanceof MultNode) {
    var remove_mult = function(v12) {
      if (v12 instanceof MultNode) {
        return v12.value0;
      }
      ;
      return [v12];
    };
    var v1 = bind5(v.value0)(function($340) {
      return remove_mult(simplify($340));
    });
    if (v1.length === 1) {
      return v1[0];
    }
    ;
    return new MultNode(v1);
  }
  ;
  if (v instanceof AltNode) {
    var remove_alt = function(v12) {
      if (v12 instanceof AltNode) {
        return v12.value0;
      }
      ;
      if (v12 instanceof MultNode && v12.value0.length === 0) {
        return [];
      }
      ;
      return [v12];
    };
    var v1 = bind5(v.value0)(function($341) {
      return remove_alt(simplify($341));
    });
    if (v1.length === 0) {
      return new MultNode([]);
    }
    ;
    if (v1.length === 1) {
      return v1[0];
    }
    ;
    return new AltNode(v1);
  }
  ;
  throw new Error("Failed pattern match at Options.Applicative.Common (line 280, column 1 - line 280, column 45): " + [v.constructor.name]);
};
var showOption = function(v) {
  if (v instanceof OptLong) {
    return "--" + v.value0;
  }
  ;
  if (v instanceof OptShort) {
    return fromCharArray(["-", v.value0]);
  }
  ;
  throw new Error("Failed pattern match at Options.Applicative.Common (line 43, column 1 - line 43, column 32): " + [v.constructor.name]);
};
var parseWord = /* @__PURE__ */ function() {
  var go = function(v) {
    if (v instanceof Cons && (v.value0 === "-" && (v.value1 instanceof Cons && v.value1.value0 === "-"))) {
      return new Just(function() {
        var v1 = function() {
          var v2 = span(function(v3) {
            return v3 !== "=";
          })(v.value1.value1);
          if (v2.rest instanceof Nil) {
            return new Tuple(v.value1.value1, Nothing.value);
          }
          ;
          if (v2.rest instanceof Cons) {
            return new Tuple(v2.init, new Just(v2.rest.value1));
          }
          ;
          throw new Error("Failed pattern match at Options.Applicative.Common (line 107, column 23 - line 109, column 70): " + [v2.constructor.name]);
        }();
        return new OptWord(new OptLong(fromCharArray(fromFoldable4(v1.value0))), map10(function($342) {
          return fromCharArray(fromFoldable4($342));
        })(v1.value1));
      }());
    }
    ;
    if (v instanceof Cons && v.value0 === "-") {
      if (v.value1 instanceof Nil) {
        return Nothing.value;
      }
      ;
      if (v.value1 instanceof Cons) {
        return new Just(function() {
          var arg = voidRight2(v.value1.value1)(guard2(!$$null2(v.value1.value1)));
          return new OptWord(new OptShort(v.value1.value0), map10(function($343) {
            return fromCharArray(fromFoldable4($343));
          })(arg));
        }());
      }
      ;
      throw new Error("Failed pattern match at Options.Applicative.Common (line 111, column 25 - line 115, column 79): " + [v.value1.constructor.name]);
    }
    ;
    return Nothing.value;
  };
  var $344 = fromFoldable2(foldableArray);
  return function($345) {
    return go($344(toCharArray($345)));
  };
}();
var optionNames = function(v) {
  if (v instanceof OptReader) {
    return v.value0;
  }
  ;
  if (v instanceof FlagReader) {
    return v.value0;
  }
  ;
  return [];
};
var liftOpt = /* @__PURE__ */ function() {
  return OptP.create;
}();
var isOptionPrefix = function(v) {
  return function(v1) {
    if (v instanceof OptShort && v1 instanceof OptShort) {
      return v.value0 === v1.value0;
    }
    ;
    if (v instanceof OptLong && v1 instanceof OptLong) {
      return startsWith(v.value0)(v1.value0);
    }
    ;
    return false;
  };
};
var optMatches = function(dictMonadP) {
  var Monad0 = dictMonadP.Monad0();
  var bindStateT2 = bindStateT(Monad0);
  var bind32 = bind(bindStateT2);
  var monadStateStateT2 = monadStateStateT(Monad0);
  var get2 = get(monadStateStateT2);
  var missingArgP2 = missingArgP(dictMonadP);
  var lift24 = lift6(Monad0);
  var pure25 = pure(applicativeStateT(Monad0));
  var discard22 = discard3(bindStateT2);
  var put2 = put(monadStateStateT2);
  var runReadM2 = runReadM(dictMonadP);
  return function(disambiguate) {
    return function(opt) {
      return function(v) {
        var is_short = function(v1) {
          if (v1 instanceof OptShort) {
            return true;
          }
          ;
          if (v1 instanceof OptLong) {
            return false;
          }
          ;
          throw new Error("Failed pattern match at Options.Applicative.Common (line 90, column 5 - line 90, column 33): " + [v1.constructor.name]);
        };
        var has_name = function(a) {
          if (disambiguate) {
            return any3(isOptionPrefix(a));
          }
          ;
          if (otherwise) {
            return elem3(a);
          }
          ;
          throw new Error("Failed pattern match at Options.Applicative.Common (line 93, column 5 - line 95, column 27): " + [a.constructor.name]);
        };
        var errorFor = function(name3) {
          return function(msg) {
            return "option " + (showOption(name3) + (": " + msg));
          };
        };
        if (opt instanceof OptReader) {
          return discard1(guard2(has_name(v.value0)(opt.value0)))(function() {
            return new Just(bind32(get2)(function(args) {
              var missing_arg = missingArgP2(opt.value2(showOption(v.value0)))(un5(CReader)(opt.value1).crCompleter);
              return bind32(function() {
                var v1 = maybe(args)(function(v2) {
                  return new Cons(v2, args);
                })(v.value1);
                if (v1 instanceof Nil) {
                  return lift24(missing_arg);
                }
                ;
                if (v1 instanceof Cons) {
                  return pure25(new Tuple(v1.value0, v1.value1));
                }
                ;
                throw new Error("Failed pattern match at Options.Applicative.Common (line 68, column 27 - line 70, column 56): " + [v1.constructor.name]);
              }())(function(v1) {
                return discard22(put2(v1.value1))(function() {
                  return lift24(runReadM2(withReadM(errorFor(v.value0))(un5(CReader)(opt.value1).crReader))(v1.value0));
                });
              });
            }));
          });
        }
        ;
        if (opt instanceof FlagReader) {
          return discard1(guard2(has_name(v.value0)(opt.value0)))(function() {
            return discard1(guard2(is_short(v.value0) || isNothing(v.value1)))(function() {
              return new Just(bind32(get2)(function(args) {
                var val$prime = map10(function($346) {
                  return function(s) {
                    return cons("-")(s);
                  }(toCharArray($346));
                })(v.value1);
                return discard22(put2(maybe(args)(function() {
                  var $347 = flip(Cons.create)(args);
                  return function($348) {
                    return $347(fromCharArray($348));
                  };
                }())(val$prime)))(function() {
                  return pure25(opt.value1);
                });
              }));
            });
          });
        }
        ;
        return Nothing.value;
      };
    };
  };
};
var isArg = function(v) {
  if (v instanceof ArgReader) {
    return true;
  }
  ;
  return false;
};
var evalParser = function(v) {
  if (v instanceof NilP) {
    return new Just(v.value0);
  }
  ;
  if (v instanceof OptP) {
    return Nothing.value;
  }
  ;
  if (v instanceof MultP) {
    return runExists(function(v1) {
      return apply5(evalParser(v1.value0))(evalParser(v1.value1));
    })(v.value0);
  }
  ;
  if (v instanceof AltP) {
    return alt3(evalParser(v.value0))(evalParser(v.value1));
  }
  ;
  if (v instanceof BindP) {
    return resume$prime(function(p) {
      return function(k) {
        return bind13(evalParser(p))(function($349) {
          return evalParser(BindP.create(k($349)));
        });
      };
    })(Just.create)(v.value0);
  }
  ;
  throw new Error("Failed pattern match at Options.Applicative.Common (line 220, column 1 - line 220, column 44): " + [v.constructor.name]);
};
var searchParser = function(dictMonad) {
  var nondetTPlus2 = nondetTPlus(dictMonad);
  var empty6 = empty(nondetTPlus2);
  var mapFlipped4 = mapFlipped(nondetTFunctor(dictMonad));
  var nondetTAltOp2 = nondetTAltOp(dictMonad);
  var oneOf1 = oneOf2(nondetTPlus2);
  return function(v) {
    return function(v1) {
      if (v1 instanceof NilP) {
        return empty6;
      }
      ;
      if (v1 instanceof OptP) {
        return v(v1.value0);
      }
      ;
      if (v1 instanceof MultP) {
        return runExists(function(v2) {
          var b = mapFlipped4(searchParser(dictMonad)(v)(v2.value1))(function(p2$prime) {
            return apply13(v2.value0)(p2$prime);
          });
          var a = mapFlipped4(searchParser(dictMonad)(v)(v2.value0))(function(p1$prime) {
            return apply13(p1$prime)(v2.value1);
          });
          return nondetTAltOp2(a)(b);
        })(v1.value0);
      }
      ;
      if (v1 instanceof AltP) {
        return oneOf1([searchParser(dictMonad)(v)(v1.value0), searchParser(dictMonad)(v)(v1.value1)]);
      }
      ;
      if (v1 instanceof BindP) {
        return resume$prime(function(p) {
          return function(k) {
            return oneOf1([mapFlipped4(searchParser(dictMonad)(v)(p))(function(p$prime) {
              return new BindP(bind22(liftF(p$prime))(k));
            }), function() {
              var v2 = evalParser(p);
              if (v2 instanceof Nothing) {
                return empty6;
              }
              ;
              if (v2 instanceof Just) {
                return searchParser(dictMonad)(v)(new BindP(k(v2.value0)));
              }
              ;
              throw new Error("Failed pattern match at Options.Applicative.Common (line 135, column 7 - line 137, column 49): " + [v2.constructor.name]);
            }()]);
          };
        })($$const(empty6))(v1.value0);
      }
      ;
      throw new Error("Failed pattern match at Options.Applicative.Common (line 118, column 1 - line 120, column 49): " + [v.constructor.name, v1.constructor.name]);
    };
  };
};
var searchOpt = function(dictMonadP) {
  var monadStateT3 = monadStateT(dictMonadP.Monad0());
  var searchParser1 = searchParser(monadStateT3);
  var optMatches1 = optMatches(dictMonadP);
  var lift24 = lift12(monadStateT3);
  var map110 = map(functorStateT(dictMonadP.Alt1().Functor0()));
  var empty6 = empty(nondetTPlus(monadStateT3));
  return function(pprefs) {
    return function(w) {
      return searchParser1(function(opt) {
        var disambiguate = un5(ParserPrefs)(pprefs).prefDisambiguate && greaterThan2(optVisibility(opt))(Internal.value);
        var v = optMatches1(disambiguate)(un5(Option)(opt).optMain)(w);
        if (v instanceof Just) {
          return lift24(map110(pure6)(v.value0));
        }
        ;
        if (v instanceof Nothing) {
          return empty6;
        }
        ;
        throw new Error("Failed pattern match at Options.Applicative.Common (line 144, column 3 - line 146, column 21): " + [v.constructor.name]);
      });
    };
  };
};
var stepParser = function(dictMonadP) {
  var alt14 = alt(nondetTAlt(monadStateT(dictMonadP.Monad0())));
  var searchOpt1 = searchOpt(dictMonadP);
  return function(v) {
    return function(v1) {
      return function(v2) {
        return function(v3) {
          if (v1 instanceof AllPositionals) {
            return searchArg(dictMonadP)(v)(v2)(v3);
          }
          ;
          if (v1 instanceof ForwardOptions) {
            var v4 = parseWord(v2);
            if (v4 instanceof Just) {
              return alt14(searchOpt1(v)(v4.value0)(v3))(searchArg(dictMonadP)(v)(v2)(v3));
            }
            ;
            if (v4 instanceof Nothing) {
              return searchArg(dictMonadP)(v)(v2)(v3);
            }
            ;
            throw new Error("Failed pattern match at Options.Applicative.Common (line 174, column 42 - line 176, column 36): " + [v4.constructor.name]);
          }
          ;
          var v4 = parseWord(v2);
          if (v4 instanceof Just) {
            return searchOpt1(v)(v4.value0)(v3);
          }
          ;
          if (v4 instanceof Nothing) {
            return searchArg(dictMonadP)(v)(v2)(v3);
          }
          ;
          throw new Error("Failed pattern match at Options.Applicative.Common (line 177, column 29 - line 179, column 36): " + [v4.constructor.name]);
        };
      };
    };
  };
};
var searchArg = function(dictMonadP) {
  var Monad0 = dictMonadP.Monad0();
  var monadStateT3 = monadStateT(Monad0);
  var searchParser1 = searchParser(monadStateT3);
  var discard22 = discard3(nondetTBind(monadStateT3));
  var when2 = when(nondetTApplicative(monadStateT3));
  var cut2 = cut(monadStateT3);
  var lift24 = lift12(monadStateT3);
  var bindStateT2 = bindStateT(Monad0);
  var bind32 = bind(bindStateT2);
  var applyFirst2 = applyFirst(applyStateT(Monad0));
  var monadStateStateT2 = monadStateStateT(Monad0);
  var get2 = get(monadStateStateT2);
  var put2 = put(monadStateStateT2);
  var map110 = map(functorStateT(dictMonadP.Alt1().Functor0()));
  var lift33 = lift6(Monad0);
  var Apply0 = Monad0.Bind1().Apply0();
  var applyFirst1 = applyFirst(Apply0);
  var applySecond2 = applySecond(Apply0);
  var enterContext2 = enterContext(dictMonadP);
  var exitContext2 = exitContext(dictMonadP);
  var map26 = map(nondetTFunctor(monadStateT3));
  var discard32 = discard3(bindStateT2);
  var pure25 = pure(applicativeStateT(Monad0));
  var empty6 = empty(nondetTPlus(monadStateT3));
  var runReadM2 = runReadM(dictMonadP);
  return function(prefs2) {
    return function(arg) {
      return searchParser1(function(opt) {
        return discard22(when2(isArg(un5(Option)(opt).optMain))(cut2))(function() {
          var v = un5(Option)(opt).optMain;
          if (v instanceof CmdReader) {
            var v1 = new Tuple(v.value2(arg), un5(ParserPrefs)(prefs2).prefBacktrack);
            if (v1.value0 instanceof Just && v1.value1 instanceof NoBacktrack) {
              return lift24(bind32(applyFirst2(get2)(put2(Nil.value)))(function(args) {
                return map110(pure6)(lift33(applyFirst1(applySecond2(enterContext2(arg)(v1.value0.value0))(runParserInfo(dictMonadP)(v1.value0.value0)(args)))(exitContext2)));
              }));
            }
            ;
            if (v1.value0 instanceof Just && v1.value1 instanceof Backtrack) {
              return map26(pure6)(lift24(StateT(function(args) {
                return applyFirst1(applySecond2(enterContext2(arg)(v1.value0.value0))(runParser(dictMonadP)(un5(ParserInfo)(v1.value0.value0).infoPolicy)(CmdStart.value)(un5(ParserInfo)(v1.value0.value0).infoParser)(args)))(exitContext2);
              })));
            }
            ;
            if (v1.value0 instanceof Just && v1.value1 instanceof SubparserInline) {
              return lift24(discard32(lift33(enterContext2(arg)(v1.value0.value0)))(function() {
                return pure25(un5(ParserInfo)(v1.value0.value0).infoParser);
              }));
            }
            ;
            if (v1.value0 instanceof Nothing) {
              return empty6;
            }
            ;
            throw new Error("Failed pattern match at Options.Applicative.Common (line 154, column 7 - line 166, column 38): " + [v1.constructor.name]);
          }
          ;
          if (v instanceof ArgReader) {
            return map26(pure6)(lift24(lift33(runReadM2(un5(CReader)(v.value0).crReader)(arg))));
          }
          ;
          return empty6;
        });
      });
    };
  };
};
var runParserInfo = function(dictMonadP) {
  return function(i) {
    return runParserFully(dictMonadP)(un5(ParserInfo)(i).infoPolicy)(un5(ParserInfo)(i).infoParser);
  };
};
var runParserFully = function(dictMonadP) {
  var Monad0 = dictMonadP.Monad0();
  var bind32 = bind(Monad0.Bind1());
  var pure25 = pure(Monad0.Applicative0());
  var errorP2 = errorP(dictMonadP);
  return function(policy) {
    return function(p) {
      return function(args) {
        return bind32(runParser(dictMonadP)(policy)(CmdStart.value)(p)(args))(function(v) {
          if (v.value1 instanceof Nil) {
            return pure25(v.value0);
          }
          ;
          if (v.value1 instanceof Cons) {
            return errorP2(unexpectedError(v.value1.value0)(pure6(unit)));
          }
          ;
          throw new Error("Failed pattern match at Options.Applicative.Common (line 214, column 3 - line 216, column 66): " + [v.value1.constructor.name]);
        });
      };
    };
  };
};
var runParser = function(dictMonadP) {
  var Monad0 = dictMonadP.Monad0();
  var disamb2 = disamb(monadStateT(Monad0));
  var exitP2 = exitP(dictMonadP);
  var bind32 = bind(Monad0.Bind1());
  var getPrefs2 = getPrefs(dictMonadP);
  var hoistMaybe2 = hoistMaybe(dictMonadP);
  return function(policy) {
    return function(isCmdStart) {
      return function(p) {
        return function(args) {
          var result = apply5(map10(Tuple.create)(evalParser(p)))(pure13(args));
          var newPolicy = function(a) {
            if (policy instanceof NoIntersperse) {
              var $299 = isJust(parseWord(a));
              if ($299) {
                return NoIntersperse.value;
              }
              ;
              return AllPositionals.value;
            }
            ;
            return policy;
          };
          var do_step = function(prefs2) {
            return function(arg) {
              return function(argt) {
                return function(v) {
                  return runStateT(v)(argt);
                }(disamb2(!un5(ParserPrefs)(prefs2).prefDisambiguate)(stepParser(dictMonadP)(prefs2)(policy)(arg)(p)));
              };
            };
          };
          if (args instanceof Nil) {
            return exitP2(isCmdStart)(policy)(p)(result);
          }
          ;
          if (args instanceof Cons && (args.value0 === "--" && notEq1(policy)(AllPositionals.value))) {
            return runParser(dictMonadP)(AllPositionals.value)(CmdCont.value)(p)(args.value1);
          }
          ;
          if (args instanceof Cons) {
            return bind32(getPrefs2)(function(prefs2) {
              return bind32(do_step(prefs2)(args.value0)(args.value1))(function(v) {
                if (v.value0 instanceof Nothing) {
                  return hoistMaybe2(unexpectedError(args.value0)(p))(result);
                }
                ;
                if (v.value0 instanceof Just) {
                  return runParser(dictMonadP)(newPolicy(args.value0))(CmdCont.value)(v.value0.value0)(v.value1);
                }
                ;
                throw new Error("Failed pattern match at Options.Applicative.Common (line 192, column 5 - line 194, column 60): " + [v.value0.constructor.name]);
              });
            });
          }
          ;
          throw new Error("Failed pattern match at Options.Applicative.Common (line 186, column 38 - line 194, column 60): " + [args.constructor.name]);
        };
      };
    };
  };
};
var treeMapParser = function(g) {
  var has_default = function(p) {
    return isJust(evalParser(p));
  };
  var hasArg = function(v) {
    if (v instanceof NilP) {
      return false;
    }
    ;
    if (v instanceof OptP) {
      return isArg(un5(Option)(v.value0).optMain);
    }
    ;
    if (v instanceof MultP) {
      return runExists(function(v1) {
        return hasArg(v1.value0) || hasArg(v1.value1);
      })(v.value0);
    }
    ;
    if (v instanceof AltP) {
      return hasArg(v.value0) || hasArg(v.value1);
    }
    ;
    if (v instanceof BindP) {
      return resume$prime(function(p) {
        return function(v1) {
          return hasArg(p);
        };
      })($$const(false))(v.value0);
    }
    ;
    throw new Error("Failed pattern match at Options.Applicative.Common (line 272, column 5 - line 272, column 44): " + [v.constructor.name]);
  };
  var go = function(v) {
    return function(v1) {
      return function(v2) {
        return function(v3) {
          return function(v4) {
            if (v4 instanceof NilP) {
              return new MultNode([]);
            }
            ;
            if (v4 instanceof OptP) {
              if (greaterThan2(optVisibility(v4.value0))(Internal.value)) {
                return new Leaf(v3({
                  hinfoMulti: v,
                  hinfoDefault: v1,
                  hinfoUnreachableArgs: v2
                })(v4.value0));
              }
              ;
              if (otherwise) {
                return new MultNode([]);
              }
              ;
            }
            ;
            if (v4 instanceof MultP) {
              return runExists(function(v5) {
                var r$prime = v2 || hasArg(v5.value0);
                return new MultNode([go(v)(v1)(v2)(v3)(v5.value0), go(v)(v1)(r$prime)(v3)(v5.value1)]);
              })(v4.value0);
            }
            ;
            if (v4 instanceof AltP) {
              var d$prime = v1 || (has_default(v4.value0) || has_default(v4.value1));
              return new AltNode([go(v)(d$prime)(v2)(v3)(v4.value0), go(v)(d$prime)(v2)(v3)(v4.value1)]);
            }
            ;
            if (v4 instanceof BindP) {
              return resume$prime(function(p) {
                return function(k) {
                  var go$prime = go(true)(v1)(v2)(v3)(p);
                  var v5 = evalParser(p);
                  if (v5 instanceof Nothing) {
                    return go$prime;
                  }
                  ;
                  if (v5 instanceof Just) {
                    return new MultNode([go$prime, go(true)(v1)(v2)(v3)(new BindP(k(v5.value0)))]);
                  }
                  ;
                  throw new Error("Failed pattern match at Options.Applicative.Common (line 267, column 12 - line 269, column 68): " + [v5.constructor.name]);
                };
              })($$const(new MultNode([])))(v4.value0);
            }
            ;
            throw new Error("Failed pattern match at Options.Applicative.Common (line 248, column 5 - line 251, column 21): " + [v.constructor.name, v1.constructor.name, v2.constructor.name, v3.constructor.name, v4.constructor.name]);
          };
        };
      };
    };
  };
  var $350 = go(false)(false)(false)(g);
  return function($351) {
    return simplify($350($351));
  };
};
var mapParser = function(f) {
  var flatten2 = function(v) {
    if (v instanceof Leaf) {
      return [v.value0];
    }
    ;
    if (v instanceof MultNode) {
      return bind5(v.value0)(flatten2);
    }
    ;
    if (v instanceof AltNode) {
      return bind5(v.value0)(flatten2);
    }
    ;
    throw new Error("Failed pattern match at Options.Applicative.Common (line 235, column 5 - line 235, column 27): " + [v.constructor.name]);
  };
  var $352 = treeMapParser(f);
  return function($353) {
    return flatten2($352($353));
  };
};

// output/Options.Applicative.Builder.Internal/index.js
var over3 = /* @__PURE__ */ over()();
var append5 = /* @__PURE__ */ append(semigroupArray);
var map11 = /* @__PURE__ */ map(functorArray);
var lookup2 = /* @__PURE__ */ lookup(foldableArray)(eqString);
var alt4 = /* @__PURE__ */ alt(altMaybe);
var identity7 = /* @__PURE__ */ identity(categoryFn);
var apply6 = /* @__PURE__ */ apply(applyMaybe);
var alt13 = /* @__PURE__ */ alt(parserAlt);
var pure7 = /* @__PURE__ */ pure(parserApplicative);
var OptionFields = function(x) {
  return x;
};
var FlagFields = function(x) {
  return x;
};
var DefaultProp = /* @__PURE__ */ function() {
  function DefaultProp2(value0, value12) {
    this.value0 = value0;
    this.value1 = value12;
  }
  ;
  DefaultProp2.create = function(value0) {
    return function(value12) {
      return new DefaultProp2(value0, value12);
    };
  };
  return DefaultProp2;
}();
var Mod = /* @__PURE__ */ function() {
  function Mod2(value0, value12, value22) {
    this.value0 = value0;
    this.value1 = value12;
    this.value2 = value22;
  }
  ;
  Mod2.create = function(value0) {
    return function(value12) {
      return function(value22) {
        return new Mod2(value0, value12, value22);
      };
    };
  };
  return Mod2;
}();
var CommandFields = function(x) {
  return x;
};
var optionFieldsHasValue = {
  hasValueDummy: function(v) {
    return unit;
  }
};
var optionFieldsHasMetavar = {
  hasMetavarDummy: function(v) {
    return unit;
  }
};
var optionFieldsHasName = {
  name: function(n) {
    return over3(OptionFields)(function(fields) {
      return {
        optNames: append5([n])(fields.optNames),
        optCompleter: fields.optCompleter,
        optNoArgError: fields.optNoArgError
      };
    });
  }
};
var name2 = function(dict) {
  return dict.name;
};
var mkCommand = function(m) {
  var v = m.value0({
    cmdCommands: [],
    cmdGroup: Nothing.value
  });
  return new Tuple(v.cmdGroup, new Tuple(map11(fst)(v.cmdCommands), new Tuple(function(v1) {
    return lookup2(v1)(v.cmdCommands);
  }, unit)));
};
var flagFieldsHasName = {
  name: function(n) {
    return over3(FlagFields)(function(fields) {
      return {
        flagNames: append5([n])(fields.flagNames),
        flagActive: fields.flagActive
      };
    });
  }
};
var defaultPropSemigroup = {
  append: function(v) {
    return function(v1) {
      return new DefaultProp(alt4(v.value0)(v1.value0), alt4(v.value1)(v1.value1));
    };
  }
};
var append13 = /* @__PURE__ */ append(defaultPropSemigroup);
var modSemigroup = {
  append: function(v) {
    return function(v1) {
      return new Mod(function($69) {
        return v1.value0(v.value0($69));
      }, append13(v1.value1)(v.value1), function($70) {
        return v1.value2(v.value2($70));
      });
    };
  }
};
var defaultPropMonoid = /* @__PURE__ */ function() {
  return {
    mempty: new DefaultProp(Nothing.value, Nothing.value),
    Semigroup0: function() {
      return defaultPropSemigroup;
    }
  };
}();
var mempty3 = /* @__PURE__ */ mempty(defaultPropMonoid);
var fieldMod = function(f) {
  return new Mod(f, mempty3, identity7);
};
var modMonoid = /* @__PURE__ */ function() {
  return {
    mempty: new Mod(identity7, mempty3, identity7),
    Semigroup0: function() {
      return modSemigroup;
    }
  };
}();
var optionMod = /* @__PURE__ */ function() {
  return Mod.create(identity7)(mempty3);
}();
var internal = /* @__PURE__ */ optionMod(/* @__PURE__ */ over3(OptProperties)(function(p) {
  return {
    propVisibility: Internal.value,
    propDescMod: p.propDescMod,
    propHelp: p.propHelp,
    propMetaVar: p.propMetaVar,
    propShowDefault: p.propShowDefault
  };
}));
var commandFieldsHasMetavar = {
  hasMetavarDummy: function(v) {
    return unit;
  }
};
var baseProps = /* @__PURE__ */ function() {
  return {
    propMetaVar: "",
    propVisibility: Visible.value,
    propHelp: mempty(chunkMonoid(docSemigroup)),
    propShowDefault: Nothing.value,
    propDescMod: Nothing.value
  };
}();
var mkProps = function(v) {
  return function(g) {
    var props = over3(OptProperties)(function(r) {
      return {
        propShowDefault: apply6(v.value1)(v.value0),
        propDescMod: r.propDescMod,
        propHelp: r.propHelp,
        propMetaVar: r.propMetaVar,
        propVisibility: r.propVisibility
      };
    })(g(baseProps));
    return props;
  };
};
var mkOption = function(d) {
  return function(g) {
    return function(rdr) {
      return {
        optMain: rdr,
        optProps: mkProps(d)(g)
      };
    };
  };
};
var mkParser = function(v) {
  return function(g) {
    return function(rdr) {
      var o = liftOpt(mkOption(v)(g)(rdr));
      return maybe(o)(function(a) {
        return alt13(o)(pure7(a));
      })(v.value0);
    };
  };
};

// output/Options.Applicative.Builder/index.js
var identity8 = /* @__PURE__ */ identity(categoryFn);
var over4 = /* @__PURE__ */ over()();
var un6 = /* @__PURE__ */ un();
var append6 = /* @__PURE__ */ append(modSemigroup);
var mempty4 = /* @__PURE__ */ mempty(completerMonoid);
var bind6 = /* @__PURE__ */ bind(readMBind);
var pure8 = /* @__PURE__ */ pure(readMApplicative);
var mempty12 = /* @__PURE__ */ mempty(/* @__PURE__ */ chunkMonoid(docSemigroup));
var min4 = /* @__PURE__ */ min(optVisibilityOrd);
var alt5 = /* @__PURE__ */ alt(parserAlt);
var pure14 = /* @__PURE__ */ pure(parserApplicative);
var show2 = /* @__PURE__ */ show(showString);
var append32 = /* @__PURE__ */ append(semigroupArray);
var fold4 = /* @__PURE__ */ fold(foldableArray)(modMonoid);
var PrefsMod = function(x) {
  return x;
};
var InfoMod = function(x) {
  return x;
};
var value = function(dictHasValue) {
  return function(x) {
    return new Mod(identity8, new DefaultProp(new Just(x), Nothing.value), identity8);
  };
};
var value1 = /* @__PURE__ */ value(optionFieldsHasValue);
var str = readerAsk;
var $$short = function(dictHasName) {
  var $121 = name2(dictHasName);
  return function($122) {
    return fieldMod($121(OptShort.create($122)));
  };
};
var noArgError = function(e) {
  return fieldMod(over4(OptionFields)(function(p) {
    return {
      optNoArgError: $$const(e),
      optCompleter: p.optCompleter,
      optNames: p.optNames
    };
  }));
};
var prefs = function(m) {
  var base = {
    prefMultiSuffix: "",
    prefDisambiguate: false,
    prefShowHelpOnError: false,
    prefShowHelpOnEmpty: false,
    prefBacktrack: Backtrack.value,
    prefColumns: 80
  };
  return un6(PrefsMod)(m)(base);
};
var prefsModSemigroup = {
  append: function(m1) {
    return function(m2) {
      var $123 = un6(PrefsMod)(m2);
      var $124 = un6(PrefsMod)(m1);
      return function($125) {
        return $123($124($125));
      };
    };
  }
};
var prefsModMonoid = {
  mempty: identity8,
  Semigroup0: function() {
    return prefsModSemigroup;
  }
};
var metavar = function(dictHasMetavar) {
  return function($$var) {
    return optionMod(over4(OptProperties)(function(p) {
      return {
        propMetaVar: $$var,
        propDescMod: p.propDescMod,
        propHelp: p.propHelp,
        propShowDefault: p.propShowDefault,
        propVisibility: p.propVisibility
      };
    }));
  };
};
var metavar1 = /* @__PURE__ */ metavar(optionFieldsHasMetavar);
var metavar2 = /* @__PURE__ */ metavar(commandFieldsHasMetavar);
var option = function(r) {
  return function(m) {
    var v = append6(metavar1("ARG"))(m);
    var v1 = v.value0({
      optNames: [],
      optCompleter: mempty4,
      optNoArgError: ExpectsArgError.create
    });
    var crdr = {
      crCompleter: v1.optCompleter,
      crReader: r
    };
    var rdr = new OptReader(v1.optNames, crdr, v1.optNoArgError);
    return mkParser(v.value1)(v.value2)(rdr);
  };
};
var strOption = /* @__PURE__ */ option(str);
var subparser = function(m) {
  var v = append6(metavar2("COMMAND"))(m);
  var v1 = mkCommand(m);
  var rdr = new CmdReader(v1.value0, v1.value1.value0, v1.value1.value1.value0);
  return mkParser(v.value1)(v.value2)(rdr);
};
var $$long = function(dictHasName) {
  var $126 = name2(dictHasName);
  return function($127) {
    return fieldMod($126(OptLong.create($127)));
  };
};
var infoModSemigroup = {
  append: function(m1) {
    return function(m2) {
      var $128 = un6(InfoMod)(m2);
      var $129 = un6(InfoMod)(m1);
      return function($130) {
        return $128($129($130));
      };
    };
  }
};
var infoModMonoid = {
  mempty: identity8,
  Semigroup0: function() {
    return infoModSemigroup;
  }
};
var info = function(parser) {
  return function(m) {
    var base = {
      infoParser: parser,
      infoFullDesc: true,
      infoProgDesc: mempty12,
      infoHeader: mempty12,
      infoFooter: mempty12,
      infoFailureCode: $$Error.value,
      infoPolicy: Intersperse.value
    };
    return un6(InfoMod)(m)(base);
  };
};
var idm = function(dictMonoid) {
  return mempty(dictMonoid);
};
var hidden = /* @__PURE__ */ optionMod(/* @__PURE__ */ over4(OptProperties)(function(p) {
  return {
    propVisibility: min4(Hidden.value)(p.propVisibility),
    propDescMod: p.propDescMod,
    propHelp: p.propHelp,
    propMetaVar: p.propMetaVar,
    propShowDefault: p.propShowDefault
  };
}));
var help = function(s) {
  return optionMod(over4(OptProperties)(function(p) {
    return {
      propHelp: paragraph(s),
      propDescMod: p.propDescMod,
      propMetaVar: p.propMetaVar,
      propShowDefault: p.propShowDefault,
      propVisibility: p.propVisibility
    };
  }));
};
var flag$prime = function(actv) {
  return function(v) {
    var rdr = function() {
      var v1 = v.value0({
        flagNames: [],
        flagActive: actv
      });
      return new FlagReader(v1.flagNames, v1.flagActive);
    }();
    return mkParser(v.value1)(v.value2)(rdr);
  };
};
var flag = function(defv) {
  return function(actv) {
    return function(m) {
      return alt5(flag$prime(actv)(m))(pure14(defv));
    };
  };
};
var eitherReader = function(f) {
  return bind6(readerAsk)(function() {
    var $131 = either(readerError)(pure8);
    return function($132) {
      return $131(f($132));
    };
  }());
};
var $$int = /* @__PURE__ */ eitherReader(function(s) {
  var v = fromString(s);
  if (v instanceof Nothing) {
    return new Left("Can't parse as Int: `" + (show2(s) + "`"));
  }
  ;
  if (v instanceof Just) {
    return new Right(v.value0);
  }
  ;
  throw new Error("Failed pattern match at Options.Applicative.Builder (line 124, column 28 - line 126, column 20): " + [v.constructor.name]);
});
var defaultPrefs = /* @__PURE__ */ prefs(/* @__PURE__ */ idm(prefsModMonoid));
var command = function(cmd) {
  return function(pinfo) {
    return fieldMod(over4(CommandFields)(function(p) {
      return {
        cmdCommands: append32([new Tuple(cmd, pinfo)])(p.cmdCommands),
        cmdGroup: p.cmdGroup
      };
    }));
  };
};
var abortOption = function(err) {
  return function(m) {
    return option(readerAbort(err))(function(v) {
      return append6(v)(m);
    }(fold4([noArgError(err), value1(identity8), metavar1("")])));
  };
};

// output/Node.Encoding/index.js
var ASCII = /* @__PURE__ */ function() {
  function ASCII2() {
  }
  ;
  ASCII2.value = new ASCII2();
  return ASCII2;
}();
var UTF8 = /* @__PURE__ */ function() {
  function UTF82() {
  }
  ;
  UTF82.value = new UTF82();
  return UTF82;
}();
var UTF16LE = /* @__PURE__ */ function() {
  function UTF16LE2() {
  }
  ;
  UTF16LE2.value = new UTF16LE2();
  return UTF16LE2;
}();
var UCS2 = /* @__PURE__ */ function() {
  function UCS22() {
  }
  ;
  UCS22.value = new UCS22();
  return UCS22;
}();
var Base64 = /* @__PURE__ */ function() {
  function Base642() {
  }
  ;
  Base642.value = new Base642();
  return Base642;
}();
var Latin1 = /* @__PURE__ */ function() {
  function Latin12() {
  }
  ;
  Latin12.value = new Latin12();
  return Latin12;
}();
var Binary = /* @__PURE__ */ function() {
  function Binary2() {
  }
  ;
  Binary2.value = new Binary2();
  return Binary2;
}();
var Hex = /* @__PURE__ */ function() {
  function Hex2() {
  }
  ;
  Hex2.value = new Hex2();
  return Hex2;
}();
var showEncoding = {
  show: function(v) {
    if (v instanceof ASCII) {
      return "ASCII";
    }
    ;
    if (v instanceof UTF8) {
      return "UTF8";
    }
    ;
    if (v instanceof UTF16LE) {
      return "UTF16LE";
    }
    ;
    if (v instanceof UCS2) {
      return "UCS2";
    }
    ;
    if (v instanceof Base64) {
      return "Base64";
    }
    ;
    if (v instanceof Latin1) {
      return "Latin1";
    }
    ;
    if (v instanceof Binary) {
      return "Binary";
    }
    ;
    if (v instanceof Hex) {
      return "Hex";
    }
    ;
    throw new Error("Failed pattern match at Node.Encoding (line 19, column 1 - line 27, column 23): " + [v.constructor.name]);
  }
};

// output/Node.Process/foreign.js
import process from "process";
function exit(code) {
  return () => {
    process.exit(code);
  };
}
function copyArray(xs) {
  return () => xs.slice();
}

// output/Foreign.Object/foreign.js
function toArrayWithKey(f) {
  return function(m) {
    var r = [];
    for (var k in m) {
      if (hasOwnProperty.call(m, k)) {
        r.push(f(k)(m[k]));
      }
    }
    return r;
  };
}
var keys = Object.keys || toArrayWithKey(function(k) {
  return function() {
    return k;
  };
});

// output/Node.Process/index.js
var stdout = /* @__PURE__ */ function() {
  return process.stdout;
}();
var stderr = /* @__PURE__ */ function() {
  return process.stderr;
}();
var argv = /* @__PURE__ */ function() {
  return copyArray(process.argv);
}();

// output/Node.Stream/foreign.js
function writeStringImpl(w) {
  return (enc) => (s) => (done) => () => w.write(s, enc, done);
}

// output/Data.Nullable/foreign.js
function nullable(a, r, f) {
  return a == null ? r : f(a);
}

// output/Data.Nullable/index.js
var toMaybe = function(n) {
  return nullable(n, Nothing.value, Just.create);
};

// output/Node.Stream/index.js
var show3 = /* @__PURE__ */ show(showEncoding);
var writeString3 = function(w) {
  return function(enc) {
    return function(s) {
      return function(cb) {
        return writeStringImpl(w)(show3(enc))(s)(function($20) {
          return cb(toMaybe($20))();
        });
      };
    };
  };
};

// output/Data.Array.NonEmpty.Internal/foreign.js
var traverse1Impl = function() {
  function Cont(fn) {
    this.fn = fn;
  }
  var emptyList = {};
  var ConsCell = function(head3, tail2) {
    this.head = head3;
    this.tail = tail2;
  };
  function finalCell(head3) {
    return new ConsCell(head3, emptyList);
  }
  function consList(x) {
    return function(xs) {
      return new ConsCell(x, xs);
    };
  }
  function listToArray(list) {
    var arr = [];
    var xs = list;
    while (xs !== emptyList) {
      arr.push(xs.head);
      xs = xs.tail;
    }
    return arr;
  }
  return function(apply9) {
    return function(map21) {
      return function(f) {
        var buildFrom = function(x, ys) {
          return apply9(map21(consList)(f(x)))(ys);
        };
        var go = function(acc, currentLen, xs) {
          if (currentLen === 0) {
            return acc;
          } else {
            var last3 = xs[currentLen - 1];
            return new Cont(function() {
              var built = go(buildFrom(last3, acc), currentLen - 1, xs);
              return built;
            });
          }
        };
        return function(array) {
          var acc = map21(finalCell)(f(array[array.length - 1]));
          var result = go(acc, array.length - 1, array);
          while (result instanceof Cont) {
            result = result.fn();
          }
          return map21(listToArray)(result);
        };
      };
    };
  };
}();

// output/Data.Array.NonEmpty.Internal/index.js
var NonEmptyArray = function(x) {
  return x;
};

// output/Data.Array.NonEmpty/index.js
var fromJust4 = /* @__PURE__ */ fromJust();
var unsafeFromArray = NonEmptyArray;
var toArray4 = function(v) {
  return v;
};
var fromArray4 = function(xs) {
  if (length(xs) > 0) {
    return new Just(unsafeFromArray(xs));
  }
  ;
  if (otherwise) {
    return Nothing.value;
  }
  ;
  throw new Error("Failed pattern match at Data.Array.NonEmpty (line 161, column 1 - line 161, column 58): " + [xs.constructor.name]);
};
var adaptMaybe = function(f) {
  return function($126) {
    return fromJust4(f(toArray4($126)));
  };
};
var uncons6 = /* @__PURE__ */ adaptMaybe(uncons);

// output/Options.Applicative.BashCompletion/index.js
var pure9 = /* @__PURE__ */ pure(applicativeEffect);
var un7 = /* @__PURE__ */ un();
var map14 = /* @__PURE__ */ map(functorMaybe);
var map15 = /* @__PURE__ */ map(functorArray);
var runParserInfo2 = /* @__PURE__ */ runParserInfo(completionMonadP);
var fromFoldable5 = /* @__PURE__ */ fromFoldable2(foldableArray);
var identity9 = /* @__PURE__ */ identity(categoryFn);
var bind7 = /* @__PURE__ */ bind(bindMaybe);
var notEq2 = /* @__PURE__ */ notEq(argPolicyEq);
var map24 = /* @__PURE__ */ map(functorEffect);
var fold5 = /* @__PURE__ */ fold(foldableArray)(monoidArray);
var sequence2 = /* @__PURE__ */ sequence(traversableArray)(applicativeEffect);
var unLines2 = /* @__PURE__ */ unLines(foldableArray);
var alt6 = /* @__PURE__ */ alt(parserAlt);
var map33 = /* @__PURE__ */ map(parserFunctor);
var apply7 = /* @__PURE__ */ apply(parserApply);
var append14 = /* @__PURE__ */ append(modSemigroup);
var $$long2 = /* @__PURE__ */ $$long(flagFieldsHasName);
var long1 = /* @__PURE__ */ $$long(optionFieldsHasName);
var value2 = /* @__PURE__ */ value(optionFieldsHasValue);
var pure15 = /* @__PURE__ */ pure(parserApplicative);
var fromFoldable1 = /* @__PURE__ */ fromFoldable(foldableList);
var Standard = /* @__PURE__ */ function() {
  function Standard2() {
  }
  ;
  Standard2.value = new Standard2();
  return Standard2;
}();
var Enriched = /* @__PURE__ */ function() {
  function Enriched2(value0, value12) {
    this.value0 = value0;
    this.value1 = value12;
  }
  ;
  Enriched2.create = function(value0) {
    return function(value12) {
      return new Enriched2(value0, value12);
    };
  };
  return Enriched2;
}();
var zshCompletionScript = function(prog) {
  return function(progn) {
    return pure9(["#compdef " + progn, "", "local request", "local completions", "local word", "local index=$((CURRENT - 1))", "", "request=(--bash-completion-enriched --bash-completion-index $index)", "for arg in ${words[@]}; do", "  request=(${request[@]} --bash-completion-word $arg)", "done", "", "IFS=$'\\n' completions=($( " + (prog + ' "${request[@]}" ))'), "", "for word in $completions; do", "  local -a parts", "", "  # Split the line at a tab if there is one.", "  IFS=$'\\t' parts=($( echo $word ))", "", "  if [[ -n $parts[2] ]]; then", '     if [[ $word[1] == "-" ]]; then', '       local desc=("$parts[1] ($parts[2])")', "       compadd -d desc -- $parts[1]", "     else", '       local desc=($(print -f  "%-019s -- %s" $parts[1] $parts[2]))', "       compadd -l -d desc -- $parts[1]", "     fi", "  else", "    compadd -f -- $word", "  fi", "done"]);
  };
};
var fishCompletionScript = function(prog) {
  return function(progn) {
    return pure9([" function _" + progn, "    set -l cl (commandline --tokenize --current-process)", "    # Hack around fish issue #3934", "    set -l cn (commandline --tokenize --cut-at-cursor --current-process)", "    set -l cn (count $cn)", "    set -l tmpline --bash-completion-enriched --bash-completion-index $cn", "    for arg in $cl", "      set tmpline $tmpline --bash-completion-word $arg", "    end", "    for opt in (" + (prog + " $tmpline)"), "      if test -d $opt", '        echo -E "$opt/"', "      else", '        echo -E "$opt"', "      end", "    end", "end", "", "complete --no-files --command " + (progn + (" --arguments '(_" + (progn + ")'")))]);
  };
};
var bashCompletionScript = function(prog) {
  return function(progn) {
    return pure9(["_" + (progn + "()"), "{", "    local CMDLINE", "    local IFS=$'\\n'", "    CMDLINE=(--bash-completion-index $COMP_CWORD)", "", "    for arg in ${COMP_WORDS[@]}; do", "        CMDLINE=(${CMDLINE[@]} --bash-completion-word $arg)", "    done", "", "    COMPREPLY=( $(" + (prog + ' "${CMDLINE[@]}") )'), "}", "", "complete -o filenames -F _" + (progn + (" " + progn))]);
  };
};
var arraySplitAt = function(idx) {
  return function(arr) {
    if (idx === 0) {
      return {
        init: [],
        rest: arr
      };
    }
    ;
    return {
      init: slice(0)(idx)(arr),
      rest: slice(idx)(length(arr))(arr)
    };
  };
};
var bashCompletionQuery = function(pinfo) {
  return function(pprefs) {
    return function(richness) {
      return function(ws) {
        return function(i) {
          return function(v) {
            var v1 = arraySplitAt(i)(ws);
            var run_completer = function(c) {
              return un7(Completer)(c)(fromMaybe("")(head(v1.rest)));
            };
            var render_line = function(len) {
              return function(doc) {
                var v22 = map14(uncons6)(fromArray4(lines(displayS(renderPretty(1)(len)(doc)))));
                if (v22 instanceof Nothing) {
                  return "";
                }
                ;
                if (v22 instanceof Just && v22.value0.tail.length === 0) {
                  return v22.value0.head;
                }
                ;
                if (v22 instanceof Just) {
                  return v22.value0.head + "...";
                }
                ;
                throw new Error("Failed pattern match at Options.Applicative.BashCompletion (line 162, column 27 - line 165, column 43): " + [v22.constructor.name]);
              };
            };
            var is_completion = function() {
              var v22 = head(v1.rest);
              if (v22 instanceof Just) {
                return startsWith(v22.value0);
              }
              ;
              if (v22 instanceof Nothing) {
                return $$const(true);
              }
              ;
              throw new Error("Failed pattern match at Options.Applicative.BashCompletion (line 175, column 7 - line 177, column 30): " + [v22.constructor.name]);
            }();
            var filter_names = filter(is_completion);
            var show_names = function() {
              var $129 = map15(showOption);
              return function($130) {
                return filter_names($129($130));
              };
            }();
            var compl = runParserInfo2(pinfo)(fromFoldable5(drop(1)(v1.init)));
            var add_opt_help = function(dictFunctor) {
              var map44 = map(dictFunctor);
              return function(opt) {
                if (richness instanceof Standard) {
                  return identity9;
                }
                ;
                if (richness instanceof Enriched) {
                  return map44(function(o) {
                    var h = un7(Chunk)(optHelp(opt));
                    return maybe(o)(function(h$prime) {
                      return o + ("	" + render_line(richness.value0)(h$prime));
                    })(h);
                  });
                }
                ;
                throw new Error("Failed pattern match at Options.Applicative.BashCompletion (line 138, column 24 - line 143, column 79): " + [richness.constructor.name]);
              };
            };
            var add_opt_help1 = add_opt_help(functorArray);
            var add_cmd_help = function(dictFunctor) {
              var map44 = map(dictFunctor);
              return function(p) {
                if (richness instanceof Standard) {
                  return identity9;
                }
                ;
                if (richness instanceof Enriched) {
                  return map44(function(cmd) {
                    var h = bind7(p(cmd))(function() {
                      var $131 = un7(Chunk);
                      var $132 = un7(ParserInfo);
                      return function($133) {
                        return $131(function(v22) {
                          return v22.infoProgDesc;
                        }($132($133)));
                      };
                    }());
                    return maybe(cmd)(function(h$prime) {
                      return cmd + ("	" + render_line(richness.value1)(h$prime));
                    })(h);
                  });
                }
                ;
                throw new Error("Failed pattern match at Options.Applicative.BashCompletion (line 148, column 22 - line 153, column 85): " + [richness.constructor.name]);
              };
            };
            var add_cmd_help1 = add_cmd_help(functorArray);
            var opt_completions = function(argPolicy) {
              return function(hinfo) {
                return function(opt) {
                  var v22 = un7(Option)(opt).optMain;
                  if (v22 instanceof OptReader) {
                    if (notEq2(argPolicy)(AllPositionals.value)) {
                      return pure9(add_opt_help1(opt)(show_names(v22.value0)));
                    }
                    ;
                    if (otherwise) {
                      return pure9([]);
                    }
                    ;
                  }
                  ;
                  if (v22 instanceof FlagReader) {
                    if (notEq2(argPolicy)(AllPositionals.value)) {
                      return pure9(add_opt_help1(opt)(show_names(v22.value0)));
                    }
                    ;
                    if (otherwise) {
                      return pure9([]);
                    }
                    ;
                  }
                  ;
                  if (v22 instanceof ArgReader) {
                    if (un7(OptHelpInfo)(hinfo).hinfoUnreachableArgs) {
                      return pure9([]);
                    }
                    ;
                    if (otherwise) {
                      return run_completer(un7(CReader)(v22.value0).crCompleter);
                    }
                    ;
                  }
                  ;
                  if (v22 instanceof CmdReader) {
                    if (un7(OptHelpInfo)(hinfo).hinfoUnreachableArgs) {
                      return pure9([]);
                    }
                    ;
                    if (otherwise) {
                      return pure9(add_cmd_help1(v22.value2)(filter_names(v22.value1)));
                    }
                    ;
                  }
                  ;
                  throw new Error("Failed pattern match at Options.Applicative.BashCompletion (line 113, column 43 - line 133, column 53): " + [v22.constructor.name]);
                };
              };
            };
            var list_options = function(a) {
              var $134 = map24(fold5);
              var $135 = mapParser(opt_completions(a));
              return function($136) {
                return $134(sequence2($135($136)));
              };
            };
            var v2 = runCompletion(compl)(pprefs);
            if (v2 instanceof Just && v2.value0 instanceof Left) {
              return runExists(function(p) {
                return list_options(v2.value0.value0.value1)(p);
              })(v2.value0.value0.value0.value0);
            }
            ;
            if (v2 instanceof Just && v2.value0 instanceof Right) {
              return run_completer(v2.value0.value0);
            }
            ;
            if (v2 instanceof Nothing) {
              return pure9([]);
            }
            ;
            throw new Error("Failed pattern match at Options.Applicative.BashCompletion (line 83, column 52 - line 89, column 15): " + [v2.constructor.name]);
          };
        };
      };
    };
  };
};
var bashCompletionParser = function(pinfo) {
  return function(pprefs) {
    var failure = function(opts) {
      return {
        execCompletion: function(progn) {
          return map24(unLines2)(opts(progn));
        }
      };
    };
    var complParser = alt6(map33(failure)(apply7(apply7(map33(bashCompletionQuery(pinfo)(pprefs))(alt6(apply7(apply7(flag$prime(Enriched.create)(append14($$long2("bash-completion-enriched"))(internal)))(option($$int)(append14(append14(long1("bash-completion-option-desc-length"))(internal))(value2(40)))))(option($$int)(append14(append14(long1("bash-completion-command-desc-length"))(internal))(value2(40)))))(pure15(Standard.value))))(map33(fromFoldable1)(many(strOption(append14(long1("bash-completion-word"))(internal))))))(option($$int)(append14(long1("bash-completion-index"))(internal)))))(alt6(map33(failure)(map33(bashCompletionScript)(strOption(append14(long1("bash-completion-script"))(internal)))))(alt6(map33(failure)(map33(fishCompletionScript)(strOption(append14(long1("fish-completion-script"))(internal)))))(map33(failure)(map33(zshCompletionScript)(strOption(append14(long1("zsh-completion-script"))(internal)))))));
    return complParser;
  };
};

// output/Options.Applicative.Help.Core/index.js
var over5 = /* @__PURE__ */ over()();
var mempty5 = /* @__PURE__ */ mempty(parserHelpMonoid);
var fold6 = /* @__PURE__ */ fold2(monoidArray);
var un8 = /* @__PURE__ */ un();
var chunkMonoid3 = /* @__PURE__ */ chunkMonoid(docSemigroup);
var mempty13 = /* @__PURE__ */ mempty(chunkMonoid3);
var eq12 = /* @__PURE__ */ eq(optVisibilityEq);
var map16 = /* @__PURE__ */ map(functorArray);
var sort2 = /* @__PURE__ */ sort(optNameOrd);
var append7 = /* @__PURE__ */ append(/* @__PURE__ */ chunkSemigroup(docSemigroup));
var map17 = /* @__PURE__ */ map(chunkFunctor);
var listToChunk2 = /* @__PURE__ */ listToChunk(docMonoid);
var identity10 = /* @__PURE__ */ identity(categoryFn);
var map25 = /* @__PURE__ */ map(functorMaybe);
var discard4 = /* @__PURE__ */ discard(discardUnit)(bindMaybe);
var guard3 = /* @__PURE__ */ guard(alternativeMaybe);
var pure10 = /* @__PURE__ */ pure(applicativeMaybe);
var extractChunk3 = /* @__PURE__ */ extractChunk(docMonoid);
var bind8 = /* @__PURE__ */ bind(bindArray);
var pure16 = /* @__PURE__ */ pure(applicativeArray);
var mempty22 = /* @__PURE__ */ mempty(/* @__PURE__ */ monoidTuple(/* @__PURE__ */ monoidMaybe(semigroupString))(chunkMonoid3));
var append15 = /* @__PURE__ */ append(semigroupArray);
var eq22 = /* @__PURE__ */ eq(/* @__PURE__ */ eqMaybe(eqString));
var OptDescStyle = function(x) {
  return x;
};
var usageHelp = function(chunk) {
  return over5(ParserHelp)(function(v) {
    return {
      helpUsage: chunk,
      helpBody: v.helpBody,
      helpError: v.helpError,
      helpFooter: v.helpFooter,
      helpHeader: v.helpHeader,
      helpSuggestions: v.helpSuggestions
    };
  })(mempty5);
};
var suggestionsHelp = function(chunk) {
  return over5(ParserHelp)(function(v) {
    return {
      helpSuggestions: chunk,
      helpBody: v.helpBody,
      helpError: v.helpError,
      helpFooter: v.helpFooter,
      helpHeader: v.helpHeader,
      helpUsage: v.helpUsage
    };
  })(mempty5);
};
var intersperse2 = function(sep) {
  var $64 = mapWithIndex2(function(idx) {
    return function(e) {
      var $49 = idx === 0;
      if ($49) {
        return [e];
      }
      ;
      return [sep, e];
    };
  });
  return function($65) {
    return fold6($64($65));
  };
};
var optDesc = function(pprefs) {
  return function(style) {
    return function(info3) {
      return function(opt) {
        var suffix = function() {
          if (un8(OptHelpInfo)(info3).hinfoMulti) {
            return stringChunk(un8(ParserPrefs)(pprefs).prefMultiSuffix);
          }
          ;
          if (otherwise) {
            return mempty13;
          }
          ;
          throw new Error("Failed pattern match at Options.Applicative.Help.Core (line 58, column 7 - line 62, column 17): " + []);
        }();
        var show_opt = function() {
          if (un8(OptHelpInfo)(info3).hinfoDefault && !un8(OptDescStyle)(style).descOptional) {
            return false;
          }
          ;
          if (eq12(optVisibility(opt))(Hidden.value)) {
            return un8(OptDescStyle)(style).descHidden;
          }
          ;
          if (otherwise) {
            return eq12(optVisibility(opt))(Visible.value);
          }
          ;
          throw new Error("Failed pattern match at Options.Applicative.Help.Core (line 51, column 7 - line 57, column 39): " + []);
        }();
        var ns = optionNames(un8(Option)(opt).optMain);
        var mv = stringChunk(optMetaVar(opt));
        var descs = map16(function($66) {
          return string(showOption($66));
        })(sort2(ns));
        var render = function(chunk) {
          if (!show_opt) {
            return mempty13;
          }
          ;
          if (isEmpty(chunk) || !un8(OptDescStyle)(style).descSurround) {
            return append7(chunk)(suffix);
          }
          ;
          if (un8(OptHelpInfo)(info3).hinfoDefault) {
            return append7(map17(brackets)(chunk))(suffix);
          }
          ;
          if ($$null(drop(1)(descs))) {
            return append7(chunk)(suffix);
          }
          ;
          if (otherwise) {
            return append7(map17(parens)(chunk))(suffix);
          }
          ;
          throw new Error("Failed pattern match at Options.Applicative.Help.Core (line 63, column 7 - line 73, column 43): " + [chunk.constructor.name]);
        };
        var desc$prime = chunkBeside(listToChunk2(intersperse2(un8(OptDescStyle)(style).descSep)(descs)))(mv);
        return maybe(identity10)(map17)(optDescMod(opt))(render(desc$prime));
      };
    };
  };
};
var headerHelp = function(chunk) {
  return over5(ParserHelp)(function(v) {
    return {
      helpHeader: chunk,
      helpBody: v.helpBody,
      helpError: v.helpError,
      helpFooter: v.helpFooter,
      helpSuggestions: v.helpSuggestions,
      helpUsage: v.helpUsage
    };
  })(mempty5);
};
var fullDesc = function(pprefs) {
  var style = {
    descSep: string(","),
    descHidden: true,
    descOptional: true,
    descSurround: false
  };
  var doc = function(info3) {
    return function(opt) {
      var show_def = function(s) {
        return parens(appendWithSpace(string("default:"))(string(s)));
      };
      var n = optDesc(pprefs)(style)(info3)(opt);
      var hdef = map25(show_def)(optShowDefault(opt));
      var h = optHelp(opt);
      return discard4(guard3(!isEmpty(n)))(function() {
        return discard4(guard3(!isEmpty(h)))(function() {
          return pure10(new Tuple(extractChunk3(n), align(extractChunk3(chunkBeside(h)(hdef)))));
        });
      });
    };
  };
  var $67 = mapParser(doc);
  return function($68) {
    return tabulate(catMaybes($67($68)));
  };
};
var footerHelp = function(chunk) {
  return over5(ParserHelp)(function(v) {
    return {
      helpFooter: chunk,
      helpBody: v.helpBody,
      helpError: v.helpError,
      helpHeader: v.helpHeader,
      helpSuggestions: v.helpSuggestions,
      helpUsage: v.helpUsage
    };
  })(mempty5);
};
var fold_tree = function(v) {
  if (v instanceof Leaf) {
    return v.value0;
  }
  ;
  if (v instanceof MultNode) {
    return foldr2(function($69) {
      return chunkBesideOrBelow(fold_tree($69));
    })(mempty13)(v.value0);
  }
  ;
  if (v instanceof AltNode) {
    var alt_node = function(v1) {
      if (v1.length === 1) {
        return v1[0];
      }
      ;
      return map17(parens)(foldr2(chunked(function(x) {
        return function(y) {
          return appendWithSoftline(x)(appendWithSoftline($$char("|"))(y));
        };
      }))(mempty13)(v1));
    };
    return alt_node(filter(function($70) {
      return !isEmpty($70);
    })(map16(fold_tree)(v.value0)));
  }
  ;
  throw new Error("Failed pattern match at Options.Applicative.Help.Core (line 116, column 1 - line 116, column 46): " + [v.constructor.name]);
};
var errorHelp = function(chunk) {
  return over5(ParserHelp)(function(v) {
    return {
      helpError: chunk,
      helpBody: v.helpBody,
      helpFooter: v.helpFooter,
      helpHeader: v.helpHeader,
      helpSuggestions: v.helpSuggestions,
      helpUsage: v.helpUsage
    };
  })(mempty5);
};
var cmdDesc = /* @__PURE__ */ function() {
  var desc = function(v) {
    return function(opt) {
      var v1 = un8(Option)(opt).optMain;
      if (v1 instanceof CmdReader) {
        return new Tuple(v1.value0, tabulate(bind8(reverse(v1.value1))(function(cmd) {
          return bind8(maybe([])(pure16)(map25(function() {
            var $71 = un8(ParserInfo);
            return function($72) {
              return function(v2) {
                return v2.infoProgDesc;
              }($71($72));
            };
          }())(v1.value2(cmd))))(function(d) {
            return pure16(new Tuple(string(cmd), align(extractChunk3(d))));
          });
        })));
      }
      ;
      return mempty22;
    };
  };
  return mapParser(desc);
}();
var briefDesc$prime = function(showOptional) {
  return function(pprefs) {
    var style = {
      descSep: string("|"),
      descHidden: false,
      descOptional: showOptional,
      descSurround: true
    };
    var $73 = treeMapParser(optDesc(pprefs)(style));
    return function($74) {
      return fold_tree($73($74));
    };
  };
};
var missingDesc = /* @__PURE__ */ briefDesc$prime(false);
var briefDesc = /* @__PURE__ */ briefDesc$prime(true);
var parserUsage = function(pprefs) {
  return function(p) {
    return function(progn) {
      return hsep([string("Usage:"), string(progn), align(extractChunk3(briefDesc(pprefs)(p)))]);
    };
  };
};
var bodyHelp = function(chunk) {
  return over5(ParserHelp)(function(v) {
    return {
      helpBody: chunk,
      helpError: v.helpError,
      helpFooter: v.helpFooter,
      helpHeader: v.helpHeader,
      helpSuggestions: v.helpSuggestions,
      helpUsage: v.helpUsage
    };
  })(mempty5);
};
var parserHelp = function(pprefs) {
  return function(p) {
    var with_title = function(title) {
      return map17(function(v) {
        return appendWithLine(string(title))(v);
      });
    };
    var group_title = function(arr) {
      var v = uncons6(arr);
      return with_title(fromMaybe("Available commands:")(fst(v.head)))(vcatChunks(append15([snd(v.head)])(map16(snd)(v.tail))));
    };
    var cs = groupBy(on(eq22)(fst))(cmdDesc(p));
    return bodyHelp(vsepChunks(append15([with_title("Available options:")(fullDesc(pprefs)(p))])(map16(group_title)(cs))));
  };
};

// output/Data.Function.Memoize/index.js
var bind9 = /* @__PURE__ */ bind(bindLazy);
var NatTrie = /* @__PURE__ */ function() {
  function NatTrie2(value0, value12, value22) {
    this.value0 = value0;
    this.value1 = value12;
    this.value2 = value22;
  }
  ;
  NatTrie2.create = function(value0) {
    return function(value12) {
      return function(value22) {
        return new NatTrie2(value0, value12, value22);
      };
    };
  };
  return NatTrie2;
}();
var tabulateNat = {
  tabulate: /* @__PURE__ */ function() {
    var tabulateImpl = function(f) {
      var walk = function(v) {
        return function(v1) {
          if (v instanceof Nil) {
            return v1.value0;
          }
          ;
          if (v instanceof Cons && !v.value0) {
            return bind9(v1.value1)(walk(v.value1));
          }
          ;
          if (v instanceof Cons && v.value0) {
            return bind9(v1.value2)(walk(v.value1));
          }
          ;
          throw new Error("Failed pattern match at Data.Function.Memoize (line 137, column 11 - line 137, column 64): " + [v.constructor.name, v1.constructor.name]);
        };
      };
      var build = function(n) {
        return new NatTrie(defer2(function(v) {
          return f(n);
        }), defer2(function(v) {
          return build(n * 2 | 0);
        }), defer2(function(v) {
          return build((n * 2 | 0) + 1 | 0);
        }));
      };
      var trie = build(0);
      var bits = function() {
        var bits$prime = function($copy_v) {
          return function($copy_v1) {
            var $tco_var_v = $copy_v;
            var $tco_done = false;
            var $tco_result;
            function $tco_loop(v, v1) {
              if (v1 === 0) {
                $tco_done = true;
                return v;
              }
              ;
              $tco_var_v = new Cons((v1 & 1) !== 0, v);
              $copy_v1 = v1 >>> 1;
              return;
            }
            ;
            while (!$tco_done) {
              $tco_result = $tco_loop($tco_var_v, $copy_v1);
            }
            ;
            return $tco_result;
          };
        };
        return bits$prime(Nil.value);
      }();
      var go = function(n) {
        return walk(bits(n))(trie);
      };
      return go;
    };
    return tabulateImpl;
  }()
};
var tabulate2 = function(dict) {
  return dict.tabulate;
};
var tabulateTuple = function(dictTabulate) {
  var tabulate3 = tabulate2(dictTabulate);
  return function(dictTabulate1) {
    var tabulate4 = tabulate2(dictTabulate1);
    return {
      tabulate: function(f) {
        var f$prime = tabulate3(function(a) {
          return tabulate4(function(b) {
            return f(new Tuple(a, b));
          });
        });
        return function(v) {
          return bind9(f$prime(v.value0))(function(g) {
            return g(v.value1);
          });
        };
      }
    };
  };
};
var memoize = function(dictTabulate) {
  var tabulate3 = tabulate2(dictTabulate);
  return function(f) {
    var f1 = tabulate3(f);
    return function($141) {
      return force(f1($141));
    };
  };
};
var memoize2 = function(dictTabulate) {
  var tabulateTuple1 = tabulateTuple(dictTabulate);
  return function(dictTabulate1) {
    var memoize1 = memoize(tabulateTuple1(dictTabulate1));
    return function(f) {
      var f1 = memoize1(uncurry(f));
      return curry(f1);
    };
  };
};

// output/Options.Applicative.Help.Levenshtein/index.js
var $runtime_lazy4 = function(name3, moduleName, init3) {
  var state2 = 0;
  var val;
  return function(lineNumber) {
    if (state2 === 2)
      return val;
    if (state2 === 1)
      throw new ReferenceError(name3 + " was needed before it finished initializing (module " + moduleName + ", line " + lineNumber + ")", moduleName, lineNumber);
    state2 = 1;
    val = init3();
    state2 = 2;
    return val;
  };
};
var memoize22 = /* @__PURE__ */ memoize2(tabulateNat)(tabulateNat);
var minimum3 = /* @__PURE__ */ minimum2(ordInt)(/* @__PURE__ */ foldable1NonEmpty(foldableArray));
var unsafeIndex2 = /* @__PURE__ */ unsafeIndex();
var editDistance = function(dictEq) {
  var eq4 = eq(dictEq);
  return function(xs) {
    return function(ys) {
      var dist = function(v) {
        return function(v1) {
          if (v === 0) {
            return v1;
          }
          ;
          if (v1 === 0) {
            return v;
          }
          ;
          return minimum3(new NonEmpty($lazy_dist$prime(37)(v - 1 | 0)(v1) + 1 | 0, [$lazy_dist$prime(38)(v)(v1 - 1 | 0) + 1 | 0, function() {
            var $14 = eq4(unsafeIndex2(xs)(v - 1 | 0))(unsafeIndex2(ys)(v1 - 1 | 0));
            if ($14) {
              return $lazy_dist$prime(40)(v - 1 | 0)(v1 - 1 | 0);
            }
            ;
            return 1 + $lazy_dist$prime(41)(v - 1 | 0)(v1 - 1 | 0) | 0;
          }()]));
        };
      };
      var $lazy_dist$prime = $runtime_lazy4("dist'", "Options.Applicative.Help.Levenshtein", function() {
        return memoize22(function(a) {
          return function(b) {
            return dist(a)(b);
          };
        });
      });
      var dist$prime = $lazy_dist$prime(31);
      return dist$prime(length(xs))(length(ys));
    };
  };
};

// output/Options.Applicative.Extra/index.js
var un9 = /* @__PURE__ */ un();
var mempty6 = /* @__PURE__ */ mempty(parserHelpMonoid);
var pure11 = /* @__PURE__ */ pure(chunkApplicative);
var unWords2 = /* @__PURE__ */ unWords(foldableArray);
var append8 = /* @__PURE__ */ append(semigroupArray);
var map18 = /* @__PURE__ */ map(chunkFunctor);
var map19 = /* @__PURE__ */ map(functorArray);
var fold7 = /* @__PURE__ */ fold2(monoidArray);
var editDistance2 = /* @__PURE__ */ editDistance(eqChar);
var apply8 = /* @__PURE__ */ apply(chunkApply);
var mempty14 = /* @__PURE__ */ mempty(/* @__PURE__ */ chunkMonoid(docSemigroup));
var fold13 = /* @__PURE__ */ fold2(parserHelpMonoid);
var over6 = /* @__PURE__ */ over()();
var mapFlipped3 = /* @__PURE__ */ mapFlipped(functorEffect);
var bind10 = /* @__PURE__ */ bind(bindMaybe);
var fromEnum3 = /* @__PURE__ */ fromEnum(boundedEnumExitCode);
var pure17 = /* @__PURE__ */ pure(applicativeEffect);
var bind14 = /* @__PURE__ */ bind(bindEffect);
var $$void4 = /* @__PURE__ */ $$void(functorEffect);
var mempty23 = /* @__PURE__ */ mempty(/* @__PURE__ */ monoidFn(/* @__PURE__ */ monoidEffect(monoidUnit)));
var alt7 = /* @__PURE__ */ alt(parserAlt);
var map34 = /* @__PURE__ */ map(parserFunctor);
var runParserInfo3 = /* @__PURE__ */ runParserInfo(pMonadP);
var fromFoldable6 = /* @__PURE__ */ fromFoldable2(foldableArray);
var map43 = /* @__PURE__ */ map(functorEffect);
var renderFailure = function(failure) {
  return function(progn) {
    var v = un9(ParserFailure)(failure)(progn);
    return new Tuple(renderHelp(v.value1.value1.value0)(v.value0), v.value1.value0);
  };
};
var parserFailure = function(pprefs) {
  return function(pinfo) {
    return function(msg) {
      return function(ctx) {
        var with_context = function(arr) {
          return function(i) {
            return function(f) {
              var v = head(arr);
              if (v instanceof Nothing) {
                return f([])(i);
              }
              ;
              if (v instanceof Just) {
                return runExists(function(i$prime) {
                  return f(contextNames(arr))(i$prime);
                })(v.value0.value1);
              }
              ;
              throw new Error("Failed pattern match at Options.Applicative.Extra (line 183, column 28 - line 185, column 73): " + [v.constructor.name]);
            };
          };
        };
        var usage_help = function(progn) {
          return function(names) {
            return function(v) {
              if (msg instanceof InfoMsg) {
                return mempty6;
              }
              ;
              return usageHelp(vcatChunks([pure11(parserUsage(pprefs)(v.infoParser)(unWords2(append8([progn])(names)))), map18(indent(2))(v.infoProgDesc)]));
            };
          };
        };
        var suggestion_help = suggestionsHelp(function() {
          if (msg instanceof UnexpectedError) {
            var opt_completions = function(v) {
              return function(v1) {
                if (v1.optMain instanceof OptReader) {
                  return map19(showOption)(v1.optMain.value0);
                }
                ;
                if (v1.optMain instanceof FlagReader) {
                  return map19(showOption)(v1.optMain.value0);
                }
                ;
                if (v1.optMain instanceof ArgReader) {
                  return [];
                }
                ;
                if (v1.optMain instanceof CmdReader) {
                  if (v.hinfoUnreachableArgs) {
                    return [];
                  }
                  ;
                  if (otherwise) {
                    return v1.optMain.value1;
                  }
                  ;
                }
                ;
                throw new Error("Failed pattern match at Options.Applicative.Extra (line 273, column 64 - line 280, column 37): " + [v1.optMain.constructor.name]);
              };
            };
            var possibles = fold7(runExists(function(zz) {
              return mapParser(opt_completions)(zz);
            })(msg.value1.value0));
            var isClose = function(a) {
              return on(editDistance2)(toCharArray)(a)(msg.value0) < 3;
            };
            var good = filter(isClose)(possibles);
            var prose = function() {
              var $84 = length(good) < 2;
              if ($84) {
                return stringChunk("Did you mean this?");
              }
              ;
              return stringChunk("Did you mean one of these?");
            }();
            var suggestions = apply8(map18(appendWithLine)(prose))(map18(indent(4))(vcatChunks(map19(stringChunk)(good))));
            return suggestions;
          }
          ;
          return mempty14;
        }());
        var show_full_help = function() {
          if (msg instanceof ShowHelpText) {
            return true;
          }
          ;
          if (msg instanceof MissingError && (msg.value0 instanceof CmdStart && un9(ParserPrefs)(pprefs).prefShowHelpOnEmpty)) {
            return true;
          }
          ;
          return un9(ParserPrefs)(pprefs).prefShowHelpOnError;
        }();
        var exit_code = function() {
          if (msg instanceof ErrorMsg) {
            return un9(ParserInfo)(pinfo).infoFailureCode;
          }
          ;
          if (msg instanceof MissingError) {
            return un9(ParserInfo)(pinfo).infoFailureCode;
          }
          ;
          if (msg instanceof ExpectsArgError) {
            return un9(ParserInfo)(pinfo).infoFailureCode;
          }
          ;
          if (msg instanceof UnexpectedError) {
            return un9(ParserInfo)(pinfo).infoFailureCode;
          }
          ;
          if (msg instanceof ShowHelpText) {
            return Success.value;
          }
          ;
          if (msg instanceof InfoMsg) {
            return Success.value;
          }
          ;
          throw new Error("Failed pattern match at Options.Applicative.Extra (line 171, column 17 - line 177, column 44): " + [msg.constructor.name]);
        }();
        var error_help = errorHelp(function() {
          if (msg instanceof ShowHelpText) {
            return mempty14;
          }
          ;
          if (msg instanceof ErrorMsg) {
            return stringChunk(msg.value0);
          }
          ;
          if (msg instanceof InfoMsg) {
            return stringChunk(msg.value0);
          }
          ;
          if (msg instanceof MissingError && (msg.value0 instanceof CmdStart && un9(ParserPrefs)(pprefs).prefShowHelpOnEmpty)) {
            return mempty14;
          }
          ;
          if (msg instanceof MissingError) {
            return runExists(function(x) {
              return chunkBeside(stringChunk("Missing:"))(missingDesc(pprefs)(x));
            })(msg.value1.value0);
          }
          ;
          if (msg instanceof ExpectsArgError) {
            return stringChunk("The option `" + (msg.value0 + "` expects an argument."));
          }
          ;
          if (msg instanceof UnexpectedError) {
            var msg$prime = function() {
              var $108 = startsWith("-")(msg.value0);
              if ($108) {
                return "Invalid option `" + (msg.value0 + "'");
              }
              ;
              return "Invalid argument `" + (msg.value0 + "'");
            }();
            return stringChunk(msg$prime);
          }
          ;
          throw new Error("Failed pattern match at Options.Applicative.Extra (line 196, column 30 - line 225, column 30): " + [msg.constructor.name]);
        }());
        var base_help = function(v) {
          var h = headerHelp(v.infoHeader);
          var f = footerHelp(v.infoFooter);
          if (show_full_help) {
            return fold13([h, f, parserHelp(pprefs)(v.infoParser)]);
          }
          ;
          return mempty6;
        };
        return function(progn) {
          var h = with_context(ctx)(pinfo)(function(names) {
            return function(pinfo$prime) {
              return fold13([base_help(pinfo$prime), usage_help(progn)(names)(pinfo$prime), suggestion_help, error_help]);
            };
          });
          return new Tuple(h, new Tuple(exit_code, new Tuple(un9(ParserPrefs)(pprefs).prefColumns, unit)));
        };
      };
    };
  };
};
var helper = /* @__PURE__ */ function() {
  return abortOption(ShowHelpText.value)(fold2(modMonoid)([$$long(optionFieldsHasName)("help"), $$short(optionFieldsHasName)("h"), help("Show this help text"), hidden]));
}();
var getProgName = /* @__PURE__ */ mapFlipped3(argv)(function(args) {
  return fromMaybe("")(bind10(index(args)(1))(function(executablePath) {
    return last(split("/")(executablePath));
  }));
});
var getArgs = /* @__PURE__ */ mapFlipped3(argv)(/* @__PURE__ */ drop(2));
var exitWith = function(c) {
  return exit(fromEnum3(c));
};
var exitSuccess = /* @__PURE__ */ function() {
  return exit(fromEnum3(Success.value));
}();
var handleParseResult = function(v) {
  if (v instanceof Success2) {
    return pure17(v.value0);
  }
  ;
  if (v instanceof Failure) {
    return function __do2() {
      var progn = getProgName();
      var v1 = renderFailure(v.value0)(progn);
      var stream = function() {
        if (v1.value1 instanceof Success) {
          return stdout;
        }
        ;
        return stderr;
      }();
      $$void4(writeString3(stream)(UTF8.value)(v1.value0 + "\n")(mempty23))();
      return exitWith(v1.value1)();
    };
  }
  ;
  if (v instanceof CompletionInvoked) {
    return function __do2() {
      var progn = getProgName();
      var msg = un9(CompletionResult)(v.value0).execCompletion(progn)();
      $$void4(writeString3(stdout)(UTF8.value)(msg)(mempty23))();
      return exitSuccess();
    };
  }
  ;
  throw new Error("Failed pattern match at Options.Applicative.Extra (line 110, column 1 - line 110, column 58): " + [v.constructor.name]);
};
var execParserPure = function(pprefs) {
  return function(pinfo) {
    return function(args) {
      var pinfo$prime = over6(ParserInfo)(function(i) {
        return {
          infoParser: alt7(map34(Left.create)(bashCompletionParser(pinfo)(pprefs)))(map34(Right.create)(i.infoParser)),
          infoFailureCode: i.infoFailureCode,
          infoFooter: i.infoFooter,
          infoFullDesc: i.infoFullDesc,
          infoHeader: i.infoHeader,
          infoPolicy: i.infoPolicy,
          infoProgDesc: i.infoProgDesc
        };
      })(pinfo);
      var p = runParserInfo3(pinfo$prime)(fromFoldable6(args));
      var v = runP(p)(pprefs);
      if (v.value0 instanceof Right && v.value0.value0 instanceof Right) {
        return new Success2(v.value0.value0.value0);
      }
      ;
      if (v.value0 instanceof Right && v.value0.value0 instanceof Left) {
        return new CompletionInvoked(v.value0.value0.value0);
      }
      ;
      if (v.value0 instanceof Left) {
        return new Failure(parserFailure(pprefs)(pinfo)(v.value0.value0)(v.value1));
      }
      ;
      throw new Error("Failed pattern match at Options.Applicative.Extra (line 144, column 3 - line 147, column 73): " + [v.constructor.name]);
    };
  };
};
var customExecParser = function(pprefs) {
  return function(pinfo) {
    return bind14(map43(execParserPure(pprefs)(pinfo))(getArgs))(handleParseResult);
  };
};
var execParser = /* @__PURE__ */ customExecParser(defaultPrefs);

// output/App.Config.Cli/index.js
var map20 = /* @__PURE__ */ map(parserFunctor);
var fold8 = /* @__PURE__ */ fold(foldableArray)(modMonoid);
var mempty7 = /* @__PURE__ */ mempty(infoModMonoid);
var parseAppConfig = /* @__PURE__ */ function() {
  return map20(function(v) {
    return {
      command: v
    };
  })(subparser(fold8([command("hello")(info(apply(parserApply)(map20(function(v) {
    return function(v1) {
      return new CmdHello({
        name: v,
        enabled: v1
      });
    };
  })(strOption(fold8([$$long(optionFieldsHasName)("name")]))))(flag(false)(true)(fold8([$$long(flagFieldsHasName)("enabled")]))))(mempty7)), command("version")(info(pure(parserApplicative)(CmdVersion.value))(mempty7))])));
}();
var parserInfoAppConfig = /* @__PURE__ */ info(/* @__PURE__ */ apApplyFlipped(parserApply)(parseAppConfig)(helper))(mempty7);

// output/App.Monad.Class.App/index.js
var log2 = function(dict) {
  return dict.log;
};
var getConfig = function(dict) {
  return dict.getConfig;
};

// output/App.Core/index.js
var main = function(dictMonadApp) {
  var log5 = log2(dictMonadApp);
  return bind(dictMonadApp.MonadError0().MonadThrow0().Monad0().Bind1())(getConfig(dictMonadApp))(function(config) {
    if (config.command instanceof CmdHello) {
      return log5("Hello!");
    }
    ;
    if (config.command instanceof CmdVersion) {
      return log5("Version");
    }
    ;
    throw new Error("Failed pattern match at App.Core (line 11, column 3 - line 13, column 32): " + [config.command.constructor.name]);
  });
};

// output/Effect.Aff/foreign.js
var Aff = function() {
  var EMPTY = {};
  var PURE = "Pure";
  var THROW = "Throw";
  var CATCH = "Catch";
  var SYNC = "Sync";
  var ASYNC = "Async";
  var BIND = "Bind";
  var BRACKET = "Bracket";
  var FORK = "Fork";
  var SEQ = "Sequential";
  var MAP = "Map";
  var APPLY = "Apply";
  var ALT = "Alt";
  var CONS = "Cons";
  var RESUME = "Resume";
  var RELEASE = "Release";
  var FINALIZER = "Finalizer";
  var FINALIZED = "Finalized";
  var FORKED = "Forked";
  var FIBER = "Fiber";
  var THUNK = "Thunk";
  function Aff2(tag, _1, _2, _3) {
    this.tag = tag;
    this._1 = _1;
    this._2 = _2;
    this._3 = _3;
  }
  function AffCtr(tag) {
    var fn = function(_1, _2, _3) {
      return new Aff2(tag, _1, _2, _3);
    };
    fn.tag = tag;
    return fn;
  }
  function nonCanceler2(error3) {
    return new Aff2(PURE, void 0);
  }
  function runEff(eff) {
    try {
      eff();
    } catch (error3) {
      setTimeout(function() {
        throw error3;
      }, 0);
    }
  }
  function runSync(left, right, eff) {
    try {
      return right(eff());
    } catch (error3) {
      return left(error3);
    }
  }
  function runAsync(left, eff, k) {
    try {
      return eff(k)();
    } catch (error3) {
      k(left(error3))();
      return nonCanceler2;
    }
  }
  var Scheduler = function() {
    var limit = 1024;
    var size5 = 0;
    var ix = 0;
    var queue = new Array(limit);
    var draining = false;
    function drain() {
      var thunk;
      draining = true;
      while (size5 !== 0) {
        size5--;
        thunk = queue[ix];
        queue[ix] = void 0;
        ix = (ix + 1) % limit;
        thunk();
      }
      draining = false;
    }
    return {
      isDraining: function() {
        return draining;
      },
      enqueue: function(cb) {
        var i, tmp;
        if (size5 === limit) {
          tmp = draining;
          drain();
          draining = tmp;
        }
        queue[(ix + size5) % limit] = cb;
        size5++;
        if (!draining) {
          drain();
        }
      }
    };
  }();
  function Supervisor(util) {
    var fibers = {};
    var fiberId = 0;
    var count = 0;
    return {
      register: function(fiber) {
        var fid = fiberId++;
        fiber.onComplete({
          rethrow: true,
          handler: function(result) {
            return function() {
              count--;
              delete fibers[fid];
            };
          }
        })();
        fibers[fid] = fiber;
        count++;
      },
      isEmpty: function() {
        return count === 0;
      },
      killAll: function(killError, cb) {
        return function() {
          if (count === 0) {
            return cb();
          }
          var killCount = 0;
          var kills = {};
          function kill(fid) {
            kills[fid] = fibers[fid].kill(killError, function(result) {
              return function() {
                delete kills[fid];
                killCount--;
                if (util.isLeft(result) && util.fromLeft(result)) {
                  setTimeout(function() {
                    throw util.fromLeft(result);
                  }, 0);
                }
                if (killCount === 0) {
                  cb();
                }
              };
            })();
          }
          for (var k in fibers) {
            if (fibers.hasOwnProperty(k)) {
              killCount++;
              kill(k);
            }
          }
          fibers = {};
          fiberId = 0;
          count = 0;
          return function(error3) {
            return new Aff2(SYNC, function() {
              for (var k2 in kills) {
                if (kills.hasOwnProperty(k2)) {
                  kills[k2]();
                }
              }
            });
          };
        };
      }
    };
  }
  var SUSPENDED = 0;
  var CONTINUE = 1;
  var STEP_BIND = 2;
  var STEP_RESULT = 3;
  var PENDING = 4;
  var RETURN = 5;
  var COMPLETED = 6;
  function Fiber(util, supervisor, aff) {
    var runTick = 0;
    var status = SUSPENDED;
    var step2 = aff;
    var fail = null;
    var interrupt = null;
    var bhead = null;
    var btail = null;
    var attempts = null;
    var bracketCount = 0;
    var joinId = 0;
    var joins = null;
    var rethrow = true;
    function run3(localRunTick) {
      var tmp, result, attempt;
      while (true) {
        tmp = null;
        result = null;
        attempt = null;
        switch (status) {
          case STEP_BIND:
            status = CONTINUE;
            try {
              step2 = bhead(step2);
              if (btail === null) {
                bhead = null;
              } else {
                bhead = btail._1;
                btail = btail._2;
              }
            } catch (e) {
              status = RETURN;
              fail = util.left(e);
              step2 = null;
            }
            break;
          case STEP_RESULT:
            if (util.isLeft(step2)) {
              status = RETURN;
              fail = step2;
              step2 = null;
            } else if (bhead === null) {
              status = RETURN;
            } else {
              status = STEP_BIND;
              step2 = util.fromRight(step2);
            }
            break;
          case CONTINUE:
            switch (step2.tag) {
              case BIND:
                if (bhead) {
                  btail = new Aff2(CONS, bhead, btail);
                }
                bhead = step2._2;
                status = CONTINUE;
                step2 = step2._1;
                break;
              case PURE:
                if (bhead === null) {
                  status = RETURN;
                  step2 = util.right(step2._1);
                } else {
                  status = STEP_BIND;
                  step2 = step2._1;
                }
                break;
              case SYNC:
                status = STEP_RESULT;
                step2 = runSync(util.left, util.right, step2._1);
                break;
              case ASYNC:
                status = PENDING;
                step2 = runAsync(util.left, step2._1, function(result2) {
                  return function() {
                    if (runTick !== localRunTick) {
                      return;
                    }
                    runTick++;
                    Scheduler.enqueue(function() {
                      if (runTick !== localRunTick + 1) {
                        return;
                      }
                      status = STEP_RESULT;
                      step2 = result2;
                      run3(runTick);
                    });
                  };
                });
                return;
              case THROW:
                status = RETURN;
                fail = util.left(step2._1);
                step2 = null;
                break;
              case CATCH:
                if (bhead === null) {
                  attempts = new Aff2(CONS, step2, attempts, interrupt);
                } else {
                  attempts = new Aff2(CONS, step2, new Aff2(CONS, new Aff2(RESUME, bhead, btail), attempts, interrupt), interrupt);
                }
                bhead = null;
                btail = null;
                status = CONTINUE;
                step2 = step2._1;
                break;
              case BRACKET:
                bracketCount++;
                if (bhead === null) {
                  attempts = new Aff2(CONS, step2, attempts, interrupt);
                } else {
                  attempts = new Aff2(CONS, step2, new Aff2(CONS, new Aff2(RESUME, bhead, btail), attempts, interrupt), interrupt);
                }
                bhead = null;
                btail = null;
                status = CONTINUE;
                step2 = step2._1;
                break;
              case FORK:
                status = STEP_RESULT;
                tmp = Fiber(util, supervisor, step2._2);
                if (supervisor) {
                  supervisor.register(tmp);
                }
                if (step2._1) {
                  tmp.run();
                }
                step2 = util.right(tmp);
                break;
              case SEQ:
                status = CONTINUE;
                step2 = sequential2(util, supervisor, step2._1);
                break;
            }
            break;
          case RETURN:
            bhead = null;
            btail = null;
            if (attempts === null) {
              status = COMPLETED;
              step2 = interrupt || fail || step2;
            } else {
              tmp = attempts._3;
              attempt = attempts._1;
              attempts = attempts._2;
              switch (attempt.tag) {
                case CATCH:
                  if (interrupt && interrupt !== tmp && bracketCount === 0) {
                    status = RETURN;
                  } else if (fail) {
                    status = CONTINUE;
                    step2 = attempt._2(util.fromLeft(fail));
                    fail = null;
                  }
                  break;
                case RESUME:
                  if (interrupt && interrupt !== tmp && bracketCount === 0 || fail) {
                    status = RETURN;
                  } else {
                    bhead = attempt._1;
                    btail = attempt._2;
                    status = STEP_BIND;
                    step2 = util.fromRight(step2);
                  }
                  break;
                case BRACKET:
                  bracketCount--;
                  if (fail === null) {
                    result = util.fromRight(step2);
                    attempts = new Aff2(CONS, new Aff2(RELEASE, attempt._2, result), attempts, tmp);
                    if (interrupt === tmp || bracketCount > 0) {
                      status = CONTINUE;
                      step2 = attempt._3(result);
                    }
                  }
                  break;
                case RELEASE:
                  attempts = new Aff2(CONS, new Aff2(FINALIZED, step2, fail), attempts, interrupt);
                  status = CONTINUE;
                  if (interrupt && interrupt !== tmp && bracketCount === 0) {
                    step2 = attempt._1.killed(util.fromLeft(interrupt))(attempt._2);
                  } else if (fail) {
                    step2 = attempt._1.failed(util.fromLeft(fail))(attempt._2);
                  } else {
                    step2 = attempt._1.completed(util.fromRight(step2))(attempt._2);
                  }
                  fail = null;
                  bracketCount++;
                  break;
                case FINALIZER:
                  bracketCount++;
                  attempts = new Aff2(CONS, new Aff2(FINALIZED, step2, fail), attempts, interrupt);
                  status = CONTINUE;
                  step2 = attempt._1;
                  break;
                case FINALIZED:
                  bracketCount--;
                  status = RETURN;
                  step2 = attempt._1;
                  fail = attempt._2;
                  break;
              }
            }
            break;
          case COMPLETED:
            for (var k in joins) {
              if (joins.hasOwnProperty(k)) {
                rethrow = rethrow && joins[k].rethrow;
                runEff(joins[k].handler(step2));
              }
            }
            joins = null;
            if (interrupt && fail) {
              setTimeout(function() {
                throw util.fromLeft(fail);
              }, 0);
            } else if (util.isLeft(step2) && rethrow) {
              setTimeout(function() {
                if (rethrow) {
                  throw util.fromLeft(step2);
                }
              }, 0);
            }
            return;
          case SUSPENDED:
            status = CONTINUE;
            break;
          case PENDING:
            return;
        }
      }
    }
    function onComplete(join3) {
      return function() {
        if (status === COMPLETED) {
          rethrow = rethrow && join3.rethrow;
          join3.handler(step2)();
          return function() {
          };
        }
        var jid = joinId++;
        joins = joins || {};
        joins[jid] = join3;
        return function() {
          if (joins !== null) {
            delete joins[jid];
          }
        };
      };
    }
    function kill(error3, cb) {
      return function() {
        if (status === COMPLETED) {
          cb(util.right(void 0))();
          return function() {
          };
        }
        var canceler = onComplete({
          rethrow: false,
          handler: function() {
            return cb(util.right(void 0));
          }
        })();
        switch (status) {
          case SUSPENDED:
            interrupt = util.left(error3);
            status = COMPLETED;
            step2 = interrupt;
            run3(runTick);
            break;
          case PENDING:
            if (interrupt === null) {
              interrupt = util.left(error3);
            }
            if (bracketCount === 0) {
              if (status === PENDING) {
                attempts = new Aff2(CONS, new Aff2(FINALIZER, step2(error3)), attempts, interrupt);
              }
              status = RETURN;
              step2 = null;
              fail = null;
              run3(++runTick);
            }
            break;
          default:
            if (interrupt === null) {
              interrupt = util.left(error3);
            }
            if (bracketCount === 0) {
              status = RETURN;
              step2 = null;
              fail = null;
            }
        }
        return canceler;
      };
    }
    function join2(cb) {
      return function() {
        var canceler = onComplete({
          rethrow: false,
          handler: cb
        })();
        if (status === SUSPENDED) {
          run3(runTick);
        }
        return canceler;
      };
    }
    return {
      kill,
      join: join2,
      onComplete,
      isSuspended: function() {
        return status === SUSPENDED;
      },
      run: function() {
        if (status === SUSPENDED) {
          if (!Scheduler.isDraining()) {
            Scheduler.enqueue(function() {
              run3(runTick);
            });
          } else {
            run3(runTick);
          }
        }
      }
    };
  }
  function runPar(util, supervisor, par, cb) {
    var fiberId = 0;
    var fibers = {};
    var killId = 0;
    var kills = {};
    var early = new Error("[ParAff] Early exit");
    var interrupt = null;
    var root = EMPTY;
    function kill(error3, par2, cb2) {
      var step2 = par2;
      var head3 = null;
      var tail2 = null;
      var count = 0;
      var kills2 = {};
      var tmp, kid;
      loop:
        while (true) {
          tmp = null;
          switch (step2.tag) {
            case FORKED:
              if (step2._3 === EMPTY) {
                tmp = fibers[step2._1];
                kills2[count++] = tmp.kill(error3, function(result) {
                  return function() {
                    count--;
                    if (count === 0) {
                      cb2(result)();
                    }
                  };
                });
              }
              if (head3 === null) {
                break loop;
              }
              step2 = head3._2;
              if (tail2 === null) {
                head3 = null;
              } else {
                head3 = tail2._1;
                tail2 = tail2._2;
              }
              break;
            case MAP:
              step2 = step2._2;
              break;
            case APPLY:
            case ALT:
              if (head3) {
                tail2 = new Aff2(CONS, head3, tail2);
              }
              head3 = step2;
              step2 = step2._1;
              break;
          }
        }
      if (count === 0) {
        cb2(util.right(void 0))();
      } else {
        kid = 0;
        tmp = count;
        for (; kid < tmp; kid++) {
          kills2[kid] = kills2[kid]();
        }
      }
      return kills2;
    }
    function join2(result, head3, tail2) {
      var fail, step2, lhs, rhs, tmp, kid;
      if (util.isLeft(result)) {
        fail = result;
        step2 = null;
      } else {
        step2 = result;
        fail = null;
      }
      loop:
        while (true) {
          lhs = null;
          rhs = null;
          tmp = null;
          kid = null;
          if (interrupt !== null) {
            return;
          }
          if (head3 === null) {
            cb(fail || step2)();
            return;
          }
          if (head3._3 !== EMPTY) {
            return;
          }
          switch (head3.tag) {
            case MAP:
              if (fail === null) {
                head3._3 = util.right(head3._1(util.fromRight(step2)));
                step2 = head3._3;
              } else {
                head3._3 = fail;
              }
              break;
            case APPLY:
              lhs = head3._1._3;
              rhs = head3._2._3;
              if (fail) {
                head3._3 = fail;
                tmp = true;
                kid = killId++;
                kills[kid] = kill(early, fail === lhs ? head3._2 : head3._1, function() {
                  return function() {
                    delete kills[kid];
                    if (tmp) {
                      tmp = false;
                    } else if (tail2 === null) {
                      join2(fail, null, null);
                    } else {
                      join2(fail, tail2._1, tail2._2);
                    }
                  };
                });
                if (tmp) {
                  tmp = false;
                  return;
                }
              } else if (lhs === EMPTY || rhs === EMPTY) {
                return;
              } else {
                step2 = util.right(util.fromRight(lhs)(util.fromRight(rhs)));
                head3._3 = step2;
              }
              break;
            case ALT:
              lhs = head3._1._3;
              rhs = head3._2._3;
              if (lhs === EMPTY && util.isLeft(rhs) || rhs === EMPTY && util.isLeft(lhs)) {
                return;
              }
              if (lhs !== EMPTY && util.isLeft(lhs) && rhs !== EMPTY && util.isLeft(rhs)) {
                fail = step2 === lhs ? rhs : lhs;
                step2 = null;
                head3._3 = fail;
              } else {
                head3._3 = step2;
                tmp = true;
                kid = killId++;
                kills[kid] = kill(early, step2 === lhs ? head3._2 : head3._1, function() {
                  return function() {
                    delete kills[kid];
                    if (tmp) {
                      tmp = false;
                    } else if (tail2 === null) {
                      join2(step2, null, null);
                    } else {
                      join2(step2, tail2._1, tail2._2);
                    }
                  };
                });
                if (tmp) {
                  tmp = false;
                  return;
                }
              }
              break;
          }
          if (tail2 === null) {
            head3 = null;
          } else {
            head3 = tail2._1;
            tail2 = tail2._2;
          }
        }
    }
    function resolve(fiber) {
      return function(result) {
        return function() {
          delete fibers[fiber._1];
          fiber._3 = result;
          join2(result, fiber._2._1, fiber._2._2);
        };
      };
    }
    function run3() {
      var status = CONTINUE;
      var step2 = par;
      var head3 = null;
      var tail2 = null;
      var tmp, fid;
      loop:
        while (true) {
          tmp = null;
          fid = null;
          switch (status) {
            case CONTINUE:
              switch (step2.tag) {
                case MAP:
                  if (head3) {
                    tail2 = new Aff2(CONS, head3, tail2);
                  }
                  head3 = new Aff2(MAP, step2._1, EMPTY, EMPTY);
                  step2 = step2._2;
                  break;
                case APPLY:
                  if (head3) {
                    tail2 = new Aff2(CONS, head3, tail2);
                  }
                  head3 = new Aff2(APPLY, EMPTY, step2._2, EMPTY);
                  step2 = step2._1;
                  break;
                case ALT:
                  if (head3) {
                    tail2 = new Aff2(CONS, head3, tail2);
                  }
                  head3 = new Aff2(ALT, EMPTY, step2._2, EMPTY);
                  step2 = step2._1;
                  break;
                default:
                  fid = fiberId++;
                  status = RETURN;
                  tmp = step2;
                  step2 = new Aff2(FORKED, fid, new Aff2(CONS, head3, tail2), EMPTY);
                  tmp = Fiber(util, supervisor, tmp);
                  tmp.onComplete({
                    rethrow: false,
                    handler: resolve(step2)
                  })();
                  fibers[fid] = tmp;
                  if (supervisor) {
                    supervisor.register(tmp);
                  }
              }
              break;
            case RETURN:
              if (head3 === null) {
                break loop;
              }
              if (head3._1 === EMPTY) {
                head3._1 = step2;
                status = CONTINUE;
                step2 = head3._2;
                head3._2 = EMPTY;
              } else {
                head3._2 = step2;
                step2 = head3;
                if (tail2 === null) {
                  head3 = null;
                } else {
                  head3 = tail2._1;
                  tail2 = tail2._2;
                }
              }
          }
        }
      root = step2;
      for (fid = 0; fid < fiberId; fid++) {
        fibers[fid].run();
      }
    }
    function cancel(error3, cb2) {
      interrupt = util.left(error3);
      var innerKills;
      for (var kid in kills) {
        if (kills.hasOwnProperty(kid)) {
          innerKills = kills[kid];
          for (kid in innerKills) {
            if (innerKills.hasOwnProperty(kid)) {
              innerKills[kid]();
            }
          }
        }
      }
      kills = null;
      var newKills = kill(error3, root, cb2);
      return function(killError) {
        return new Aff2(ASYNC, function(killCb) {
          return function() {
            for (var kid2 in newKills) {
              if (newKills.hasOwnProperty(kid2)) {
                newKills[kid2]();
              }
            }
            return nonCanceler2;
          };
        });
      };
    }
    run3();
    return function(killError) {
      return new Aff2(ASYNC, function(killCb) {
        return function() {
          return cancel(killError, killCb);
        };
      });
    };
  }
  function sequential2(util, supervisor, par) {
    return new Aff2(ASYNC, function(cb) {
      return function() {
        return runPar(util, supervisor, par, cb);
      };
    });
  }
  Aff2.EMPTY = EMPTY;
  Aff2.Pure = AffCtr(PURE);
  Aff2.Throw = AffCtr(THROW);
  Aff2.Catch = AffCtr(CATCH);
  Aff2.Sync = AffCtr(SYNC);
  Aff2.Async = AffCtr(ASYNC);
  Aff2.Bind = AffCtr(BIND);
  Aff2.Bracket = AffCtr(BRACKET);
  Aff2.Fork = AffCtr(FORK);
  Aff2.Seq = AffCtr(SEQ);
  Aff2.ParMap = AffCtr(MAP);
  Aff2.ParApply = AffCtr(APPLY);
  Aff2.ParAlt = AffCtr(ALT);
  Aff2.Fiber = Fiber;
  Aff2.Supervisor = Supervisor;
  Aff2.Scheduler = Scheduler;
  Aff2.nonCanceler = nonCanceler2;
  return Aff2;
}();
var _pure = Aff.Pure;
var _throwError = Aff.Throw;
function _catchError(aff) {
  return function(k) {
    return Aff.Catch(aff, k);
  };
}
function _map(f) {
  return function(aff) {
    if (aff.tag === Aff.Pure.tag) {
      return Aff.Pure(f(aff._1));
    } else {
      return Aff.Bind(aff, function(value3) {
        return Aff.Pure(f(value3));
      });
    }
  };
}
function _bind(aff) {
  return function(k) {
    return Aff.Bind(aff, k);
  };
}
var _liftEffect = Aff.Sync;
var makeAff = Aff.Async;
function _makeFiber(util, aff) {
  return function() {
    return Aff.Fiber(util, null, aff);
  };
}
var _delay = function() {
  function setDelay(n, k) {
    if (n === 0 && typeof setImmediate !== "undefined") {
      return setImmediate(k);
    } else {
      return setTimeout(k, n);
    }
  }
  function clearDelay(n, t) {
    if (n === 0 && typeof clearImmediate !== "undefined") {
      return clearImmediate(t);
    } else {
      return clearTimeout(t);
    }
  }
  return function(right, ms) {
    return Aff.Async(function(cb) {
      return function() {
        var timer = setDelay(ms, cb(right()));
        return function() {
          return Aff.Sync(function() {
            return right(clearDelay(ms, timer));
          });
        };
      };
    });
  };
}();
var _sequential = Aff.Seq;

// output/Effect.Aff/index.js
var $runtime_lazy5 = function(name3, moduleName, init3) {
  var state2 = 0;
  var val;
  return function(lineNumber) {
    if (state2 === 2)
      return val;
    if (state2 === 1)
      throw new ReferenceError(name3 + " was needed before it finished initializing (module " + moduleName + ", line " + lineNumber + ")", moduleName, lineNumber);
    state2 = 1;
    val = init3();
    state2 = 2;
    return val;
  };
};
var functorAff = {
  map: _map
};
var ffiUtil = /* @__PURE__ */ function() {
  var unsafeFromRight = function(v) {
    if (v instanceof Right) {
      return v.value0;
    }
    ;
    if (v instanceof Left) {
      return unsafeCrashWith("unsafeFromRight: Left");
    }
    ;
    throw new Error("Failed pattern match at Effect.Aff (line 412, column 21 - line 414, column 54): " + [v.constructor.name]);
  };
  var unsafeFromLeft = function(v) {
    if (v instanceof Left) {
      return v.value0;
    }
    ;
    if (v instanceof Right) {
      return unsafeCrashWith("unsafeFromLeft: Right");
    }
    ;
    throw new Error("Failed pattern match at Effect.Aff (line 407, column 20 - line 409, column 55): " + [v.constructor.name]);
  };
  var isLeft = function(v) {
    if (v instanceof Left) {
      return true;
    }
    ;
    if (v instanceof Right) {
      return false;
    }
    ;
    throw new Error("Failed pattern match at Effect.Aff (line 402, column 12 - line 404, column 21): " + [v.constructor.name]);
  };
  return {
    isLeft,
    fromLeft: unsafeFromLeft,
    fromRight: unsafeFromRight,
    left: Left.create,
    right: Right.create
  };
}();
var makeFiber = function(aff) {
  return _makeFiber(ffiUtil, aff);
};
var launchAff = function(aff) {
  return function __do2() {
    var fiber = makeFiber(aff)();
    fiber.run();
    return fiber;
  };
};
var monadAff = {
  Applicative0: function() {
    return applicativeAff;
  },
  Bind1: function() {
    return bindAff;
  }
};
var bindAff = {
  bind: _bind,
  Apply0: function() {
    return $lazy_applyAff(0);
  }
};
var applicativeAff = {
  pure: _pure,
  Apply0: function() {
    return $lazy_applyAff(0);
  }
};
var $lazy_applyAff = /* @__PURE__ */ $runtime_lazy5("applyAff", "Effect.Aff", function() {
  return {
    apply: ap(monadAff),
    Functor0: function() {
      return functorAff;
    }
  };
});
var pure24 = /* @__PURE__ */ pure(applicativeAff);
var bindFlipped2 = /* @__PURE__ */ bindFlipped(bindAff);
var monadEffectAff = {
  liftEffect: _liftEffect,
  Monad0: function() {
    return monadAff;
  }
};
var liftEffect2 = /* @__PURE__ */ liftEffect(monadEffectAff);
var monadThrowAff = {
  throwError: _throwError,
  Monad0: function() {
    return monadAff;
  }
};
var monadErrorAff = {
  catchError: _catchError,
  MonadThrow0: function() {
    return monadThrowAff;
  }
};
var $$try2 = /* @__PURE__ */ $$try(monadErrorAff);
var runAff = function(k) {
  return function(aff) {
    return launchAff(bindFlipped2(function($80) {
      return liftEffect2(k($80));
    })($$try2(aff)));
  };
};
var nonCanceler = /* @__PURE__ */ $$const(/* @__PURE__ */ pure24(unit));

// output/Effect.Aff.Class/index.js
var lift13 = /* @__PURE__ */ lift(monadTransExceptT);
var lift43 = /* @__PURE__ */ lift(monadTransReaderT);
var monadAffAff = {
  liftAff: /* @__PURE__ */ identity(categoryFn),
  MonadEffect0: function() {
    return monadEffectAff;
  }
};
var liftAff = function(dict) {
  return dict.liftAff;
};
var monadAffExceptT = function(dictMonadAff) {
  var MonadEffect0 = dictMonadAff.MonadEffect0();
  var monadEffectExceptT2 = monadEffectExceptT(MonadEffect0);
  return {
    liftAff: function() {
      var $68 = lift13(MonadEffect0.Monad0());
      var $69 = liftAff(dictMonadAff);
      return function($70) {
        return $68($69($70));
      };
    }(),
    MonadEffect0: function() {
      return monadEffectExceptT2;
    }
  };
};
var monadAffReader = function(dictMonadAff) {
  var MonadEffect0 = dictMonadAff.MonadEffect0();
  var monadEffectReader2 = monadEffectReader(MonadEffect0);
  return {
    liftAff: function() {
      var $79 = lift43(MonadEffect0.Monad0());
      var $80 = liftAff(dictMonadAff);
      return function($81) {
        return $79($80($81));
      };
    }(),
    MonadEffect0: function() {
      return monadEffectReader2;
    }
  };
};

// output/Effect.Console/foreign.js
var log3 = function(s) {
  return function() {
    console.log(s);
  };
};

// output/Effect.Class.Console/index.js
var log4 = function(dictMonadEffect) {
  var $51 = liftEffect(dictMonadEffect);
  return function($52) {
    return $51(log3($52));
  };
};

// output/Node.FS.Async/foreign.js
import {
  rename,
  truncate,
  chown,
  chmod,
  stat,
  lstat,
  link as link2,
  symlink,
  readlink,
  realpath,
  unlink,
  rmdir,
  rm,
  mkdir,
  readdir,
  utimes,
  readFile,
  writeFile,
  appendFile,
  open,
  read as read6,
  write as write5,
  close
} from "fs";

// output/Foreign/foreign.js
var isArray = Array.isArray || function(value3) {
  return Object.prototype.toString.call(value3) === "[object Array]";
};

// output/Node.FS.Async/index.js
var show4 = /* @__PURE__ */ show(showEncoding);
var handleCallback = function(cb) {
  return function(err, a) {
    var v = toMaybe(err);
    if (v instanceof Nothing) {
      return cb(new Right(a))();
    }
    ;
    if (v instanceof Just) {
      return cb(new Left(v.value0))();
    }
    ;
    throw new Error("Failed pattern match at Node.FS.Async (line 59, column 43 - line 61, column 30): " + [v.constructor.name]);
  };
};
var readTextFile = function(encoding) {
  return function(file) {
    return function(cb) {
      return function() {
        return readFile(file, {
          encoding: show4(encoding)
        }, handleCallback(cb));
      };
    };
  };
};

// output/Node.FS.Aff/index.js
var voidLeft2 = /* @__PURE__ */ voidLeft(functorEffect);
var toAff = function(p) {
  return makeAff(function(k) {
    return voidLeft2(p(k))(nonCanceler);
  });
};
var toAff2 = function(f) {
  return function(a) {
    return function(b) {
      return toAff(f(a)(b));
    };
  };
};
var readTextFile2 = /* @__PURE__ */ toAff2(readTextFile);

// output/App.Monad.Impl.AppM/index.js
var monadExceptT3 = /* @__PURE__ */ monadExceptT(monadAff);
var liftAff2 = /* @__PURE__ */ liftAff(/* @__PURE__ */ monadAffReader(/* @__PURE__ */ monadAffExceptT(monadAffAff)));
var RetJSError = /* @__PURE__ */ function() {
  function RetJSError2(value0) {
    this.value0 = value0;
  }
  ;
  RetJSError2.create = function(value0) {
    return new RetJSError2(value0);
  };
  return RetJSError2;
}();
var RetAppError = /* @__PURE__ */ function() {
  function RetAppError2(value0) {
    this.value0 = value0;
  }
  ;
  RetAppError2.create = function(value0) {
    return new RetAppError2(value0);
  };
  return RetAppError2;
}();
var RetOk = /* @__PURE__ */ function() {
  function RetOk2(value0) {
    this.value0 = value0;
  }
  ;
  RetOk2.create = function(value0) {
    return new RetOk2(value0);
  };
  return RetOk2;
}();
var AppM = function(x) {
  return x;
};
var monadErrorAppErrorAppM = /* @__PURE__ */ monadErrorReaderT(/* @__PURE__ */ monadErrorExceptT(monadAff));
var monadAppAppM = {
  readFile: function(x) {
    return liftAff2(readTextFile2(UTF8.value)(x));
  },
  getConfig: /* @__PURE__ */ ask(/* @__PURE__ */ monadAskReaderT(monadExceptT3)),
  log: /* @__PURE__ */ function() {
    var $43 = log4(monadEffectReader(monadEffectExceptT(monadEffectAff)));
    return function($44) {
      return AppM($43($44));
    };
  }(),
  MonadError0: function() {
    return monadErrorAppErrorAppM;
  }
};
var runAppM = function(env) {
  return function(v) {
    return function(cb) {
      var toResult = function(v1) {
        if (v1 instanceof Left) {
          return new RetJSError(v1.value0);
        }
        ;
        if (v1 instanceof Right && v1.value0 instanceof Left) {
          return new RetAppError(v1.value0.value0);
        }
        ;
        if (v1 instanceof Right && v1.value0 instanceof Right) {
          return new RetOk(v1.value0.value0);
        }
        ;
        throw new Error("Failed pattern match at App.Monad.Impl.AppM (line 55, column 14 - line 58, column 31): " + [v1.constructor.name]);
      };
      return runAff(function($45) {
        return cb(toResult($45));
      })(runExceptT(flip(runReaderT)(env)(v)));
    };
  };
};

// output/Main/index.js
var main1 = /* @__PURE__ */ main(monadAppAppM);
var pure18 = /* @__PURE__ */ pure(applicativeEffect);
var main2 = function __do() {
  var appConfig = execParser(parserInfoAppConfig)();
  runAppM(appConfig)(main1)(function(v) {
    if (v instanceof RetJSError) {
      return pure18(unit);
    }
    ;
    if (v instanceof RetAppError) {
      return pure18(unit);
    }
    ;
    if (v instanceof RetOk) {
      return pure18(unit);
    }
    ;
    throw new Error("Failed pattern match at Main (line 15, column 36 - line 18, column 25): " + [v.constructor.name]);
  })();
  return unit;
};

// <stdin>
main2();
