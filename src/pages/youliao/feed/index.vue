<template>
  <div class="main-table">
    <div class="table-title">有料发帖</div>
    <div class="search">
      <div class="no-trans"><input type="radio"> 未转移</div>
      <div class="has-trans"><input type="radio"> 已转移</div>
      <div class="feed-name">搜索帖子名称</div>
      <div class="search-tiezi">
        <el-input placeholder="搜索帖子名称" class="search-input">
          <template slot="append"><i class="el-icon-search"></i>
</template>
  </el-input>
          </div>
          <div class="block time">
            <el-date-picker v-model="value13" type="daterange" start-placeholder="开始日期" end-placeholder="结束日期" :default-time="['00:00:00', '23:59:59']">
            </el-date-picker>
          </div>
        </div>
        <div class="white-bar"></div>
        <div class="table">
          <el-table :data="tableData" class="el-table">
            <el-table-column prop="name" label="帖子名称" style="background-color: #eee;">
            </el-table-column>
            <el-table-column prop="source" label="帖子来源">
            </el-table-column>
            <el-table-column prop="feedId" label="对应贴近号">
            </el-table-column>
            <el-table-column prop="time" label="创建时间">
            </el-table-column>
            <el-table-column fixed="right" label="操作">
<template slot-scope="scope">
  <el-button @click="handleClick(scope.row)" type="text" size="small">
    转移帖子</el-button>
  <el-button type="text" size="small">查看帖子</el-button>
</template>
            </el-table-column>
          </el-table>
          <div class="block pagination">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400">
    </el-pagination>
  </div>
        </div>
    
      </div>
</template>

<script>
  import Siderbar from "../../../components/sidebar";
  import Topheader from "../../../components/topheader";
  export default {
    name: "feed",
    components: {
      Siderbar,
      Topheader
    },
    data() {
      return {
        value13: [],
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4,
        tableData: [{
            name: "严夫人传",
            source: "政治频道",
            feedId: "知事局",
            time: "2018-05-23 16:23"
          },
          {
            name: "严夫人传",
            source: "政治频道",
            feedId: "知事局",
            time: "2018-05-23 16:23"
          },
          {
            name: "严夫人传",
            source: "政治频道",
            feedId: "知事局",
            time: "2018-05-23 16:23"
          },
          {
            name: "严夫人传",
            source: "政治频道",
            feedId: "知事局",
            time: "2018-05-23 16:23"
          },
          {
            name: "严夫人传",
            source: "政治频道",
            feedId: "知事局",
            time: "2018-05-23 16:23"
          },
          {
            name: "严夫人传",
            source: "政治频道",
            feedId: "知事局",
            time: "2018-05-23 16:23"
          },
          {
            name: "严夫人传",
            source: "政治频道",
            feedId: "知事局",
            time: "2018-05-23 16:23"
          }
        ]
      };
    },
    methods: {
      handleClick(row) {
        console.log(row);
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    }
  };
</script>
