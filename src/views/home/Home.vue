<template>
  <div id="home">
    <nav-bar>
      <template #center>
        <div>购物街</div>
      </template>
    </nav-bar>
    <home-swiper :banners="banners" />
    <home-recommend :recommends="recommends" />
    <home-feature />
    <tab-control :titles="['流行', '新款', '精选']" />

    <ul>
      <li>11</li>
      <li>12</li>
      <li>13</li>
      <li>14</li>
      <li>15</li>
      <li>16</li>
      <li>17</li>
      <li>18</li>
      <li>19</li>
      <li>110</li>
      <li>111</li>
      <li>112</li>
      <li>113</li>
      <li>114</li>
      <li>115</li>
      <li>116</li>
      <li>117</li>
      <li>118</li>
      <li>119</li>
      <li>120</li>
      <li>121</li>
      <li>122</li>
      <li>123</li>
      <li>124</li>
      <li>125</li>
      <li>126</li>
      <li>127</li>
      <li>128</li>
      <li>129</li>
      <li>130</li>
      <li>131</li>
      <li>132</li>
      <li>133</li>
      <li>134</li>
      <li>135</li>
      <li>136</li>
      <li>137</li>
      <li>138</li>
      <li>139</li>
      <li>140</li>
      <li>141</li>
      <li>142</li>
      <li>143</li>
      <li>144</li>
      <li>145</li>
      <li>146</li>
      <li>147</li>
      <li>148</li>
      <li>149</li>
      <li>150</li>
      <li>151</li>
      <li>152</li>
      <li>153</li>
      <li>154</li>
      <li>155</li>
      <li>156</li>
      <li>157</li>
      <li>158</li>
      <li>159</li>
      <li>160</li>
      <li>161</li>
      <li>162</li>
      <li>163</li>
      <li>164</li>
      <li>165</li>
      <li>166</li>
      <li>167</li>
      <li>168</li>
      <li>169</li>
      <li>170</li>
      <li>171</li>
      <li>172</li>
      <li>173</li>
      <li>174</li>
      <li>175</li>
      <li>176</li>
      <li>177</li>
      <li>178</li>
      <li>179</li>
      <li>180</li>
      <li>181</li>
      <li>182</li>
      <li>183</li>
      <li>184</li>
      <li>185</li>
      <li>186</li>
      <li>187</li>
      <li>188</li>
      <li>189</li>
      <li>190</li>
      <li>191</li>
      <li>192</li>
      <li>193</li>
      <li>194</li>
      <li>195</li>
      <li>196</li>
      <li>197</li>
      <li>198</li>
      <li>199</li>
      <li>1100</li>
    </ul>
  </div>
</template>

<script>
import NavBar from '@components/common/navbar/NavBar'
import TabControl from '@components/content/Tabcontrol/TabControl'
import HomeSwiper from './childComps/HomeSwiper'
import HomeRecommend from './childComps/HomeRecommend'
import HomeFeature from './childComps/HomeFeature'
import { getHomeMultidata, getProductData } from '@network/home'
export default {
  name: 'Home',
  components: {
    NavBar,
    TabControl,
    HomeSwiper,
    HomeRecommend,
    HomeFeature
  },
  data () {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 1, list: [] },
        new: { page: 1, list: [] },
        sell: { page: 1, list: [] }
      }
    }
  },
  created () {
    this._getHomeMultidata()
    this._getProductData()
    // this._getProductData(new),
    this._getProductData()
  },
  methods: {
    _getHomeMultidata () {
      getHomeMultidata().then((res) => {
        // console.log(res);
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
    },
    _getProductData (type) {
      const page = this.goods[type].page
      getProductData(type, page).then((res) => {
        console.log(res)
      })
    }
  }
}
</script>

<style scoped>
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
}
.tab-control {
  position: sticky;
  top: 44px;
}
</style>
