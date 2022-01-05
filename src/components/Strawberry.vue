<template>
<div class="dashboard-editor-container">
  <Header></Header>
<!--  <el-container>-->
    <div style="height: 65vh"></div>
    <el-row>
      <el-col :span="3"> .</el-col>
      <el-col :span="8">
        <el-card>
          <el-button type="success" @click="createConnection">连接</el-button>
          <el-button type="danger" @click="destroyConnection">断开连接</el-button>
          <el-button type="primary" @click="doSubscribe">订阅</el-button>
          <el-button type="warning" @click="doUnSubscribe">取消订阅</el-button>
          <el-button type="success" @click="doPublish">发布</el-button>
        </el-card>
      </el-col>
<!--    </el-row>-->
<!--    <div style="height: 40px"></div>-->
<!--    <el-row>-->
      <el-col :span="2">.</el-col>
      <el-col :span="8">
        <el-card>
          <el-button type="info" @click="left">左转</el-button>
          <el-button type="info" @click="right">右转</el-button>
          <el-button type="info" @click="go">前进</el-button>
          <el-button type="info" @click="back">后退</el-button>
          <el-button type="info" @click="stop">停止</el-button>
        </el-card>
      </el-col>
    </el-row>
<!--  </el-container>-->
</div>
</template>

<script>
import Header from "@/components/Common/Header";
import mqtt from 'mqtt/dist/mqtt.js'
export default {
  name: "Strawberry",
  components: {Header},
  data() {
    return {
      connection: {
        host: '121.36.229.15',
        port: 8083,
        endpoint: '/mqtt',
        clean: true, // 保留会话
        connectTimeout: 4000, // 超时时间
        reconnectPeriod: 4000, // 重连时间间隔
        // 认证信息
        clientId: 'mqttjs_6320844fb9',
        // username: 'xiaoji',
        // password: 'xiaoji',
      },
      subscription: {
        topic: 'test',
        qos: 0,
      },
      publish: {
        topic: 'run',
        qos: 0,
        payload: '{ "msg": "Hello, YYDS Hello." }',
      },
      receiveNews: '',
      qosList: [
        { label: 0, value: 0 },
        { label: 1, value: 1 },
        { label: 2, value: 2 },
      ],
      client: {
        connected: false,
      },
      subscribeSuccess: false,
    }
  },
  methods: {
    // 创建连接
    createConnection() {
      // 连接字符串, 通过协议指定使用的连接方式
      // ws 未加密 WebSocket 连接
      // wss 加密 WebSocket 连接
      // mqtt 未加密 TCP 连接
      // mqtts 加密 TCP 连接
      // wxs 微信小程序连接
      // alis 支付宝小程序连接
      const { host, port, endpoint, ...options } = this.connection
      const connectUrl = `ws://${host}:${port}${endpoint}`
      try {
        this.client = mqtt.connect(connectUrl, options)
      } catch (error) {
        console.log('mqtt.connect error', error)
      }
      this.client.on('connect', () => {
        console.log('Connection succeeded!')
      })
      this.client.on('error', error => {
        console.log('Connection failed', error)
      })
      this.client.on('message', (topic, message) => {
        this.receiveNews = this.receiveNews.concat(message)
        console.log(`Received message ${message} from topic ${topic}`)
      })
    },
    // 订阅主题
    doSubscribe() {
      const { topic, qos } = this.subscription
      this.client.subscribe(topic, { qos }, (error, res) => {
        if (error) {
          console.log('Subscribe to topics error', error)
          return
        }
        this.subscribeSuccess = true
        console.log('Subscribe to topics res', res)
      })
    },
    // 取消订阅
    doUnSubscribe() {
      const { topic } = this.subscription
      this.client.unsubscribe(topic, error => {
        if (error) {
          console.log('Unsubscribe error', error)
        }
      })
    },
    // 发送消息
    doPublish() {
      const { topic, qos, payload } = this.publish
      this.client.publish(topic, payload, qos, error => {
        if (error) {
          console.log('Publish error', error)
        }
      })
    },
    // 左1
    left() {
      // const { topic, qos, payload } = this.publish
      const topic = this.publish.topic
      const qos = this.publish.qos
      this.client.publish(topic, "1", qos, error => {
        if (error) {
          console.log('Publish error', error)
        }
      })
    },
    // 右2
    right() {
      // const { topic, qos, payload } = this.publish
      const topic = this.publish.topic
      const qos = this.publish.qos
      this.client.publish(topic, "2", qos, error => {
        if (error) {
          console.log('Publish error', error)
        }
      })
    },
    // 上3
    go() {
      // const { topic, qos, payload } = this.publish
      const topic = this.publish.topic
      const qos = this.publish.qos
      this.client.publish(topic, "3", qos, error => {
        if (error) {
          console.log('Publish error', error)
        }
      })
    },
    // 下4
    back() {
      // const { topic, qos, payload } = this.publish
      const topic = this.publish.topic
      const qos = this.publish.qos
      this.client.publish(topic, "4", qos, error => {
        if (error) {
          console.log('Publish error', error)
        }
      })
    },
    // 停止
    stop() {
      // const { topic, qos, payload } = this.publish
      const topic = this.publish.topic
      const qos = this.publish.qos
      this.client.publish(topic, "5", qos, error => {
        if (error) {
          console.log('Publish error', error)
        }
      })
    },
    // 断开连接
    destroyConnection() {
      if (this.client.connected) {
        try {
          this.client.end()
          this.client = {
            connected: false,
          }
          console.log('Successfully disconnected!')
        } catch (error) {
          console.log('Disconnect failed', error.toString())
        }
      }
    },
  },
}
</script>

<style scoped>
.dashboard-editor-container {
  background-image: url("../assets/img/bg2.jpg") ;
  background-size: 100% 100%;
  /*padding: 32px;*/
  min-height: 100%;
  /*background-color: #f6f6f6;*/
  position: relative;
  /*margin: -20px 0 0 -10px;*/
}
</style>
