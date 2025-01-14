namespace CANNON
{
    QUnit.module("LockConstraint", () =>
    {

        QUnit.test("construct", (test) =>
        {
            var bodyA = new Body({ mass: 1, position: new Vector3(1, 0, 0) });
            var bodyB = new Body({ mass: 1, position: new Vector3(-1, 0, 0) });
            var c = new LockConstraint(bodyA, bodyB, { maxForce: 123 });

            test.equal(c.equations.length, 6);

            test.equal(c.equations[0].maxForce, 123);
            test.equal(c.equations[1].maxForce, 123);
            test.equal(c.equations[2].maxForce, 123);
            test.equal(c.equations[3].maxForce, 123);
            test.equal(c.equations[4].maxForce, 123);
            test.equal(c.equations[5].maxForce, 123);

            test.equal(c.equations[0].minForce, -123);
            test.equal(c.equations[1].minForce, -123);
            test.equal(c.equations[2].minForce, -123);
            test.equal(c.equations[3].minForce, -123);
            test.equal(c.equations[4].minForce, -123);
            test.equal(c.equations[5].minForce, -123);

        });

        QUnit.test("update", (test) =>
        {
            var bodyA = new Body({ mass: 1, position: new Vector3(1, 0, 0) });
            var bodyB = new Body({ mass: 1, position: new Vector3(-1, 0, 0) });
            var c = new LockConstraint(bodyA, bodyB, { maxForce: 123 });

            c.update();
            test.ok(true);
        });
    });
}
