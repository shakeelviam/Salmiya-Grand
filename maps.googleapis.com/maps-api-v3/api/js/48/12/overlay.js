google.maps.__gjsload__('overlay', function(_) {
    var Lt = function(a) {
            this.h = a
        },
        xla = function() {},
        Mt = function(a) {
            a.po = a.po || new xla;
            return a.po
        },
        yla = function(a) {
            this.La = new _.Th(function() {
                var b = a.po;
                if (a.getPanes()) {
                    if (a.getProjection()) {
                        if (!b.pn && a.onAdd) a.onAdd();
                        b.pn = !0;
                        a.draw()
                    }
                } else {
                    if (b.pn)
                        if (a.onRemove) a.onRemove();
                        else a.remove();
                    b.pn = !1
                }
            }, 0)
        },
        zla = function(a, b) {
            function c() {
                return _.Uh(e.La)
            }
            var d = Mt(a),
                e = d.gm;
            e || (e = d.gm = new yla(a));
            _.pb(d.Za || [], _.F.removeListener);
            var f = d.Ya = d.Ya || new _.Pr,
                g = b.__gm;
            f.bindTo("zoom", g);
            f.bindTo("offset", g);
            f.bindTo("center", g, "projectionCenterQ");
            f.bindTo("projection", b);
            f.bindTo("projectionTopLeft", g);
            f = d.Ur = d.Ur || new Lt(f);
            f.bindTo("zoom", g);
            f.bindTo("offset", g);
            f.bindTo("projection", b);
            f.bindTo("projectionTopLeft", g);
            a.bindTo("projection", f, "outProjection");
            a.bindTo("panes", g);
            d.Za = [_.F.addListener(a, "panes_changed", c), _.F.addListener(g, "zoom_changed", c), _.F.addListener(g, "offset_changed", c), _.F.addListener(b, "projection_changed", c), _.F.addListener(g, "projectioncenterq_changed", c)];
            c();
            b instanceof
            _.qf && (_.og(b, "Ox"), _.cg(b, 148440))
        },
        Dla = function(a) {
            if (a) {
                var b = a.getMap();
                if (Ala(a) !== b && b && b instanceof _.qf) {
                    var c = b.__gm;
                    c.overlayLayer ? a.__gmop = new Bla(b, a, c.overlayLayer) : c.h.then(function(d) {
                        d = d.Pa;
                        var e = new Nt(b, d);
                        d.nb(e);
                        c.overlayLayer = e;
                        Cla(a);
                        Dla(a)
                    })
                }
            }
        },
        Cla = function(a) {
            if (a) {
                var b = a.__gmop;
                b && (a.__gmop = null, b.h.unbindAll(), b.h.set("panes", null), b.h.set("projection", null), b.l.ag(b), b.j && (b.j = !1, b.h.onRemove ? b.h.onRemove() : b.h.remove()))
            }
        },
        Ala = function(a) {
            return (a = a.__gmop) ? a.map : null
        },
        Bla = function(a, b, c) {
            this.map = a;
            this.h = b;
            this.l = c;
            this.j = !1;
            _.og(this.map, "Ox");
            _.cg(this.map, 148440);
            c.Af(this)
        },
        Ela = function(a, b) {
            a.h.get("projection") != b && (a.h.bindTo("panes", a.map.__gm), a.h.set("projection", b))
        },
        Nt = function(a, b) {
            this.m = a;
            this.l = b;
            this.h = null;
            this.j = []
        };
    _.C(Lt, _.G);
    Lt.prototype.changed = function(a) {
        "outProjection" != a && (a = !!(this.get("offset") && this.get("projectionTopLeft") && this.get("projection") && _.he(this.get("zoom"))), a == !this.get("outProjection") && this.set("outProjection", a ? this.h : null))
    };
    var Ot = {};
    _.C(yla, _.G);
    Ot.Af = function(a) {
        if (a) {
            var b = a.getMap();
            (Mt(a).Br || null) !== b && (b && zla(a, b), Mt(a).Br = b)
        }
    };
    Ot.ag = function(a) {
        var b = Mt(a),
            c = b.Ya;
        c && c.unbindAll();
        (c = b.Ur) && c.unbindAll();
        a.unbindAll();
        a.set("panes", null);
        a.set("projection", null);
        b.Za && _.pb(b.Za, _.F.removeListener);
        b.Za = null;
        b.gm && (b.gm.La.Jd(), b.gm = null);
        delete Mt(a).Br
    };
    var Pt = {};
    Bla.prototype.draw = function() {
        this.j || (this.j = !0, this.h.onAdd && this.h.onAdd());
        this.h.draw && this.h.draw()
    };
    Nt.prototype.dispose = function() {};
    Nt.prototype.Ac = function(a, b, c, d, e, f, g, h) {
        var k = this.h = this.h || new _.Pn(this.m, this.l, function() {});
        k.Ac(a, b, c, d, e, f, g, h);
        a = _.A(this.j);
        for (b = a.next(); !b.done; b = a.next()) b = b.value, Ela(b, k), b.draw()
    };
    Nt.prototype.Af = function(a) {
        this.j.push(a);
        this.h && Ela(a, this.h);
        this.l.refresh()
    };
    Nt.prototype.ag = function(a) {
        _.Gb(this.j, a)
    };
    Pt.Af = Dla;
    Pt.ag = Cla;
    _.Ze("overlay", {
        zp: function(a) {
            if (a) {
                (0, Ot.ag)(a);
                (0, Pt.ag)(a);
                var b = a.getMap();
                b && (b instanceof _.qf ? (0, Pt.Af)(a) : (0, Ot.Af)(a))
            }
        },
        preventMapHitsFrom: function(a) {
            _.Bo(a, {
                onClick: function(b) {
                    return _.Yn(b.event)
                },
                ud: function(b) {
                    return _.Vn(b)
                },
                Mh: function(b) {
                    return _.Wn(b)
                },
                Xd: function(b) {
                    return _.Wn(b)
                },
                Ed: function(b) {
                    return _.Xn(b)
                }
            }).Hi(!0)
        },
        preventMapHitsAndGesturesFrom: function(a) {
            a.addEventListener("click", _.cf);
            a.addEventListener("contextmenu", _.cf);
            a.addEventListener("dblclick", _.cf);
            a.addEventListener("mousedown",
                _.cf);
            a.addEventListener("mousemove", _.cf);
            a.addEventListener("MSPointerDown", _.cf);
            a.addEventListener("pointerdown", _.cf);
            a.addEventListener("touchstart", _.cf);
            a.addEventListener("wheel", _.cf)
        }
    });
});