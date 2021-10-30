
import { Router } from 'express';
import { Item } from '../models2/item';
import { User } from '../models2/user';
import { Order } from '../models2/order';

const router = Router();

//  用户注册
router.post('/users/register', async (req, res, next) => {
    try {
        console.log(req.body);
        let user = new User(req.body);
        let result = await user.save();
        if (result) {
            res.send({
                code: 0
            });
        } else {
            res.send({
                code: 1
            });
        }
    } catch (err) {
        res.send({
            code: 1,
            msg: err
        });
    }

});

//  用户登录
router.post('/users/login', async (req, res, next) => {
    console.log(req.body);
    let result = await User.findOne(req.body);
    if (result) {
        res.send({
            code: 0,
            data: result
        });
    } else {
        res.send({
            code: -1,
            msg: "wrong username or password"
        });
    }
});

//  商品列表
router.get('/items/list', async (req, res, next) => {
    console.log(req.query);
    let q = {};
    if (req.query.name) {
        q['name'] = {
            $regex: req.query.name,
            $options: 'i'
        }
    }
    res.send({
        code: 0,
        data: await Item.find(q).sort({ unit_price: (req.query.order ? parseInt(req.query.order as string) : -1) })
    });
});

//  商品详情
// router.get('/items/:id', (req, res, next) => {
//     res.send("items.one");
// });

//  创建订单
router.post('/orders/create', (req, res, next) => {
    // res.send("orders.create");
    let order = new Order(req.body);
    order.order_no = '' + Date.now();
    order.amount = 0;
    order.items.forEach(i => order.amount += i.quantity * i.unit_price);
    console.log(order);
    try {
        let result = order.save();
        res.send({
            code: 0,
            data: result
        });
    } catch (err) {
        res.send({
            code: -1,
            msg: err
        });
    }
});

//  订单列表
router.get('/orders/list', async (req, res, next) => {
    // res.send("orders.list");
    let q: any = {};
    if (req.query.user_id) {
        q.user = req.query.user_id;
    }
    let query = Order.find(q).sort({ create_at: -1 });
    query.populate({ path: "user", select: 'username' });
    query.populate({ path: "items.item", select: 'name pic unit' });
    let orders = await query.exec();
    res.send({
        code: 0,
        data: orders
    });
});

//  订单详情
router.get('/orders/:id', async (req, res, next) => {
    // res.send("orders.one");
    let query = Order.findById(req.params.id);
    query.populate({ path: "user", select: 'username' });
    query.populate({ path: "items.item", select: 'name pic unit' });
    let order = await query.exec();
    if (order) {
        res.send({
            code: 0,
            data: order
        });
    } else {
        res.send({
            code: -1,
            msg: "订单不存在"
        });
    }
});

//  修改订单状态
router.post('/orders/:id/change_status', async (req, res, next) => {
    // res.send("orders.one.status");
    if (!req.body.status) {
        res.send({
            code: -1,
            msg: "需要一个状态值"
        })
        return;
    }
    try {
        let order = await Order.findByIdAndUpdate(req.params.id, { $set: { status: req.body.status } }, { runValidators: true, new: true });
        res.send({
            code: 0,
            data: order
        })
    } catch (err) {
        res.send({
            code: -1,
            msg: err
        })
    }
});

export = router;