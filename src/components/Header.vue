<!-- i18n -->
<template>
    <div>
        <span>{{$t('message.text')}}</span>
        <span v-text="$t('message.text')"></span>
        <el-select v-model="value" @change="langChange" placeholder="请选择">
            <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
        </el-select>
        <el-button type="primary">{{title}}</el-button>
        <theme></theme>
    </div>
</template>

<script>
import theme from '@/components/theme'
export default {
  name: 'Header',
  components: {
    theme
  },
  data () {
    return {
      title: '好好学习，天天向上', // 使用方式3，需刷新起效
      value: '',
      options: [
        {
          value: 'cn',
          label: '中文'
        }, {
          value: 'en',
          label: 'English'
        }
      ]
    }
  },
  methods: {
    // 语言切换
    langChange (e) {
      localStorage.setItem('lang', e)
      this.$i18n.locale = e
      this.title = this.$t('message.text')
    }
  }
}
</script>
